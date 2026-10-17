import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import confetti from 'canvas-confetti';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Trophy,
  FolderGit2,
  Target,
  ArrowRight,
  Filter,
  Check,
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const {
    profile,
    analysis,
    toggleRoadmapTask,
    completedTasksCount,
    totalTasksCount,
    roadmapCompletionPercent,
    setActiveTab,
  } = useStudent();

  const [filterCategory, setFilterCategory] = useState<'all' | 'concept' | 'practice' | 'project' | 'review'>('all');
  const [activeWeekTab, setActiveWeekTab] = useState<number>(1);

  const handleTaskToggle = (weekNum: number, taskId: string, isCurrentlyCompleted: boolean) => {
    toggleRoadmapTask(weekNum, taskId);
    if (!isCurrentlyCompleted) {
      // Trigger subtle confetti burst
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#6366f1', '#14b8a6', '#8b5cf6'],
        });
      } catch (e) {
        // fallback silent
      }
    }
  };

  const topCareer = analysis.recommendedCareers[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Header & Readiness Tracker Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              <Calendar className="h-4 w-4" />
              <span>4-Week Personalized Action Blueprint</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Adaptive Learning & Gap Closure Roadmap
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Curated specifically for {profile.name} targeting{' '}
              <span className="text-white font-semibold">
                {profile.targetCareer !== 'Undecided' ? profile.targetCareer : topCareer?.careerName}
              </span>
              . Each completed milestone directly elevates your verified industry readiness.
            </p>
          </div>

          {/* Interactive Progress Meter */}
          <div className="w-full lg:w-72 bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Roadmap Progress</span>
              <span className="text-teal-400 font-mono font-bold">
                {completedTasksCount} / {totalTasksCount} ({roadmapCompletionPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-teal-400 h-full transition-all duration-500"
                style={{ width: `${roadmapCompletionPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-400">Career Readiness</span>
              <span className="text-indigo-300 font-mono font-semibold">
                {analysis.adjustedReadinessScore}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Week Selector Tabs & Task Category Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        {/* Week Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {analysis.roadmap.map((week) => {
            const isWeekActive = activeWeekTab === week.weekNumber;
            const weekCompletedCount = week.tasks.filter((t) => t.completed).length;
            const isWeekDone = weekCompletedCount === week.tasks.length && week.tasks.length > 0;

            return (
              <button
                key={week.weekNumber}
                onClick={() => setActiveWeekTab(week.weekNumber)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isWeekActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <span>Week {week.weekNumber}</span>
                {isWeekDone ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-300" />
                ) : (
                  <span className="text-[10px] opacity-80 font-mono">
                    ({weekCompletedCount}/{week.tasks.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'all'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterCategory('concept')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'concept'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Theory
          </button>
          <button
            onClick={() => setFilterCategory('practice')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'practice'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Practice
          </button>
          <button
            onClick={() => setFilterCategory('project')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'project'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Active Week Content */}
      {analysis.roadmap.map((week) => {
        if (week.weekNumber !== activeWeekTab) return null;

        const filteredTasks = week.tasks.filter((t) =>
          filterCategory === 'all' ? true : t.category === filterCategory
        );

        return (
          <div key={week.weekNumber} className="space-y-6">
            {/* Week Focus Overview Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                    Week {week.weekNumber} Theme
                  </span>
                  <h2 className="text-xl font-bold text-white mt-0.5">{week.focus}</h2>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>~{week.estimatedHours} Hours Required</span>
                  </span>
                  <span>·</span>
                  <span className="text-teal-400 font-medium">Milestone Target</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                <span className="font-semibold text-white">Weekly Objective: </span>
                {week.weeklyGoals}
              </p>

              {/* Sub-grid: Recommended Topics & Practice Exercises */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Key Topics to Cover
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {week.recommendedTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">▸</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Practice Exercises
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {week.practiceExercises.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">✓</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mini Project Highlight Banner */}
              <div className="rounded-xl border border-violet-900/60 bg-gradient-to-r from-violet-950/30 to-slate-950/40 p-4 flex items-start gap-3">
                <FolderGit2 className="h-5 w-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-violet-300 block">
                    Weekly Mini-Project
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                    {week.miniProject}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Tasks Checklist */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Action Item Checklist</h3>
                  <span className="text-xs text-slate-400">
                    Check off tasks as you finish them to raise your career readiness score
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {week.tasks.filter((t) => t.completed).length} / {week.tasks.length} Completed
                </span>
              </div>

              <div className="space-y-3">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => handleTaskToggle(week.weekNumber, task.id, task.completed)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      task.completed
                        ? 'border-emerald-900/60 bg-emerald-950/20 text-slate-300'
                        : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-white'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 focus:outline-none"
                    >
                      {task.completed ? (
                        <div className="h-5 w-5 rounded-md bg-emerald-600 text-white flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-md border border-slate-700 bg-slate-900 hover:border-indigo-500" />
                      )}
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            task.completed ? 'line-through text-slate-400' : 'text-white'
                          }`}
                        >
                          {task.title}
                        </span>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="capitalize">{task.category}</span>
                          <span>·</span>
                          <span>{task.timeEstimateHours} hrs</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcome & Milestone Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Expected Outcome
                </span>
                <p className="text-xs text-slate-200">{week.expectedOutcome}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-1">
                <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block">
                  Milestone Achievement
                </span>
                <p className="text-xs text-white font-medium">{week.milestone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
