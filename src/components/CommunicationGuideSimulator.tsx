'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff,
  Volume2, 
  ArrowLeft, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  HelpCircle,
  Headphones,
  Award,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { load, save } from '../lib/storage';

interface CommunicationModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  audioPromptOnly?: boolean;
  promptExamples: {
    prompt: string;
    targetText: string;
    audioText: string;
    keywords: string[];
    tips: string;
  }[];
}

const MODULES: CommunicationModule[] = [
  {
    id: 'reading-aloud',
    title: 'Part 1: Reading Aloud',
    duration: '8–10 displayed sentences (15s each)',
    description: 'Read the displayed prompt clearly. Evaluates pacing, pronunciation, and absence of filler words.',
    audioPromptOnly: false,
    promptExamples: [
      {
        prompt: 'The digital transformation program has streamlined operational bottlenecks across all international subsidiaries.',
        targetText: 'The digital transformation program has streamlined operational bottlenecks across all international subsidiaries.',
        audioText: 'The digital transformation program has streamlined operational bottlenecks across all international subsidiaries.',
        keywords: ['digital', 'transformation', 'operational', 'bottlenecks', 'subsidiaries'],
        tips: 'Keep microphone 3–4 inches from mouth; aim for a steady, natural speaking pace without rushing.',
      },
      {
        prompt: 'Cloud architecture empowers agile teams to deploy resilient microservices with near-zero downtime.',
        targetText: 'Cloud architecture empowers agile teams to deploy resilient microservices with near-zero downtime.',
        audioText: 'Cloud architecture empowers agile teams to deploy resilient microservices with near-zero downtime.',
        keywords: ['cloud', 'architecture', 'agile', 'resilient', 'microservices', 'downtime'],
        tips: 'Enunciate multisyllabic terms clearly like "microservices" and "resilient".',
      },
    ],
  },
  {
    id: 'listen-repeat',
    title: 'Part 2: Listen & Repeat',
    duration: 'Audio prompt played once; repeat immediately',
    description: 'Listen to the audio sentence played once, then repeat verbatim without looking at text.',
    audioPromptOnly: true,
    promptExamples: [
      {
        prompt: 'Listen to the audio prompt and repeat exactly what you heard.',
        targetText: 'Please submit the quarterly expenditure breakdown before Friday afternoon.',
        audioText: 'Please submit the quarterly expenditure breakdown before Friday afternoon.',
        keywords: ['submit', 'quarterly', 'expenditure', 'breakdown', 'friday', 'afternoon'],
        tips: 'Listen actively for phrasing and reproduce cadence immediately after speaker finishes.',
      },
      {
        prompt: 'Listen to the audio prompt and repeat exactly what you heard.',
        targetText: 'Our team analyzed customer feedback to optimize the onboarding workflow.',
        audioText: 'Our team analyzed customer feedback to optimize the onboarding workflow.',
        keywords: ['team', 'analyzed', 'customer', 'feedback', 'optimize', 'onboarding'],
        tips: 'Mirror the tone and speed of the speaker.',
      },
    ],
  },
  {
    id: 'sentence-builds',
    title: 'Part 3: Sentence Builds',
    duration: 'Rearrange spoken phrase fragments orally',
    description: 'Unscramble spoken phrases into a grammatically coherent sentence.',
    audioPromptOnly: true,
    promptExamples: [
      {
        prompt: 'Jumbled Audio: "in the library / were studying / the students"',
        targetText: 'The students were studying in the library.',
        audioText: 'in the library. were studying. the students.',
        keywords: ['students', 'were', 'studying', 'library'],
        tips: 'Identify Subject ("The students") -> Verb phrase ("were studying") -> Prepositional phrase ("in the library").',
      },
      {
        prompt: 'Jumbled Audio: "across the nation / new branches / the organization opened"',
        targetText: 'The organization opened new branches across the nation.',
        audioText: 'across the nation. new branches. the organization opened.',
        keywords: ['organization', 'opened', 'new', 'branches', 'nation'],
        tips: 'Construct mentally as the audio plays and speak with confidence.',
      },
    ],
  },
  {
    id: 'story-retelling',
    title: 'Part 4: Story Retelling',
    duration: 'Short narrative + 30-second speaking window',
    description: 'Listen to a short 30-second workplace narrative, then summarize the protagonist, conflict, and outcome.',
    audioPromptOnly: true,
    promptExamples: [
      {
        prompt: 'Audio Scenario: "Liam organized an open-source hackathon for his university. Initially, server capacity was exceeded, causing an outage. Liam reached out to cloud sponsors who provided instant compute credits, allowing all forty teams to complete their prototypes on time."',
        targetText: 'Liam organized a university hackathon that suffered server downtime. He obtained cloud sponsor credits to restore compute capacity, enabling all teams to finish prototypes successfully.',
        audioText: 'Liam organized an open source hackathon for his university. Initially, server capacity was exceeded, causing an outage. Liam reached out to cloud sponsors who provided instant compute credits, allowing all forty teams to complete their prototypes on time.',
        keywords: ['liam', 'hackathon', 'server', 'outage', 'sponsors', 'credits', 'prototypes'],
        tips: 'Structure your summary with: 1) Who (Liam), 2) Problem (server outage), 3) Solution (cloud credits).',
      },
    ],
  },
];

interface ScoreBreakdown {
  accuracyScore: number;
  wpm: number;
  fillerCount: number;
  keywordScore: number;
  compositeScore: number;
}

function calculateScore(spoken: string, target: string, keywords: string[], durationSeconds: number): ScoreBreakdown {
  const cleanSpoken = spoken.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();
  const cleanTarget = target.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();

  const spokenWords = cleanSpoken.split(/\s+/).filter(Boolean);
  const targetWords = cleanTarget.split(/\s+/).filter(Boolean);

  // Detect filler sounds
  const fillers = ['um', 'uh', 'ah', 'er', 'like', 'you know'];
  let fillerCount = 0;
  for (const w of spokenWords) {
    if (fillers.includes(w)) fillerCount++;
  }

  // WPM
  const minutes = Math.max(durationSeconds / 60, 0.05);
  const wpm = Math.round(spokenWords.length / minutes);

  // Keyword coverage
  let matchedKeywords = 0;
  for (const kw of keywords) {
    if (cleanSpoken.includes(kw.toLowerCase())) {
      matchedKeywords++;
    }
  }
  const keywordScore = keywords.length > 0 ? Math.round((matchedKeywords / keywords.length) * 100) : 100;

  // Word match similarity (Jaccard / intersection over union)
  const spokenSet = new Set(spokenWords);
  let targetMatches = 0;
  for (const tw of targetWords) {
    if (spokenSet.has(tw)) targetMatches++;
  }
  const accuracyScore = targetWords.length > 0 ? Math.round((targetMatches / targetWords.length) * 100) : 0;

  // Composite practice score (penalizes excess fillers and extreme pacing)
  let pacingPenalty = 0;
  if (wpm < 80 || wpm > 180) pacingPenalty = 10;
  const fillerPenalty = Math.min(fillerCount * 5, 20);

  const compositeScore = Math.max(0, Math.min(100, Math.round(
    accuracyScore * 0.5 + keywordScore * 0.4 + (100 - fillerPenalty - pacingPenalty) * 0.1
  )));

  return {
    accuracyScore,
    wpm,
    fillerCount,
    keywordScore,
    compositeScore,
  };
}

export const CommunicationGuideSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeModuleId, setActiveModuleId] = useState(MODULES[0].id);
  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'scored'>('idle');
  const [transcript, setTranscript] = useState('');
  const [textFallbackInput, setTextFallbackInput] = useState('');
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioPlayedCount, setAudioPlayedCount] = useState(0);
  const [scoreResult, setScoreResult] = useState<ScoreBreakdown | null>(null);
  const [recordTimer, setRecordTimer] = useState(0);

  const recognitionRef = useRef<any>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];
  const activePrompt = activeModule.promptExamples[activePromptIdx] || activeModule.promptExamples[0];

  // Feature detection on mount
  useEffect(() => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSpeechRecognitionSupported(Boolean(SpeechRec));
  }, []);

  const handlePlayAudio = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(activePrompt.audioText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => {
      setIsPlayingAudio(false);
      setAudioPlayedCount((prev) => prev + 1);
    };
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const startRecording = () => {
    setTranscript('');
    setTextFallbackInput('');
    setScoreResult(null);
    setRecordingState('recording');
    setRecordTimer(0);

    timerIntervalRef.current = setInterval(() => {
      setRecordTimer((t) => t + 1);
    }, 1000);

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          let full = '';
          for (let i = 0; i < event.results.length; i++) {
            full += event.results[i][0].transcript + ' ';
          }
          setTranscript(full.trim());
        };

        recognition.onerror = () => {
          // If mic fails, speech recognition fallback is available
        };

        recognition.start();
        recognitionRef.current = recognition;
      } catch {
        // Fallback gracefully to manual typing
      }
    }
  };

  const stopRecording = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
      recognitionRef.current = null;
    }

    const finalSpoken = (transcript || textFallbackInput).trim();
    const duration = Math.max(recordTimer, 3);
    const score = calculateScore(finalSpoken, activePrompt.targetText, activePrompt.keywords, duration);

    setScoreResult(score);
    setRecordingState('scored');

    // Persist attempt
    const history = load<any[]>('communication_attempts', []);
    history.unshift({
      timestamp: Date.now(),
      moduleId: activeModule.id,
      promptTitle: activeModule.title,
      score: score.compositeScore,
      transcript: finalSpoken,
    });
    save('communication_attempts', history.slice(0, 20));
  };

  const handleReset = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
    setRecordingState('idle');
    setTranscript('');
    setTextFallbackInput('');
    setScoreResult(null);
    setRecordTimer(0);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Overview
        </button>
        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
          Stage 5: Communication Practice
        </span>
      </div>

      {/* Overview Banner */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
        <div className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Audio Platform Simulator & Speaking Practice
          </h2>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Practices authentic Accenture Stage 5 tasks: Reading Aloud, Listen & Repeat, Sentence Builds, and Story Retelling. Uses Web Speech synthesis for audio prompts and local browser transcription for practice scoring.
        </p>
      </div>

      {/* Module Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {MODULES.map((mod) => (
          <button
            key={mod.id}
            onClick={() => {
              setActiveModuleId(mod.id);
              setActivePromptIdx(0);
              handleReset();
              setAudioPlayedCount(0);
            }}
            className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
              activeModuleId === mod.id
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <div className="font-bold">{mod.title}</div>
            <div className="text-[11px] opacity-80 mt-0.5 line-clamp-1">{mod.duration}</div>
          </button>
        ))}
      </div>

      {/* Main Practice Workspace */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
              {activeModule.title}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {activeModule.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {activeModule.promptExamples.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePromptIdx(idx);
                  handleReset();
                  setAudioPlayedCount(0);
                }}
                className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer transition-colors ${
                  activePromptIdx === idx
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Prompt #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Player for Listen & Repeat, Story Retelling */}
        {activeModule.audioPromptOnly && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Official Audio Prompt Playback
              </span>
              <p className="text-xs text-slate-500">
                Played via synthetic speech engine. In Accenture Stage 5, prompts play once.
              </p>
            </div>

            <button
              onClick={handlePlayAudio}
              disabled={isPlayingAudio}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
            >
              <Volume2 className="w-4 h-4" />
              {isPlayingAudio ? 'Playing Audio...' : audioPlayedCount > 0 ? 'Replay Prompt' : 'Play Audio Prompt'}
            </button>
          </div>
        )}

        {/* Text Prompt Box (Visible for Reading Aloud or on reveal) */}
        {!activeModule.audioPromptOnly ? (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 block uppercase tracking-wider">
              Prompt Text to Read Aloud:
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
              &quot;{activePrompt.prompt}&quot;
            </p>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            <strong>Task: </strong> {activePrompt.prompt}
          </div>
        )}

        {/* Recording Controls & Real-Time Speech Input */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Speech Capture
              </span>
              <span className="text-xs text-slate-500">
                {isSpeechRecognitionSupported
                  ? 'Microphone speech recognition active'
                  : 'Speech recognition unavailable: manual text input fallback enabled'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {recordingState === 'recording' ? (
                <button
                  onClick={stopRecording}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer shadow-xs animate-pulse"
                >
                  <MicOff className="w-3.5 h-3.5" /> Stop & Evaluate ({recordTimer}s)
                </button>
              ) : (
                <button
                  onClick={startRecording}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer shadow-xs transition-colors"
                >
                  <Mic className="w-3.5 h-3.5" /> Start Speaking Practice
                </button>
              )}

              {recordingState === 'scored' && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Try Again
                </button>
              )}
            </div>
          </div>

          {/* Transcript Display or Manual Input Fallback */}
          {recordingState === 'recording' && (
            <div className="space-y-2">
              <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 min-h-[60px] text-xs font-mono text-slate-800 dark:text-slate-200">
                {transcript || (
                  <span className="text-slate-400 italic">Listening... speak into your microphone</span>
                )}
              </div>
              <div className="text-xs text-slate-500">
                Or type what you said:
                <input
                  type="text"
                  value={textFallbackInput}
                  onChange={(e) => setTextFallbackInput(e.target.value)}
                  placeholder="Text fallback if microphone permission is denied..."
                  className="w-full mt-1 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
                />
              </div>
            </div>
          )}

          {/* Scoring Results */}
          {recordingState === 'scored' && scoreResult && (
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Estimated Practice Score
                  </span>
                  <span className="text-2xl font-black text-purple-600 dark:text-purple-400">
                    {scoreResult.compositeScore} / 100
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  Estimated practice score (Browser Heuristic)
                </span>
              </div>

              {/* Sub-scores */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Word Accuracy</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                    {scoreResult.accuracyScore}%
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Keywords Covered</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                    {scoreResult.keywordScore}%
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Pace (WPM)</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                    {scoreResult.wpm} wpm
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Filler Words</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                    {scoreResult.fillerCount} detected
                  </span>
                </div>
              </div>

              {/* Transcript Comparison */}
              <div className="space-y-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <span className="font-semibold text-slate-500 block">Your Spoken Output:</span>
                  <p className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 font-mono text-slate-800 dark:text-slate-200">
                    {transcript || textFallbackInput || '(No speech detected)'}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Target Canonical Text:</span>
                  <p className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 font-mono text-slate-600 dark:text-slate-400">
                    {activePrompt.targetText}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 pt-1">
            <span className="text-amber-500 font-bold">💡 Tip:</span>
            <span>{activePrompt.tips}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
