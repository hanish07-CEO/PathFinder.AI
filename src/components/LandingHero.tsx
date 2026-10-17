import React from 'react';
import { useStudent } from '../context/StudentContext';
import {
  ArrowRight,
  Compass,
  Target,
  Brain,
  Sparkles,
  ChevronRight,
  LogIn,
  Layers,
  BarChart3,
  Rocket,
} from 'lucide-react';
import heroVisualImg from '../assets/images/pathfinder_hero_visual_1792212105910.jpg';

interface LandingHeroProps {
  onStartAnalysis?: () => void;
  onStudentPortal?: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStartAnalysis,
  onStudentPortal,
}) => {
  const { loadDemoProfile, setActiveTab, setCurrentLayer, setIsOnboardingOpen } =
    useStudent();

  const handleStartAnalysis = () => {
    if (onStartAnalysis) {
      onStartAnalysis();
    } else {
      setIsOnboardingOpen(true);
      setCurrentLayer('dashboard');
    }
  };

  const handleStudentPortal = () => {
    if (onStudentPortal) {
      onStudentPortal();
    } else {
      setCurrentLayer('login');
    }
  };

  const handleExploreDemo = () => {
    loadDemoProfile('aarav');
    setActiveTab('dashboard');
    setCurrentLayer('dashboard');
  };

  const handleInspectGaps = () => {
    loadDemoProfile('aarav');
    setActiveTab('gaps');
    setCurrentLayer('dashboard');
  };

  return (
    <div className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950">
      {/* Subtle radial backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        {/* Top announcement kicker */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs text-indigo-300 bg-indigo-950/70 border border-indigo-800/70 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Beyond Conventional Grades · Explainable Intelligence for Student Potential</span>
          </div>
        </div>

        {/* Hero headline and copy */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            Discover your strengths.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-teal-300">
              Close your gaps.
            </span>{' '}
            Choose your career with confidence.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Millions of students pick careers based purely on exam cutoffs, trending buzzwords, or peer pressure.
            PathFinder AI combines marks, self-confidence, genuine interest, and practical projects to reveal your true
            hidden strengths and guide you on a custom learning roadmap.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={handleStartAnalysis}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Start My Analysis</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={handleStudentPortal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-700/80 hover:bg-indigo-900/90 hover:text-white transition-all whitespace-nowrap cursor-pointer shadow-sm"
            >
              <LogIn className="h-4 w-4 text-indigo-400" />
              <span>Student Portal</span>
            </button>

            <button
              onClick={handleExploreDemo}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Explore Demo Dashboard</span>
            </button>
          </div>

          {/* Clean proof metrics metadata */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <span>3 Realistic Demo Profiles</span>
            <span aria-hidden="true">·</span>
            <span>Prerequisite Root-Cause Trees</span>
            <span aria-hidden="true">·</span>
            <span>Interactive 4-Week Roadmap</span>
            <span aria-hidden="true">·</span>
            <span>100% Offline Capable</span>
          </div>
        </div>

        {/* Hero Interactive Split Preview Container */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-md shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Graphic */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-slate-800/80 aspect-video group">
              <img
                src={heroVisualImg}
                alt="PathFinder AI Student Analytics and Career Pathways Visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white">PathFinder Holistic Growth Engine</span>
                  <span className="mx-2">·</span>
                  <span>Synthesizing Academic Aptitude, Interest, and Prerequisite Dependencies</span>
                </div>
              </div>
            </div>

            {/* Live Interactive Snapshot Teaser */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="border border-slate-800 rounded-xl bg-slate-950/70 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Student Strength Index</span>
                  <span className="text-indigo-400 font-mono font-semibold">88 / 100</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-teal-400 h-full w-[88%]" />
                </div>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  "High mathematical rigor paired with strong programming enthusiasm uncovers latent capability for Data Science & AI careers, even where raw test grades were modest."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-slate-800/90 rounded-xl bg-slate-950/50 p-3">
                  <span className="text-[11px] text-emerald-400 font-medium block">Core Strength</span>
                  <span className="text-sm font-semibold text-white block mt-0.5">Calculus & Logic</span>
                  <span className="text-[11px] text-slate-400">94% Normalized Score</span>
                </div>
                <div className="border border-slate-800/90 rounded-xl bg-slate-950/50 p-3">
                  <span className="text-[11px] text-violet-400 font-medium block">Hidden Strength</span>
                  <span className="text-sm font-semibold text-white block mt-0.5">Python Systems</span>
                  <span className="text-[11px] text-slate-400">96% Interest · 88% Conf</span>
                </div>
              </div>

              <div className="border border-slate-800/90 rounded-xl bg-slate-950/50 p-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-amber-400 font-medium block">Critical Gap Detected</span>
                  <span className="text-xs font-medium text-slate-200">Probability & Statistics Prerequisite</span>
                </div>
                <button
                  onClick={handleInspectGaps}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
