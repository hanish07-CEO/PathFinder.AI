import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  UserCheck,
  Lock,
  Mail,
  Sparkles,
  Check,
  PlusCircle,
  Eye,
  EyeOff,
  ShieldCheck,
  Brain,
  HelpCircle,
} from 'lucide-react';

export const LoginLayer: React.FC = () => {
  const { setCurrentLayer, loginAsDemo, loginWithCustom, resetToFreshProfile } = useStudent();

  const [emailInput, setEmailInput] = useState<string>('aarav.sharma@campus.edu');
  const [passwordInput, setPasswordInput] = useState<string>('••••••••••••');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [activePersonaHover, setActivePersonaHover] = useState<string | null>(null);

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const namePart = emailInput.split('@')[0] || 'Student';
    const formattedName = namePart
      .split('.')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    loginWithCustom(formattedName, emailInput);
  };

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 -right-36 w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full" />
        <div className="absolute -bottom-32 -left-36 w-[500px] h-[500px] bg-violet-600/15 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_80%,transparent_100%)]" />
      </div>

      {/* Top Bar with Return Link */}
      <header className="relative z-10 border-b border-slate-800 bg-[#060913]/85 backdrop-blur-md px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => setCurrentLayer('landing')}
          className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Landing Page</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-sm ring-1 ring-white/10">
            <Compass className="h-4 w-4" />
          </div>
          <span className="text-base font-bold text-white tracking-tight">PathFinder AI</span>
        </div>

        <div className="w-32 hidden sm:block" />
      </header>

      {/* Main Authentication Card Grid */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl space-y-8 my-auto">
          {/* Header Title */}
          <div className="text-center max-w-lg mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-950/60 border border-indigo-900/60 px-3 py-1 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Layer 2: Student Authentication Portal</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sign In to Your Intelligence Workspace
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Access your personalized aptitude diagnosis, root-cause knowledge gaps, and adaptive roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: 1-Click Demo Personas */}
            <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between space-y-5 backdrop-blur-sm shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block">
                    Fast Pass · One-Click Demo Personas
                  </span>
                  <span className="text-[11px] text-slate-500">Instant Access</span>
                </div>
                <h2 className="text-base font-bold text-white">Choose a Verified Student Profile</h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Test the complete analytics engine instantly with one of three pre-calibrated student records.
                </p>
              </div>

              <div className="space-y-3">
                {/* Aarav Sharma Button */}
                <button
                  type="button"
                  onClick={() => loginAsDemo('aarav')}
                  onMouseEnter={() => setActivePersonaHover('aarav')}
                  onMouseLeave={() => setActivePersonaHover(null)}
                  className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-indigo-500 hover:bg-indigo-950/20 text-left transition-all group flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-indigo-300">
                        Aarav Sharma
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">
                        Hidden Strength
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      High Math (94%), Hidden Python (71%) · Goal: AI & Data Science
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>

                {/* Diya Patel Button */}
                <button
                  type="button"
                  onClick={() => loginAsDemo('diya')}
                  onMouseEnter={() => setActivePersonaHover('diya')}
                  onMouseLeave={() => setActivePersonaHover(null)}
                  className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-violet-500 hover:bg-violet-950/20 text-left transition-all group flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-violet-300">
                        Diya Patel
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30 font-medium">
                        Creative HCI
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Visual Design (95%), Empathy (92%) · Goal: UX/UI Design
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>

                {/* Rohan Verma Button */}
                <button
                  type="button"
                  onClick={() => loginAsDemo('rohan')}
                  onMouseEnter={() => setActivePersonaHover('rohan')}
                  onMouseLeave={() => setActivePersonaHover(null)}
                  className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-teal-500 hover:bg-teal-950/20 text-left transition-all group flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-teal-300">
                        Rohan Verma
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30 font-medium">
                        Cyber Systems
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Networks (96%), OS (92%) · Goal: Cybersecurity & Threat Analysis
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
                <Brain className="h-3.5 w-3.5 text-indigo-400" />
                <span>Simulates full student session with local persistence</span>
              </div>
            </div>

            {/* Right Card: Standard Credentials / Custom Onboarding */}
            <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between space-y-5 backdrop-blur-sm shadow-xl">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                  Student Account Login
                </span>
                <h2 className="text-base font-bold text-white">Enter with Campus ID or Email</h2>
              </div>

              <form onSubmit={handleCustomLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email / Student Identifier
                  </label>
                  <div className="relative">
                    <Mail className="h-4 w-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="e.g. aarav.sharma@campus.edu"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-3 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Passcode / Verification Key
                  </label>
                  <div className="relative">
                    <Lock className="h-4 w-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-10 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded accent-indigo-500"
                    />
                    <span>Remember my session</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setEmailInput('aarav.sharma@campus.edu');
                      setPasswordInput('••••••••••••');
                    }}
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Reset fields
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  <span>Sign In & Open Dashboard</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>

              {/* Divider & Custom Registration */}
              <div className="pt-3 border-t border-slate-800 text-center space-y-2">
                <span className="text-[11px] text-slate-500 block">
                  First time here with your own academic marks?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    resetToFreshProfile();
                    setCurrentLayer('dashboard');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300"
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span>Start Custom 4-Step Student Assessment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500">
        PathFinder AI · Secure Student Gateway · Real-Time Diagnostic Scoring
      </footer>
    </div>
  );
};
