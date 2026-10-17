import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { LandingHero } from './LandingHero';
import { TicketStubHero } from './TicketStubLanding';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Target,
  Brain,
  CheckCircle2,
  ChevronRight,
  Shield,
  Award,
  Layers,
  LogIn,
  BarChart3,
  BookOpen,
  GitBranch,
  TrendingUp,
  Cpu,
  GraduationCap,
  Sparkle,
  Zap,
} from 'lucide-react';

export const LandingPageLayer: React.FC = () => {
  const { setCurrentLayer, setIsOnboardingOpen } = useStudent();
  const [heroTheme, setHeroTheme] = useState<'modern' | 'ticket'>('modern');

  const sections = [
    { label: 'Overview', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Why Beyond Marks', href: '#problem' },
    { label: 'Three-Step Flow', href: '#how-it-works' },
    { label: 'Core Capabilities', href: '#capabilities' },
    { label: 'Scoring Engine', href: '#scoring' },
    { label: 'Student Portal', onClick: () => setCurrentLayer('login') },
  ];

  const linkGroups = [
    {
      title: 'Platform',
      links: [
        { label: 'Student Portal', onClick: () => setCurrentLayer('login') },
        { label: 'Why Beyond Marks', href: '#problem' },
        { label: 'Three-Step Flow', href: '#how-it-works' },
        { label: 'Core Capabilities', href: '#capabilities' },
      ],
    },
    {
      title: 'Capabilities',
      links: [
        { label: 'Hidden Strengths Detection', href: '#capabilities' },
        { label: 'Root-Cause Prerequisite Trees', href: '#capabilities' },
        { label: 'Adaptive 4-Week Roadmaps', href: '#capabilities' },
        { label: '10+ Industry Pathways', href: '#capabilities' },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Radial Glow Orb (Deep Indigo/Violet) */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-indigo-600/25 via-violet-600/15 to-transparent blur-[140px] rounded-full" />
        
        {/* Right Corner Radiant Orb (Cyan/Teal) */}
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-teal-500/15 via-cyan-500/10 to-transparent blur-[130px] rounded-full" />
        
        {/* Left Side Accent Orb (Amber/Orange Glow) */}
        <div className="absolute top-2/3 -left-36 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/10 via-orange-600/10 to-transparent blur-[120px] rounded-full" />
        
        {/* Bottom Ambient Nebula */}
        <div className="absolute -bottom-40 left-1/3 w-[800px] h-[500px] bg-indigo-700/15 blur-[150px] rounded-full" />

        {/* Digital Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_25%,#000_80%,transparent_100%)]" />

        {/* Floating Illuminated Constellation Nodes */}
        <div className="absolute top-48 left-[15%] w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8] animate-pulse" />
        <div className="absolute top-80 right-[18%] w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf] animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[65%] left-[22%] w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24] animate-pulse" style={{ animationDelay: '2.4s' }} />
        <div className="absolute top-[82%] right-[25%] w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa] animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      {/* Primary Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#060913]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/20">
              <Compass className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              PathFinder AI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#problem" className="hover:text-white transition-colors">
              Why Beyond Marks
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Three-Step Flow
            </a>
            <a href="#capabilities" className="hover:text-white transition-colors">
              Core Capabilities
            </a>
            <a href="#scoring" className="hover:text-white transition-colors">
              Scoring Engine
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setHeroTheme(heroTheme === 'modern' ? 'ticket' : 'modern')}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Toggle landing page hero theme"
            >
              <Sparkles className="h-3 w-3 text-indigo-400" />
              <span>Theme: {heroTheme === 'modern' ? 'Modern AI' : 'Ticket Stub'}</span>
            </button>

            <button
              onClick={() => setCurrentLayer('login')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              <LogIn className="h-3.5 w-3.5 text-indigo-400" />
              <span>Student Portal</span>
            </button>

            <button
              onClick={() => setCurrentLayer('login')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-lg shadow-md shadow-indigo-600/30 transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Defaults to the Modern PathFinder AI Hero (Second Photo) */}
      <div className="relative z-10">
        {heroTheme === 'modern' ? (
          <LandingHero
            onStartAnalysis={() => {
              setIsOnboardingOpen(true);
              setCurrentLayer('dashboard');
            }}
            onStudentPortal={() => setCurrentLayer('login')}
          />
        ) : (
          <TicketStubHero
            brand="PathFinder"
            wordmark="PathFinder"
            company="PathFinder AI"
            year={2026}
            sections={sections}
            eyebrow={[
              'Beyond conventional exam marks',
              'Uncovering hidden student potential',
              'Closing prerequisite gaps while you learn',
            ]}
            headline={[
              'Discover your strengths.',
              'Close your knowledge gaps.',
            ]}
            description="Connect your course performance, confidence metrics, and practical projects. PathFinder AI discovers latent abilities, diagnoses root-cause prerequisites, and generates personalized career roadmaps beyond grades."
            cta={{ label: 'Student Portal' }}
            onCtaClick={() => setCurrentLayer('login')}
            linkGroups={linkGroups}
            statusCaption="Diagnostic Engine"
            statusLabels={['Active Diagnosis', 'Engine Paused']}
            count={14820930}
            countLabel="Pathways Analyzed"
            rate={2.2}
            background="transparent"
            ink="#f1f5f9"
            muted="#94a3b8"
            accent="#ff6d36"
            accentDeep="#d95a32"
            accentInk="#070b14"
            halftone={true}
            className="border-b border-slate-800/80"
          />
        )}
      </div>

      {/* Problem & Solution Comparison Section */}
      <section id="problem" className="relative z-10 py-24 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/50">
              The Paradigm Shift
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Why Traditional Marks Fail Students
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Standardized exam marks measure test-taking under time constraints,
              not the upper bound of a student's creative, analytical, or practical potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="rounded-2xl border border-red-900/40 bg-gradient-to-b from-red-950/25 to-slate-950/60 p-6 sm:p-8 space-y-4 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block">
                The Conventional Way
              </span>
              <h3 className="text-lg font-bold text-white">Single-Score Reductionism</h3>
              <ul className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 shrink-0 font-bold text-sm leading-none mt-0.5">✕</span>
                  <span><strong>Suppressed Hidden Strengths:</strong> Scoring 70% in programming labels a student as "average," even if they build open-source projects every weekend and have 95% passion.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 shrink-0 font-bold text-sm leading-none mt-0.5">✕</span>
                  <span><strong>Vague Feedback:</strong> Advises students to "study harder" without uncovering missing prerequisite concepts like probability distributions or unit analysis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 shrink-0 font-bold text-sm leading-none mt-0.5">✕</span>
                  <span><strong>Trend-Driven Decisions:</strong> Pushes students into popular streams purely based on cutoff ranks, ignoring genuine cognitive archetypes.</span>
                </li>
              </ul>
            </div>

            {/* The PathFinder Way */}
            <div className="rounded-2xl border border-emerald-900/40 bg-gradient-to-b from-emerald-950/25 to-slate-950/60 p-6 sm:p-8 space-y-4 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                The PathFinder AI Way
              </span>
              <h3 className="text-lg font-bold text-white">Holistic Multi-Vector Intelligence</h3>
              <ul className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0 font-bold text-sm leading-none mt-0.5">✓</span>
                  <span><strong>Hidden Strengths Discovery:</strong> Separates test anxiety from genuine capability using our weighted model (0.45 Marks + 0.20 Confidence + 0.20 Interest + 0.15 Consistency).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0 font-bold text-sm leading-none mt-0.5">✓</span>
                  <span><strong>Root-Cause Decomposition:</strong> Maps weak topics into interactive visual dependency trees, pinpointing missing foundational building blocks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0 font-bold text-sm leading-none mt-0.5">✓</span>
                  <span><strong>Adaptive 4-Week Roadmap:</strong> Provides weekly milestones, practice problems, and mini-projects that elevate verified career readiness in real time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Step Product Flow */}
      <section id="how-it-works" className="relative z-10 py-24 border-b border-slate-800/80 bg-slate-900/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/50">
              Product Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Three Steps from Uncertainty to Clarity
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              A transparent, verifiable pathway to discovering your genuine potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-colors">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 mb-4 font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-white">Enter Complete Profile</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  Input subject marks alongside subjective confidence, genuine interest ratings, practical projects, and available study hours. Manual input or CSV import supported.
                </p>
              </div>
              <span className="text-[11px] text-slate-500 pt-4 border-t border-slate-800">
                Balances test pressure against practical dedication
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-colors">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/30 mb-4 font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-white">Synthesize Diagnostic Insights</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  Our explainable engine flags hidden strengths, calculates your Student Strength Index, classifies your Learning DNA archetype, and traces prerequisite dependency graphs.
                </p>
              </div>
              <span className="text-[11px] text-slate-500 pt-4 border-t border-slate-800">
                Transparent mathematics with zero hallucination
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-colors">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-4 font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-white">Execute Roadmap & Land Career</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  Work through weekly milestones with interactive checkboxes. Compare 10+ industry pathways, inspect entry roles, salary ranges, and export your official dossier.
                </p>
              </div>
              <span className="text-[11px] text-slate-500 pt-4 border-t border-slate-800">
                Live readiness score increases with each completed task
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section (Replacing personas on landing page) */}
      <section id="capabilities" className="relative z-10 py-24 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/50">
              Platform Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Intelligent Capabilities Built Beyond Grades
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Every feature in PathFinder AI is engineered to give students actionable clarity and real agency over their career paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Multi-Vector Strength Scoring</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Computes composite strength from normalized marks (45%), subjective confidence (20%), personal interest (20%), and consistency (15%).
              </p>
            </div>

            {/* Capability 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3 hover:border-violet-500/40 hover:bg-slate-900/80 transition-all shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Hidden Strengths Discovery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Flags latent potential when interest and confidence are high despite average test scores—revealing talents masked by exam stress.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3 hover:border-teal-500/40 hover:bg-slate-900/80 transition-all shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <GitBranch className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Root-Cause Knowledge Graphs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Traces weaknesses back to missing foundational building blocks (e.g. calculus and probability for ML) with multi-tier visual dependency maps.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3 hover:border-amber-500/40 hover:bg-slate-900/80 transition-all shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Adaptive 4-Week Roadmaps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generates actionable weekly milestones with practice problems, revision tasks, and signature mini-projects that recalculate readiness upon completion.
              </p>
            </div>

            {/* Capability 5 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">10+ Career Pathways Dossier</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ranks career matches with transparent rationale, salary estimates, entry-level job titles, industry demand outlooks, and multi-career comparison.
              </p>
            </div>

            {/* Capability 6 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Learning DNA Archetypes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Classifies whether the student thrives as an analytical builder, human-centered synthesizer, or systems architect to tailor recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Scoring Formula Section */}
      <section id="scoring" className="relative z-10 py-24 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl">
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Explainable AI & Diagnostics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Mathematical Transparency You Can Trust
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlike opaque black-box models, PathFinder AI uses a clear, explainable scoring formulation designed by educators and psychometricians:
              </p>

              <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-indigo-300 overflow-x-auto shadow-inner">
                <code>Subject Strength = (0.45 × Normalized Marks) + (0.20 × Confidence) + (0.20 × Interest) + (0.15 × Consistency)</code>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentLayer('login')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <span>Launch Student Portal</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentLayer('login')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Test with Demo Personas in Login Portal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-[#060913] py-10 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-indigo-400" />
            <span className="font-semibold text-slate-300">PathFinder AI</span>
            <span>·</span>
            <span>Discovering Student Potential Beyond Conventional Marks</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#problem" className="hover:text-slate-300 transition-colors">
              Why Beyond Marks
            </a>
            <a href="#how-it-works" className="hover:text-slate-300 transition-colors">
              Three-Step Flow
            </a>
            <a href="#capabilities" className="hover:text-slate-300 transition-colors">
              Core Capabilities
            </a>
            <button
              onClick={() => setCurrentLayer('login')}
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium cursor-pointer"
            >
              Student Portal
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
