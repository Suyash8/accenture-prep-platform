'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Brain, Zap, Compass } from 'lucide-react';

export default function GamesHubPage() {
  const games = [
    {
      id: 'math',
      title: 'Quick-Fire Math',
      category: 'Speed Sort',
      description: 'Sort 3 mathematical expressions or numbers in ascending order (Lowest to Highest) within the time limit.',
      href: '/games/math',
      icon: Zap,
      stats: 'Randomized Numbers & Positions',
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    },
    {
      id: 'memory-maze',
      title: 'Memory Maze',
      category: 'Working Memory',
      description: 'Navigate invisible walls, collect the keys, and reach the exit door with minimal collision resets.',
      href: '/games/memory-maze',
      icon: Brain,
      stats: '3×3, 4×4 & 5×5 Randomized Grids',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      id: 'path-finder',
      title: 'Path Finder',
      category: 'Spatial Reasoning',
      description: 'Rotate and flip tile pipeline blocks to connect the Rocket on the left to the Earth on the right.',
      href: '/games/path-finder',
      icon: Compass,
      stats: 'Procedurally Solvable Matrices',
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Breadcrumb / Title */}
      <div className="space-y-2">
        <Link href="/" className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Cognitive Assessment Games
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Accenture utilizes interactive game tests rather than standard aptitude questions for Stage 2. Choose any game below to practice with unlimited randomized rounds.
        </p>
      </div>

      {/* 3 Clean Dedicated Game Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((g) => {
          const Icon = g.icon;
          return (
            <div
              key={g.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-lg border ${g.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {g.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{g.title}</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {g.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{g.stats}</span>
                </div>
              </div>

              <Link
                href={g.href}
                className="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-purple-600 hover:bg-slate-800 dark:hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Play Game
              </Link>
            </div>
          );
        })}
      </div>

      {/* Quick Tips */}
      <div className="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <h3 className="font-semibold text-slate-900 dark:text-white">Assessment Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
          <li><strong>Quick-Fire Math:</strong> The Accenture requirement is ordering from lowest value to highest value.</li>
          <li><strong>Memory Maze:</strong> Take note of walls when you hit them. Collisions reset you to the start, but walls remain in the same position for that round.</li>
          <li><strong>Path Finder:</strong> Clicking a tile selects it, allowing you to rotate clockwise (↻) or change path routing (⇄).</li>
        </ul>
      </div>
    </main>
  );
}
