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
  Key,
  Briefcase,
  Sliders,
  Sparkles,
  ShieldCheck,
  Terminal,
  Layers,
  Filter
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
import { DiagnosticHub } from '../components/DiagnosticHub';
import { CustomMockGenerator } from '../components/CustomMockGenerator';
import { BehavioralSjtSimulator } from '../components/BehavioralSjtSimulator';
import { GamifiedAssessmentHub } from '../components/GamifiedAssessmentHub';
import { 
  generateFullMock, 
  generateTechnicalEliminationMock, 
  generateSectionalDrill, 
  sampleQuestions 
} from '../lib/mockGenerator';
import { Question } from '../types';

export default function CoursePortal() {
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Active Content Launcher state
  const [activeLaunch, setActiveLaunch] = useState<{
    type: 'quiz' | 'coding' | 'game_math_order' | 'game_lock_key' | 'game_path_builder' | 'tracer' | 'mistakes' | 'analytics' | 'sql' | 'frontend' | 'communication' | 'diagnostic' | 'custom_mock' | 'sjt' | null;
    title: string;
    questions?: Question[];
    durationMinutes?: number;
    codingProblemIndex?: number;
  }>({ type: null, title: '' });

  const handleLaunchItem = (item: CourseItem) => {
    if (item.type === 'quiz') {
      let generatedTest;
      if (item.id === 'mock-1' || item.id === 'mock-2' || item.id === 'mock-pyq-2025') {
        generatedTest = generateFullMock(item.title);
      } else if (item.id === 'mock-technical-elimination') {
        generatedTest = generateTechnicalEliminationMock(item.title);
      } else if (item.sectionId) {
        generatedTest = generateSectionalDrill(
          item.sectionId,
          item.questionCount || 15,
          item.title,
          item.durationMinutes
        );
      } else {
        generatedTest = {
          questions: sampleQuestions(ACCENTURE_QUESTIONS, item.questionCount || 30),
          title: item.title,
          durationMinutes: item.durationMinutes || 45,
        };
      }
      setActiveLaunch({
        type: 'quiz',
        title: generatedTest.title,
        questions: generatedTest.questions,
        durationMinutes: generatedTest.durationMinutes,
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
    } else if (item.type === 'diagnostic') {
      setActiveLaunch({ type: 'diagnostic', title: item.title });
    } else if (item.type === 'custom_mock') {
      setActiveLaunch({ type: 'custom_mock', title: item.title });
    } else if (item.type === 'sjt') {
      setActiveLaunch({ type: 'sjt', title: item.title });
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
      <div className="min-h-screen bg-[#090a0f]">
        <CodingRunner
          problem={ACCENTURE_CODING_PROBLEMS[activeLaunch.codingProblemIndex ?? 0] || ACCENTURE_CODING_PROBLEMS[0]}
          onBack={() => setActiveLaunch({ type: null, title: '' })}
        />
      </div>
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

  if (activeLaunch.type === 'diagnostic') {
    return <DiagnosticHub onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'sjt') {
    return <BehavioralSjtSimulator onBack={() => setActiveLaunch({ type: null, title: '' })} />;
  }

  if (activeLaunch.type === 'custom_mock') {
    return (
      <CustomMockGenerator
        onBack={() => setActiveLaunch({ type: null, title: '' })}
        onLaunchMock={(qs, title, duration) =>
          setActiveLaunch({
            type: 'quiz',
            questions: qs,
            title,
            durationMinutes: duration,
          })
        }
      />
    );
  }

  if (activeLaunch.type === 'tracer') {
    return (
      <div className="min-h-screen bg-[#090a0f] p-6 text-slate-100 font-sans">
        <button
          onClick={() => setActiveLaunch({ type: null, title: '' })}
          className="mb-6 text-xs px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold border border-white/10 inline-flex items-center gap-2 cursor-pointer transition-colors"
        >
          ← Back to Dashboard
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

  // Filter folders based on stage tab
  const filteredFolders = ACCENTURE_CURRICULUM.filter((folder) => {
    if (selectedStageFilter === 'all') return true;
    if (selectedStageFilter === 'stage1') return folder.id === 'stage-1-sjt';
    if (selectedStageFilter === 'stage2') return folder.id === 'cognitive-round';
    if (selectedStageFilter === 'stage3') return folder.id === 'technical-round';
    if (selectedStageFilter === 'stage4') return folder.id === 'coding-round' || folder.id === 'technical-simulators';
    if (selectedStageFilter === 'stage5') return folder.id === 'communication-stage';
    if (selectedStageFilter === 'mocks') return folder.id === 'full-mocks' || folder.id === 'remediation';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Glassmorphic Navigation Bar */}
      <header className="bg-[#0c0e17]/80 backdrop-blur-xl border-b border-white/10 px-6 py-3.5 sticky top-0 z-40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white text-base shadow-lg shadow-purple-600/30">
            A&gt;
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-black tracking-tight text-white">
                Accenture Prep Nexus 2026
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                On-Campus Calibrated
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              End-to-End 5-Stage Recruitment Assessment Engine • HirePro & CoCubes Runtimes
            </p>
          </div>
        </div>

        {/* Global Action Hub */}
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={() => setActiveLaunch({ type: 'custom_mock', title: 'Custom Adaptive Mock Generator' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-xs font-bold text-purple-300 border border-purple-500/30 transition-all cursor-pointer shadow-xs"
          >
            <Sliders className="w-3.5 h-3.5 text-purple-400" /> Custom Mock
          </button>
          <button
            onClick={() => setActiveLaunch({ type: 'diagnostic', title: 'Topic Diagnostic Hub' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-xs font-bold text-blue-300 border border-blue-500/30 transition-all cursor-pointer shadow-xs"
          >
            <Zap className="w-3.5 h-3.5 text-blue-400" /> Diagnostic Lab
          </button>
          <button
            onClick={() => setActiveLaunch({ type: 'mistakes', title: 'Error Notebook' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-xs font-bold text-rose-300 border border-rose-500/30 transition-all cursor-pointer shadow-xs"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Error Notebook
          </button>
          <button
            onClick={() => setActiveLaunch({ type: 'analytics', title: 'Telemetry' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 transition-all cursor-pointer shadow-xs"
          >
            <BarChart2 className="w-3.5 h-3.5 text-purple-400" /> Telemetry
          </button>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        {/* Interactive Recruitment Pipeline Hero Funnel */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#121422] via-[#0d0f1a] to-[#08090f] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Official Recruitment Test Funnel
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
                  5-Stage Assessment Architecture
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Strict Runtimes: Java • Python • C#
                </span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Cutoff: 65% Sectional
                </span>
              </div>
            </div>

            {/* 5-Stage Interactive Funnel Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              {/* Stage 1 */}
              <div 
                onClick={() => setSelectedStageFilter(selectedStageFilter === 'stage1' ? 'all' : 'stage1')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedStageFilter === 'stage1' 
                    ? 'bg-purple-600/30 border-purple-400 shadow-lg shadow-purple-600/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-400">STAGE 1</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">Mandatory</span>
                </div>
                <div className="font-bold text-white text-xs mt-1">Behavioral SJT</div>
                <div className="text-[10px] text-slate-400 mt-0.5">50 Qs • Consistency Matrix</div>
              </div>

              {/* Stage 2 */}
              <div 
                onClick={() => setSelectedStageFilter(selectedStageFilter === 'stage2' ? 'all' : 'stage2')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedStageFilter === 'stage2' 
                    ? 'bg-amber-600/30 border-amber-400 shadow-lg shadow-amber-600/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-amber-400">STAGE 2</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">Elimination</span>
                </div>
                <div className="font-bold text-white text-xs mt-1">Cognitive Games</div>
                <div className="text-[10px] text-slate-400 mt-0.5">3 Mini-Games • ~20 Mins</div>
              </div>

              {/* Stage 3 */}
              <div 
                onClick={() => setSelectedStageFilter(selectedStageFilter === 'stage3' ? 'all' : 'stage3')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedStageFilter === 'stage3' 
                    ? 'bg-rose-600/30 border-rose-400 shadow-lg shadow-rose-600/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-rose-400">STAGE 3</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">Elimination</span>
                </div>
                <div className="font-bold text-white text-xs mt-1">Tech & Pseudocode</div>
                <div className="text-[10px] text-slate-400 mt-0.5">45 Qs / 45m • Errata 38 vs 28</div>
              </div>

              {/* Stage 4 */}
              <div 
                onClick={() => setSelectedStageFilter(selectedStageFilter === 'stage4' ? 'all' : 'stage4')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedStageFilter === 'stage4' 
                    ? 'bg-emerald-600/30 border-emerald-400 shadow-lg shadow-emerald-600/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-emerald-400">STAGE 4</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">ASE / AASE</span>
                </div>
                <div className="font-bold text-white text-xs mt-1">Coding & Simulators</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Monaco IDE • 9 SQL • DOM</div>
              </div>

              {/* Stage 5 */}
              <div 
                onClick={() => setSelectedStageFilter(selectedStageFilter === 'stage5' ? 'all' : 'stage5')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedStageFilter === 'stage5' 
                    ? 'bg-purple-600/30 border-purple-400 shadow-lg shadow-purple-600/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-purple-400">STAGE 5</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">Scheduled Later</span>
                </div>
                <div className="font-bold text-white text-xs mt-1">AI Voice Engine</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Read Aloud • Builds • Retell</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Filter Pills & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Stage Filter Buttons */}
          <div className="flex items-center flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Stages' },
              { id: 'stage1', label: 'Stage 1: SJT' },
              { id: 'stage2', label: 'Stage 2: Cognitive Games' },
              { id: 'stage3', label: 'Stage 3: Tech & Pseudocode' },
              { id: 'stage4', label: 'Stage 4: Coding & SQL' },
              { id: 'stage5', label: 'Stage 5: Voice Communication' },
              { id: 'mocks', label: 'Mocks & Labs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStageFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedStageFilter === tab.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stages, drills & problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0e17] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Stage 2 Gamified Assessment Hub (Direct Play Mode - BuildUForward Model) */}
        {selectedStageFilter === 'stage2' ? (
          <GamifiedAssessmentHub
            onPlayGame={(gameId) => {
              if (gameId === 'quick-fire-math') {
                setActiveLaunch({ type: 'game_math_order', title: 'Quick-Fire Math Speed Sort' });
              } else if (gameId === 'memory-maze') {
                setActiveLaunch({ type: 'game_lock_key', title: 'Memory Maze (The Hidden Path)' });
              } else {
                setActiveLaunch({ type: 'game_path_builder', title: 'Path Finder Vector Pipeline' });
              }
            }}
          />
        ) : (
          /* Curated Module Folders & Grid */
          <div className="space-y-8">
            {filteredFolders.map((folder) => {
            const visibleItems = folder.items.filter(
              (item) => !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (visibleItems.length === 0) return null;

            return (
              <div key={folder.id} className="space-y-4">
                {/* Folder Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      {folder.stageNumber && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {folder.stageNumber}
                        </span>
                      )}
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {folder.title}
                      </h3>
                    </div>
                    {folder.description && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {folder.description}
                      </p>
                    )}
                  </div>
                  {folder.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hidden sm:inline">
                      {folder.badge}
                    </span>
                  )}
                </div>

                {/* Module Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleLaunchItem(item)}
                      className="p-5 rounded-2xl bg-[#0c0e17]/80 hover:bg-[#111422] border border-white/10 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {item.type.toUpperCase()}
                            </span>
                            {item.stageBadge && (
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                {item.stageBadge}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-500 font-mono">
                            {item.durationMinutes}m
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="p-2.5 rounded-xl bg-white/5 text-purple-400 shrink-0 group-hover:bg-purple-600/20 group-hover:text-purple-300 transition-colors">
                            {item.type === 'quiz' ? (
                              <FileQuestion className="w-4 h-4" />
                            ) : item.type === 'coding' ? (
                              <Code className="w-4 h-4 text-emerald-400" />
                            ) : item.type === 'game' ? (
                              <Gamepad2 className="w-4 h-4 text-amber-400" />
                            ) : item.type === 'tracer' ? (
                              <Cpu className="w-4 h-4 text-purple-400" />
                            ) : item.type === 'sql' ? (
                              <Database className="w-4 h-4 text-cyan-400" />
                            ) : item.type === 'frontend' ? (
                              <Globe className="w-4 h-4 text-emerald-400" />
                            ) : item.type === 'communication' ? (
                              <Headphones className="w-4 h-4 text-purple-400" />
                            ) : item.type === 'sjt' ? (
                              <Briefcase className="w-4 h-4 text-blue-400" />
                            ) : item.type === 'diagnostic' ? (
                              <Zap className="w-4 h-4 text-yellow-400" />
                            ) : item.type === 'custom_mock' ? (
                              <Sliders className="w-4 h-4 text-indigo-400" />
                            ) : (
                              <FileText className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                              {item.title}
                            </h4>
                            {item.questionCount && (
                              <p className="text-[11px] text-slate-400 mt-1">
                                {item.questionCount} Questions • +1 Mark • No Negative Marking
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                        <span className="text-slate-500 font-medium">Ready to launch</span>
                        <span className="text-purple-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Open Module <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        )}
      </main>
    </div>
  );
}
