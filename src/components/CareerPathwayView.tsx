import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { RecommendedCareer } from '../types';
import {
  Compass,
  Briefcase,
  TrendingUp,
  Award,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scale,
  X,
  Layers,
} from 'lucide-react';

export const CareerPathwayView: React.FC = () => {
  const { analysis, profile, setActiveTab } = useStudent();
  const [selectedCareer, setSelectedCareer] = useState<RecommendedCareer>(
    analysis.recommendedCareers[0]
  );
  const [compareCareers, setCompareCareers] = useState<string[]>([
    analysis.recommendedCareers[0]?.id || '',
    analysis.recommendedCareers[1]?.id || '',
  ]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [filterDomain, setFilterDomain] = useState<string>('all');

  const filteredCareers = analysis.recommendedCareers.filter((c) => {
    if (filterDomain === 'all') return true;
    return c.domain.toLowerCase().includes(filterDomain.toLowerCase());
  });

  const toggleCompareCareer = (id: string) => {
    setCompareCareers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Visual Header Banner */}
      <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <Compass className="h-4 w-4" />
              <span>Evidence-Backed Career Matching</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Recommended Career Pathways
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              PathFinder AI projects career alignments by weighing your academic strengths, hands-on
              projects, self-efficacy, and learning DNA against real industry competencies.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <Scale className="h-3.5 w-3.5" />
                <span>Side-by-Side Comparison ({compareCareers.length} selected)</span>
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Inspect Global Skill Matrix →
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-slate-800 aspect-video hidden lg:block">
            <img
              src="/src/assets/images/career_pathways_visual_1792212105755.jpg"
              alt="Career Pathways Visual"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Main Grid: Left Careers List + Right In-Depth Career Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Careers List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-slate-400">
              Matched Pathways ({analysis.recommendedCareers.length})
            </span>
            <span className="text-[11px] text-slate-400">Select card to view dossier</span>
          </div>

          {filteredCareers.map((career) => {
            const isSelected = career.id === selectedCareer?.id;
            const isMarkedForCompare = compareCareers.includes(career.id);

            return (
              <div
                key={career.id}
                onClick={() => setSelectedCareer(career)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-950/30 shadow-xl ring-1 ring-indigo-500/50'
                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] text-indigo-400 font-semibold block uppercase tracking-wider">
                      {career.domain}
                    </span>
                    <h2 className="text-base font-bold text-white mt-0.5">{career.careerName}</h2>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-extrabold text-teal-300 font-mono">
                      {career.matchPercentage}%
                    </span>
                    <span className="text-[10px] text-slate-400 block">Match Score</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                  {career.fitReason}
                </p>

                {/* Readiness Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Current Readiness</span>
                    <span className="font-mono text-slate-200">{career.readinessScore}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-500 h-full rounded-full"
                      style={{ width: `${career.readinessScore}%` }}
                    />
                  </div>
                </div>

                {/* Compare Checkbox & Salary Indicator */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/80 text-[11px]">
                  <span className="text-slate-400">{career.salaryRange || 'Competitive Pay'}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompareCareer(career.id);
                    }}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded transition-colors ${
                      isMarkedForCompare
                        ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{isMarkedForCompare ? '✓ In Compare' : '+ Compare'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Career Deep Dive */}
        <div className="lg:col-span-7 space-y-6">
          {selectedCareer ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-6">
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                    Target Pathway Dossier
                  </span>
                  <h2 className="text-2xl font-extrabold text-white mt-1">
                    {selectedCareer.careerName}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>{selectedCareer.salaryRange}</span>
                    <span>·</span>
                    <span className="text-teal-400">{selectedCareer.jobGrowthOutlook}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center shrink-0">
                  <span className="text-2xl font-black text-indigo-400 font-mono">
                    {selectedCareer.matchPercentage}%
                  </span>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Fit Alignment
                  </span>
                </div>
              </div>

              {/* Fit Rationale */}
              <div className="rounded-xl border border-indigo-900/40 bg-indigo-950/20 p-4 space-y-1.5">
                <span className="text-xs font-semibold text-indigo-300 block">
                  Why This Career Fits {profile.name}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedCareer.fitReason}
                </p>
              </div>

              {/* Required Core Skills & Gaps */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white">Competency Requirements & Status</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCareer.skillGaps.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 flex items-start justify-between gap-2"
                    >
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {item.skill}
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">
                          {item.action}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                          item.currentStatus === 'Strong'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : item.currentStatus === 'Developing'
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {item.currentStatus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Courses & Certifications */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  Recommended Courses & Industry Certifications
                </span>
                <div className="space-y-1.5">
                  {selectedCareer.coursesAndCerts.map((cert, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-950/40 text-xs text-slate-300 flex items-center gap-2.5"
                    >
                      <BookOpen className="h-4 w-4 text-indigo-400 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Projects */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  High-Impact Portfolio Projects
                </span>
                <div className="space-y-2">
                  {selectedCareer.suggestedProjects.map((proj, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-950/50 flex items-start gap-3"
                    >
                      <FolderGit2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entry Roles & Career Ladder */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Entry-Level Target Roles
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {selectedCareer.entryLevelRoles.map((role, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-teal-400">▪</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                    Long-Term Growth Ladder
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {selectedCareer.growthPath.map((tier, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-indigo-400 font-mono text-[11px]">{i + 1}.</span>
                        <span>{tier}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 rounded-2xl border border-slate-800 bg-slate-900/40">
              Select a career from the left to view detailed requirements.
            </div>
          )}
        </div>
      </div>

      {/* Side-by-Side Career Comparison Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 overflow-hidden my-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white">Side-by-Side Pathway Comparison</h2>
                <span className="text-xs text-slate-400">
                  Benchmarking match scores, prerequisites, salary ranges, and career ladders
                </span>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {compareCareers.map((cId) => {
                const c = analysis.recommendedCareers.find((item) => item.id === cId);
                if (!c) return null;
                return (
                  <div
                    key={c.id}
                    className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-4"
                  >
                    <div>
                      <span className="text-[10px] text-indigo-400 font-semibold uppercase">
                        {c.domain}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{c.careerName}</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl font-black text-teal-300 font-mono">
                          {c.matchPercentage}%
                        </span>
                        <span className="text-xs text-slate-400">Match</span>
                      </div>
                    </div>

                    <div className="text-xs space-y-2 border-t border-slate-800 pt-3">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Salary Range</span>
                        <span className="text-white font-medium">{c.salaryRange}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Job Market Outlook</span>
                        <span className="text-teal-400 font-medium">{c.jobGrowthOutlook}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Readiness Score</span>
                        <span className="text-indigo-300 font-mono font-medium">{c.readinessScore}%</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-800 pt-3 text-xs">
                      <span className="text-slate-400 block text-[11px]">Key Gaps to Close</span>
                      <div className="space-y-1">
                        {c.skillGaps.slice(0, 3).map((g, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-300">{g.skill}</span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] ${
                                g.currentStatus === 'Strong'
                                  ? 'text-emerald-400'
                                  : g.currentStatus === 'Developing'
                                  ? 'text-sky-400'
                                  : 'text-amber-400'
                              }`}
                            >
                              {g.currentStatus}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-800 pt-3 text-xs">
                      <span className="text-slate-400 block text-[11px]">Peak Career Role</span>
                      <span className="text-white font-medium block mt-0.5">
                        {c.growthPath[c.growthPath.length - 1]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-right">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
