'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  Code2, 
  Check, 
  Copy,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { FRONTEND_SIMULATORS, FrontendSimulatorProblem } from '../data/frontendSimulators';

export const FrontendSimulatorRunner: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentSim = FRONTEND_SIMULATORS[selectedIdx];

  const [htmlCode, setHtmlCode] = useState(currentSim.initialHtml);
  const [cssCode, setCssCode] = useState(currentSim.initialCss);
  const [jsCode, setJsCode] = useState(currentSim.initialJs);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [testResults, setTestResults] = useState<{ name: string; pass: boolean; description: string }[] | null>(null);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setHtmlCode(currentSim.initialHtml);
    setCssCode(currentSim.initialCss);
    setJsCode(currentSim.initialJs);
    setTestResults(null);
  }, [selectedIdx, currentSim]);

  // Render into headless sandbox iframe
  const renderPreview = () => {
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
    if (!doc) return;

    const fullContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 12px; }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch(e) {
              console.error(e);
            }

            window.addEventListener('message', function(e) {
              if (e.data && e.data.type === 'EXECUTE_TEST_CHECKS') {
                var checks = e.data.checks || [];
                var results = checks.map(function(tc) {
                  try {
                    var fn = new Function('doc', 'return (' + tc.testFnString + ')(doc)');
                    var pass = Boolean(fn(document));
                    return { name: tc.name, pass: pass, description: tc.description };
                  } catch(err) {
                    return { name: tc.name, pass: false, description: tc.description + ' (Error: ' + err.message + ')' };
                  }
                });
                window.parent.postMessage({ type: 'TEST_CHECKS_RESPONSE', results: results }, '*');
              }
            });
          </script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(fullContent);
    doc.close();
  };

  useEffect(() => {
    renderPreview();
  }, [htmlCode, cssCode, jsCode]);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'TEST_CHECKS_RESPONSE' && Array.isArray(e.data.results)) {
        setTestResults(e.data.results);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleRunTests = () => {
    renderPreview();
    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'EXECUTE_TEST_CHECKS', checks: currentSim.testChecks },
        '*'
      );
    }, 250);
  };

  const handleReset = () => {
    setHtmlCode(currentSim.initialHtml);
    setCssCode(currentSim.initialCss);
    setJsCode(currentSim.initialJs);
    setTestResults(null);
    renderPreview();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] text-slate-100 bg-slate-950 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
          >
            ← Back to Curriculum
          </button>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">
              Accenture Front-End Web Simulators (Headless DOM Engine)
            </h2>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
            {currentSim.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Code
          </button>
          <button
            onClick={handleRunTests}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Run Test Assertions
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Sidebar: Simulator List */}
        <div className="lg:col-span-3 border-r border-slate-800 bg-slate-900/40 p-4 overflow-y-auto space-y-2">
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-2 mb-3">
            Simulators Bank
          </div>
          {FRONTEND_SIMULATORS.map((sim, idx) => (
            <button
              key={sim.id}
              onClick={() => setSelectedIdx(idx)}
              className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition-all ${
                selectedIdx === idx
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 shadow-xs'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="truncate font-bold">{sim.title}</div>
              <div className="text-[10px] text-slate-500 mt-1">{sim.category}</div>
            </button>
          ))}
        </div>

        {/* Center: Requirements & Code Editor */}
        <div className="lg:col-span-5 flex flex-col border-r border-slate-800 overflow-y-auto p-5 space-y-4">
          <div className="space-y-2">
            <h3 className="text-base font-extrabold text-white">{currentSim.title}</h3>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
              <span className="font-bold text-slate-300 block">Assessment Requirements & Execution Rules:</span>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px] leading-relaxed">
                {currentSim.requirements.map((req, rIdx) => (
                  <li key={rIdx}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Editor Tabs */}
          <div className="flex-1 flex flex-col space-y-2">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              {(['html', 'css', 'js'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                    activeTab === tab
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full flex-1 min-h-[260px] font-mono text-xs p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 resize-none leading-relaxed"
                spellCheck={false}
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="w-full flex-1 min-h-[260px] font-mono text-xs p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 resize-none leading-relaxed"
                spellCheck={false}
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="w-full flex-1 min-h-[260px] font-mono text-xs p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 resize-none leading-relaxed"
                spellCheck={false}
              />
            )}
          </div>
        </div>

        {/* Right Column: Live Sandbox & Test Results */}
        <div className="lg:col-span-4 flex flex-col overflow-y-auto p-5 space-y-5 bg-slate-900/30">
          {/* Live Preview Iframe */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" /> Interactive Browser Sandbox
            </span>
            <div className="border border-slate-700 rounded-xl overflow-hidden bg-white h-56 shadow-inner">
              <iframe
                ref={iframeRef}
                title="Sandbox Preview"
                className="w-full h-full border-none"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Test Assertion Results */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Automated Test Assertions
            </span>
            {testResults ? (
              <div className="space-y-2">
                {testResults.map((tr, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs space-y-1 ${
                      tr.pass
                        ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1.5">
                        {tr.pass ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                        {tr.name}
                      </span>
                      <span className="text-[10px] uppercase font-black">{tr.pass ? 'PASSED' : 'FAILED'}</span>
                    </div>
                    <p className="text-[11px] opacity-80 pl-5.5">{tr.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl border border-dashed border-slate-800 text-center text-xs text-slate-500">
                Click <strong>"Run Test Assertions"</strong> to evaluate DOM & styles.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
