import React from 'react';
import { useStudent } from '../context/StudentContext';
import { Navbar } from './Navbar';
import { DashboardView } from './DashboardView';
import { KnowledgeGapView } from './KnowledgeGapView';
import { RoadmapView } from './RoadmapView';
import { CareerPathwayView } from './CareerPathwayView';
import { SkillComparisonView } from './SkillComparisonView';
import { ReportView } from './ReportModal';
import { Compass, LogOut, ArrowLeft, User, ShieldCheck } from 'lucide-react';

export const DashboardLayer: React.FC = () => {
  const { activeTab, profile, logout, setCurrentLayer } = useStudent();

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[800px] h-[450px] bg-indigo-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 -right-36 w-[550px] h-[550px] bg-teal-500/10 blur-[130px] rounded-full" />
        <div className="absolute -bottom-32 -left-36 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_80%,transparent_100%)]" />
      </div>

      {/* Layer 3 Authenticated Top Navigation */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Workspace Status Bar */}
      <div className="relative z-10 bg-slate-900/60 border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-2 text-xs text-slate-400 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#34d399]" />
            <span className="text-slate-300 font-medium">Active Session:</span>
            <span className="text-white font-semibold">{profile.name}</span>
            <span className="text-slate-500">({profile.currentClass})</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setCurrentLayer('landing')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>Back to Landing Page</span>
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentLayer('login')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Switch Account
            </button>
            <span>·</span>
            <button
              onClick={logout}
              className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <LogOut className="h-3 w-3" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace Canvas */}
      <main className="relative z-10 flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'gaps' && <KnowledgeGapView />}
        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'careers' && <CareerPathwayView />}
        {activeTab === 'comparison' && <SkillComparisonView />}
        {activeTab === 'report' && <ReportView />}
      </main>

      {/* Authenticated Workspace Footer */}
      <footer className="relative z-10 no-print mt-auto border-t border-slate-800/80 bg-[#060913]/90 backdrop-blur-md py-8 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-indigo-400" />
            <span className="font-bold text-white">PathFinder AI Workspace</span>
            <span>·</span>
            <span>Diagnostic & Career Readiness Engine</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setCurrentLayer('landing')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Landing Page
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentLayer('login')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Switch Persona
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
