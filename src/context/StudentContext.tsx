import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { StudentProfile, AnalysisResult, SubjectRecord } from '../types';
import { DEMO_PROFILES } from '../data/demoProfiles';
import { analyzeStudentProfile } from '../services/recommendationEngine';

export type SystemLayer = 'landing' | 'login' | 'dashboard';

interface StudentContextType {
  currentLayer: SystemLayer;
  setCurrentLayer: (layer: SystemLayer) => void;
  isAuthenticated: boolean;
  loginAsDemo: (key: 'aarav' | 'diya' | 'rohan') => void;
  loginWithCustom: (name: string, email?: string) => void;
  logout: () => void;
  profile: StudentProfile;
  analysis: AnalysisResult;
  activeTab: 'dashboard' | 'gaps' | 'roadmap' | 'careers' | 'comparison' | 'report';
  setActiveTab: (tab: 'dashboard' | 'gaps' | 'roadmap' | 'careers' | 'comparison' | 'report') => void;
  isOnboardingOpen: boolean;
  setIsOnboardingOpen: (open: boolean) => void;
  selectedDemoKey: string;
  loadDemoProfile: (key: 'aarav' | 'diya' | 'rohan') => void;
  updateProfile: (updated: Partial<StudentProfile>) => void;
  saveFullProfile: (profile: StudentProfile) => void;
  resetToFreshProfile: () => void;
  toggleRoadmapTask: (weekNumber: number, taskId: string) => void;
  completedTasksCount: number;
  totalTasksCount: number;
  roadmapCompletionPercent: number;
  importCsvSubjects: (csvContent: string) => { success: boolean; count: number; error?: string };
  isAiLoading: boolean;
  fetchAiCoachInsights: () => Promise<void>;
  aiCoachText: string | null;
}

const STORAGE_KEY_PROFILE = 'pathfinder_active_profile_v1';
const STORAGE_KEY_ROADMAP = 'pathfinder_roadmap_state_v1';
const STORAGE_KEY_LAYER = 'pathfinder_current_layer_v1';
const STORAGE_KEY_AUTH = 'pathfinder_is_auth_v1';

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLayer, setCurrentLayerState] = useState<SystemLayer>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LAYER);
      if (saved === 'landing' || saved === 'login' || saved === 'dashboard') {
        return saved;
      }
    } catch (e) {
      // fallback
    }
    return 'landing';
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_AUTH) === 'true';
    } catch (e) {
      return false;
    }
  });

  const [selectedDemoKey, setSelectedDemoKey] = useState<string>('aarav');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'gaps' | 'roadmap' | 'careers' | 'comparison' | 'report'>('dashboard');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiCoachText, setAiCoachText] = useState<string | null>(null);

  // Initialize profile from localStorage or default to Aarav Sharma
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error reading stored profile, defaulting to Aarav:', e);
    }
    return DEMO_PROFILES.aarav;
  });

  // Track roadmap completion state separately so it persists smoothly
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ROADMAP);
      if (saved) {
        const parsed = JSON.parse(saved);
        return new Set<string>(parsed);
      }
    } catch (e) {
      console.warn('Error reading stored roadmap tasks:', e);
    }
    return new Set<string>();
  });

  // Save profile changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.warn('Error persisting profile to localStorage:', e);
    }
  }, [profile]);

  // Save roadmap tasks
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ROADMAP, JSON.stringify(Array.from(completedTaskIds)));
    } catch (e) {
      console.warn('Error persisting roadmap state to localStorage:', e);
    }
  }, [completedTaskIds]);

  // Compute base analysis
  const baseAnalysis = useMemo(() => {
    return analyzeStudentProfile(profile);
  }, [profile]);

  // Overlay completed task states onto the roadmap
  const analysis = useMemo(() => {
    const updatedRoadmap = baseAnalysis.roadmap.map((week) => ({
      ...week,
      tasks: week.tasks.map((task) => ({
        ...task,
        completed: completedTaskIds.has(task.id),
      })),
    }));

    // Calculate dynamic readiness boost
    let totalTasks = 0;
    let completedCount = 0;
    updatedRoadmap.forEach((w) => {
      w.tasks.forEach((t) => {
        totalTasks += 1;
        if (t.completed) completedCount += 1;
      });
    });

    const completionFraction = totalTasks > 0 ? completedCount / totalTasks : 0;
    const readinessDelta = Math.round(completionFraction * (100 - baseAnalysis.baseReadinessScore) * 0.7);
    const adjustedReadinessScore = Math.min(99, baseAnalysis.baseReadinessScore + readinessDelta);

    return {
      ...baseAnalysis,
      roadmap: updatedRoadmap,
      adjustedReadinessScore,
      aiInsightsText: aiCoachText || undefined,
      aiEnhanced: Boolean(aiCoachText),
    };
  }, [baseAnalysis, completedTaskIds, aiCoachText]);

  const { completedTasksCount, totalTasksCount, roadmapCompletionPercent } = useMemo(() => {
    let total = 0;
    let completed = 0;
    analysis.roadmap.forEach((w) => {
      w.tasks.forEach((t) => {
        total += 1;
        if (t.completed) completed += 1;
      });
    });
    return {
      totalTasksCount: total,
      completedTasksCount: completed,
      roadmapCompletionPercent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [analysis.roadmap]);

  const toggleRoadmapTask = useCallback((_weekNumber: number, taskId: string) => {
    setCompletedTaskIds((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  }, []);

  const setCurrentLayer = useCallback((layer: SystemLayer) => {
    setCurrentLayerState(layer);
    try {
      localStorage.setItem(STORAGE_KEY_LAYER, layer);
    } catch (e) {
      // ignore
    }
  }, []);

  const loginAsDemo = useCallback((key: 'aarav' | 'diya' | 'rohan') => {
    const target = DEMO_PROFILES[key];
    if (target) {
      setSelectedDemoKey(key);
      setProfile(target);
      setCompletedTaskIds(new Set());
      setAiCoachText(null);
      setIsAuthenticated(true);
      setCurrentLayer('dashboard');
      try {
        localStorage.setItem(STORAGE_KEY_AUTH, 'true');
        localStorage.setItem(STORAGE_KEY_LAYER, 'dashboard');
      } catch (e) {
        // ignore
      }
    }
  }, [setCurrentLayer]);

  const loginWithCustom = useCallback((name: string, _email?: string) => {
    setProfile((prev) => ({
      ...prev,
      name: name.trim() || prev.name,
      lastUpdated: new Date().toISOString(),
    }));
    setIsAuthenticated(true);
    setCurrentLayer('dashboard');
    try {
      localStorage.setItem(STORAGE_KEY_AUTH, 'true');
      localStorage.setItem(STORAGE_KEY_LAYER, 'dashboard');
    } catch (e) {
      // ignore
    }
  }, [setCurrentLayer]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentLayer('landing');
    try {
      localStorage.setItem(STORAGE_KEY_AUTH, 'false');
      localStorage.setItem(STORAGE_KEY_LAYER, 'landing');
    } catch (e) {
      // ignore
    }
  }, [setCurrentLayer]);

  const loadDemoProfile = useCallback((key: 'aarav' | 'diya' | 'rohan') => {
    const target = DEMO_PROFILES[key];
    if (target) {
      setSelectedDemoKey(key);
      setProfile(target);
      setCompletedTaskIds(new Set()); // Reset tasks on profile switch
      setAiCoachText(null);
    }
  }, []);

  const updateProfile = useCallback((updated: Partial<StudentProfile>) => {
    setProfile((prev) => ({
      ...prev,
      ...updated,
      lastUpdated: new Date().toISOString(),
    }));
  }, []);

  const saveFullProfile = useCallback((newProfile: StudentProfile) => {
    setProfile(newProfile);
    setSelectedDemoKey('custom');
    setCompletedTaskIds(new Set());
    setAiCoachText(null);
  }, []);

  const resetToFreshProfile = useCallback(() => {
    const blank: StudentProfile = {
      id: `student-custom-${Date.now()}`,
      name: 'New Student',
      educationLevel: 'Undergraduate',
      currentClass: '1st Year College',
      targetCareer: 'Undecided',
      weeklyStudyTime: 15,
      preferredLearningStyle: 'practical_projects',
      preferredWorkStyle: 'analytical_problem_solving',
      subjects: [
        { id: 'sub-1', name: 'Mathematics', category: 'stem', marks: 80, confidence: 75, interest: 80, weeklyHours: 4, consistency: 75 },
        { id: 'sub-2', name: 'Computer Science', category: 'computing', marks: 75, confidence: 80, interest: 85, weeklyHours: 4, consistency: 70 },
        { id: 'sub-3', name: 'English & Communication', category: 'humanities', marks: 70, confidence: 65, interest: 65, weeklyHours: 2, consistency: 70 },
      ],
      technicalSkills: ['Computer Fundamentals', 'Basic Programming'],
      softSkills: ['Problem Solving', 'Curiosity'],
      projects: [],
      certifications: [],
      hobbies: ['Reading', 'Gaming'],
      careerInterests: ['Software Engineering', 'Data Science / AI'],
      lastUpdated: new Date().toISOString(),
    };
    setSelectedDemoKey('custom');
    setProfile(blank);
    setCompletedTaskIds(new Set());
    setAiCoachText(null);
    setIsOnboardingOpen(true);
  }, []);

  const importCsvSubjects = useCallback((csvContent: string) => {
    try {
      const lines = csvContent.trim().split('\n');
      if (lines.length < 2) {
        return { success: false, count: 0, error: 'CSV must have at least a header row and one data row.' };
      }

      // Expected format: Subject, Marks, Confidence, Interest, WeeklyHours, Category
      const newSubjects: SubjectRecord[] = [];
      const dataRows = lines.slice(1);

      dataRows.forEach((row, idx) => {
        const cols = row.split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
        if (cols.length >= 2 && cols[0]) {
          const name = cols[0];
          const marks = Math.min(100, Math.max(0, parseFloat(cols[1]) || 70));
          const confidence = cols[2] ? Math.min(100, Math.max(0, parseFloat(cols[2]))) : marks;
          const interest = cols[3] ? Math.min(100, Math.max(0, parseFloat(cols[3]))) : marks;
          const weeklyHours = cols[4] ? Math.max(0.5, parseFloat(cols[4])) : 3;
          const rawCat = (cols[5] || 'stem').toLowerCase();
          const category = ['stem', 'computing', 'humanities', 'commerce', 'design'].includes(rawCat)
            ? (rawCat as any)
            : 'general';

          newSubjects.push({
            id: `imported-${idx}-${Date.now()}`,
            name,
            marks,
            confidence,
            interest,
            weeklyHours,
            consistency: 80,
            category,
          });
        }
      });

      if (newSubjects.length === 0) {
        return { success: false, count: 0, error: 'No valid subjects found in CSV.' };
      }

      setProfile((prev) => ({
        ...prev,
        subjects: newSubjects,
        lastUpdated: new Date().toISOString(),
      }));

      return { success: true, count: newSubjects.length };
    } catch (err: any) {
      return { success: false, count: 0, error: err?.message || 'Failed to parse CSV file.' };
    }
  }, []);

  const fetchAiCoachInsights = useCallback(async () => {
    setIsAiLoading(true);
    try {
      const res = await fetch('/api/ai/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile,
          subjectScores: analysis.subjectScores,
          learningDna: analysis.learningDna,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.available && data.insights) {
          setAiCoachText(data.insights);
          setIsAiLoading(false);
          return;
        }
      }

      // Offline heuristic fallback simulation
      await new Promise((resolve) => setTimeout(resolve, 600));
      const fallbackInsights = `Executive Diagnostic for ${profile.name}:
You demonstrate strong latent capability in ${analysis.hiddenStrengths[0]?.subject || analysis.coreStrengths[0]?.subject || 'Applied Problem Solving'}, where your high confidence and dedication signal high upside despite test score variations.

High-Leverage Unlock:
Prioritize closing the foundational gap in ${analysis.criticalGaps[0]?.subject || 'Technical Foundations'}. Dedicating 4 focused hours each week to milestone mini-projects will accelerate your trajectory toward becoming a top-tier ${profile.targetCareer || analysis.recommendedCareers[0]?.careerName}.

Strategic Mindset:
Focus on output-driven execution. Replace passive lecture review with active portfolio prototyping and clear technical communication.`;

      setAiCoachText(fallbackInsights);
    } catch (e) {
      console.warn('Error fetching AI coach, using fallback heuristic:', e);
      setAiCoachText(`Strategic Diagnostic for ${profile.name}: Build your core strengths into public portfolio artifacts and address prerequisite foundations systematically.`);
    } finally {
      setIsAiLoading(false);
    }
  }, [profile, analysis.subjectScores, analysis.learningDna, analysis.hiddenStrengths, analysis.coreStrengths, analysis.criticalGaps, analysis.recommendedCareers]);

  const value = useMemo(
    () => ({
      currentLayer,
      setCurrentLayer,
      isAuthenticated,
      loginAsDemo,
      loginWithCustom,
      logout,
      profile,
      analysis,
      activeTab,
      setActiveTab,
      isOnboardingOpen,
      setIsOnboardingOpen,
      selectedDemoKey,
      loadDemoProfile,
      updateProfile,
      saveFullProfile,
      resetToFreshProfile,
      toggleRoadmapTask,
      completedTasksCount,
      totalTasksCount,
      roadmapCompletionPercent,
      importCsvSubjects,
      isAiLoading,
      fetchAiCoachInsights,
      aiCoachText,
    }),
    [
      currentLayer,
      setCurrentLayer,
      isAuthenticated,
      loginAsDemo,
      loginWithCustom,
      logout,
      profile,
      analysis,
      activeTab,
      isOnboardingOpen,
      selectedDemoKey,
      loadDemoProfile,
      updateProfile,
      saveFullProfile,
      resetToFreshProfile,
      toggleRoadmapTask,
      completedTasksCount,
      totalTasksCount,
      roadmapCompletionPercent,
      importCsvSubjects,
      isAiLoading,
      fetchAiCoachInsights,
      aiCoachText,
    ]
  );

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
