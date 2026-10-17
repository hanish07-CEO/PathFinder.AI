import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { KnowledgeGap, DependencyNode } from '../types';
import {
  AlertCircle,
  GitBranch,
  Clock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const KnowledgeGapView: React.FC = () => {
  const { analysis, setActiveTab } = useStudent();
  const [selectedGapId, setSelectedGapId] = useState<string>(
    analysis.criticalGaps[0]?.id || ''
  );
  const [selectedNode, setSelectedNode] = useState<DependencyNode | null>(null);

  const activeGap =
    analysis.criticalGaps.find((g) => g.id === selectedGapId) ||
    analysis.criticalGaps[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <GitBranch className="h-4 w-4" />
            <span>Root-Cause Decomposition Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Knowledge-Gap & Prerequisite Analysis
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Low marks or test hesitation are symptoms, not the disease. PathFinder AI traces
            weaknesses back to foundational prerequisite principles, mapping out the precise
            dependency path needed to achieve mastery.
          </p>
        </div>
      </div>

      {/* Main Grid: Gap Selector Sidebar + Deep Dive Visual Dependency Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Gap Cards */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-semibold text-slate-400 block px-1">
            Detected Critical Gaps ({analysis.criticalGaps.length})
          </span>

          {analysis.criticalGaps.map((gap) => {
            const isSelected = gap.id === activeGap?.id;
            return (
              <button
                key={gap.id}
                onClick={() => {
                  setSelectedGapId(gap.id);
                  setSelectedNode(null);
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-950/30 shadow-lg'
                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      gap.severity === 'High'
                        ? 'text-red-400'
                        : gap.severity === 'Medium'
                        ? 'text-amber-400'
                        : 'text-teal-400'
                    }`}
                  >
                    ● {gap.severity} Priority
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>~{gap.estimatedHours} hrs</span>
                  </span>
                </div>
                <h2 className="text-sm font-bold text-white mb-1">{gap.subject}</h2>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {gap.rootCause}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Dive & Visual Dependency Tree */}
        <div className="lg:col-span-8 space-y-6">
          {activeGap ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-6">
              {/* Gap Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-white">{activeGap.subject}</h2>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        activeGap.severity === 'High'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                          : activeGap.severity === 'Medium'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                      }`}
                    >
                      {activeGap.severity} Severity
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Estimated Scaffolding Time: ~{activeGap.estimatedHours} focused learning hours
                  </span>
                </div>

                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Go to Weekly Roadmap</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Root Cause & Why It Matters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Root-Cause Analysis
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeGap.rootCause}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Why This Gap Matters
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeGap.importanceReason}
                  </p>
                </div>
              </div>

              {/* Interactive Visual Dependency Map */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Visual Learning-Dependency Flow
                    </h3>
                    <span className="text-xs text-slate-400">
                      Click any node to view concepts and required mastery action
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                      <span>Mastered</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span>Gap Node</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
                      <span>Target Goal</span>
                    </span>
                  </div>
                </div>

                {/* Dependency Flow Pipeline Visual */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 overflow-x-auto">
                  <div className="min-w-[540px] flex items-center justify-between gap-4 relative">
                    {/* Background Connecting Line */}
                    <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

                    {activeGap.dependencyTree.map((node, idx) => {
                      const isNodeSelected = selectedNode?.id === node.id;
                      const statusColor =
                        node.status === 'mastered'
                          ? 'border-emerald-500 bg-emerald-950/60 text-emerald-300'
                          : node.status === 'gap'
                          ? 'border-amber-500 bg-amber-950/60 text-amber-300'
                          : node.status === 'in_progress'
                          ? 'border-sky-500 bg-sky-950/60 text-sky-300'
                          : 'border-indigo-500 bg-indigo-950/60 text-indigo-300';

                      return (
                        <div key={node.id} className="relative z-10 flex flex-col items-center">
                          <button
                            onClick={() => setSelectedNode(node)}
                            className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all ${statusColor} ${
                              isNodeSelected ? 'ring-2 ring-indigo-400 scale-105 shadow-lg' : ''
                            } w-36 hover:brightness-125`}
                          >
                            <span className="text-[10px] font-mono uppercase tracking-wider mb-1 opacity-80">
                              Level {node.level}
                            </span>
                            <span className="text-xs font-semibold block leading-tight">
                              {node.label}
                            </span>
                            <span className="text-[10px] mt-1.5 capitalize font-medium opacity-90">
                              {node.status.replace('_', ' ')}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Node Details Box */}
                  {selectedNode && (
                    <div className="mt-5 p-3.5 rounded-lg border border-indigo-900/60 bg-indigo-950/30 text-xs text-slate-200 animate-fadeIn">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white">
                          Selected Node: {selectedNode.label}
                        </span>
                        <span className="text-[11px] text-indigo-400 capitalize">
                          Status: {selectedNode.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-slate-300">{selectedNode.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Recommended Action Plan Box */}
              <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4 space-y-2">
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider block">
                  Actionable Resolution Blueprint
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeGap.actionItem}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">
                    Prerequisite Topics to Revise First:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeGap.prerequisites.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 rounded-2xl border border-slate-800 bg-slate-900/40">
              Select a gap from the left to inspect its root-cause breakdown.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
