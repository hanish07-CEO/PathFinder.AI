import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  LayoutGrid,
  Brain,
  Target,
  BarChart3,
  Rocket,
  Upload,
  Sparkles,
  Briefcase,
  Check,
  ArrowRight,
  Shield,
  Eye,
  EyeOff,
  UserCheck,
  Terminal,
  FileCode,
  Compass,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react';

export const LoginLayer: React.FC = () => {
  const { setCurrentLayer, loginAsDemo, loginWithCustom, resetToFreshProfile } = useStudent();

  const [emailInput, setEmailInput] = useState<string>('aarav.sharma@campus.edu');
  const [passwordInput, setPasswordInput] = useState<string>('••••••••••••');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [staySignedIn, setStaySignedIn] = useState<boolean>(true);
  const [activeCanvasTab, setActiveCanvasTab] = useState<'aarav' | 'alex' | 'diya'>('alex');
  const [demoSelected, setDemoSelected] = useState<string | null>(null);

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const namePart = emailInput.split('@')[0] || 'Student';
    const formattedName = namePart
      .split('.')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    loginWithCustom(formattedName, emailInput);
  };

  const handleDemoClick = (key: 'aarav' | 'diya' | 'rohan') => {
    setDemoSelected(key);
    setTimeout(() => {
      loginAsDemo(key);
    }, 180);
  };

  const canvasMocks = {
    alex: {
      subject: 'Alex Rivers',
      aptitude_match: ['Quant Analyst'],
      skill_gap: 'None detected',
      hidden_trait: 'Abstract Logic High (94%)',
      recommendation: {
        path: 'Computational Linguistics',
        confidence: 0.98,
        priority: 'URGENT ✓',
      },
    },
    aarav: {
      subject: 'Aarav Sharma',
      aptitude_match: ['AI Systems Engineer', 'Data Scientist'],
      skill_gap: 'Probability Distributions (Prerequisite Tree #04)',
      hidden_trait: 'Uncredited Python Git Commits (71%)',
      recommendation: {
        path: 'Machine Learning Infrastructure',
        confidence: 0.94,
        priority: 'ACTIVE ✓',
      },
    },
    diya: {
      subject: 'Diya Patel',
      aptitude_match: ['Design Technologist', 'UX Product Architect'],
      skill_gap: 'Design System Tokens',
      hidden_trait: 'Spatial Empathy & Prototyping (95%)',
      recommendation: {
        path: 'Human-Computer Interaction (HCI)',
        confidence: 0.91,
        priority: 'OPTIMAL ✓',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#f4f1ea] text-[#000000] font-sans selection:bg-[#e8ff00] selection:text-black neo-root">
      {/* Neobrutalist Scoped Styles */}
      <style>{`
        .neo-root {
          --paper: #f4f1ea;
          --ink: #000000;
          --acid: #e8ff00;
          --white: #ffffff;
          --cream: #fffef2;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .neo-root * {
          border-radius: 0 !important;
        }

        .font-display {
          font-family: 'Archivo', 'Space Grotesk', sans-serif;
          text-transform: uppercase;
        }

        .font-mono-neo {
          font-family: 'Space Mono', 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .grid-dots {
          background-image: radial-gradient(#000000 1.4px, transparent 1.4px);
          background-size: 22px 22px;
        }

        .border-heavy {
          border: 3px solid #000000;
        }

        .border-med {
          border: 2px solid #000000;
        }

        .shadow-hard-sm {
          box-shadow: 5px 5px 0 #000000;
        }

        .shadow-hard {
          box-shadow: 8px 8px 0 #000000;
        }

        .shadow-hard-lg {
          box-shadow: 12px 12px 0 #000000;
        }

        .shadow-acid {
          box-shadow: 8px 8px 0 #e8ff00, 11px 11px 0 #000000;
        }

        .press-effect {
          transition: all 0.1s ease;
        }

        .press-effect:hover {
          transform: translate(2px, 2px);
          box-shadow: 4px 4px 0 #000000;
        }

        .press-effect:active {
          transform: translate(8px, 8px);
          box-shadow: 0px 0px 0 #000000;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-container {
          display: flex;
          width: fit-content;
          animation: marquee 22s linear infinite;
        }

        .input-focus:focus {
          background-color: #fffef2;
          outline: none;
          box-shadow: 5px 5px 0 #e8ff00, 8px 8px 0 #000000;
        }

        .highlight-acid {
          background-color: #e8ff00;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
          padding: 0 10px;
        }
      `}</style>

      {/* (1) STICKY NAV */}
      <nav className="sticky top-0 z-50 h-[68px] bg-[#f4f1ea] border-b-[3px] border-black">
        <div className="max-w-[1180px] mx-auto h-full px-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentLayer('landing')}
              className="w-10 h-10 bg-[#e8ff00] border-[3px] border-black shadow-[5px_5px_0_#000] flex items-center justify-center press-effect cursor-pointer"
              title="Return to Landing"
            >
              <LayoutGrid className="h-5 w-5 text-black" />
            </button>
            <div className="flex items-center gap-2">
              <span className="font-display font-[900] text-[22px] tracking-tight text-black">
                PATHFINDER
              </span>
              <span className="hidden sm:inline-block bg-black text-[#e8ff00] font-mono-neo text-[9px] px-2 py-0.5 border border-black font-bold">
                LOGIN PORTAL
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-display font-[700] text-sm">
            <button
              onClick={() => setCurrentLayer('landing')}
              className="hover:opacity-60 transition-opacity uppercase cursor-pointer"
            >
              OVERVIEW
            </button>
            <a href="#how-it-works" className="hover:opacity-60 transition-opacity uppercase">
              HOW IT WORKS
            </a>
            <a href="#demo-canvas" className="hover:opacity-60 transition-opacity uppercase">
              DIAGNOSTIC ENGINE
            </a>
            <button
              onClick={() => {
                resetToFreshProfile();
                setCurrentLayer('dashboard');
              }}
              className="hover:opacity-60 transition-opacity uppercase cursor-pointer"
            >
              ASSESSMENT
            </button>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setCurrentLayer('landing')}
              className="flex items-center gap-1.5 font-display font-[700] text-xs sm:text-sm underline decoration-2 underline-offset-4 cursor-pointer text-black hover:opacity-75"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN</span>
            </button>
            <button
              onClick={() => {
                resetToFreshProfile();
                setCurrentLayer('dashboard');
              }}
              className="bg-black text-[#f4f1ea] border-[2px] border-black font-display font-[700] text-xs sm:text-sm px-4 sm:px-6 py-2 shadow-[5px_5px_0_#000] press-effect cursor-pointer uppercase"
            >
              START FREE
            </button>
          </div>
        </div>
      </nav>

      {/* (2) ACID MARQUEE */}
      <div className="bg-[#e8ff00] border-b-[3px] border-black overflow-hidden h-12 flex items-center">
        <div className="marquee-container whitespace-nowrap">
          <span className="font-mono-neo font-[700] text-xs px-4 flex items-center text-black">
            DISCOVER HIDDEN STRENGTHS &nbsp;★&nbsp; 45,000+ CAREER PATHWAYS &nbsp;★&nbsp; AI-POWERED INSIGHTS &nbsp;★&nbsp; BEYOND MARKS AND GRADES &nbsp;★&nbsp; DATA-DRIVEN DECISIONS &nbsp;★&nbsp;
          </span>
          <span className="font-mono-neo font-[700] text-xs px-4 flex items-center text-black">
            DISCOVER HIDDEN STRENGTHS &nbsp;★&nbsp; 45,000+ CAREER PATHWAYS &nbsp;★&nbsp; AI-POWERED INSIGHTS &nbsp;★&nbsp; BEYOND MARKS AND GRADES &nbsp;★&nbsp; DATA-DRIVEN DECISIONS &nbsp;★&nbsp;
          </span>
          <span className="font-mono-neo font-[700] text-xs px-4 flex items-center text-black">
            DISCOVER HIDDEN STRENGTHS &nbsp;★&nbsp; 45,000+ CAREER PATHWAYS &nbsp;★&nbsp; AI-POWERED INSIGHTS &nbsp;★&nbsp; BEYOND MARKS AND GRADES &nbsp;★&nbsp; DATA-DRIVEN DECISIONS &nbsp;★&nbsp;
          </span>
        </div>
      </div>

      {/* (3) HERO + SIGN IN */}
      <main className="grid-dots relative pb-20">
        <div className="max-w-[1180px] mx-auto px-5 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Pitch Column (Left) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="inline-block bg-white border-med px-4 py-1 shadow-hard-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#e8ff00] border-med"></div>
                  <span className="font-mono-neo text-[10px] font-bold tracking-[0.2em] text-black">
                    AI CAREER INTELLIGENCE · LAYER 2 LOGIN
                  </span>
                </div>
              </div>

              <h1 className="font-display font-[900] text-[2.6rem] md:text-[4.6rem] leading-[0.92] tracking-tight text-black">
                ANALYZE YOUR <span className="highlight-acid">[POTENTIAL]</span><br />
                UNLOCK YOUR FUTURE.
              </h1>

              <div className="bg-white border-heavy p-6 shadow-hard max-w-xl">
                <p className="text-base sm:text-lg leading-relaxed text-black/85 font-medium">
                  Stop following conventional advice. PathFinder maps your unique cognitive profile, interests, and technical skills against real-world demand to reveal pathways you never considered.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-med p-4 shadow-hard-sm flex items-center gap-3">
                  <Brain className="h-6 w-6 text-black shrink-0" />
                  <span className="font-display font-[800] text-[13px] text-black">KNOW YOURSELF</span>
                </div>
                <div className="bg-white border-med p-4 shadow-hard-sm flex items-center gap-3">
                  <Target className="h-6 w-6 text-black shrink-0" />
                  <span className="font-display font-[800] text-[13px] text-black">ALIGN GOALS</span>
                </div>
                <div className="bg-white border-med p-4 shadow-hard-sm flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-black shrink-0" />
                  <span className="font-display font-[800] text-[13px] text-black">TRACK GROWTH</span>
                </div>
                <div className="bg-white border-med p-4 shadow-hard-sm flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-black shrink-0" />
                  <span className="font-display font-[800] text-[13px] text-black">LAUNCH CAREER</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="bg-black text-white p-6 border-heavy flex flex-wrap gap-8 items-center shadow-hard">
                <div className="flex-1 min-w-[120px]">
                  <div className="text-[#e8ff00] font-display font-[900] text-3xl">45K+</div>
                  <div className="font-mono-neo text-[9px] text-white/70 tracking-widest mt-1">PATHWAYS</div>
                </div>
                <div className="w-px h-10 bg-white/30 hidden sm:block"></div>
                <div className="flex-1 min-w-[120px]">
                  <div className="text-[#e8ff00] font-display font-[900] text-3xl">92%</div>
                  <div className="font-mono-neo text-[9px] text-white/70 tracking-widest mt-1">ACCURACY</div>
                </div>
                <div className="w-px h-10 bg-white/30 hidden sm:block"></div>
                <div className="flex-1 min-w-[120px]">
                  <div className="text-[#e8ff00] font-display font-[900] text-3xl">3X</div>
                  <div className="font-mono-neo text-[9px] text-white/70 tracking-widest mt-1">BETTER OUTCOMES</div>
                </div>
              </div>
            </div>

            {/* Sign-in Card (Right) */}
            <div className="lg:col-span-5 flex justify-end order-1 lg:order-2">
              <div className="w-full max-w-[480px] bg-white border-heavy shadow-hard-lg relative p-6 sm:p-9 lg:p-10">
                {/* Corner Tab */}
                <div className="absolute -top-1 -right-1 bg-black text-[#e8ff00] font-mono-neo text-[10px] py-1 px-4 border-med font-bold tracking-widest">
                  / LOGIN
                </div>

                <div className="mb-6">
                  <h2 className="font-display font-[900] text-3xl sm:text-4xl mb-1 text-black">
                    SIGN IN
                  </h2>
                  <p className="text-black/70 font-medium text-sm">
                    Explore your verified student potential.
                  </p>
                </div>

                {/* Fast-Pass: 1-Click Demo Personas */}
                <div className="mb-6 pb-6 border-b-2 border-black/10">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono-neo text-[10px] font-bold text-black tracking-wider">
                      FAST-PASS DEMO PERSONAS
                    </span>
                    <span className="bg-[#e8ff00] text-black font-mono-neo text-[9px] font-bold px-1.5 py-0.5 border border-black">
                      1-CLICK
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleDemoClick('aarav')}
                      className={`p-2.5 border-med text-left press-effect cursor-pointer ${
                        demoSelected === 'aarav' ? 'bg-[#e8ff00]' : 'bg-[#f4f1ea] hover:bg-white'
                      }`}
                    >
                      <div className="font-display font-[800] text-xs text-black truncate">AARAV</div>
                      <div className="font-mono-neo text-[8px] text-black/60 truncate">MATH + AI</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDemoClick('diya')}
                      className={`p-2.5 border-med text-left press-effect cursor-pointer ${
                        demoSelected === 'diya' ? 'bg-[#e8ff00]' : 'bg-[#f4f1ea] hover:bg-white'
                      }`}
                    >
                      <div className="font-display font-[800] text-xs text-black truncate">DIYA</div>
                      <div className="font-mono-neo text-[8px] text-black/60 truncate">UX + HCI</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDemoClick('rohan')}
                      className={`p-2.5 border-med text-left press-effect cursor-pointer ${
                        demoSelected === 'rohan' ? 'bg-[#e8ff00]' : 'bg-[#f4f1ea] hover:bg-white'
                      }`}
                    >
                      <div className="font-display font-[800] text-xs text-black truncate">ROHAN</div>
                      <div className="font-mono-neo text-[8px] text-black/60 truncate">CYBER + OS</div>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleCustomLogin} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="font-display font-[800] text-xs tracking-widest text-black block">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="text"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="YOU@ACADEMIA.EDU"
                      className="w-full p-3.5 border-heavy shadow-hard-sm input-focus placeholder:text-black/40 font-mono-neo text-xs text-black bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-display font-[800] text-xs tracking-widest text-black">
                        PASSWORD
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setEmailInput('aarav.sharma@campus.edu');
                          setPasswordInput('••••••••••••');
                        }}
                        className="font-mono-neo text-[10px] text-black/60 hover:text-black underline decoration-black/30 cursor-pointer"
                      >
                        RESET?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="••••••••"
                        className="w-full p-3.5 pr-10 border-heavy shadow-hard-sm input-focus font-mono-neo text-xs text-black bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/60 hover:text-black cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="relative flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={staySignedIn}
                        onChange={(e) => setStaySignedIn(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 bg-white border-med shadow-[2px_2px_0_#000] flex items-center justify-center peer-checked:bg-[#e8ff00] transition-colors">
                        {staySignedIn && <Check className="h-3.5 w-3.5 text-black stroke-[3]" />}
                      </div>
                      <span className="font-display font-[700] text-xs text-black">
                        STAY SIGNED IN
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e8ff00] border-heavy p-4 shadow-hard font-display font-[900] text-base sm:text-lg press-effect cursor-pointer text-black uppercase flex items-center justify-center gap-2"
                  >
                    <span>UNLOCK INSIGHTS</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-4 pt-1">
                    <div className="h-[3px] bg-black flex-1"></div>
                    <span className="font-mono-neo text-[10px] font-bold text-black">OR QUICK ENTER</span>
                    <div className="h-[3px] bg-black flex-1"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleDemoClick('aarav')}
                      className="bg-white border-med p-3 flex items-center justify-center gap-2 shadow-hard-sm press-effect cursor-pointer"
                    >
                      <UserCheck className="h-4 w-4 text-black" />
                      <span className="font-display font-[800] text-xs text-black">DEMO AARAV</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDemoClick('diya')}
                      className="bg-white border-med p-3 flex items-center justify-center gap-2 shadow-hard-sm press-effect cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4 text-black" />
                      <span className="font-display font-[800] text-xs text-black">DEMO DIYA</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <p className="font-display font-[700] text-xs text-black">
                      NEW HERE?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          resetToFreshProfile();
                          setCurrentLayer('dashboard');
                        }}
                        className="underline decoration-black decoration-2 hover:bg-[#e8ff00] px-1 transition-colors cursor-pointer"
                      >
                        GET STARTED WITH CUSTOM PROFILE
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* (4) BLACK TRUST BAR */}
      <section className="bg-black py-10 border-y-[3px] border-black">
        <div className="max-w-[1180px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="font-mono-neo text-[#e8ff00] text-[11px] font-bold tracking-widest">
            TRUSTED BY EDUCATORS AT
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-95">
            <span className="font-display font-[800] text-xl text-white tracking-wider">STANFORD</span>
            <span className="font-display font-[800] text-xl text-white tracking-wider">MIT</span>
            <span className="font-display font-[800] text-xl text-white tracking-wider">CAMBRIDGE</span>
            <span className="font-display font-[800] text-xl text-white tracking-wider">OXFORD</span>
            <span className="font-display font-[800] text-xl text-white tracking-wider">HARVARD</span>
            <span className="font-display font-[800] text-xl text-white tracking-wider">YALE</span>
          </div>
        </div>
      </section>

      {/* (5) HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-[#f4f1ea]">
        <div className="max-w-[1180px] mx-auto px-5">
          <div className="mb-16">
            <div className="inline-block bg-[#e8ff00] border-med px-3 py-1 mb-4 shadow-hard-sm">
              <span className="font-mono-neo text-[10px] font-bold text-black">HOW IT WORKS</span>
            </div>
            <h2 className="font-display font-[900] text-[2rem] md:text-[3.2rem] leading-tight tracking-tight text-black">
              THREE STEPS TO<br />YOUR CAREER PATH.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border-heavy p-8 sm:p-10 shadow-hard space-y-6">
              <div className="flex justify-between items-start">
                <span className="font-mono-neo font-[700] text-[40px] leading-none text-black">01</span>
                <div className="w-12 h-12 bg-[#e8ff00] border-med flex items-center justify-center shadow-hard-sm">
                  <Upload className="h-6 w-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-[800] text-2xl uppercase text-black">UPLOAD PROFILE</h3>
                <p className="font-medium text-black/70 leading-relaxed text-sm">
                  Share your academic transcripts, self-reported confidence levels, and passion projects.
                </p>
              </div>
            </div>

            {/* Card 2 (Acid) */}
            <div className="bg-[#e8ff00] border-heavy p-8 sm:p-10 shadow-hard space-y-6">
              <div className="flex justify-between items-start">
                <span className="font-mono-neo font-[700] text-[40px] leading-none text-black">02</span>
                <div className="w-12 h-12 bg-[#f4f1ea] border-med flex items-center justify-center shadow-hard-sm">
                  <Sparkles className="h-6 w-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-[800] text-2xl uppercase text-black">AI ANALYSIS</h3>
                <p className="font-medium text-black/80 leading-relaxed text-sm">
                  Our transparent engine maps hidden aptitudes, cognitive traits, and root-cause gaps beyond simple grades.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-heavy p-8 sm:p-10 shadow-hard space-y-6">
              <div className="flex justify-between items-start">
                <span className="font-mono-neo font-[700] text-[40px] leading-none text-black">03</span>
                <div className="w-12 h-12 bg-[#e8ff00] border-med flex items-center justify-center shadow-hard-sm">
                  <Briefcase className="h-6 w-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-[800] text-2xl uppercase text-black">EXPLORE ROADS</h3>
                <p className="font-medium text-black/70 leading-relaxed text-sm">
                  Get a curated list of career paths mapped to your DNA, complete with 4-week actionable milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (6) ACID CTA + MOCK */}
      <section id="demo-canvas" className="bg-[#e8ff00] border-y-[3px] border-black py-20 sm:py-24">
        <div className="max-w-[1180px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-display font-[900] text-[2.2rem] md:text-[4rem] leading-[0.92] tracking-tight text-black">
              STOP GUESSING<br />ABOUT YOUR FUTURE.
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-black/85">
              Your potential is more than a GPA. Unlock the intelligence needed to navigate the evolving global job market with confidence and verifiable data on your side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-black text-[#e8ff00] border-heavy px-8 py-4 sm:py-5 shadow-hard font-display font-[900] text-base sm:text-lg press-effect uppercase cursor-pointer text-center"
              >
                SIGN IN TO EXPLORE →
              </button>
              <button
                onClick={() => {
                  resetToFreshProfile();
                  setCurrentLayer('dashboard');
                }}
                className="bg-white border-heavy px-8 py-4 sm:py-5 shadow-hard font-display font-[900] text-base sm:text-lg press-effect uppercase cursor-pointer text-black text-center"
              >
                EXPLORE FREE
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            {/* Interactive Faux Canvas Mock */}
            <div className="bg-[#f4f1ea] border-heavy p-2 shadow-hard-lg">
              <div className="bg-white border-med p-4 sm:p-5">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4 border-b-2 border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-neo text-[10px] font-bold tracking-normal uppercase text-black">
                      canvas / career-analysis.py
                    </span>
                    <span className="bg-[#e8ff00] text-[9px] font-mono-neo px-1.5 py-0.5 border border-black font-bold">
                      LIVE
                    </span>
                  </div>

                  {/* Profile Switcher Tabs */}
                  <div className="flex gap-1.5 items-center">
                    <button
                      type="button"
                      onClick={() => setActiveCanvasTab('alex')}
                      className={`text-[9px] font-mono-neo px-2 py-0.5 border border-black cursor-pointer ${
                        activeCanvasTab === 'alex' ? 'bg-black text-[#e8ff00]' : 'bg-[#f4f1ea] text-black'
                      }`}
                    >
                      ALEX
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCanvasTab('aarav')}
                      className={`text-[9px] font-mono-neo px-2 py-0.5 border border-black cursor-pointer ${
                        activeCanvasTab === 'aarav' ? 'bg-black text-[#e8ff00]' : 'bg-[#f4f1ea] text-black'
                      }`}
                    >
                      AARAV
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCanvasTab('diya')}
                      className={`text-[9px] font-mono-neo px-2 py-0.5 border border-black cursor-pointer ${
                        activeCanvasTab === 'diya' ? 'bg-black text-[#e8ff00]' : 'bg-[#f4f1ea] text-black'
                      }`}
                    >
                      DIYA
                    </button>
                  </div>
                </div>

                <div className="font-mono-neo text-[11px] sm:text-[12px] leading-relaxed overflow-x-auto bg-[#fffef2] p-4 border border-black/15 shadow-inner">
                  <pre className="text-black/95">
{JSON.stringify(canvasMocks[activeCanvasTab], null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (7) FOOTER */}
      <footer className="bg-[#f4f1ea] pt-20 pb-12">
        <div className="max-w-[1180px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e8ff00] border-heavy flex items-center justify-center shadow-hard-sm">
                  <LayoutGrid className="h-4 w-4 text-black" />
                </div>
                <span className="font-display font-[900] text-[20px] tracking-tight text-black">
                  PATHFINDER
                </span>
              </div>
              <p className="font-medium text-black/75 text-sm leading-relaxed max-w-sm">
                Intelligent career mapping platform helping students define their own future beyond traditional academic metrics.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display font-[800] text-sm tracking-wider text-black">PLATFORM</h4>
              <ul className="space-y-2.5 font-medium text-black/80 text-sm">
                <li>
                  <button onClick={() => setCurrentLayer('landing')} className="hover:underline cursor-pointer">
                    Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentLayer('dashboard')} className="hover:underline cursor-pointer">
                    Dashboard
                  </button>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:underline">
                    Methodology
                  </a>
                </li>
                <li>
                  <button onClick={() => resetToFreshProfile()} className="hover:underline cursor-pointer">
                    Self Assessment
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display font-[800] text-sm tracking-wider text-black">PERSONAS</h4>
              <ul className="space-y-2.5 font-medium text-black/80 text-sm">
                <li>
                  <button onClick={() => loginAsDemo('aarav')} className="hover:underline cursor-pointer text-left">
                    Aarav (AI Math)
                  </button>
                </li>
                <li>
                  <button onClick={() => loginAsDemo('diya')} className="hover:underline cursor-pointer text-left">
                    Diya (Creative UX)
                  </button>
                </li>
                <li>
                  <button onClick={() => loginAsDemo('rohan')} className="hover:underline cursor-pointer text-left">
                    Rohan (Cyber Sec)
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-display font-[800] text-sm tracking-wider uppercase text-black">
                STAY INFORMED
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to PathFinder updates!');
                }}
                className="flex shadow-hard-sm"
              >
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 bg-white border-heavy p-3 font-mono-neo text-xs input-focus text-black"
                />
                <button
                  type="submit"
                  className="bg-black text-[#e8ff00] border-heavy border-l-0 px-6 font-display font-[900] text-sm press-effect cursor-pointer"
                >
                  GO
                </button>
              </form>
              <span className="font-mono-neo text-[10px] text-black/60 block">
                BI-WEEKLY CAREER TRENDS & TALENT REPORTS
              </span>
            </div>
          </div>

          <div className="border-t-[3px] border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-mono-neo text-[10px] font-bold text-black tracking-wider">
              © 2026 PATHFINDER INTELLIGENCE SYSTEMS · ALL RIGHTS RESERVED
            </span>
            <div className="flex gap-4">
              <div className="w-10 h-10 border-heavy flex items-center justify-center shadow-hard-sm press-effect bg-white cursor-pointer font-bold text-xs">
                TW
              </div>
              <div className="w-10 h-10 border-heavy flex items-center justify-center shadow-hard-sm press-effect bg-white cursor-pointer font-bold text-xs">
                GH
              </div>
              <div className="w-10 h-10 border-heavy flex items-center justify-center shadow-hard-sm press-effect bg-white cursor-pointer font-bold text-xs">
                DC
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
