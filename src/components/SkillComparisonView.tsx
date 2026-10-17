import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { RecommendedCareer, SkillGapItem } from '../types';
import { Layers, CheckCircle2, AlertCircle, Clock, ArrowRight, Filter } from 'lucide-react';

export const SkillComparisonView: React.FC = () => {
  const { analysis, profile, setActiveTab } = useStudent();
  const [selectedCareerId, setSelectedCareerId] = useState<string>(
    analysis.recommendedCareers[0]?.id || ''
  );
  const [statusFilter, setStatusFilter] = useState<'all' | 'Strong' | 'Developing' | 'Missing'>('all');

  const activeCareer =
    analysis.recommendedCareers.find((c) => c.id === selectedCareerId) ||
    analysis.recommendedCareers[0];

  const filteredSkills = activeCareer?.skillGaps.filter((item) => {
    if (statusFilter === 'all') return true;
    return item.currentStatus === statusFilter;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>Target vs. Current Competency Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industry Skill-Gap Comparison
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Detailed breakdown comparing {profile.name}'s current verified abilities against the
            expectations of high-growth technology and product careers.
          </p>
        </div>
      </div>

      {/* Career Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {analysis.recommendedCareers.slice(0, 5).map((career) => (
          <button
            key={career.id}
            onClick={() => setSelectedCareerId(career.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCareerId === career.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <span>{career.careerName}</span>
            <span className="ml-2 font-mono text-[10px] opacity-80">
              ({career.matchPercentage}% match)
            </span>
          </button>
        ))}
      </div>

      {/* Skill Matrix Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Skill Alignment for {activeCareer?.careerName}
            </h2>
            <span className="text-xs text-slate-400">
              {activeCareer?.skillGaps.length} Core Competencies Analyzed
            </span>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'all'
                  ? 'bg-slate-800 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter('Strong')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'Strong'
                  ? 'bg-emerald-950 text-emerald-300 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Strong
            </button>
            <button
              onClick={() => setStatusFilter('Developing')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'Developing'
                  ? 'bg-sky-950 text-sky-300 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Developing
            </button>
            <button
              onClick={() => setStatusFilter('Missing')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'Missing'
                  ? 'bg-amber-950 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Missing
            </button>
          </div>
        </div>

        {/* Tabular Skill Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 font-semibold">Required Skill / Domain</th>
                <th className="py-3 px-4 font-semibold">Current Status</th>
                <th className="py-3 px-4 font-semibold">Learning Priority</th>
                <th className="py-3 px-4 font-semibold">Est. Time to Mastery</th>
                <th className="py-3 px-4 font-semibold">Recommended Strategic Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/30">
              {filteredSkills?.map((skill, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                    {skill.skill}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium ${
                        skill.currentStatus === 'Strong'
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                          : skill.currentStatus === 'Developing'
                          ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}
                    >
                      {skill.currentStatus === 'Strong' && '✓'}
                      {skill.currentStatus === 'Developing' && '▲'}
                      {skill.currentStatus === 'Missing' && '●'}
                      <span>{skill.currentStatus}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`font-semibold ${
                        skill.priority === 'High'
                          ? 'text-red-400'
                          : skill.priority === 'Medium'
                          ? 'text-amber-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {skill.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono whitespace-nowrap tabular-nums">
                    {skill.learningTimeWeeks} {skill.learningTimeWeeks === 1 ? 'week' : 'weeks'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 max-w-md leading-relaxed">
                    {skill.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA to Roadmap */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-white">Ready to close these skill gaps? </span>
            <span>Follow the customized 4-week step-by-step roadmap.</span>
          </div>
          <button
            onClick={() => setActiveTab('roadmap')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors whitespace-nowrap"
          >
            <span>View Personalized Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
