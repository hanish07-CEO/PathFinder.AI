import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  Bot,
  ArrowRight,
  Play,
  X,
  Menu,
  Sparkles,
  PenLine,
  FileText,
  ChevronRight,
  Compass,
  CheckCircle2,
  Brain,
  Target,
  Layers,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  LogIn,
} from 'lucide-react';

export const LandingPageLayer: React.FC = () => {
  const { setCurrentLayer } = useStudent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'analytics' | 'career' | 'roadmap'>('all');

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#171717] font-inter overflow-x-hidden selection:bg-[#0084FF] selection:text-white">
      {/* Background Ambient Aura Spotlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Sky Blue radial spotlight */}
        <div className="absolute -top-32 left-[15%] w-[680px] h-[680px] bg-[#60B1FF]/20 rounded-full blur-[110px]" />
        {/* Vibrant Electric Blue radial spotlight */}
        <div className="absolute top-[25%] -right-24 w-[720px] h-[720px] bg-[#319AFF]/18 rounded-full blur-[120px]" />
        {/* Mid-page subtle cyan accent */}
        <div className="absolute top-[60%] -left-36 w-[600px] h-[600px] bg-[#60B1FF]/15 rounded-full blur-[110px]" />
        {/* Bottom spotlight */}
        <div className="absolute -bottom-24 right-[10%] w-[650px] h-[650px] bg-[#319AFF]/15 rounded-full blur-[120px]" />
      </div>

      {/* A. Floating Liquid-Glass Navigation Bar */}
      <nav className="fixed top-[30px] left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-[1280px] h-12 rounded-[16px] pointer-events-auto transition-all duration-300 flex items-center justify-between gap-8 px-6 py-2 bg-white/70 backdrop-blur-[24px] border border-white/80 ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,132,255,0.06)]">
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-[#0084FF]/10 flex items-center justify-center text-[#0084FF] group-hover:scale-105 transition-transform">
              <Bot className="w-5 h-5 text-[#0084FF]" />
            </div>
            <span className="font-fustat font-extrabold text-[22px] tracking-tight text-black">
              Assist<span className="text-[#0084FF]">.</span>
            </span>
          </button>

          {/* Desktop Inter Links */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-black/65">
            <a href="#hero" className="hover:text-black transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#methodology" className="hover:text-black transition-colors">
              Company
            </a>
            <a href="#capabilities" className="hover:text-black transition-colors">
              Pricing
            </a>
            <button
              onClick={() => setCurrentLayer('login')}
              className="hover:text-[#0084FF] text-[#0084FF] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Student Portal</span>
            </button>
          </div>

          {/* Call-to-Action Mini Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentLayer('login')}
              className="group h-9 px-5 rounded-[12px] bg-black/5 hover:bg-black/10 border border-black/10 text-[14px] font-semibold flex items-center gap-2 text-black transition-all hover:shadow-md cursor-pointer"
            >
              <span>Student Portal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-black hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-xs">
          <div className="w-[280px] h-full bg-white/95 backdrop-blur-[40px] border-l border-black/10 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#0084FF]" />
                  <span className="font-fustat font-extrabold text-[20px] text-black">
                    Assist<span className="text-[#0084FF]">.</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-black/60 hover:text-black rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6 text-[15px] font-medium text-black/70">
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black py-1"
                >
                  Home
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black py-1"
                >
                  Features
                </a>
                <a
                  href="#methodology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black py-1"
                >
                  Company
                </a>
                <a
                  href="#capabilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black py-1"
                >
                  Pricing
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCurrentLayer('login');
                  }}
                  className="text-left text-[#0084FF] font-semibold py-1 flex items-center justify-between"
                >
                  <span>Student Portal</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-black/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCurrentLayer('login');
                }}
                className="w-full py-2.5 rounded-[12px] bg-[#0084FF] hover:bg-[#0074E0] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Enter Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main id="hero" className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 pt-[110px] md:pt-[120px] pb-16">
        {/* Dual-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[calc(85vh-120px)]">
          {/* B. Left Column: Copy, Social Proof & CTAs (occupies 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left max-w-[620px] lg:pr-4">
            {/* Social Proof Badge */}
            <div className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 flex items-center gap-3 w-fit shadow-xs">
              <div className="flex -space-x-2 select-none">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
                  alt="User 1"
                  className="w-6 h-6 rounded-full border-1.5 border-white object-cover"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="User 2"
                  className="w-6 h-6 rounded-full border-1.5 border-white object-cover"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                  alt="User 3"
                  className="w-6 h-6 rounded-full border-1.5 border-white object-cover"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
                  alt="User 4"
                  className="w-6 h-6 rounded-full border-1.5 border-white object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-[12px] text-black/80 font-normal">
                Trusted by <strong className="font-bold text-[#171717]">10,000+ users</strong> worldwide
              </p>
            </div>

            {/* Main Display Heading */}
            <h1 className="font-outfit font-black text-[36px] sm:text-[44px] lg:text-[60px] leading-[1.08] tracking-[-3px] mt-6 select-none text-black">
              Your All in One <br />
              <span className="text-[#0084FF]">Assist.</span>
            </h1>

            {/* Body Paragraph */}
            <p className="font-inter text-[18px] text-black/60 tracking-[-0.5px] leading-relaxed mt-5 max-w-[480px]">
              Ask questions, get answers, automate tasks, and boost your productivity with the power of AI.
            </p>

            {/* Button Container */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {/* Primary Button ("Try Assist." / "Student Portal") */}
              <button
                onClick={() => setCurrentLayer('login')}
                className="group bg-[#0084FF] hover:bg-[#0074E0] text-white pl-6 pr-2 py-2 rounded-[16px] flex items-center gap-4 text-sm font-bold transition-all w-fit shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    'inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 10px 25px -5px rgba(0, 132, 255, 0.25)',
                }}
              >
                <span>Try Assist.</span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0084FF] shadow-xs group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4 text-[#0084FF]" />
                </span>
              </button>

              {/* Watch Demo Link */}
              <button
                onClick={() => setDemoModalOpen(true)}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center border border-blue-100 transition-colors">
                  <Play className="w-3.5 h-3.5 text-[#0084FF] fill-[#0084FF] ml-0.5" />
                </div>
                <span className="font-inter font-bold text-[14px] text-[#0084FF] group-hover:text-[#0074E0] transition-colors">
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Additional Student Portal Quick Access Badge */}
            <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-2 text-xs text-black/50">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0084FF]/10 text-[#0084FF] font-semibold text-[11px]">
                <Sparkles className="w-3 h-3" />
                Student Portal Ready
              </span>
              <span>·</span>
              <span>Holistic Aptitude & Pathway Diagnosis</span>
            </div>
          </div>

          {/* C. Right Column: Hero Robot Companion Video & Floating Tags (occupies 7 columns) */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end py-10 pointer-events-none">
            {/* Decorative Orbit Art Background Aura */}
            <div className="absolute top-[30%] left-[20%] w-[420px] h-[420px] bg-sky-400/15 rounded-full blur-[110px] -z-10 animate-pulse duration-[7000ms]" />

            {/* Orbital Concentric Ring Lines Vector */}
            <div className="absolute w-[620px] h-[620px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] -z-10 opacity-35 select-none pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 620 620" fill="none">
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60B1FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#319AFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Outer Dashed Orbit */}
                <circle
                  cx="310"
                  cy="310"
                  r="290"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="8 12"
                />
                {/* Mid Smooth Orbit */}
                <circle
                  cx="310"
                  cy="310"
                  r="230"
                  stroke="#319AFF"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                {/* Inner Dashed Orbit */}
                <circle
                  cx="310"
                  cy="310"
                  r="170"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="4 8"
                />
              </svg>
            </div>

            {/* Video Wrapper */}
            <div className="relative max-w-[580px] w-full rounded-[24px] select-none block overflow-hidden bg-white/40 shadow-[0_20px_50px_rgba(0,132,255,0.08)]">
              <video
                src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_robo_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-full h-auto rounded-[24px] block object-contain"
                style={{
                  filter: 'brightness(1.02) contrast(1.04)',
                }}
              />

              {/* Dynamic Floating Badges (Custom Liquid-Glass Panels) */}
              
              {/* 1. "Write an email" Badge (Top Right) */}
              <div
                className="absolute top-[16%] -right-2 sm:-right-6 md:-right-8 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[20px] flex items-center gap-3 pointer-events-auto shadow-[0_12px_32px_-4px_rgba(0,132,255,0.14)] bg-gradient-to-br from-white/85 to-white/55 backdrop-blur-[24px] border border-white/80 ring-1 ring-black/5 hover:translate-y-[-2px] hover:scale-[1.02] transition-all cursor-default select-none"
                style={{
                  boxShadow:
                    'inset 0 2.5px 4px rgba(255,255,255,0.8), 0 12px 32px -4px rgba(0,132,255,0.14)',
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center shadow-[0_4px_12px_rgba(0,132,255,0.3)] shrink-0">
                  <PenLine className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-inter font-black text-[13px] text-neutral-900 tracking-tight">
                    Write an email
                  </span>
                  <span className="font-inter font-semibold text-[10px] text-neutral-500 mt-0.5">
                    for meeting
                  </span>
                </div>
              </div>

              {/* 2. "Summarize document" Badge (Center Left) */}
              <div
                className="absolute top-[52%] -left-2 sm:-left-6 md:-left-8 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[20px] flex items-center gap-3 pointer-events-auto shadow-[0_12px_32px_-4px_rgba(0,132,255,0.14)] bg-gradient-to-br from-white/85 to-white/55 backdrop-blur-[24px] border border-white/80 ring-1 ring-black/5 hover:translate-y-[-2px] hover:scale-[1.02] transition-all cursor-default select-none"
                style={{
                  boxShadow:
                    'inset 0 2.5px 4px rgba(255,255,255,0.8), 0 12px 32px -4px rgba(0,132,255,0.14)',
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center shadow-[0_4px_12px_rgba(0,132,255,0.3)] shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-inter font-black text-[13px] text-neutral-900 tracking-tight">
                    Summarize document
                  </span>
                  <span className="font-inter font-semibold text-[10px] text-neutral-500 mt-0.5">
                    3-page brief
                  </span>
                </div>
              </div>

              {/* 3. "Student Portal" Badge (Bottom Right) */}
              <div
                onClick={() => setCurrentLayer('login')}
                className="absolute bottom-[10%] right-[6%] sm:right-[12%] px-4 sm:px-5 py-2.5 sm:py-3 rounded-[20px] flex items-center gap-3 pointer-events-auto shadow-[0_12px_32px_-4px_rgba(0,132,255,0.14)] bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-[24px] border border-white/80 ring-1 ring-[#0084FF]/20 hover:translate-y-[-2px] hover:scale-[1.02] transition-all cursor-pointer select-none"
                style={{
                  boxShadow:
                    'inset 0 2.5px 4px rgba(255,255,255,0.8), 0 12px 32px -4px rgba(0,132,255,0.14)',
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center shadow-[0_4px_12px_rgba(0,132,255,0.3)] shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-inter font-black text-[13px] text-neutral-900 tracking-tight flex items-center gap-1">
                    Student Portal
                    <ChevronRight className="w-3.5 h-3.5 text-[#0084FF]" />
                  </span>
                  <span className="font-inter font-semibold text-[10px] text-neutral-500 mt-0.5">
                    Diagnostic & Pathways
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-20 pt-16 border-t border-black/5" />

        {/* Features Showcase Section (Pristine Tech-Forward Corporate Style) */}
        <section id="features" className="py-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-[#0084FF]/10 text-[#0084FF] font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 border border-[#0084FF]/20">
              <Bot className="w-3.5 h-3.5" />
              Intelligent Capabilities
            </span>
            <h2 className="font-outfit font-black text-3xl sm:text-4xl text-neutral-900 tracking-tight mt-4">
              Everything you need in one autonomous companion
            </h2>
            <p className="text-black/60 text-base mt-3 leading-relaxed">
              Designed from the ground up to synthesize multiple cognitive dimensions beyond single exam marks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-[20px] border border-white/80 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,132,255,0.06)] hover:shadow-[0_16px_40px_rgba(0,132,255,0.12)] transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0084FF]/15 to-[#0084FF]/5 border border-[#0084FF]/20 flex items-center justify-center text-[#0084FF] mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-neutral-900 tracking-tight">
                Holistic Strength Engine
              </h3>
              <p className="text-black/60 text-xs sm:text-sm leading-relaxed mt-2.5">
                Separates test anxiety from authentic student aptitude using multi-factor interest, consistency, and practical project metrics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-[20px] border border-white/80 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,132,255,0.06)] hover:shadow-[0_16px_40px_rgba(0,132,255,0.12)] transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0084FF]/15 to-[#0084FF]/5 border border-[#0084FF]/20 flex items-center justify-center text-[#0084FF] mb-5 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-neutral-900 tracking-tight">
                Root-Cause Prerequisite Trees
              </h3>
              <p className="text-black/60 text-xs sm:text-sm leading-relaxed mt-2.5">
                Decomposes learning hurdles into intuitive visual dependency nodes, highlighting missing foundational prerequisites before failure occurs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-[20px] border border-white/80 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,132,255,0.06)] hover:shadow-[0_16px_40px_rgba(0,132,255,0.12)] transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0084FF]/15 to-[#0084FF]/5 border border-[#0084FF]/20 flex items-center justify-center text-[#0084FF] mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-neutral-900 tracking-tight">
                Adaptive 4-Week Roadmaps
              </h3>
              <p className="text-black/60 text-xs sm:text-sm leading-relaxed mt-2.5">
                Dynamic weekly curricula with curated challenges and micro-milestones that update real-time industry readiness scores.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-[20px] border border-white/80 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,132,255,0.06)] hover:shadow-[0_16px_40px_rgba(0,132,255,0.12)] transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0084FF]/15 to-[#0084FF]/5 border border-[#0084FF]/20 flex items-center justify-center text-[#0084FF] mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-neutral-900 tracking-tight">
                10+ Industry Pathways
              </h3>
              <p className="text-black/60 text-xs sm:text-sm leading-relaxed mt-2.5">
                Explore real-world careers across AI & Data Science, Cloud, Cyber Defense, UX/UI, and Robotics with explainable match rationales.
              </p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="mt-16 pt-16 border-t border-black/5" />

        {/* Methodology Flow Section */}
        <section id="methodology" className="py-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-black/5 text-black/70 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 border border-black/5">
              Three-Step System
            </span>
            <h2 className="font-outfit font-black text-3xl sm:text-4xl text-neutral-900 tracking-tight mt-4">
              From marks to actionable direction
            </h2>
            <p className="text-black/60 text-sm mt-3 leading-relaxed">
              Transparent, mathematical modeling without black-box confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-black/5 ring-1 ring-black/[0.03] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-outfit font-extrabold text-3xl text-[#0084FF] block mb-4">
                  01
                </span>
                <h3 className="font-outfit font-bold text-xl text-neutral-900 mb-2">
                  Input Academic & Confidence Signals
                </h3>
                <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                  Enter course grades alongside interest levels, practical hours, and confidence ratings. No single test determines the upper limit.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 text-[11px] text-black/50 font-medium">
                Supports direct entry & instant CSV import
              </div>
            </div>

            <div className="relative p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-black/5 ring-1 ring-black/[0.03] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-outfit font-extrabold text-3xl text-[#0084FF] block mb-4">
                  02
                </span>
                <h3 className="font-outfit font-bold text-xl text-neutral-900 mb-2">
                  Multi-Vector Neural Diagnosis
                </h3>
                <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                  Our weighted synthesis extracts hidden strengths, normalizes scores, and constructs dependency prerequisite trees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 text-[11px] text-black/50 font-medium">
                Instant calculations with 0 hallucination risk
              </div>
            </div>

            <div className="relative p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-black/5 ring-1 ring-black/[0.03] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-outfit font-extrabold text-3xl text-[#0084FF] block mb-4">
                  03
                </span>
                <h3 className="font-outfit font-bold text-xl text-neutral-900 mb-2">
                  Launch Student Portal & Roadmaps
                </h3>
                <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                  Step directly into your interactive intelligence dashboard, track milestone completion, and compare target career benchmarks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 text-[11px] text-black/50 font-medium">
                Real-time readiness updates upon each completed task
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="mt-16 pt-16 border-t border-black/5" />

        {/* High-Impact CTA Banner */}
        <section id="capabilities" className="py-12">
          <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white/95 via-white/80 to-[#0084FF]/10 backdrop-blur-[30px] border border-white/80 ring-1 ring-black/5 shadow-[0_20px_50px_rgba(0,132,255,0.08)] text-center overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#319AFF]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#0084FF]/10 text-[#0084FF] font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 border border-[#0084FF]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Student Portal Gateway
              </span>

              <h2 className="font-outfit font-black text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-[1.1]">
                Ready to unlock your true career potential?
              </h2>

              <p className="font-inter text-base sm:text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                Enter your student portal today. Discover latent capabilities, solve root-cause knowledge gaps, and follow tailored learning roadmaps.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentLayer('login')}
                  className="group bg-[#0084FF] hover:bg-[#0074E0] text-white pl-8 pr-3 py-3 rounded-[16px] flex items-center gap-4 text-base font-bold transition-all shadow-xl cursor-pointer transform hover:-translate-y-0.5"
                  style={{
                    boxShadow:
                      'inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 10px 25px -5px rgba(0, 132, 255, 0.25)',
                  }}
                >
                  <span>Student Portal Log In</span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0084FF] shadow-xs group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#0084FF]" />
                  </span>
                </button>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-6 py-3 rounded-[16px] bg-black/5 hover:bg-black/10 border border-black/10 text-sm font-semibold text-black transition-all cursor-pointer flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-[#0084FF] fill-[#0084FF]" />
                  <span>Watch Interactive Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 pb-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/50">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-[#0084FF]" />
            <span className="font-fustat font-bold text-black text-sm">
              Assist<span className="text-[#0084FF]">.</span>
            </span>
            <span className="text-black/30">|</span>
            <span>PathFinder AI Student Workspace</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentLayer('login')} className="hover:text-black transition-colors cursor-pointer">
              Student Portal
            </button>
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#methodology" className="hover:text-black transition-colors">
              Methodology
            </a>
            <span>© 2026 Assist. All rights reserved.</span>
          </div>
        </footer>
      </main>

      {/* Interactive Watch Demo Video Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-[28px] bg-white/95 backdrop-blur-[30px] border border-white/90 ring-1 ring-black/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-[#0084FF]">
                  <Bot className="w-5 h-5 text-[#0084FF]" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-base text-neutral-900">
                    Assist. Companion in Action
                  </h3>
                  <p className="text-xs text-neutral-500">Autonomous Student Intelligence & Workflow Automation</p>
                </div>
              </div>
              <button
                onClick={() => setDemoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/5 text-black/60 hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-[20px] overflow-hidden bg-neutral-950 shadow-inner flex items-center justify-center">
              <video
                src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_robo_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5">
              <p className="text-xs text-neutral-600 max-w-md">
                Experience instant diagnosis, multi-variable academic weighting, and intelligent career alignments.
              </p>
              <button
                onClick={() => {
                  setDemoModalOpen(false);
                  setCurrentLayer('login');
                }}
                className="px-5 py-2.5 rounded-[12px] bg-[#0084FF] hover:bg-[#0074E0] text-white text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Launch Student Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
