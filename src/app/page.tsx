'use client';

import React, { useState } from 'react';
import { 
  Folder, 
  ChevronDown, 
  ChevronRight, 
  FileQuestion, 
  Play, 
  Code, 
  Gamepad2, 
  FileText, 
  CheckCircle2, 
  Search, 
  BarChart2, 
  AlertTriangle,
  Cpu,
  BookOpen,
  Award,
  ArrowRight,
  Database,
  Globe,
  Headphones,
  Compass,
  Zap,
  Key
} from 'lucide-react';
import { ACCENTURE_CURRICULUM, CourseFolder, CourseItem } from '../data/curriculum';
import { ACCENTURE_QUESTIONS } from '../data/questions';
import { ACCENTURE_CODING_PROBLEMS } from '../data/coding';
import { ProfessionalTestPlayer } from '../components/ProfessionalTestPlayer';
import { CodingRunner } from '../components/CodingRunner';
import { MathOrderChallenge } from '../components/MathOrderChallenge';
import { LockKeyMemoryGame } from '../components/LockKeyMemoryGame';
import { GridPathBuilderGame } from '../components/GridPathBuilderGame';
import { PseudocodeTracer } from '../components/PseudocodeTracer';
import { MistakeTracker } from '../components/MistakeTracker';
import { PerformanceAnalytics } from '../components/PerformanceAnalytics';
import { SqlPracticeRunner } from '../components/SqlPracticeRunner';
import { FrontendSimulatorRunner } from '../components/FrontendSimulatorRunner';
import { CommunicationGuideSimulator } from '../components/CommunicationGuideSimulator';
import { Question } from '../types';

export default function CoursePortal() {
  const [activeFolderId, setActiveFolderId] = useState<string>('full-mocks');
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    'full-mocks': true,
    'cognitive-round': true,
    'technical-round': true,
    'coding-round': true,
    'technical-simulators': true,
    'communication-stage': true,
    'remediation': true,
  });
  const [searchQuery, setSearchQuery] = useState('');
  
  // Active Content Launcher state
  const [activeLaunch, setActiveLaunch] = useState<{
    type: 'quiz' | 'coding' | 'game_math_order' | 'game_lock_key' | 'game_path_builder' | 'tracer' | 'mistakes' | 'analytics' | 'sql' | 'frontend' | 'communication' | null;
    title: string;
    questions?: Question[];
    durationMinutes?: number;
    codingProblemIndex?: number;
  }>({ type: null, title: '' });

  const toggleFolder = (folderId: string) => {
    setOpenFolders((prev) => ({ ...prev, [folderId]: !prev[folderId] }));
  };

  const handleLaunchItem = (item: CourseItem) => {
    if (item.type === 'quiz') {
      let filtered = ACCENTURE_QUESTIONS;
      if (item.sectionId) {
        filtered = ACCENTURE_QUESTIONS.filter((q) => q.sectionId === item.sectionId);
      }
      setActiveLaunch({
        type: 'quiz',
        title: item.title,
        questions: filtered.length > 0 ? filtered : ACCENTURE_QUESTIONS,
        durationMinutes: item.durationMinutes,
      });
    } else if (item.type === 'coding') {
      setActiveLaunch({
        type: 'coding',
        title: item.title,
        codingProblemIndex: item.codingProblemIndex ?? 0,
      });
    } else if (item.type === 'game') {
      if (item.id === 'game-math-order') {
        setActiveLaunch({ type: 'game_math_order', title: item.title });
      } else if (item.id === 'game-lock-key') {
        setActiveLaunch({ type: 'game_lock_key', title: item.title });
      } else {
        setActiveLaunch({ type: 'game_path_builder', title: item.title });
      }
    } else if (item.type === 'tracer') {
      setActiveLaunch({ type: 'tracer', title: item.title });
    } else if (item.type === 'sql') {
      setActiveLaunch({ type: 'sql', title: item.title });
    } else if (item.type === 'frontend') {
      setActiveLaunch({ type: 'frontend', title: item.title });
    } else if (item.type === 'communication') {
      setActiveLaunch({ type: 'communication', title: item.title });
    } else if (item.type === 'document') {
      if (item.id === 'item-mistakes') {
        setActiveLaunch({ type: 'mistakes', title: item.title });
      } else {
        setActiveLaunch({ type: 'analytics', title: item.title });
      }
    }
  };

  // Launch Active Screens
  if (activeLaunch.type === 'quiz' && activeLaunch.questions) {
    return (
      <ProfessionalTestPlayer
        questions={activeLaunch.questions}
        testTitle={activeLaunch.title}
        durationMinutes={activeLaunch.durationMinutes || 90}
        onExit={() => setActiveLaunch({ type: null, title: '' })}
      />
    );
  }

  if (activeLaunch.type === 'coding') {
    return (
      <CodingRunner
        problem={ACCENTURE_CODING_PROBLEMS[activeLaunch.codingProblemIndex ?? 0] || ACCENTURE_CODING_PROBLEMS[0]}
        onBack={() => setActiveLaunch({ type: null, title: '' })}
      />
    );
  }

  if (activeLaunch.type === 'game_math_order') {
    return <MathOrderChallenge onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'game_lock_key') {
    return <LockKeyMemoryGame onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'game_path_builder') {
    return <GridPathBuilderGame onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'sql') {
    return <SqlPracticeRunner onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'frontend') {
    return <FrontendSimulatorRunner onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'communication') {
    return <CommunicationGuideSimulator onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'tracer') {
    return (
      <div className="min-h-screen bg-slate-950 p-6 text-slate-100">
        <button
          onClick={() => setActiveLaunch({ type: null, title: '' })}
          className="mb-4 text-xs px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold inline-flex items-center gap-2 cursor-pointer"
        >
          ← Back to Course
        </button>
        <PseudocodeTracer />
      </div>
    );
  }

  if (activeLaunch.type === 'mistakes') {
    return (
      <MistakeTracker
        onBack={() => setActiveLaunch({ type: null, title: '' })}
        onPracticeMistakes={(qs) => {
          setActiveLaunch({
            type: 'quiz',
            title: 'Error Notebook Targeted Re-test',
            questions: qs,
            durationMinutes: qs.length * 2,
          });
        }}
      />
    );
  }

  if (activeLaunch.type === 'analytics') {
    return (
      <PerformanceAnalytics
        onBack={() => setActiveLaunch({ type: null, title: '' })}
        onOpenMistakes={() => setActiveLaunch({ type: 'mistakes', title: 'Error Notebook' })}
      />
    );
  }

  // MAIN PORTAL VIEW
  const activeFolder = ACCENTURE_CURRICULUM.find((f) => f.id === activeFolderId) || ACCENTURE_CURRICULUM[0];

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-3.5 sticky top-0 z-40 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#5b50e0] flex items-center justify-center font-bold text-white text-sm shadow-sm">
            A&gt;
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900">
              Accenture Mock Test Series & Assessment Simulator (2025 - 2026 Batch)
            </h1>
            <p className="text-[11px] text-slate-500">HirePro & CoCubes Replica • End-to-End Recruitment Funnel</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveLaunch({ type: 'analytics', title: 'Telemetry' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <BarChart2 className="w-3.5 h-3.5 text-[#5b50e0]" /> My Analytics
          </button>
          <button
            onClick={() => setActiveLaunch({ type: 'mistakes', title: 'Mistakes' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50/50 text-xs font-semibold text-rose-700 hover:bg-rose-100/50 transition-colors"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Error Notebook
          </button>
        </div>
      </header>

      {/* Main 2-Column Course Workspace */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto p-4 sm:p-6 gap-6 overflow-hidden">
        {/* Left Curriculum Sidebar (320px) */}
        <aside className="w-80 sm:w-88 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col shrink-0 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-slate-200">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search stages & problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5b50e0]"
              />
            </div>
          </div>

          {/* Folder & Section Tree */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {ACCENTURE_CURRICULUM.map((folder) => {
              const isOpen = openFolders[folder.id];
              const isSelected = activeFolderId === folder.id;

              return (
                <div key={folder.id} className="text-xs">
                  {/* Folder Header */}
                  <div
                    onClick={() => {
                      toggleFolder(folder.id);
                      setActiveFolderId(folder.id);
                    }}
                    className={`flex items-center justify-between p-3.5 cursor-pointer select-none transition-colors ${
                      isSelected ? 'bg-indigo-50/70 font-bold text-[#5b50e0]' : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 pr-2">
                      {isOpen ? (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                      <Folder className="w-4 h-4 text-[#5b50e0] shrink-0" />
                      <span className="leading-snug">{folder.title}</span>
                    </div>
                    {folder.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                        {folder.badge}
                      </span>
                    )}
                  </div>

                  {/* Sub-items list */}
                  {isOpen && (
                    <div className="bg-slate-50/50 py-1 pl-6 pr-2 space-y-0.5">
                      {folder.items
                        .filter(item => !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleLaunchItem(item)}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-xs cursor-pointer text-slate-700 hover:text-[#5b50e0] transition-all group"
                          >
                            <div className="flex items-center gap-2">
                              {item.type === 'quiz' ? (
                                <FileQuestion className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5b50e0]" />
                              ) : item.type === 'coding' ? (
                                <Code className="w-3.5 h-3.5 text-emerald-600" />
                              ) : item.type === 'game' ? (
                                <Gamepad2 className="w-3.5 h-3.5 text-amber-600" />
                              ) : item.type === 'tracer' ? (
                                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                              ) : item.type === 'sql' ? (
                                <Database className="w-3.5 h-3.5 text-cyan-600" />
                              ) : item.type === 'frontend' ? (
                                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                              ) : item.type === 'communication' ? (
                                <Headphones className="w-3.5 h-3.5 text-purple-600" />
                              ) : (
                                <FileText className="w-3.5 h-3.5 text-blue-600" />
                              )}
                              <span className="text-[11px] font-medium leading-tight line-clamp-1">
                                {item.title}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-600">
                              {item.durationMinutes}m
                            </span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Main Content Pane */}
        <main className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-xs p-6 overflow-y-auto space-y-6">
          {/* Funnel Pipeline Visualizer */}
          <div className="p-4 bg-slate-900 rounded-2xl text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Recruitment Assessment Architecture
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                Strict Runtimes: Java, Python, C#
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-[9px] text-slate-400 font-bold block">STAGE 1</span>
                <span className="font-bold text-slate-200">Behavioral SJT</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">50 Qs • Mandatory</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-amber-500/40 text-amber-300">
                <span className="text-[9px] text-amber-400 font-bold block">STAGE 2</span>
                <span className="font-bold text-white">Cognitive Games</span>
                <span className="text-[10px] text-amber-400 block mt-0.5">3 Games • Elimination</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-rose-500/40 text-rose-300">
                <span className="text-[9px] text-rose-400 font-bold block">STAGE 3</span>
                <span className="font-bold text-white">Tech & Pseudocode</span>
                <span className="text-[10px] text-rose-400 block mt-0.5">45 Qs • Elimination</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 text-emerald-300">
                <span className="text-[9px] text-emerald-400 font-bold block">STAGE 4</span>
                <span className="font-bold text-white">Coding & Simulators</span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">ASE vs AASE</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-purple-500/40 text-purple-300">
                <span className="text-[9px] text-purple-400 font-bold block">STAGE 5</span>
                <span className="font-bold text-white">Communication</span>
                <span className="text-[10px] text-purple-400 block mt-0.5">AI Voice Engine</span>
              </div>
            </div>
          </div>

          {/* Active Folder Header */}
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">{activeFolder.title}</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeFolder.items.length} Modules available • Calibrated against official HirePro/CoCubes specs
              </p>
            </div>
            {activeFolder.badge && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-[#5b50e0] border border-indigo-200">
                {activeFolder.badge}
              </span>
            )}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeFolder.items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleLaunchItem(item)}
                className="p-5 rounded-2xl border border-slate-200 hover:border-[#5b50e0] hover:shadow-md transition-all cursor-pointer bg-white group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-400">{item.durationMinutes} Minutes</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#5b50e0] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {item.questionCount && (
                    <p className="text-xs text-slate-500">
                      {item.questionCount} Questions • +1 Mark • No Negative Marking
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="text-slate-400 font-medium">Ready to start</span>
                  <span className="text-[#5b50e0] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Launch Simulator <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Interactive Tool Launchers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              onClick={() => setActiveLaunch({ type: 'tracer', title: 'Pseudocode Line-by-Line Stepper' })}
              className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-left hover:bg-purple-100/70 transition-colors"
            >
              <Cpu className="w-4 h-4 text-purple-600 mb-1.5" />
              <div className="text-xs font-bold text-purple-950">Bitwise Tracer</div>
              <div className="text-[11px] text-purple-700">Step through loop accumulators & XOR bugs</div>
            </button>
            <button
              onClick={() => setActiveLaunch({ type: 'sql', title: 'SQL Query Console' })}
              className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200 text-left hover:bg-cyan-100/70 transition-colors"
            >
              <Database className="w-4 h-4 text-cyan-600 mb-1.5" />
              <div className="text-xs font-bold text-cyan-950">SQL Console</div>
              <div className="text-[11px] text-cyan-700">Practice 9 multi-table joins & subqueries</div>
            </button>
            <button
              onClick={() => setActiveLaunch({ type: 'frontend', title: 'Front-End Web Simulators' })}
              className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-left hover:bg-emerald-100/70 transition-colors"
            >
              <Globe className="w-4 h-4 text-emerald-600 mb-1.5" />
              <div className="text-xs font-bold text-emerald-950">DOM Simulator</div>
              <div className="text-[11px] text-emerald-700">Headless search filter & shopping cart</div>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
