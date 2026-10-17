import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import {
  Brain,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Award,
  ChevronRight,
  Target,
  Compass,
  ArrowUpRight,
  Bot,
  RefreshCw,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    profile,
    analysis,
    setActiveTab,
    isAiLoading,
    fetchAiCoachInsights,
    aiCoachText,
    completedTasksCount,
    totalTasksCount,
  } = useStudent();

  // Radar data formatting
  const radarData = analysis.subjectScores.map((s) => ({
    subject: s.subject.length > 14 ? s.subject.substring(0, 12) + '...' : s.subject,
    fullName: s.subject,
    Marks: s.marks,
    Confidence: s.confidence,
    Interest: s.interest,
    Consistency: s.consistency,
  }));

  // Bar data formatting
  const barData = analysis.subjectScores.map((s) => ({
    name: s.subject.length > 12 ? s.subject.substring(0, 10) + '..' : s.subject,
    fullName: s.subject,
    Composite: s.compositeScore,
    Marks: s.marks,
  }));

  // Circular gauge calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (analysis.strengthIndex / 100) * circumference;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner / Student Executive Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-white">{profile.name}</span>
              <span>·</span>
              <span>{profile.educationLevel}</span>
              <span>·</span>
              <span>{profile.currentClass}</span>
              <span>·</span>
              <span className="text-indigo-400 font-medium">Goal: {profile.targetCareer}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Holistic Intelligence Diagnostic
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {analysis.learningSummary}
            </p>
          </div>

          {/* AI Coach Generator Button */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
            <button
              onClick={fetchAiCoachInsights}
              disabled={isAiLoading}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-500 rounded-lg hover:opacity-90 disabled:opacity-50 transition-all shadow-md whitespace-nowrap"
            >
              {isAiLoading ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>Synthesizing Coaching...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>{aiCoachText ? 'Regenerate AI Coach' : 'Generate AI Coach Brief'}</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-slate-400">
              Powered by Explainable Heuristics & Gemini AI
            </span>
          </div>
        </div>

        {/* Live AI Coach Response Card (if generated) */}
        {aiCoachText && (
          <div className="mt-6 border border-indigo-900/60 bg-indigo-950/30 rounded-xl p-4 sm:p-5 text-xs text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold">
              <Bot className="h-4 w-4" />
              <span>Executive AI Coach Guidance</span>
            </div>
            <div className="whitespace-pre-line leading-relaxed text-slate-300">
              {aiCoachText}
            </div>
          </div>
        )}
      </div>

      {/* KPI & Index Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Animated Strength Gauge Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Student Strength Index</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-white font-mono">
                {analysis.strengthIndex}
              </span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
            <span className="text-[11px] text-teal-400 font-medium block mt-1">
              Holistic Aptitude Rating
            </span>
          </div>

          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20 -rotate-90 transform" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-slate-800"
                strokeWidth="14"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-indigo-500 transition-all duration-1000 ease-out"
                strokeWidth="14"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <span className="absolute text-sm font-bold text-white font-mono">
              {analysis.strengthIndex}%
            </span>
          </div>
        </div>

        {/* Readiness Score Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Career Readiness Score</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-teal-300 font-mono">
                {analysis.adjustedReadinessScore}
              </span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-teal-500 h-full transition-all duration-500"
                style={{ width: `${analysis.adjustedReadinessScore}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 block mt-1.5">
              {completedTasksCount} of {totalTasksCount} roadmap tasks completed
            </span>
          </div>
        </div>

        {/* Hidden Strengths Count Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Hidden Strengths</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-violet-300 font-mono">
                {analysis.hiddenStrengths.length}
              </span>
              <span className="text-xs text-violet-400 font-medium">Discovered</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug mt-2">
            Latent potential where passion outpaces test gradecards.
          </p>
        </div>

        {/* Critical Gaps Count Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Prerequisite Gaps</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-amber-300 font-mono">
                {analysis.criticalGaps.length}
              </span>
              <span className="text-xs text-amber-400 font-medium">Priority Areas</span>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('gaps')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 mt-2 text-left"
          >
            <span>Inspect Root Causes</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Analytics Split: Radar Chart & Subject Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart: Holistic Subject Comparison */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Multidimensional Subject Profile</h2>
              <span className="text-xs text-slate-400">
                Marks vs. Confidence vs. Interest vs. Consistency
              </span>
            </div>
            <span className="text-xs text-indigo-400 font-medium">Radar Mapping</span>
          </div>

          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: '#64748b', fontSize: 10 }}
                />
                <Radar
                  name="Marks"
                  dataKey="Marks"
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  fillOpacity={0.25}
                />
                <Radar
                  name="Confidence"
                  dataKey="Confidence"
                  stroke="#818cf8"
                  fill="#818cf8"
                  fillOpacity={0.25}
                />
                <Radar
                  name="Interest"
                  dataKey="Interest"
                  stroke="#34d399"
                  fill="#34d399"
                  fillOpacity={0.25}
                />
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                  formatter={(value) => <span className="text-slate-300">{value}</span>}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    fontSize: '11px',
                  }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Subject Composite Scores */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-white">Subject Strength Breakdown</h2>
                <span className="text-xs text-slate-400">Weighted Composite (45/20/20/15)</span>
              </div>
              <span className="text-xs text-teal-400 font-medium">Ranked</span>
            </div>

            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 10 }}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fill: '#cbd5e1', fontSize: 11 }}
                    width={90}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '8px',
                      fontSize: '11px',
                    }}
                    formatter={(val: any, name: any) => [`${val}%`, name]}
                  />
                  <Bar dataKey="Composite" fill="#6366f1" radius={[0, 4, 4, 0]} name="Strength Score" />
                  <Bar dataKey="Marks" fill="#38bdf8" radius={[0, 4, 4, 0]} name="Raw Marks" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
            Formula: 0.45(Marks) + 0.20(Confidence) + 0.20(Interest) + 0.15(Consistency)
          </div>
        </div>
      </div>

      {/* Categorized Findings: Hidden Strengths, Core Strengths, Weak Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hidden Strengths (Star Feature) */}
        <div className="rounded-2xl border border-violet-800/50 bg-gradient-to-b from-violet-950/30 to-slate-900/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-violet-300 font-bold text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Hidden Strengths</span>
            </div>
            <span className="text-xs text-violet-400">High Passion · Moderate Test</span>
          </div>

          {analysis.hiddenStrengths.length > 0 ? (
            <div className="space-y-3">
              {analysis.hiddenStrengths.map((sub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-violet-800/40 bg-slate-950/60 p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{sub.subject}</span>
                    <span className="text-xs font-mono text-violet-300 font-semibold">
                      {sub.compositeScore}% Composite
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>Marks: {sub.marks}%</span>
                    <span>·</span>
                    <span className="text-teal-400">Interest: {sub.interest}%</span>
                    <span>·</span>
                    <span className="text-indigo-400">Conf: {sub.confidence}%</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">
                    {sub.explanation}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-slate-400 p-4 rounded-lg bg-slate-950/40 text-center">
              No hidden discrepancies detected. Your test scores correlate closely with your interest levels.
            </div>
          )}
        </div>

        {/* Core Strengths */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Award className="h-4 w-4" />
              <span>Core Strengths</span>
            </div>
            <span className="text-xs text-slate-400">Verified Mastery</span>
          </div>

          <div className="space-y-3">
            {analysis.coreStrengths.length > 0 ? (
              analysis.coreStrengths.map((sub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{sub.subject}</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {sub.compositeScore}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{sub.explanation}</p>
                </div>
              ))
            ) : (
              <div className="text-xs text-slate-400 p-4 rounded-lg bg-slate-950/40 text-center">
                Emerging aptitude across subjects.
              </div>
            )}
          </div>
        </div>

        {/* Weak Areas & Knowledge Gaps */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="h-4 w-4" />
              <span>Weak Areas & Gaps</span>
            </div>
            <button
              onClick={() => setActiveTab('gaps')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View Trees →
            </button>
          </div>

          <div className="space-y-3">
            {analysis.weakAreas.length > 0 ? (
              analysis.weakAreas.map((sub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{sub.subject}</span>
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {sub.compositeScore}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{sub.explanation}</p>
                </div>
              ))
            ) : (
              <div className="text-xs text-slate-400 p-4 rounded-lg bg-slate-950/40 text-center">
                No acute failure points detected.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Learning DNA & Cognitive Archetype */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              <Brain className="h-4 w-4" />
              <span>Student Learning DNA</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {analysis.learningDna.archetype}
            </h2>
            <p className="text-xs text-indigo-300 font-medium">
              Secondary Archetype: {analysis.learningDna.secondaryArchetype}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {analysis.learningDna.description}
            </p>

            {/* Cognitive Traits */}
            <div className="flex flex-wrap gap-2 pt-2">
              {analysis.learningDna.traits.map((trait, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* DNA Dimension Bars */}
          <div className="w-full lg:w-80 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs font-semibold text-slate-300 block mb-2">
              Cognitive Trait Intensities
            </span>
            {analysis.learningDna.radarDimensions.map((dim, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{dim.attribute}</span>
                  <span className="text-slate-200 font-mono font-medium">{dim.score}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-500 h-full rounded-full"
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
