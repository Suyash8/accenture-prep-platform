import Link from 'next/link';
import { 
  Briefcase,
  Gamepad2, 
  Code, 
  Cpu, 
  FileCheck2, 
  Headphones,
  BookMarked, 
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const sections = [
    {
      title: 'Stage 1: Behavioral SJT',
      subtitle: 'Situational Judgement & Personality',
      description: 'Practice real workplace scenarios with consistency checking across questions.',
      href: '/sjt',
      icon: Briefcase,
      count: '50 Scenario Questions',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
    {
      title: 'Stage 2: Cognitive Mini-Games',
      subtitle: 'Game-Based Aptitude',
      description: 'The 3 exact games: Memory Maze, Quick-Fire Math, and Path Finder.',
      href: '/games',
      icon: Gamepad2,
      count: '3 Procedurally Randomized Games',
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    {
      title: 'Stage 3: Pseudocode & Logic',
      subtitle: 'Technical Elimination Round',
      description: 'Bitwise operators, nested loops, conditional branches, and variable execution tracing.',
      href: '/pseudocode',
      icon: Cpu,
      count: 'Step-by-Step Execution Tracer',
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    },
    {
      title: 'Stage 4: Coding Assessment',
      subtitle: 'Hands-on Programming',
      description: 'Standard Accenture array, string, and algorithm problems with live test runs.',
      href: '/coding',
      icon: Code,
      count: 'Practice Problems with Test Cases',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      title: 'Stage 5: Communication Round',
      subtitle: 'Verbal & Listening Test',
      description: 'Reading aloud, sentence repeat, conversational questions, and story retellings.',
      href: '/communication',
      icon: Headphones,
      count: 'All 6 Audio Question Types',
      color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    },
    {
      title: 'Full Mocks & Practice Tests',
      subtitle: 'Timed Full-Length Assessment',
      description: 'Full-length 90-minute mocks and sectional drills with scoring and analysis.',
      href: '/mocks',
      icon: FileCheck2,
      count: '3 Full Mocks + Sectional Drills',
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    },
  ];

  const roundBreakdown = [
    { round: 'Stage 1', name: 'Behavioral SJT', details: 'Situational Judgement assessment', href: '/sjt' },
    { round: 'Stage 2', name: 'Cognitive Games', details: 'Memory Maze, Quick-Fire Math, Path Finder', href: '/games' },
    { round: 'Stage 3', name: 'Technical & Pseudocode', details: '45 Qs • Logic, Network & Security, MS Office', href: '/pseudocode' },
    { round: 'Stage 4', name: 'Coding Assessment', details: '2 Programming Problems • 45 Minutes', href: '/coding' },
    { round: 'Stage 5', name: 'Communication', details: 'Reading, Listening & Story Retelling', href: '/communication' },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Clean Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
          Accenture Campus Recruitment 2026
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Practice Platform
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl leading-relaxed">
          Prepare for each stage of the Accenture recruitment process. Every section contains practice materials tailored to the official test pattern.
        </p>
      </div>

      {/* Main Section Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <Link
              key={sec.href}
              href={sec.href}
              className="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-lg border ${sec.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {sec.count}
                  </span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {sec.title}
                  </h2>
                  <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    {sec.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Start Practice <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Clean Recruitment Format Guide */}
      <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          5-Stage Recruitment Format
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
          {roundBreakdown.map((r) => (
            <Link
              key={r.round}
              href={r.href}
              className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
            >
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">{r.round}</span>
              <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">{r.name}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">{r.details}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
