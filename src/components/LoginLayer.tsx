import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Brain,
  Target,
  BarChart3,
  Rocket,
  Upload,
  Sparkles,
  Briefcase,
  Check,
  PlusCircle,
  HelpCircle,
  Compass,
} from 'lucide-react';

export const LoginLayer: React.FC = () => {
  const { setCurrentLayer, loginAsDemo, loginWithCustom, resetToFreshProfile } = useStudent();

  const [emailInput, setEmailInput] = useState<string>('aarav.sharma@campus.edu');
  const [passwordInput, setPasswordInput] = useState<string>('••••••••••••');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [staySignedIn, setStaySignedIn] = useState<boolean>(true);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const namePart = emailInput.split('@')[0] || 'Student';
    const formattedName = namePart
      .split('.')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    loginWithCustom(formattedName, emailInput);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f4f1ea] text-black font-sans selection:bg-[#e8ff00] selection:text-black">
      {/* Neobrutalist Scoped Styles */}
      <style>{`
        .neo-font-display {
          font-family: 'Archivo', 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
        }
        .neo-font-mono {
          font-family: 'Space Mono', 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }
        .neo-font-body {
          font-family: 'Space Grotesk', 'DM Sans', sans-serif;
        }
        .neo-grid-dots {
          background-image: radial-gradient(#000000 1.4px, transparent 1.4px);
          background-size: 22px 22px;
        }
        .neo-border-heavy {
          border: 3px solid #000000;
        }
        .neo-border-med {
          border: 2px solid #000000;
        }
        .neo-shadow-sm {
          box-shadow: 4px 4px 0 #000000;
        }
        .neo-shadow {
          box-shadow: 7px 7px 0 #000000;
        }
        .neo-shadow-lg {
          box-shadow: 11px 11px 0 #000000;
        }
        .neo-shadow-acid {
          box-shadow: 6px 6px 0 #e8ff00, 9px 9px 0 #000000;
        }
        .neo-press {
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .neo-press:hover {
          transform: translate(2px, 2px);
          box-shadow: 3px 3px 0 #000000;
        }
        .neo-press:active {
          transform: translate(6px, 6px);
          box-shadow: 0px 0px 0 #000000;
        }
        @keyframes neo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .neo-marquee-track {
          display: flex;
          width: fit-content;
          animation: neo-marquee 24s linear infinite;
        }
        .neo-marquee-track:hover {
          animation-play-state: paused;
        }
        .neo-input:focus {
          background-color: #fffef2;
          outline: none;
          box-shadow: 4px 4px 0 #e8ff00, 7px 7px 0 #000000;
        }
      `}</style>

      {/* (1) STICKY TOP NAV */}
      <nav className="sticky top-0 z-50 h-[68px] bg-[#f4f1ea] border-b-[3px] border-black">
        <div className="max-w-[1240px] mx-auto h-full px-5 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            type="button"
            onClick={() => setCurrentLayer('landing')}
            className="flex items-center gap-3.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#e8ff00] border-[3px] border-black neo-shadow-sm flex items-center justify-center group-hover:rotate-3 transition-transform">
              <Compass className="h-5 w-5 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="neo-font-display font-[900] text-[22px] tracking-tight text-black block leading-none">
                PATHFINDER
              </span>
              <span className="neo-font-mono text-[9px] font-bold text-black/70 tracking-widest block mt-0.5">
                AI CAREER INTELLIGENCE
              </span>
            </div>
          </button>

          {/* Quick Return & Flow Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => setCurrentLayer('landing')}
              className="neo-font-display font-[800] text-xs sm:text-sm text-black flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
              <span className="hidden sm:inline">RETURN TO OVERVIEW</span>
              <span className="sm:hidden">OVERVIEW</span>
            </button>

            <button
              type="button"
              onClick={() => {
                resetToFreshProfile();
                setCurrentLayer('dashboard');
              }}
              className="bg-black text-[#f4f1ea] border-2 border-black neo-font-display font-[800] text-xs sm:text-sm px-4 sm:px-6 py-2 neo-shadow-sm neo-press cursor-pointer"
            >
              START FREE
            </button>
          </div>
        </div>
      </nav>

      {/* (2) ACID MARQUEE BANNER */}
      <div className="bg-[#e8ff00] border-b-[3px] border-black overflow-hidden h-11 flex items-center select-none">
        <div className="neo-marquee-track whitespace-nowrap">
          <span className="neo-font-mono font-[800] text-xs px-4 flex items-center text-black">
            DISCOVER HIDDEN STRENGTHS &nbsp;★&nbsp; 45,000+ CAREER PATHWAYS &nbsp;★&nbsp; AI-POWERED INSIGHTS &nbsp;★&nbsp; BEYOND MARKS AND GRADES &nbsp;★&nbsp; ROOT-CAUSE GAP TREES &nbsp;★&nbsp; DATA-DRIVEN READINESS &nbsp;★&nbsp;
          </span>
          <span className="neo-font-mono font-[800] text-xs px-4 flex items-center text-black">
            DISCOVER HIDDEN STRENGTHS &nbsp;★&nbsp; 45,000+ CAREER PATHWAYS &nbsp;★&nbsp; AI-POWERED INSIGHTS &nbsp;★&nbsp; BEYOND MARKS AND GRADES &nbsp;★&nbsp; ROOT-CAUSE GAP TREES &nbsp;★&nbsp; DATA-DRIVEN READINESS &nbsp;★&nbsp;
          </span>
        </div>
      </div>

      {/* (3) HERO + SIGN IN SECTION */}
      <main className="neo-grid-dots relative pb-20 neo-font-body">
        <div className="max-w-[1240px] mx-auto px-5 pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Pitch Column (Left) */}
            <div className="lg:col-span-7 space-y-7 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-block bg-white neo-border-med px-4 py-1.5 neo-shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#e8ff00] neo-border-med" />
                  <span className="neo-font-mono text-[10px] font-bold tracking-[0.2em] text-black">
                    STUDENT PORTAL · LAYER 02
                  </span>
                </div>
              </div>

              {/* Bold Display Headline */}
              <h1 className="neo-font-display font-[900] text-[2.5rem] sm:text-[3.8rem] lg:text-[4.4rem] leading-[0.93] tracking-tight text-black">
                ANALYZE YOUR{' '}
                <span className="bg-[#e8ff00] px-2 py-0.5 border-2 border-black inline-block transform -rotate-1 shadow-[3px_3px_0_#000]">
                  [POTENTIAL]
                </span>
                <br />
                UNLOCK YOUR FUTURE.
              </h1>

              {/* Mission Statement Box */}
              <div className="bg-white neo-border-heavy p-6 neo-shadow max-w-xl">
                <p className="text-base sm:text-lg leading-relaxed text-black/90 font-medium">
                  Stop following conventional cutoff marks. PathFinder AI maps your unique cognitive profile, course performance, and practical projects against real-world industry demand to reveal latent pathways you never considered.
                </p>
              </div>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div className="bg-white neo-border-med p-4 neo-shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#e8ff00] neo-border-med flex items-center justify-center shrink-0">
                    <Brain className="h-5 w-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="neo-font-display font-[800] text-xs text-black block">KNOW YOURSELF</span>
                    <span className="text-[11px] text-black/70 font-medium">Hidden Aptitudes</span>
                  </div>
                </div>

                <div className="bg-white neo-border-med p-4 neo-shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-white neo-border-med flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="neo-font-display font-[800] text-xs text-black block">ALIGN GOALS</span>
                    <span className="text-[11px] text-black/70 font-medium">Target Benchmarks</span>
                  </div>
                </div>

                <div className="bg-white neo-border-med p-4 neo-shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-white neo-border-med flex items-center justify-center shrink-0">
                    <BarChart3 className="h-5 w-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="neo-font-display font-[800] text-xs text-black block">TRACK GROWTH</span>
                    <span className="text-[11px] text-black/70 font-medium">Weekly Milestones</span>
                  </div>
                </div>

                <div className="bg-white neo-border-med p-4 neo-shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#e8ff00] neo-border-med flex items-center justify-center shrink-0">
                    <Rocket className="h-5 w-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="neo-font-display font-[800] text-xs text-black block">LAUNCH CAREER</span>
                    <span className="text-[11px] text-black/70 font-medium">Evidence-Backed</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="bg-black text-white p-6 neo-border-heavy flex flex-wrap gap-6 items-center max-w-xl shadow-[6px_6px_0_#e8ff00]">
                <div className="flex-1 min-w-[110px]">
                  <div className="text-[#e8ff00] neo-font-display font-[900] text-3xl leading-none">45K+</div>
                  <div className="neo-font-mono text-[9px] text-white/70 tracking-widest mt-1">PATHWAYS</div>
                </div>
                <div className="w-px h-10 bg-white/25 hidden sm:block" />
                <div className="flex-1 min-w-[110px]">
                  <div className="text-[#e8ff00] neo-font-display font-[900] text-3xl leading-none">92%</div>
                  <div className="neo-font-mono text-[9px] text-white/70 tracking-widest mt-1">ACCURACY</div>
                </div>
                <div className="w-px h-10 bg-white/25 hidden sm:block" />
                <div className="flex-1 min-w-[110px]">
                  <div className="text-[#e8ff00] neo-font-display font-[900] text-3xl leading-none">3X</div>
                  <div className="neo-font-mono text-[9px] text-white/70 tracking-widest mt-1">BETTER READINESS</div>
                </div>
              </div>

              {/* Fast-Pass 1-Click Demo Profiles */}
              <div className="bg-white neo-border-heavy p-6 neo-shadow max-w-xl space-y-4">
                <div className="flex items-center justify-between border-b-2 border-black pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#e8ff00] neo-border-med" />
                    <span className="neo-font-mono text-xs font-bold text-black tracking-wider">
                      FAST PASS · 1-CLICK VERIFIED STUDENTS
                    </span>
                  </div>
                  <span className="neo-font-mono text-[10px] text-black/60 font-bold">INSTANT ACCESS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Aarav Button */}
                  <button
                    type="button"
                    onClick={() => loginAsDemo('aarav')}
                    className="p-3 bg-[#f4f1ea] hover:bg-[#e8ff00] neo-border-med neo-shadow-sm neo-press text-left cursor-pointer transition-colors"
                  >
                    <span className="neo-font-display font-[900] text-xs text-black block">AARAV SHARMA</span>
                    <span className="neo-font-mono text-[9px] text-black/75 block mt-0.5">MATH 94% · CS</span>
                    <span className="text-[10px] text-black font-semibold mt-2 inline-flex items-center gap-1">
                      Load AI & Data →
                    </span>
                  </button>

                  {/* Diya Button */}
                  <button
                    type="button"
                    onClick={() => loginAsDemo('diya')}
                    className="p-3 bg-[#f4f1ea] hover:bg-[#e8ff00] neo-border-med neo-shadow-sm neo-press text-left cursor-pointer transition-colors"
                  >
                    <span className="neo-font-display font-[900] text-xs text-black block">DIYA PATEL</span>
                    <span className="neo-font-mono text-[9px] text-black/75 block mt-0.5">DESIGN 95% · HCI</span>
                    <span className="text-[10px] text-black font-semibold mt-2 inline-flex items-center gap-1">
                      Load UX / UI →
                    </span>
                  </button>

                  {/* Rohan Button */}
                  <button
                    type="button"
                    onClick={() => loginAsDemo('rohan')}
                    className="p-3 bg-[#f4f1ea] hover:bg-[#e8ff00] neo-border-med neo-shadow-sm neo-press text-left cursor-pointer transition-colors"
                  >
                    <span className="neo-font-display font-[900] text-xs text-black block">ROHAN VERMA</span>
                    <span className="neo-font-mono text-[9px] text-black/75 block mt-0.5">SECURITY 96% · OS</span>
                    <span className="text-[10px] text-black font-semibold mt-2 inline-flex items-center gap-1">
                      Load Cyber →
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sign-In Card (Right Column) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-[460px] bg-white neo-border-heavy neo-shadow-lg relative p-7 sm:p-9">
                {/* Corner Tab */}
                <div className="absolute -top-3.5 -right-3.5 bg-black text-[#e8ff00] neo-font-mono text-[10px] font-bold py-1 px-3 neo-border-med neo-shadow-sm transform rotate-1">
                  / LOGIN PORTAL
                </div>

                <div className="mb-7">
                  <div className="inline-block bg-[#e8ff00] neo-border-med px-2.5 py-0.5 mb-2 neo-shadow-sm">
                    <span className="neo-font-mono text-[9px] font-bold text-black tracking-wider">SECURE ACCESS</span>
                  </div>
                  <h2 className="neo-font-display font-[900] text-3xl sm:text-4xl text-black leading-tight">
                    STUDENT SIGN IN
                  </h2>
                  <p className="text-black/70 font-medium text-sm mt-1">
                    Explore your personalized diagnostic intelligence.
                  </p>
                </div>

                <form onSubmit={handleCustomLogin} className="space-y-5">
                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="neo-font-display font-[800] text-xs tracking-wider text-black block">
                      EMAIL / STUDENT ID
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="YOU@ACADEMIA.EDU"
                      className="w-full p-3.5 neo-border-heavy neo-shadow-sm neo-input placeholder:text-black/40 text-black font-medium text-sm bg-white"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="neo-font-display font-[800] text-xs tracking-wider text-black block">
                        PASSWORD / KEY
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setEmailInput('aarav.sharma@campus.edu');
                          setPasswordInput('••••••••••••');
                        }}
                        className="neo-font-mono text-[10px] font-bold underline decoration-black/40 hover:text-black transition-colors"
                      >
                        RESET DEMO
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full p-3.5 pr-11 neo-border-heavy neo-shadow-sm neo-input placeholder:text-black/40 text-black font-medium text-sm bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/60 hover:text-black"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Stay signed in custom checkbox */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setStaySignedIn(!staySignedIn)}
                      className={`w-6 h-6 neo-border-med flex items-center justify-center cursor-pointer transition-colors ${
                        staySignedIn ? 'bg-[#e8ff00]' : 'bg-white'
                      }`}
                      style={{ boxShadow: '2px 2px 0 #000' }}
                    >
                      {staySignedIn && <Check className="h-4 w-4 text-black stroke-[3]" />}
                    </button>
                    <label
                      onClick={() => setStaySignedIn(!staySignedIn)}
                      className="neo-font-display font-[800] text-xs text-black cursor-pointer select-none"
                    >
                      STAY SIGNED IN
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#e8ff00] text-black neo-border-heavy p-4 neo-shadow neo-font-display font-[900] text-base sm:text-lg neo-press flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>UNLOCK INSIGHTS</span>
                    <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="h-[2px] bg-black flex-1" />
                    <span className="neo-font-mono text-[10px] font-bold text-black px-1">OR CONTINUE WITH</span>
                    <div className="h-[2px] bg-black flex-1" />
                  </div>

                  {/* Secondary Quick Access Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => loginAsDemo('aarav')}
                      className="bg-white neo-border-med p-3 flex items-center justify-center gap-2 neo-shadow-sm neo-press cursor-pointer hover:bg-[#fffef2]"
                    >
                      <Sparkles className="h-4 w-4 text-black stroke-[2.5]" />
                      <span className="neo-font-display font-[800] text-xs text-black">DEMO PROFILE</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        resetToFreshProfile();
                        setCurrentLayer('dashboard');
                      }}
                      className="bg-white neo-border-med p-3 flex items-center justify-center gap-2 neo-shadow-sm neo-press cursor-pointer hover:bg-[#fffef2]"
                    >
                      <PlusCircle className="h-4 w-4 text-black stroke-[2.5]" />
                      <span className="neo-font-display font-[800] text-xs text-black">NEW STUDENT</span>
                    </button>
                  </div>

                  {/* Bottom Prompt */}
                  <p className="text-center neo-font-display font-[800] text-xs text-black pt-2">
                    FIRST TIME HERE?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        resetToFreshProfile();
                        setCurrentLayer('dashboard');
                      }}
                      className="underline decoration-black decoration-2 underline-offset-2 hover:bg-[#e8ff00] px-1 transition-colors cursor-pointer"
                    >
                      TAKE 4-STEP ASSESSMENT →
                    </button>
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* (4) BLACK TRUST BAR */}
      <section className="bg-black py-9 border-y-[3px] border-black text-white">
        <div className="max-w-[1240px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="neo-font-mono text-[#e8ff00] text-xs font-bold tracking-wider">
            BENCHMARKED AGAINST CURRICULA AT:
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-95">
            <span className="neo-font-display font-[900] text-xl tracking-wider">STANFORD</span>
            <span className="neo-font-display font-[900] text-xl tracking-wider">MIT</span>
            <span className="neo-font-display font-[900] text-xl tracking-wider">CAMBRIDGE</span>
            <span className="neo-font-display font-[900] text-xl tracking-wider">OXFORD</span>
            <span className="neo-font-display font-[900] text-xl tracking-wider">HARVARD</span>
            <span className="neo-font-display font-[900] text-xl tracking-wider">YALE</span>
          </div>
        </div>
      </section>

      {/* (5) HOW IT WORKS */}
      <section className="py-20 bg-[#f4f1ea] border-b-[3px] border-black">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="mb-14">
            <div className="inline-block bg-[#e8ff00] neo-border-med px-3 py-1 mb-3 neo-shadow-sm">
              <span className="neo-font-mono text-[10px] font-bold text-black">DIAGNOSTIC PROCESS</span>
            </div>
            <h2 className="neo-font-display font-[900] text-[2.2rem] sm:text-[3.2rem] leading-tight text-black">
              THREE STEPS TO<br />YOUR EVIDENCE-BASED CAREER.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white neo-border-heavy p-8 neo-shadow space-y-5">
              <div className="flex justify-between items-start">
                <span className="neo-font-mono font-[900] text-[38px] leading-none text-black">01</span>
                <div className="w-12 h-12 bg-[#e8ff00] neo-border-med flex items-center justify-center neo-shadow-sm">
                  <Upload className="h-6 w-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="neo-font-display font-[900] text-xl text-black">ENTER PROFILE</h3>
                <p className="font-medium text-black/75 text-sm leading-relaxed">
                  Provide course marks alongside subjective confidence, genuine interest ratings, and practical projects.
                </p>
              </div>
            </div>

            {/* Step 2 (Acid) */}
            <div className="bg-[#e8ff00] neo-border-heavy p-8 neo-shadow space-y-5">
              <div className="flex justify-between items-start">
                <span className="neo-font-mono font-[900] text-[38px] leading-none text-black">02</span>
                <div className="w-12 h-12 bg-white neo-border-med flex items-center justify-center neo-shadow-sm">
                  <Sparkles className="h-6 w-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="neo-font-display font-[900] text-xl text-black">AI DIAGNOSIS</h3>
                <p className="font-medium text-black/85 text-sm leading-relaxed">
                  Our transparent engine flags latent strengths, calculates your Strength Index, and maps root-cause prerequisite gaps.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white neo-border-heavy p-8 neo-shadow space-y-5">
              <div className="flex justify-between items-start">
                <span className="neo-font-mono font-[900] text-[38px] leading-none text-black">03</span>
                <div className="w-12 h-12 bg-[#e8ff00] neo-border-med flex items-center justify-center neo-shadow-sm">
                  <Briefcase className="h-6 w-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="neo-font-display font-[900] text-xl text-black">EXPLORE PATHWAYS</h3>
                <p className="font-medium text-black/75 text-sm leading-relaxed">
                  Unlock weekly milestones on an adaptive roadmap, compare 10+ industry pathways, and boost readiness scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (6) ACID CTA + CODE TERMINAL MOCK */}
      <section className="bg-[#e8ff00] border-b-[3px] border-black py-20">
        <div className="max-w-[1240px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="neo-font-display font-[900] text-[2.4rem] sm:text-[3.5rem] leading-[0.93] text-black">
              STOP GUESSING<br />ABOUT YOUR CAREER.
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-black/85 max-w-lg">
              Your genuine potential is much more than a single GPA number. Unlock the mathematical multi-vector intelligence needed to prepare for tomorrow's job market with certainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="button"
                onClick={() => loginAsDemo('aarav')}
                className="bg-black text-[#e8ff00] neo-border-heavy px-7 py-4 neo-shadow neo-font-display font-[900] text-base neo-press cursor-pointer flex items-center justify-center gap-2"
              >
                <span>SIGN IN WITH DEMO</span>
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </button>
              <button
                type="button"
                onClick={() => {
                  resetToFreshProfile();
                  setCurrentLayer('dashboard');
                }}
                className="bg-white text-black neo-border-heavy px-7 py-4 neo-shadow neo-font-display font-[900] text-base neo-press cursor-pointer flex items-center justify-center"
              >
                EXPLORE CUSTOM FLOW
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Faux Canvas / Code Terminal Mock */}
            <div className="bg-[#f4f1ea] neo-border-heavy p-2 neo-shadow-lg">
              <div className="bg-white neo-border-med p-4">
                <div className="flex justify-between items-center mb-3 border-b-2 border-black/15 pb-2">
                  <span className="neo-font-mono text-[11px] font-bold text-black tracking-normal">
                    diagnostic-engine / evaluation.json
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-black" />
                    <div className="w-2.5 h-2.5 bg-black" />
                    <div className="w-2.5 h-2.5 neo-border-med bg-[#e8ff00]" />
                  </div>
                </div>
                <div className="neo-font-mono text-[11px] sm:text-[12px] leading-relaxed overflow-x-auto text-black">
                  <pre className="text-black/90 font-mono">
{`{
  "student": "Aarav Sharma",
  "hidden_strengths": [`}
                    <span className="bg-[#e8ff00] px-1 font-bold text-black">"Python Scripting (Passion: 95%)"</span>
{`],
  "detected_archetype": "The Strategic Systems Architect",
  "prerequisite_gap": "Probability & Distributions in Linear Systems",
  "career_match": {
    "role": `}
                    <span className="bg-[#e8ff00] px-1 font-bold text-black">"AI & Data Systems Engineer"</span>
{`,
    "fit_index": 0.94,
    "confidence_rating": "HIGH ✓"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (7) FOOTER */}
      <footer className="bg-[#f4f1ea] pt-16 pb-12 neo-font-body">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
            {/* Brand Col */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e8ff00] neo-border-heavy flex items-center justify-center neo-shadow-sm">
                  <Compass className="h-4 w-4 text-black stroke-[3]" />
                </div>
                <span className="neo-font-display font-[900] text-xl tracking-tight text-black">
                  PATHFINDER AI
                </span>
              </div>
              <p className="font-medium text-black/75 text-sm max-w-sm">
                Intelligent career mapping platform helping students define their own future beyond traditional academic exam marks.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="neo-font-display font-[900] text-xs tracking-wider text-black">SYSTEM NAVIGATION</h4>
              <ul className="space-y-2 font-medium text-black/80 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => setCurrentLayer('landing')}
                    className="hover:underline font-semibold cursor-pointer"
                  >
                    ← Public Landing Page
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => loginAsDemo('aarav')}
                    className="hover:underline font-semibold cursor-pointer"
                  >
                    Aarav Sharma Workspace
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => loginAsDemo('diya')}
                    className="hover:underline font-semibold cursor-pointer"
                  >
                    Diya Patel Workspace
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => loginAsDemo('rohan')}
                    className="hover:underline font-semibold cursor-pointer"
                  >
                    Rohan Verma Workspace
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="neo-font-display font-[900] text-xs tracking-wider text-black">STAY INFORMED</h4>
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 bg-white neo-border-heavy p-2.5 neo-font-mono text-xs neo-input text-black"
                />
                <button
                  type="submit"
                  className="bg-black text-[#e8ff00] neo-border-heavy border-l-0 px-5 neo-font-display font-[900] text-xs neo-press cursor-pointer"
                >
                  {subscribed ? 'SAVED!' : 'GO'}
                </button>
              </form>
              <span className="neo-font-mono text-[9px] text-black/60 block">
                NO SPAM · ONLY RESEARCH ON STUDENT APTITUDE DYNAMICS
              </span>
            </div>
          </div>

          <div className="border-t-[3px] border-black pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="neo-font-mono text-[10px] font-bold text-black">
              © 2026 PATHFINDER INTELLIGENCE SYSTEMS · STUDENT PORTAL
            </span>
            <div className="flex items-center gap-2">
              <span className="neo-font-mono text-[10px] bg-black text-[#e8ff00] px-2 py-0.5 font-bold">
                NEOBRUTALIST THEME ACTIVE
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
