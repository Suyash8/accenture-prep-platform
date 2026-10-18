import { NextRequest, NextResponse } from 'next/server';
import { spawn, ChildProcessWithoutNullStreams } from 'node:child_process';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { ACCENTURE_CODING_PROBLEMS } from '@/data/coding';

const MAX_OUTPUT_BYTES = 65536; // 64 KB
const MAX_INPUT_BYTES = 65536;  // 64 KB
const EXEC_TIMEOUT_MS = 4000;
const COMPILE_TIMEOUT_MS = 6000;
const MAX_CONCURRENT_RUNS = 2;

let activeExecutions = 0;

interface ProcessResult {
  stdout: string;
  stderr: string;
  code: number | null;
  timedOut: boolean;
  error?: string;
}

function runSpawn(
  cmd: string,
  args: string[],
  stdin: string,
  timeoutMs: number,
  cwd: string
): Promise<ProcessResult> {
  return new Promise((resolve) => {
    let timedOut = false;
    let stdout = '';
    let stderr = '';

    const SAFE_EXEC_ENV: NodeJS.ProcessEnv = {
      NODE_ENV: 'production' as const,
      PATH: process.env.PATH || '/usr/bin:/bin:/usr/local/bin',
      LANG: 'en_US.UTF-8',
      LC_ALL: 'en_US.UTF-8',
      HOME: cwd,
      TMPDIR: cwd,
    };

    const proc = spawn(cmd, args, {
      cwd,
      env: SAFE_EXEC_ENV,
      stdio: 'pipe',
      detached: true,
    }) as ChildProcessWithoutNullStreams;

    const timer = setTimeout(() => {
      timedOut = true;
      try {
        if (proc.pid) {
          process.kill(-proc.pid, 'SIGKILL');
        } else {
          proc.kill('SIGKILL');
        }
      } catch {
        try {
          proc.kill('SIGKILL');
        } catch {
          // Process might already be dead
        }
      }
    }, timeoutMs);

    proc.stdout.on('data', (chunk: Buffer | string) => {
      if (stdout.length < MAX_OUTPUT_BYTES) {
        stdout += chunk.toString();
        if (stdout.length > MAX_OUTPUT_BYTES) {
          stdout = stdout.slice(0, MAX_OUTPUT_BYTES) + '\n[Output truncated at 64 KB limit]';
        }
      }
    });

    proc.stderr.on('data', (chunk: Buffer | string) => {
      if (stderr.length < MAX_OUTPUT_BYTES) {
        stderr += chunk.toString();
        if (stderr.length > MAX_OUTPUT_BYTES) {
          stderr = stderr.slice(0, MAX_OUTPUT_BYTES) + '\n[Stderr truncated at 64 KB limit]';
        }
      }
    });

    proc.on('error', (err: Error) => {
      clearTimeout(timer);
      resolve({
        stdout,
        stderr,
        code: null,
        timedOut: false,
        error: err.message,
      });
    });

    proc.on('close', (code: number | null) => {
      clearTimeout(timer);
      resolve({
        stdout,
        stderr,
        code,
        timedOut,
      });
    });

    proc.stdin.on('error', () => {
      // Ignore broken pipe errors if process exited quickly
    });

    const safeStdin = stdin.length > MAX_INPUT_BYTES ? stdin.slice(0, MAX_INPUT_BYTES) : stdin;
    proc.stdin.end(safeStdin.endsWith('\n') ? safeStdin : safeStdin + '\n');
  });
}

function normalize(s: string): string {
  return s
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.trimEnd())
    .join('\n')
    .trim();
}

interface LangDefinition {
  fileName: string;
  prepareCode?: (code: string) => string;
  compile?: (dir: string, file: string) => { cmd: string; args: string[] };
  getRunCmd: (dir: string, file: string) => { cmd: string; args: string[] };
  versionCmd: { cmd: string; args: string[] };
}

const LANGS: Record<string, LangDefinition> = {
  python: {
    fileName: 'solution.py',
    getRunCmd: (_dir, file) => ({ cmd: 'python3', args: [file] }),
    versionCmd: { cmd: 'python3', args: ['--version'] },
  },
  java: {
    fileName: 'Main.java',
    prepareCode: (code: string) => {
      // Replace any public class <Name> with public class Main
      return code.replace(/public\s+class\s+\w+/, 'public class Main');
    },
    compile: (_dir, file) => ({ cmd: 'javac', args: [file] }),
    getRunCmd: (dir) => ({ cmd: 'java', args: ['-cp', dir, 'Main'] }),
    versionCmd: { cmd: 'java', args: ['--version'] },
  },
  cpp: {
    fileName: 'solution.cpp',
    compile: (dir, file) => ({
      cmd: 'g++',
      args: ['-O2', file, '-o', path.join(dir, 'solution.out')],
    }),
    getRunCmd: (dir) => ({ cmd: path.join(dir, 'solution.out'), args: [] }),
    versionCmd: { cmd: 'g++', args: ['--version'] },
  },
};

const versionCache: Record<string, string> = {};

async function getRuntimeVersion(langKey: string, def: LangDefinition): Promise<string> {
  if (versionCache[langKey]) return versionCache[langKey];
  try {
    const res = await runSpawn(def.versionCmd.cmd, def.versionCmd.args, '', 2000, os.tmpdir());
    const firstLine = (res.stdout || res.stderr).split('\n')[0].trim();
    versionCache[langKey] = firstLine || langKey;
    return versionCache[langKey];
  } catch {
    return langKey;
  }
}

export async function POST(req: NextRequest) {
  if (activeExecutions >= MAX_CONCURRENT_RUNS) {
    return NextResponse.json(
      { error: 'Server busy: execution capacity reached. Please retry in a few seconds.' },
      { status: 429 }
    );
  }

  activeExecutions++;
  let tmpDir: string | null = null;

  try {
    const body = await req.json();
    const { language, code, problemId, testCases: providedTestCases } = body;

    if (!code || typeof code !== 'string' || !language) {
      return NextResponse.json({ error: 'Valid code and language are required' }, { status: 400 });
    }

    if (language === 'csharp') {
      return NextResponse.json(
        { error: 'C# compilation runtime is not available on this server. Please choose Python, Java, or C++.' },
        { status: 501 }
      );
    }

    // Server-side test case lookup to protect hidden test cases
    let effectiveTestCases: { input: string; expected: string; hidden?: boolean }[] = [];
    if (problemId) {
      const problem = ACCENTURE_CODING_PROBLEMS.find((p) => p.id === problemId);
      if (problem) {
        effectiveTestCases = problem.testCases;
      }
    }
    if (effectiveTestCases.length === 0) {
      effectiveTestCases = Array.isArray(providedTestCases) ? providedTestCases : [];
    }

    const langDef = LANGS[language];
    if (!langDef) {
      return NextResponse.json(
        { error: `Unsupported execution runtime: "${language}". Supported: python, java, cpp.` },
        { status: 400 }
      );
    }

    tmpDir = await fs.mkdtemp(path.join(/*turbopackIgnore: true*/ os.tmpdir(), 'accenture-code-'));
    const sourceFilePath = path.join(/*turbopackIgnore: true*/ tmpDir, langDef.fileName);
    const finalCode = langDef.prepareCode ? langDef.prepareCode(code) : code;
    await fs.writeFile(sourceFilePath, finalCode, 'utf8');

    // Compilation step (if applicable)
    if (langDef.compile) {
      const compileConfig = langDef.compile(tmpDir, sourceFilePath);
      const compileRes = await runSpawn(
        compileConfig.cmd,
        compileConfig.args,
        '',
        COMPILE_TIMEOUT_MS,
        tmpDir
      );

      // A compilation error only occurs if exit code !== 0 or timeout/process error
      if (compileRes.timedOut || (compileRes.code !== null && compileRes.code !== 0) || compileRes.error) {
        const errorDetails = compileRes.timedOut
          ? 'Compilation timed out after 6 seconds.'
          : compileRes.error || compileRes.stderr || 'Compilation failed with non-zero exit code.';

        return NextResponse.json({
          success: false,
          allPassed: false,
          compilationError: true,
          results: effectiveTestCases.map((tc: { input: string; expected: string; hidden?: boolean }) => ({
            input: tc.hidden ? '[Hidden Test Case]' : tc.input,
            expected: tc.hidden ? '[Hidden]' : tc.expected,
            actual: 'Compilation Failed',
            pass: false,
            hidden: Boolean(tc.hidden),
          })),
          output: `Compilation Error:\n${errorDetails}`,
        });
      }
    }

    const runtimeVersion = await getRuntimeVersion(language, langDef);
    const runConfig = langDef.getRunCmd(tmpDir, sourceFilePath);

    const results = [];
    let allPassed = true;
    let samplePassed = 0;
    let sampleTotal = 0;
    let hiddenPassed = 0;
    let hiddenTotal = 0;

    for (const tc of effectiveTestCases) {
      const isHidden = Boolean(tc.hidden);
      if (isHidden) hiddenTotal++;
      else sampleTotal++;

      const runRes = await runSpawn(runConfig.cmd, runConfig.args, tc.input || '', EXEC_TIMEOUT_MS, tmpDir);

      const actualOutput = runRes.stdout;
      const expectedNormalized = normalize(String(tc.expected ?? ''));
      const actualNormalized = normalize(actualOutput);

      let passed = false;
      let displayActual = '';

      if (runRes.timedOut) {
        displayActual = `Time Limit Exceeded (${EXEC_TIMEOUT_MS}ms)`;
      } else if (runRes.error) {
        displayActual = `Runtime Process Error: ${runRes.error}`;
      } else if (runRes.code !== 0) {
        displayActual = `Runtime Error (exit code ${runRes.code}):\n${runRes.stderr || runRes.stdout}`;
      } else {
        passed = actualNormalized === expectedNormalized;
        displayActual = actualOutput.trim();
      }

      if (passed) {
        if (isHidden) hiddenPassed++;
        else samplePassed++;
      } else {
        allPassed = false;
      }

      results.push({
        input: isHidden ? '[Hidden]' : tc.input,
        expected: isHidden ? '[Hidden]' : tc.expected,
        actual: isHidden ? (passed ? '[Passed]' : '[Failed]') : displayActual,
        pass: passed,
        hidden: isHidden,
      });
    }

    const summaryParts: string[] = [];
    if (sampleTotal > 0) {
      summaryParts.push(`Sample Cases: ${samplePassed}/${sampleTotal} passed`);
    }
    if (hiddenTotal > 0) {
      summaryParts.push(`Hidden Cases: ${hiddenPassed}/${hiddenTotal} passed`);
    }

    const outputBanner = allPassed
      ? `All ${results.length} test cases passed successfully!\nRuntime: ${runtimeVersion}\n${summaryParts.join(' • ')}`
      : `Test run finished with failures.\nRuntime: ${runtimeVersion}\n${summaryParts.join(' • ')}`;

    return NextResponse.json({
      success: true,
      allPassed,
      results,
      output: outputBanner,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal execution service error';
    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    activeExecutions = Math.max(0, activeExecutions - 1);
    if (tmpDir) {
      await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
    }
  }
}
