'use client';

import React, { useState } from 'react';
import { 
  Mic, 
  Volume2, 
  ArrowLeft, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  HelpCircle,
  Headphones,
  Award,
  Sparkles
} from 'lucide-react';

interface CommunicationModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  promptExamples: {
    prompt: string;
    expected: string;
    tips: string;
  }[];
}

const MODULES: CommunicationModule[] = [
  {
    id: 'reading-aloud',
    title: 'Part 1: Reading Aloud',
    duration: '8–10 displayed sentences (10–15s each)',
    description: 'Evaluates clear articulation, volume consistency, natural speaking cadence, and correct phonetic pronunciations.',
    promptExamples: [
      {
        prompt: 'The digital transformation program has streamlined operational bottlenecks across all international subsidiaries.',
        expected: 'Speak smoothly without pausing abruptly or stressing filler sounds like "um" or "ah".',
        tips: 'Keep microphone 3–4 inches from your mouth to avoid popping consonants.',
      },
      {
        prompt: 'Cloud architecture empowers agile teams to deploy resilient microservices with near-zero downtime.',
        expected: 'Maintain steady volume and clear enunciation of multisyllabic terms.',
        tips: 'Do not rush; natural rhythm scores higher than rapid speech.',
      },
    ],
  },
  {
    id: 'listen-repeat',
    title: 'Part 2: Listen & Repeat',
    duration: 'Audio prompts repeated verbatim',
    description: 'Tests active listening retention, working acoustic memory, and exact reproduction of vocabulary and intonation.',
    promptExamples: [
      {
        prompt: 'Audio: "Please submit the quarterly expenditure breakdown before Friday afternoon."',
        expected: '"Please submit the quarterly expenditure breakdown before Friday afternoon."',
        tips: 'Repeat immediately without long hesitation after the audio tone.',
      },
      {
        prompt: 'Audio: "Our team analyzed customer feedback to optimize the onboarding workflow."',
        expected: '"Our team analyzed customer feedback to optimize the onboarding workflow."',
        tips: 'Mirror the tone and speed of the speaker.',
      },
    ],
  },
  {
    id: 'sentence-builds',
    title: 'Part 3: Sentence Builds (Spoken Jumbles)',
    duration: 'Unscrambling spoken phrases orally',
    description: 'AI platform utters scrambled phrases separated by short pauses. You must rearrange them into a coherent, grammatically sound sentence.',
    promptExamples: [
      {
        prompt: '"in the library / were studying / the students"',
        expected: '"The students were studying in the library."',
        tips: 'Identify Subject -> Verb -> Object/Prepositional phrase immediately.',
      },
      {
        prompt: '"across the nation / new branches / the organization opened"',
        expected: '"The organization opened new branches across the nation."',
        tips: 'Construct mentally during the audio playback and speak the final answer confidently.',
      },
    ],
  },
  {
    id: 'story-retelling',
    title: 'Part 4: Story Retelling & Comprehension',
    duration: 'Short narrative + 30-second speaking window',
    description: 'A 60–90 second narrative is played once. Summarize key actors, the conflict/event, and the final resolution within 30 seconds.',
    promptExamples: [
      {
        prompt: 'Audio Scenario: "Liam organized an open-source hackathon for his university. Initially, server capacity was exceeded, causing an outage. Liam reached out to cloud sponsors who provided instant compute credits, allowing all forty teams to complete their prototypes on time."',
        expected: 'Summary structure: "Liam hosted a campus hackathon that faced severe server downtime. He secured cloud sponsor credits to restore compute capacity, enabling forty teams to finish successfully."',
        tips: 'Focus on: Who, What happened, How it was resolved. Minor details can be omitted.',
      },
    ],
  },
];

export const CommunicationGuideSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeModuleId, setActiveModuleId] = useState(MODULES[0].id);
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'review'>('idle');
  const [timer, setTimer] = useState(15);

  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  const handleStartSimulatedRecording = () => {
    setRecordingState('recording');
    setTimer(15);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setRecordingState('review');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-slate-800 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
          Stage 5: AI Voice Communication Assessment
        </span>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Headphones className="w-6 h-6 text-purple-600" />
            AI Voice Platform Simulator & Scoring Rubric
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Administered on a separate date via an AI speech-evaluation engine. Tests English fluency, pronunciation accuracy, working memory, and sentence structure.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => {
                setActiveModuleId(mod.id);
                setRecordingState('idle');
              }}
              className={`p-3 rounded-2xl text-left border transition-all text-xs font-bold ${
                activeModuleId === mod.id
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div>{mod.title}</div>
              <div className="text-[10px] opacity-75 font-normal mt-0.5">{mod.duration}</div>
            </button>
          ))}
        </div>

        {/* Active Module Card */}
        <div className="p-6 bg-slate-900 rounded-3xl text-white space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Module Objective</span>
            <h3 className="text-lg font-black">{activeModule.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{activeModule.description}</p>
          </div>

          {/* Practice Cards */}
          <div className="space-y-4">
            {activeModule.promptExamples.map((ex, idx) => (
              <div key={idx} className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="text-xs font-bold text-amber-300">Prompt Scenario #{idx + 1}:</div>
                <div className="text-sm font-semibold text-slate-100 italic bg-slate-900 p-3 rounded-xl border border-slate-800">
                  {ex.prompt}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  <strong>Expected Voice Output:</strong> {ex.expected}
                </div>
                <div className="text-[11px] text-slate-400">
                  💡 <em>{ex.tips}</em>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Mic Test Box */}
          <div className="p-5 bg-purple-950/40 rounded-2xl border border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-purple-300">Live Cadence & Speaking Practice</span>
              <p className="text-[11px] text-slate-400">
                Test your 15-second response window to calibrate speech pacing.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {recordingState === 'recording' && (
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Recording: {timer}s
                </div>
              )}

              {recordingState === 'review' && (
                <div className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Speaking Window Done!
                </div>
              )}

              <button
                onClick={handleStartSimulatedRecording}
                disabled={recordingState === 'recording'}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md disabled:opacity-50"
              >
                <Mic className="w-3.5 h-3.5" />
                {recordingState === 'recording' ? 'Speaking...' : 'Test Speech Window'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
