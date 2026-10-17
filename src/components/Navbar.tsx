import React, { useState, useRef, useEffect } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  Compass,
  Sparkles,
  UserCheck,
  PlusCircle,
  FileText,
  User,
  ChevronDown,
  Check,
  LogOut,
  BarChart3,
  GitBranch,
  Calendar,
  Layers,
  ArrowRight,
  ArrowLeft,
  LayoutDashboard,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    profile,
    activeTab,
    setActiveTab,
    selectedDemoKey,
    loadDemoProfile,
    setIsOnboardingOpen,
    resetToFreshProfile,
    setCurrentLayer,
    logout,
  } = useStudent();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isViewDropdownOpen, setIsViewDropdownOpen] = useState(false);
  
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const viewDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
      if (
        viewDropdownRef.current &&
        !viewDropdownRef.current.contains(event.target as Node)
      ) {
        setIsViewDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      id: 'dashboard' as const,
      label: 'Intelligence Dashboard',
      shortLabel: 'Dashboard',
      icon: LayoutDashboard,
      desc: 'Holistic strength score, radar chart & DNA',
    },
    {
      id: 'gaps' as const,
      label: 'Knowledge Gaps',
      shortLabel: 'Gaps',
      icon: GitBranch,
      desc: 'Root-cause prerequisite dependency trees',
    },
    {
      id: 'roadmap' as const,
      label: 'Learning Roadmap',
      shortLabel: 'Roadmap',
      icon: Calendar,
      desc: '4-week curriculum with interactive milestones',
    },
    {
      id: 'careers' as const,
      label: 'Career Pathways',
      shortLabel: 'Careers',
      icon: Compass,
      desc: '10+ industry matches, salary & role analysis',
    },
    {
      id: 'comparison' as const,
      label: 'Skill Matrix',
      shortLabel: 'Skill Matrix',
      icon: Layers,
      desc: 'Competency comparison against industry benchmarks',
    },
    {
      id: 'report' as const,
      label: 'Report & Share',
      shortLabel: 'Report',
      icon: FileText,
      desc: 'Printable dossier & verifiable insight card',
    },
  ];

  const currentNav = navItems.find((n) => n.id === activeTab) || navItems[0];
  const CurrentIcon = currentNav.icon;

  const currentProfileLabel =
    selectedDemoKey === 'aarav'
      ? 'Aarav (AI)'
      : selectedDemoKey === 'diya'
      ? 'Diya (UX)'
      : selectedDemoKey === 'rohan'
      ? 'Rohan (Cyber)'
      : profile.name || 'Custom';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-all ring-1 ring-white/10">
              <Compass className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
                PathFinder AI
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-semibold text-indigo-400 bg-indigo-950/70 border border-indigo-800/60 px-2 py-0.5 rounded-full">
                Student Portal
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Space-Saving View Dropdown Menu + Quick Nav Tabs */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Compact View Dropdown Menu */}
          <div className="relative" ref={viewDropdownRef}>
            <button
              type="button"
              onClick={() => setIsViewDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/90 hover:bg-slate-800 text-xs text-slate-200 hover:border-slate-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              aria-expanded={isViewDropdownOpen}
              aria-label="Select workspace module"
            >
              <CurrentIcon className="h-4 w-4 text-indigo-400 shrink-0" />
              <span className="font-semibold text-white">{currentNav.label}</span>
              <ChevronDown
                className={`h-3 w-3 text-slate-400 transition-transform duration-200 shrink-0 ${
                  isViewDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu for Workspace Modules */}
            {isViewDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl p-2 shadow-2xl z-50 animate-fadeIn text-xs">
                <div className="px-2.5 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Workspace Modules
                </div>
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsViewDropdownOpen(false);
                        }}
                        className={`w-full flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-white">{item.label}</span>
                            {isSelected && <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0 ml-1.5" />}
                          </div>
                          <span className="block text-[10px] text-slate-400 truncate mt-0.5 font-normal">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Quick Tab Links for Wide Displays */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-medium text-slate-400">
            {navItems.map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  {item.shortLabel}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Zone 3: Profile Dropdown & Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Profile Dropdown Menu */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              type="button"
              onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/90 text-xs text-slate-200 hover:border-slate-700 hover:text-white transition-colors cursor-pointer"
              aria-expanded={isProfileDropdownOpen}
              aria-label="Select student profile"
            >
              <User className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span className="font-medium max-w-[95px] truncate">{currentProfileLabel}</span>
              <ChevronDown
                className={`h-3 w-3 text-slate-400 transition-transform duration-200 shrink-0 ${
                  isProfileDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Content */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl p-1.5 shadow-2xl z-50 animate-fadeIn text-xs">
                <div className="px-2.5 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Switch Student Profile
                </div>
                <div className="space-y-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      loadDemoProfile('aarav');
                      setIsProfileDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                      selectedDemoKey === 'aarav'
                        ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="block text-xs">Aarav Sharma</span>
                      <span className="block text-[10px] text-slate-400 font-normal">AI & Data Science · Math Strong</span>
                    </div>
                    {selectedDemoKey === 'aarav' && <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0 ml-2" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      loadDemoProfile('diya');
                      setIsProfileDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                      selectedDemoKey === 'diya'
                        ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="block text-xs">Diya Patel</span>
                      <span className="block text-[10px] text-slate-400 font-normal">UX/UI Design · Creative Empathy</span>
                    </div>
                    {selectedDemoKey === 'diya' && <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0 ml-2" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      loadDemoProfile('rohan');
                      setIsProfileDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                      selectedDemoKey === 'rohan'
                        ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="block text-xs">Rohan Verma</span>
                      <span className="block text-[10px] text-slate-400 font-normal">Cybersecurity · Systems & OS</span>
                    </div>
                    {selectedDemoKey === 'rohan' && <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0 ml-2" />}
                  </button>
                </div>

                <div className="my-1 border-t border-slate-800/80" />

                <button
                  type="button"
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    resetToFreshProfile();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white text-left transition-colors cursor-pointer"
                >
                  <PlusCircle className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                  <span>Create Custom Student...</span>
                </button>

                <div className="my-1 border-t border-slate-800/80" />

                <button
                  type="button"
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-red-400 hover:bg-red-950/30 hover:text-red-300 text-left transition-colors cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5 shrink-0" />
                  <span>Log Out & Exit</span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Exit to Landing Page */}
          <button
            onClick={() => setCurrentLayer('landing')}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Return to Public Landing Page"
          >
            <span>Landing Page</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Edit or New Student</span>
            <span className="sm:hidden">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};
