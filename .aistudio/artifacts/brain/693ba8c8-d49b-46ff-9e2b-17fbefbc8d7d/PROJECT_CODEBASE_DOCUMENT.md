# PathFinder AI — Complete Codebase & Project Document

> Comprehensive single-document consolidation of all project files, configuration, architecture, and source code.
> Generated on: 2026-10-17T07:44:55.448Z

## 📑 Table of Contents & File Index

| # | File Path | Category | Lines | Size (Bytes) |
|---|-----------|----------|-------|--------------|
| 1 | [metadata.json](#file-metadata-json) | Core Logic / Engine | 7 | 324 B |
| 2 | [package.json](#file-package-json) | Config & Build | 41 | 999 B |
| 3 | [tsconfig.json](#file-tsconfig-json) | Config & Build | 28 | 538 B |
| 4 | [vite.config.ts](#file-vite-config-ts) | Config & Build | 23 | 705 B |
| 5 | [index.html](#file-index-html) | Source Code | 22 | 1,526 B |
| 6 | [server.ts](#file-server-ts) | Config & Build | 91 | 2,870 B |
| 7 | [src/main.tsx](#file-src-main-tsx) | Source Code | 6 | 159 B |
| 8 | [src/index.css](#file-src-index-css) | Source Code | 52 | 1,065 B |
| 9 | [src/App.tsx](#file-src-app-tsx) | Source Code | 35 | 986 B |
| 10 | [src/types/index.ts](#file-src-types-index-ts) | Core Logic / Engine | 154 | 4,050 B |
| 11 | [src/context/StudentContext.tsx](#file-src-context-studentcontext-tsx) | Core Logic / Engine | 450 | 15,267 B |
| 12 | [src/data/demoProfiles.ts](#file-src-data-demoprofiles-ts) | Core Logic / Engine | 331 | 9,426 B |
| 13 | [src/services/recommendationEngine.ts](#file-src-services-recommendationengine-ts) | Core Logic / Engine | 777 | 48,222 B |
| 14 | [src/components/LandingPageLayer.tsx](#file-src-components-landingpagelayer-tsx) | React Components | 457 | 26,118 B |
| 15 | [src/components/TicketStubLanding.tsx](#file-src-components-ticketstublanding-tsx) | React Components | 1218 | 48,993 B |
| 16 | [src/components/LoginLayer.tsx](#file-src-components-loginlayer-tsx) | React Components | 734 | 35,823 B |
| 17 | [src/components/DashboardLayer.tsx](#file-src-components-dashboardlayer-tsx) | React Components | 107 | 5,074 B |
| 18 | [src/components/Navbar.tsx](#file-src-components-navbar-tsx) | React Components | 363 | 15,397 B |
| 19 | [src/components/DashboardView.tsx](#file-src-components-dashboardview-tsx) | React Components | 522 | 21,389 B |
| 20 | [src/components/KnowledgeGapView.tsx](#file-src-components-knowledgegapview-tsx) | React Components | 273 | 12,703 B |
| 21 | [src/components/RoadmapView.tsx](#file-src-components-roadmapview-tsx) | React Components | 337 | 14,496 B |
| 22 | [src/components/CareerPathwayView.tsx](#file-src-components-careerpathwayview-tsx) | React Components | 425 | 19,504 B |
| 23 | [src/components/SkillComparisonView.tsx](#file-src-components-skillcomparisonview-tsx) | React Components | 195 | 8,760 B |
| 24 | [src/components/OnboardingModal.tsx](#file-src-components-onboardingmodal-tsx) | React Components | 807 | 35,666 B |
| 25 | [src/components/ReportModal.tsx](#file-src-components-reportmodal-tsx) | React Components | 288 | 14,173 B |
| 26 | [src/components/LandingHero.tsx](#file-src-components-landinghero-tsx) | React Components | 200 | 11,276 B |
| 27 | [README.md](#file-readme-md) | Documentation | 129 | 6,877 B |

**Total:** 27 files · 8,072 lines of code · 353.9 KB

---

<a id="file-metadata-json"></a>
### 1. `metadata.json`

- **Path:** `metadata.json`
- **Category:** Core Logic / Engine
- **Metrics:** 7 lines · 324 bytes

```json
{
  "name": "PathFinder AI",
  "description": "Intelligent student career discovery and learning pathway platform analyzing academic performance, knowledge gaps, hidden potential, and personalized roadmaps beyond marks.",
  "requestFramePermissions": [],
  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
}
```

---

<a id="file-package-json"></a>
### 2. `package.json`

- **Path:** `package.json`
- **Category:** Config & Build
- **Metrics:** 41 lines · 999 bytes

```json
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx server.ts",
    "build": "vite build",
    "start": "tsx server.ts",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@types/canvas-confetti": "^1.9.0",
    "@vitejs/plugin-react": "^6.1.1",
    "canvas-confetti": "^1.9.4",
    "dotenv": "^17.2.3",
    "express": "^4.21.2",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "recharts": "^3.10.1",
    "vite": "^8.3.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}
```

---

<a id="file-tsconfig-json"></a>
### 3. `tsconfig.json`

- **Path:** `tsconfig.json`
- **Category:** Config & Build
- **Metrics:** 28 lines · 538 bytes

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```

---

<a id="file-vite-config-ts"></a>
### 4. `vite.config.ts`

- **Path:** `vite.config.ts`
- **Category:** Config & Build
- **Metrics:** 23 lines · 705 bytes

```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
```

---

<a id="file-index-html"></a>
### 5. `index.html`

- **Path:** `index.html`
- **Category:** Source Code
- **Metrics:** 22 lines · 1,526 bytes

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PathFinder AI · Intelligent Student Career & Learning Pathways</title>
    <meta name="description" content="Discover your strengths, identify knowledge gaps, and unlock career pathways beyond conventional marks with PathFinder AI." />
    <meta property="og:title" content="PathFinder AI · Intelligent Student Career & Learning Pathways" />
    <meta property="og:description" content="Discover your strengths, identify knowledge gaps, and unlock career pathways beyond conventional marks with PathFinder AI." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-indigo-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

---

<a id="file-server-ts"></a>
### 6. `server.ts`

- **Path:** `server.ts`
- **Category:** Config & Build
- **Metrics:** 91 lines · 2,870 bytes

```typescript
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  // Safe server-side Gemini API route
  app.post('/api/ai/coach', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(200).json({
          available: false,
          message: 'Gemini API key not configured. Using offline intelligence engine.',
        });
      }

      const { profile, subjectScores, learningDna } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Act as an elite career and academic counselor for PathFinder AI.
Review this student profile:
Student Name: ${profile.name}
Class: ${profile.currentClass}
Target Goal: ${profile.targetCareer}
Learning Archetype: ${learningDna.archetype}
Top Subjects: ${subjectScores.map((s: any) => `${s.subject} (Score: ${s.compositeScore}%, Marks: ${s.marks}%, Interest: ${s.interest}%)`).join(', ')}

Provide a concise, motivating, 3-paragraph executive coaching breakdown:
1. Analysis of their hidden potential beyond conventional exam marks.
2. The specific high-leverage skill unlock that will accelerate their journey towards ${profile.targetCareer}.
3. A personalized mindset and execution strategy.
Keep it human, sharp, inspiring, and under 220 words.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return res.status(200).json({
        available: true,
        insights: response.text,
      });
    } catch (err: any) {
      console.warn('Gemini API call failed, falling back to heuristic insights:', err?.message);
      return res.status(200).json({
        available: false,
        error: err?.message,
      });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'PathFinder AI' });
  });

  // Vite middleware for dev
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static files
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`PathFinder AI server running on port ${port}`);
  });
}

startServer();
```

---

<a id="file-src-main-tsx"></a>
### 7. `src/main.tsx`

- **Path:** `src/main.tsx`
- **Category:** Source Code
- **Metrics:** 6 lines · 159 bytes

```typescript
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
```

---

<a id="file-src-index-css"></a>
### 8. `src/index.css`

- **Path:** `src/index.css`
- **Category:** Source Code
- **Metrics:** 52 lines · 1,065 bytes

```css
@import "tailwindcss";

@layer base {
  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    letter-spacing: -0.02em;
  }
}

@layer utilities {
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
}

/* Custom scrollbars */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.6);
}
::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.3);
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.6);
}

@media print {
  body {
    background-color: #ffffff !important;
    color: #0f172a !important;
  }
  .no-print {
    display: none !important;
  }
  .print-page {
    background: #ffffff !important;
    color: #0f172a !important;
    padding: 0 !important;
    margin: 0 !important;
    box-shadow: none !important;
    border: none !important;
  }
}
```

---

<a id="file-src-app-tsx"></a>
### 9. `src/App.tsx`

- **Path:** `src/App.tsx`
- **Category:** Source Code
- **Metrics:** 35 lines · 986 bytes

```typescript
import React, { useState } from 'react';
import { StudentProvider, useStudent } from './context/StudentContext';
import { LandingPageLayer } from './components/LandingPageLayer';
import { LoginLayer } from './components/LoginLayer';
import { DashboardLayer } from './components/DashboardLayer';
import { OnboardingModal } from './components/OnboardingModal';
const AppContent: React.FC = () => {
  const { currentLayer, isOnboardingOpen, setIsOnboardingOpen } = useStudent();

  return (
    <>
      {/* Three Architectural Layers */}
      {currentLayer === 'landing' && <LandingPageLayer />}

      {currentLayer === 'login' && <LoginLayer />}

      {currentLayer === 'dashboard' && <DashboardLayer />}

      {/* Global Modals */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </>
  );
};

export default function App() {
  return (
    <StudentProvider>
      <AppContent />
    </StudentProvider>
  );
}
```

---

<a id="file-src-types-index-ts"></a>
### 10. `src/types/index.ts`

- **Path:** `src/types/index.ts`
- **Category:** Core Logic / Engine
- **Metrics:** 154 lines · 4,050 bytes

```typescript
export type SubjectCategory = 'stem' | 'computing' | 'humanities' | 'commerce' | 'design' | 'general';

export interface SubjectRecord {
  id: string;
  name: string;
  category: SubjectCategory;
  marks: number; // 0 - 100
  confidence: number; // 1 - 100
  interest: number; // 1 - 100
  weeklyHours: number;
  consistency: number; // 1 - 100
}

export interface ProjectRecord {
  id: string;
  title: string;
  description: string;
  domain: string;
  technologies: string[];
}

export interface StudentProfile {
  id: string;
  name: string;
  avatar?: string;
  educationLevel: string; // 'High School / K-12' | 'Undergraduate' | 'Graduate' | 'Diploma'
  currentClass: string; // e.g. "Grade 11", "3rd Year B.Tech", "Final Year CS"
  targetCareer: string; // e.g. "Data Science / AI", "UX/UI Design", or "Undecided"
  weeklyStudyTime: number; // hours per week available
  preferredLearningStyle: 'visual' | 'practical_projects' | 'theoretical' | 'collaborative' | 'self_paced';
  preferredWorkStyle: 'analytical_problem_solving' | 'creative_design' | 'research_exploration' | 'team_leadership' | 'hands_on_building';
  subjects: SubjectRecord[];
  technicalSkills: string[];
  softSkills: string[];
  projects: ProjectRecord[];
  certifications: string[];
  hobbies: string[];
  careerInterests: string[];
  lastUpdated: string;
}

export interface SubjectStrengthScore {
  subject: string;
  category: SubjectCategory;
  marks: number;
  confidence: number;
  interest: number;
  consistency: number;
  weeklyHours: number;
  compositeScore: number; // 0 - 100
  isStrength: boolean;
  isWeakness: boolean;
  isHiddenStrength: boolean;
  explanation: string;
}

export interface DependencyNode {
  id: string;
  label: string;
  status: 'mastered' | 'in_progress' | 'gap' | 'target';
  level: number; // 1 = fundamental, 2 = intermediate, 3 = target topic
  description: string;
}

export interface KnowledgeGap {
  id: string;
  subject: string;
  severity: 'High' | 'Medium' | 'Low';
  rootCause: string;
  prerequisites: string[];
  dependencyTree: DependencyNode[];
  estimatedHours: number;
  importanceReason: string;
  actionItem: string;
}

export interface RoadmapTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: 'concept' | 'practice' | 'project' | 'review';
  timeEstimateHours: number;
}

export interface RoadmapWeek {
  weekNumber: number;
  focus: string;
  weeklyGoals: string;
  recommendedTopics: string[];
  practiceExercises: string[];
  miniProject: string;
  revisionTasks: string[];
  expectedOutcome: string;
  milestone: string;
  estimatedHours: number;
  tasks: RoadmapTask[];
}

export interface SkillGapItem {
  skill: string;
  currentStatus: 'Strong' | 'Developing' | 'Missing';
  priority: 'High' | 'Medium' | 'Low';
  action: string;
  learningTimeWeeks: number;
}

export interface RecommendedCareer {
  id: string;
  careerName: string;
  matchPercentage: number;
  fitReason: string;
  requiredSkills: string[];
  skillGaps: SkillGapItem[];
  coursesAndCerts: string[];
  suggestedProjects: string[];
  entryLevelRoles: string[];
  growthPath: string[];
  readinessScore: number;
  domain: string;
  salaryRange?: string;
  jobGrowthOutlook?: string;
}

export interface LearningDna {
  archetype: string;
  secondaryArchetype: string;
  tagline: string;
  description: string;
  traits: string[];
  radarDimensions: {
    attribute: string;
    score: number;
  }[];
}

export interface AnalysisResult {
  strengthIndex: number; // 0 - 100
  baseReadinessScore: number;
  adjustedReadinessScore: number; // accounts for completed roadmap tasks
  learningSummary: string;
  learningDna: LearningDna;
  subjectScores: SubjectStrengthScore[];
  coreStrengths: SubjectStrengthScore[];
  emergingStrengths: SubjectStrengthScore[];
  weakAreas: SubjectStrengthScore[];
  hiddenStrengths: SubjectStrengthScore[];
  criticalGaps: KnowledgeGap[];
  recommendedCareers: RecommendedCareer[];
  roadmap: RoadmapWeek[];
  aiEnhanced?: boolean;
  aiInsightsText?: string;
}
```

---

<a id="file-src-context-studentcontext-tsx"></a>
### 11. `src/context/StudentContext.tsx`

- **Path:** `src/context/StudentContext.tsx`
- **Category:** Core Logic / Engine
- **Metrics:** 450 lines · 15,267 bytes

```typescript
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
```

---

<a id="file-src-data-demoprofiles-ts"></a>
### 12. `src/data/demoProfiles.ts`

- **Path:** `src/data/demoProfiles.ts`
- **Category:** Core Logic / Engine
- **Metrics:** 331 lines · 9,426 bytes

```typescript
import { StudentProfile } from '../types';

export const DEMO_PROFILES: Record<string, StudentProfile> = {
  aarav: {
    id: 'student-aarav-sharma',
    name: 'Aarav Sharma',
    educationLevel: 'Undergraduate',
    currentClass: '2nd Year B.Tech Computer Science',
    targetCareer: 'Data Science / AI',
    weeklyStudyTime: 18,
    preferredLearningStyle: 'practical_projects',
    preferredWorkStyle: 'analytical_problem_solving',
    subjects: [
      {
        id: 'sub-math',
        name: 'Calculus & Linear Algebra',
        category: 'stem',
        marks: 94,
        confidence: 90,
        interest: 95,
        weeklyHours: 5,
        consistency: 92,
      },
      {
        id: 'sub-physics',
        name: 'Engineering Physics',
        category: 'stem',
        marks: 91,
        confidence: 86,
        interest: 88,
        weeklyHours: 4,
        consistency: 89,
      },
      {
        id: 'sub-prog',
        name: 'Python Programming',
        category: 'computing',
        marks: 71, // Average marks, but huge interest & confidence -> HIDDEN STRENGTH
        confidence: 88,
        interest: 96,
        weeklyHours: 4,
        consistency: 75,
      },
      {
        id: 'sub-stats',
        name: 'Probability & Statistics',
        category: 'stem',
        marks: 58, // Weak area
        confidence: 45,
        interest: 60,
        weeklyHours: 2,
        consistency: 50,
      },
      {
        id: 'sub-comm',
        name: 'Technical Writing & Presentation',
        category: 'humanities',
        marks: 62, // Weak area
        confidence: 40,
        interest: 45,
        weeklyHours: 1.5,
        consistency: 55,
      },
      {
        id: 'sub-ds',
        name: 'Data Structures & Algorithms',
        category: 'computing',
        marks: 80,
        confidence: 78,
        interest: 85,
        weeklyHours: 3.5,
        consistency: 82,
      },
    ],
    technicalSkills: [
      'Python (Beginner-Intermediate)',
      'Git & GitHub',
      'Basic SQL',
      'Linear Algebra',
      'Object Oriented Programming',
    ],
    softSkills: [
      'Analytical Thinking',
      'Curiosity',
      'Self-Learning',
    ],
    projects: [
      {
        id: 'proj-1',
        title: 'Campus Weather Predictor',
        description: 'Built a simple regression model using Python and Scikit-Learn to predict campus temperature trends.',
        domain: 'Data Science',
        technologies: ['Python', 'Pandas', 'Scikit-Learn'],
      },
      {
        id: 'proj-2',
        title: 'Physics Trajectory Simulator',
        description: 'Interactive 2D physics numerical calculation engine for projectile motion with air resistance.',
        domain: 'Simulation',
        technologies: ['Python', 'Matplotlib'],
      },
    ],
    certifications: [
      'CS50: Introduction to Computer Science (HarvardX)',
      'Mathematics for Machine Learning: Linear Algebra (Coursera)',
    ],
    hobbies: ['Robotics Club', 'Chess', 'Competitive Mathematics'],
    careerInterests: ['Machine Learning Engineer', 'Data Scientist', 'AI Research Assistant'],
    lastUpdated: '2026-10-15T14:30:00Z',
  },

  diya: {
    id: 'student-diya-patel',
    name: 'Diya Patel',
    educationLevel: 'Undergraduate',
    currentClass: '3rd Year B.Des / Interaction Design',
    targetCareer: 'UX/UI Design',
    weeklyStudyTime: 16,
    preferredLearningStyle: 'visual',
    preferredWorkStyle: 'creative_design',
    subjects: [
      {
        id: 'sub-ui',
        name: 'Visual & Interface Design',
        category: 'design',
        marks: 95,
        confidence: 96,
        interest: 98,
        weeklyHours: 6,
        consistency: 94,
      },
      {
        id: 'sub-comm',
        name: 'Design Communication & Storytelling',
        category: 'humanities',
        marks: 92,
        confidence: 90,
        interest: 93,
        weeklyHours: 4,
        consistency: 91,
      },
      {
        id: 'sub-user-res',
        name: 'Design Research & Usability Testing',
        category: 'design',
        marks: 88,
        confidence: 86,
        interest: 90,
        weeklyHours: 3.5,
        consistency: 86,
      },
      {
        id: 'sub-web',
        name: 'HTML/CSS & Frontend Basics',
        category: 'computing',
        marks: 70, // Hidden strength potential
        confidence: 82,
        interest: 88,
        weeklyHours: 3,
        consistency: 74,
      },
      {
        id: 'sub-math-quant',
        name: 'Design Metrics & Quantitative Analytics',
        category: 'commerce',
        marks: 56, // Weak area
        confidence: 42,
        interest: 48,
        weeklyHours: 1.5,
        consistency: 48,
      },
      {
        id: 'sub-ds',
        name: 'Information Architecture & Databases',
        category: 'computing',
        marks: 64, // Weak area
        confidence: 50,
        interest: 58,
        weeklyHours: 2,
        consistency: 60,
      },
    ],
    technicalSkills: [
      'Figma',
      'Adobe Illustrator',
      'Design Systems',
      'HTML/CSS',
      'Wireframing & Prototyping',
      'User Personas & Journey Mapping',
    ],
    softSkills: [
      'Empathy',
      'Presentation & Storytelling',
      'User-Centric Thinking',
      'Active Listening',
    ],
    projects: [
      {
        id: 'proj-diya-1',
        title: 'Accessible Healthcare Companion App',
        description: 'End-to-end UX research, wireframing, and interactive prototype for senior citizens navigating medication schedules.',
        domain: 'HealthTech UX',
        technologies: ['Figma', 'Miro', 'Protopie'],
      },
      {
        id: 'proj-diya-2',
        title: 'Local Artisan E-Commerce Redesign',
        description: 'Conducted field interviews with 15 craftspeople and revamped mobile checkout funnel to reduce cart abandonment.',
        domain: 'E-Commerce UX',
        technologies: ['Figma', 'UsabilityHub'],
      },
    ],
    certifications: [
      'Google UX Design Professional Certificate',
      'Interaction Design Foundation: Mobile UX Design',
    ],
    hobbies: ['Digital Illustration', 'Photography', 'Typography Zines'],
    careerInterests: ['UX/UI Designer', 'Product Designer', 'Design Strategist'],
    lastUpdated: '2026-10-14T11:20:00Z',
  },

  rohan: {
    id: 'student-rohan-verma',
    name: 'Rohan Verma',
    educationLevel: 'Undergraduate',
    currentClass: 'Final Year B.Tech Information Technology',
    targetCareer: 'Cybersecurity',
    weeklyStudyTime: 22,
    preferredLearningStyle: 'practical_projects',
    preferredWorkStyle: 'hands_on_building',
    subjects: [
      {
        id: 'sub-networks',
        name: 'Computer Networks & Protocols',
        category: 'computing',
        marks: 96,
        confidence: 94,
        interest: 98,
        weeklyHours: 6,
        consistency: 95,
      },
      {
        id: 'sub-os',
        name: 'Operating Systems & Linux Kernel',
        category: 'computing',
        marks: 92,
        confidence: 90,
        interest: 94,
        weeklyHours: 5,
        consistency: 91,
      },
      {
        id: 'sub-dsa',
        name: 'Data Structures & Algorithms in C/C++',
        category: 'computing',
        marks: 88,
        confidence: 85,
        interest: 86,
        weeklyHours: 4.5,
        consistency: 87,
      },
      {
        id: 'sub-crypto',
        name: 'Cryptography & Network Security',
        category: 'computing',
        marks: 85,
        confidence: 84,
        interest: 92,
        weeklyHours: 4,
        consistency: 85,
      },
      {
        id: 'sub-comm',
        name: 'Professional Communication & Team Dynamics',
        category: 'humanities',
        marks: 54, // Weak area
        confidence: 38,
        interest: 40,
        weeklyHours: 1,
        consistency: 45,
      },
      {
        id: 'sub-mgmt',
        name: 'Software Project Documentation & Governance',
        category: 'commerce',
        marks: 52, // Weak area
        confidence: 42,
        interest: 45,
        weeklyHours: 1.5,
        consistency: 48,
      },
    ],
    technicalSkills: [
      'Linux / Bash Scripting',
      'Wireshark & Packet Inspection',
      'Python for Automation',
      'C / C++',
      'Nmap & Penetration Testing Basics',
      'Docker & Containerization',
    ],
    softSkills: [
      'Root-Cause Debugging',
      'Attention to Detail',
      'Perseverance',
    ],
    projects: [
      {
        id: 'proj-rohan-1',
        title: 'Intrusion Detection Honeypot',
        description: 'Deployed an automated low-interaction honeypot on AWS that logs malicious SSH attempts and correlates IP threat intelligence.',
        domain: 'Cybersecurity',
        technologies: ['Python', 'Docker', 'AWS EC2', 'ELK Stack'],
      },
      {
        id: 'proj-rohan-2',
        title: 'Network Packet Analyzer CLI',
        description: 'Lightweight command-line utility in C++ that captures TCP/UDP packets and reports anomaly spikes.',
        domain: 'Networking',
        technologies: ['C++', 'libpcap', 'Linux'],
      },
    ],
    certifications: [
      'CompTIA Security+ Certified',
      'TryHackMe Top 5% Global Rank badge',
    ],
    hobbies: ['Capture The Flag (CTF) Challenges', 'Kernel Hacking', 'Reverse Engineering'],
    careerInterests: ['Security Analyst', 'Penetration Tester', 'DevSecOps Engineer'],
    lastUpdated: '2026-10-16T09:15:00Z',
  },
};
```

---

<a id="file-src-services-recommendationengine-ts"></a>
### 13. `src/services/recommendationEngine.ts`

- **Path:** `src/services/recommendationEngine.ts`
- **Category:** Core Logic / Engine
- **Metrics:** 777 lines · 48,222 bytes

```typescript
import {
  StudentProfile,
  SubjectStrengthScore,
  AnalysisResult,
  KnowledgeGap,
  RecommendedCareer,
  RoadmapWeek,
  LearningDna,
  DependencyNode,
} from '../types';

/**
 * PathFinder AI Rule-Based & AI-Assisted Recommendation Engine
 *
 * Implements the formula:
 * Subject Strength Score = 0.45 * Normalized Marks + 0.20 * Confidence + 0.20 * Interest + 0.15 * Consistency
 */

export function calculateSubjectScores(profile: StudentProfile): SubjectStrengthScore[] {
  return profile.subjects.map((sub) => {
    const normalizedMarks = Math.min(100, Math.max(0, sub.marks));
    const normalizedConfidence = Math.min(100, Math.max(0, sub.confidence));
    const normalizedInterest = Math.min(100, Math.max(0, sub.interest));
    const normalizedConsistency = Math.min(100, Math.max(0, sub.consistency || 70));

    const compositeScore = Math.round(
      0.45 * normalizedMarks +
      0.20 * normalizedConfidence +
      0.20 * normalizedInterest +
      0.15 * normalizedConsistency
    );

    // Hidden strength condition: High interest and confidence, but suppressed test marks
    const isHiddenStrength = normalizedInterest >= 80 && normalizedConfidence >= 75 && normalizedMarks < 76;
    const isStrength = compositeScore >= 80;
    const isWeakness = compositeScore < 66 || normalizedMarks < 65;

    let explanation = '';
    if (isHiddenStrength) {
      explanation = `High passion (${normalizedInterest}%) and self-confidence (${normalizedConfidence}%) outpace test scores (${normalizedMarks}%). This indicates latent capability ready to bloom with hands-on practice.`;
    } else if (isStrength) {
      explanation = `Exemplary performance (${normalizedMarks}%) reinforced by steady consistency (${normalizedConsistency}%) and strong engagement.`;
    } else if (isWeakness) {
      explanation = `Low marks (${normalizedMarks}%) or low confidence (${normalizedConfidence}%) suggest missing prerequisite conceptual scaffolding.`;
    } else {
      explanation = `Solid emerging aptitude (${compositeScore}% composite) with room for targeted mastery.`;
    }

    return {
      subject: sub.name,
      category: sub.category,
      marks: normalizedMarks,
      confidence: normalizedConfidence,
      interest: normalizedInterest,
      consistency: normalizedConsistency,
      weeklyHours: sub.weeklyHours,
      compositeScore,
      isStrength,
      isWeakness,
      isHiddenStrength,
      explanation,
    };
  });
}

export function detectKnowledgeGaps(profile: StudentProfile, subjectScores: SubjectStrengthScore[]): KnowledgeGap[] {
  const gaps: KnowledgeGap[] = [];

  // Knowledge base of known academic prerequisite maps
  const gapKnowledgeBase: Record<
    string,
    {
      rootCause: string;
      prerequisites: string[];
      importanceReason: string;
      actionItem: string;
      hours: number;
      tree: DependencyNode[];
    }
  > = {
    statistics: {
      rootCause: 'Weak probability foundations, confusion between discrete vs continuous distributions, and lack of real-world dataset intuition.',
      prerequisites: ['Basic Probability & Combinatorics', 'Descriptive Statistics & Mean/Variance', 'Hypothesis Testing & p-values'],
      importanceReason: 'Foundational for evaluating machine learning algorithms, validating data models, and making evidence-based decisions.',
      actionItem: 'Complete interactive visualizations of standard distributions and solve 15 applied hypothesis testing problems.',
      hours: 14,
      tree: [
        { id: 'p1', label: 'Algebra & Functions', status: 'mastered', level: 1, description: 'Core algebraic manipulations' },
        { id: 'p2', label: 'Probability Basics', status: 'gap', level: 1, description: 'Sample spaces and conditional probability' },
        { id: 'p3', label: 'Normal & Binomial Distributions', status: 'gap', level: 2, description: 'PDF, CDF, and z-score calculations' },
        { id: 'p4', label: 'Statistical Inference', status: 'target', level: 3, description: 'Confidence intervals & regression models' },
      ],
    },
    communication: {
      rootCause: 'Limited structured presentation practice, reluctance in technical documentation, and difficulty conveying complex ideas to non-technical stakeholders.',
      prerequisites: ['Executive Summary Writing', 'Slide Deck Storyboarding', 'Active Listening & Public Q&A'],
      importanceReason: '70% of tech leaders cite communication as the #1 differentiator between intermediate and senior engineering talent.',
      actionItem: 'Draft a 1-page design document for your favorite project and deliver a 3-minute video presentation.',
      hours: 10,
      tree: [
        { id: 'c1', label: 'Grammar & Clarity', status: 'mastered', level: 1, description: 'Foundational syntax and clarity' },
        { id: 'c2', label: 'Structured Tech Writing', status: 'gap', level: 2, description: 'Architecture Decision Records & Readmes' },
        { id: 'c3', label: 'Verbal Delivery & Pitching', status: 'gap', level: 2, description: 'Spoken cadence, pacing, and eye contact' },
        { id: 'c4', label: 'Cross-Functional Influence', status: 'target', level: 3, description: 'Persuading non-technical partners' },
      ],
    },
    python: {
      rootCause: 'Knowledge gap in modern idiomatic Python (list comprehensions, generators, decorators) and object-oriented architecture.',
      prerequisites: ['Python Data Structures (Lists, Dicts, Sets)', 'Functions & Scopes', 'Object Oriented Programming'],
      importanceReason: 'The lingua franca of modern artificial intelligence, backend scripting, and automated cloud workflows.',
      actionItem: 'Build 2 small end-to-end command line utilities with automated test suites.',
      hours: 16,
      tree: [
        { id: 'py1', label: 'Syntax & Control Flow', status: 'mastered', level: 1, description: 'Loops, conditionals, basic variables' },
        { id: 'py2', label: 'OOP & Modular Code', status: 'in_progress', level: 2, description: 'Classes, inheritance, and modules' },
        { id: 'py3', label: 'Data Manipulation (Pandas)', status: 'gap', level: 2, description: 'DataFrames, joins, and cleaning' },
        { id: 'py4', label: 'Production ML Pipelines', status: 'target', level: 3, description: 'Packaging and deploying models' },
      ],
    },
    physics: {
      rootCause: 'Struggling with multi-step calculus-based derivations, vector decomposition, and unit dimensional analysis under exam time pressure.',
      prerequisites: ['Differential & Integral Calculus', 'Vector Trigonometry', 'Dimensional Analysis'],
      importanceReason: 'Develops first-principles physical intuition essential for robotics, graphics engineering, and hardware systems.',
      actionItem: 'Deconstruct 10 complex multi-force free body diagrams step-by-step using vector components.',
      hours: 12,
      tree: [
        { id: 'ph1', label: 'Algebraic Kinematics', status: 'mastered', level: 1, description: 'Newtonian equations of motion' },
        { id: 'ph2', label: 'Vector Free-Body Diagrams', status: 'gap', level: 2, description: 'Force resolution in 2D and 3D' },
        { id: 'ph3', label: 'Calculus of Fields', status: 'gap', level: 2, description: 'Electric, magnetic, and gravitational flux' },
        { id: 'ph4', label: 'Lagrangian & Modern Physics', status: 'target', level: 3, description: 'Advanced energy formulations' },
      ],
    },
    design_analytics: {
      rootCause: 'Disconnection between aesthetic visual layout and quantitative product analytics (conversion funnels, bounce rates, A/B testing).',
      prerequisites: ['Basic Product Metrics (CTR, CAC, LTV)', 'Figma Analytics Plugins', 'Usability Benchmark Testing'],
      importanceReason: 'Modern UX design demands evidence-based validation to align creative decisions with business growth.',
      actionItem: 'Set up an A/B testing rubric for a mobile checkout flow and calculate sample size requirements.',
      hours: 11,
      tree: [
        { id: 'da1', label: 'Visual Hierarchy & Typography', status: 'mastered', level: 1, description: 'Grid systems and color theory' },
        { id: 'da2', label: 'Usability Heuristics', status: 'mastered', level: 2, description: 'Nielsen Norman 10 heuristics' },
        { id: 'da3', label: 'Funnel & Retention Analytics', status: 'gap', level: 2, description: 'Cohort analysis and drop-off rates' },
        { id: 'da4', label: 'Data-Driven Design Strategy', status: 'target', level: 3, description: 'Executive design leadership' },
      ],
    },
    documentation: {
      rootCause: 'Treating code documentation as an afterthought; unfamiliarity with Markdown specs, Swagger/OpenAPI, and architectural diagrams.',
      prerequisites: ['Markdown & Mermaid.js', 'API Contract Specification', 'Threat Modeling Documentation'],
      importanceReason: 'Undocumented systems create critical security liabilities and block cross-team onboarding.',
      actionItem: 'Write a comprehensive RFC (Request for Comments) and network topology map for your personal projects.',
      hours: 9,
      tree: [
        { id: 'doc1', label: 'Inline Code Comments', status: 'mastered', level: 1, description: 'Clean function docstrings' },
        { id: 'doc2', label: 'System Architecture Diagrams', status: 'gap', level: 2, description: 'C4 model & data flow diagrams' },
        { id: 'doc3', label: 'Security Compliance Audits', status: 'gap', level: 2, description: 'SOC2 & ISO 27001 documentation' },
        { id: 'doc4', label: 'Technical Whitepapers', status: 'target', level: 3, description: 'Peer-reviewed research and patents' },
      ],
    },
  };

  // Inspect each weak or hidden strength subject
  subjectScores.forEach((sub) => {
    const lowerName = sub.subject.toLowerCase();
    let matchedGapKey = '';

    if (lowerName.includes('stat') || lowerName.includes('probab')) matchedGapKey = 'statistics';
    else if (lowerName.includes('comm') || lowerName.includes('writing') || lowerName.includes('presentation')) matchedGapKey = 'communication';
    else if (lowerName.includes('python') || lowerName.includes('prog')) matchedGapKey = 'python';
    else if (lowerName.includes('physic') || lowerName.includes('circuit')) matchedGapKey = 'physics';
    else if (lowerName.includes('quant') || lowerName.includes('metric') || lowerName.includes('market')) matchedGapKey = 'design_analytics';
    else if (lowerName.includes('doc') || lowerName.includes('govern') || lowerName.includes('mgmt')) matchedGapKey = 'documentation';

    if (matchedGapKey && (sub.isWeakness || sub.isHiddenStrength || sub.marks < 75)) {
      const info = gapKnowledgeBase[matchedGapKey];
      gaps.push({
        id: `gap-${matchedGapKey}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        subject: sub.subject,
        severity: sub.marks < 60 ? 'High' : sub.marks < 72 ? 'Medium' : 'Low',
        rootCause: info.rootCause,
        prerequisites: info.prerequisites,
        dependencyTree: info.tree,
        estimatedHours: info.hours,
        importanceReason: info.importanceReason,
        actionItem: info.actionItem,
      });
    }
  });

  // If no gaps triggered yet, add a proactive gap based on the student's target career
  if (gaps.length === 0) {
    const fallback = gapKnowledgeBase['communication'];
    gaps.push({
      id: 'gap-default-comm',
      subject: 'Executive Communication & Technical Storytelling',
      severity: 'Medium',
      rootCause: fallback.rootCause,
      prerequisites: fallback.prerequisites,
      dependencyTree: fallback.tree,
      estimatedHours: fallback.hours,
      importanceReason: fallback.importanceReason,
      actionItem: fallback.actionItem,
    });
  }

  return gaps;
}

export function determineLearningDna(profile: StudentProfile, subjectScores: SubjectStrengthScore[]): LearningDna {
  let mathScore = 70;
  let computingScore = 70;
  let designScore = 60;
  let commScore = 60;
  let researchScore = 65;
  let practicalScore = 75;

  subjectScores.forEach((s) => {
    if (s.category === 'stem') mathScore = Math.max(mathScore, s.compositeScore);
    if (s.category === 'computing') computingScore = Math.max(computingScore, s.compositeScore);
    if (s.category === 'design') designScore = Math.max(designScore, s.compositeScore);
    if (s.category === 'humanities') commScore = Math.max(commScore, s.compositeScore);
  });

  // Adjust by student skills & projects
  if (profile.projects.length >= 2) practicalScore += 15;
  if (profile.technicalSkills.some((sk) => sk.toLowerCase().includes('figma') || sk.toLowerCase().includes('design'))) designScore += 25;
  if (profile.technicalSkills.some((sk) => sk.toLowerCase().includes('python') || sk.toLowerCase().includes('c++') || sk.toLowerCase().includes('linux'))) computingScore += 15;
  if (profile.softSkills.some((sk) => sk.toLowerCase().includes('analytical') || sk.toLowerCase().includes('curiosity'))) researchScore += 15;
  if (profile.softSkills.some((sk) => sk.toLowerCase().includes('empathy') || sk.toLowerCase().includes('presentation'))) commScore += 20;

  mathScore = Math.min(99, mathScore);
  computingScore = Math.min(99, computingScore);
  designScore = Math.min(99, designScore);
  commScore = Math.min(99, commScore);
  researchScore = Math.min(99, researchScore);
  practicalScore = Math.min(99, practicalScore);

  let archetype = 'Analytical Builder';
  let secondaryArchetype = 'Applied Researcher';
  let tagline = 'Driven by rigorous reasoning, mathematical logic, and hands-on system building.';
  let description = 'You excel when translating complex theoretical principles into tangible software or physical artifacts. You find satisfaction in discovering root causes rather than settling for surface-level fixes.';
  const traits = ['First-Principles Reasoning', 'Iterative Experimentation', 'High Cognitive Stamina', 'Systemic Pattern Recognition'];

  if (designScore > 85 && commScore > 80) {
    archetype = 'Human-Centered Synthesizer';
    secondaryArchetype = 'Creative Strategist';
    tagline = 'Deeply empathetic creator bridging emotional design nuances with functional digital utility.';
    description = 'Your strength lies in feeling what the user experiences before they even articulate it. You marry aesthetics with purpose, crafting interfaces that are as intuitive as they are visually striking.';
    traits.splice(0, traits.length, 'Empathic Observation', 'Visual Storytelling', 'Iterative Prototyping', 'Cross-Disciplinary Translation');
  } else if (computingScore > 88 && practicalScore > 85 && commScore < 70) {
    archetype = 'Systems Architect & Hacker';
    secondaryArchetype = 'Deep-Stack Builder';
    tagline = 'Relentless computational problem-solver with an instinct for low-level mechanics and security.';
    description = 'You possess extraordinary patience for complex systems, protocols, and debugging. Where others see frustrating roadblocks, you see an intriguing puzzle waiting to be unraveled.';
    traits.splice(0, traits.length, 'Root-Cause Inquest', 'Algorithmic Intuition', 'Defensive Mindset', 'Autonomous Execution');
  } else if (mathScore > 85 && computingScore > 80) {
    archetype = 'Computational Intelligence Pioneer';
    secondaryArchetype = 'Algorithmic Strategist';
    tagline = 'Balanced blend of advanced mathematical rigor and algorithmic execution.';
    description = 'You are positioned directly at the frontier of artificial intelligence, where deep abstract mathematical formulas meet high-performance computing pipelines.';
    traits.splice(0, traits.length, 'Mathematical Scaffolding', 'Probabilistic Intuition', 'Model Validation', 'Systematic Discovery');
  }

  return {
    archetype,
    secondaryArchetype,
    tagline,
    description,
    traits,
    radarDimensions: [
      { attribute: 'Analytical Rigor', score: mathScore },
      { attribute: 'System Architecture', score: computingScore },
      { attribute: 'Creative Intuition', score: designScore },
      { attribute: 'Strategic Communication', score: commScore },
      { attribute: 'Research Depth', score: researchScore },
      { attribute: 'Practical Execution', score: practicalScore },
    ],
  };
}

export function recommendCareers(
  profile: StudentProfile,
  subjectScores: SubjectStrengthScore[],
  dna: LearningDna
): RecommendedCareer[] {
  // Comprehensive catalog of 10 industry career pathways
  const careerCatalog: RecommendedCareer[] = [
    {
      id: 'career-ai-datascience',
      careerName: 'Data Science / AI Engineer',
      domain: 'Artificial Intelligence & Big Data',
      salaryRange: '$115,000 – $185,000',
      jobGrowthOutlook: '+36% (Much faster than average)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Linear Algebra & Calculus', 'Python Programming', 'Probability & Statistics', 'Machine Learning Algorithms', 'SQL & Data Wrangling', 'Model Deployment'],
      skillGaps: [
        { skill: 'Linear Algebra', currentStatus: 'Strong', priority: 'Low', action: 'Maintain through advanced matrix decomposition exercises', learningTimeWeeks: 1 },
        { skill: 'Python', currentStatus: 'Developing', priority: 'Medium', action: 'Transition from basic scripting to production NumPy and Pandas vectorization', learningTimeWeeks: 3 },
        { skill: 'Probability & Statistics', currentStatus: 'Missing', priority: 'High', action: 'Study hypothesis testing, Bayes theorem, and statistical distributions', learningTimeWeeks: 4 },
        { skill: 'SQL & Database Architecture', currentStatus: 'Developing', priority: 'Medium', action: 'Practice multi-table joins, CTEs, and window functions on LeetCode Database', learningTimeWeeks: 2 },
        { skill: 'Machine Learning Models', currentStatus: 'Developing', priority: 'High', action: 'Build regression and classification pipelines using Scikit-Learn', learningTimeWeeks: 3 },
      ],
      coursesAndCerts: [
        'DeepLearning.AI: Machine Learning Specialization (Andrew Ng)',
        'Mathematics for Machine Learning & Data Science (Coursera)',
        'Fast.ai: Practical Deep Learning for Coders',
      ],
      suggestedProjects: [
        'End-to-end house price prediction model with feature engineering and FastAPI deployment',
        'Customer churn predictor with SHAP explainability dashboard',
        'Academic performance early-warning classifier for universities',
      ],
      entryLevelRoles: ['Associate Data Scientist', 'Junior Machine Learning Engineer', 'Data Analytics Specialist'],
      growthPath: ['Junior AI Specialist', 'Senior ML Engineer', 'Lead Data Scientist', 'VP of AI Research'],
    },
    {
      id: 'career-ux-design',
      careerName: 'Product & UX/UI Designer',
      domain: 'Design & Human-Computer Interaction',
      salaryRange: '$92,000 – $155,000',
      jobGrowthOutlook: '+23% (High market demand)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Wireframing & Prototyping (Figma)', 'Design Systems & Tokens', 'User Research & Interviews', 'Usability Testing', 'Information Architecture', 'Basic HTML/CSS'],
      skillGaps: [
        { skill: 'Figma & Visual Craft', currentStatus: 'Strong', priority: 'Low', action: 'Continue honing micro-interactions and auto-layout mastery', learningTimeWeeks: 1 },
        { skill: 'User Research & Personas', currentStatus: 'Strong', priority: 'Low', action: 'Synthesize generative user interview insights into affinity diagrams', learningTimeWeeks: 1 },
        { skill: 'Quantitative Analytics & A/B Testing', currentStatus: 'Missing', priority: 'High', action: 'Learn how to read Google Analytics 4, Mixpanel funnels, and test metrics', learningTimeWeeks: 3 },
        { skill: 'Frontend Feasibility (CSS Flex/Grid)', currentStatus: 'Developing', priority: 'Medium', action: 'Build an interactive responsive portfolio in Tailwind CSS', learningTimeWeeks: 2 },
      ],
      coursesAndCerts: [
        'Google UX Design Professional Certificate',
        'Interaction Design Foundation (IxDF) Certification',
        'Refactoring UI by Adam Wathan & Steve Schoger',
      ],
      suggestedProjects: [
        'Accessible telemedicine web portal with high-contrast accessibility compliance',
        'Micro-investment mobile app onboarding flow with measurable 25% drop-off reduction',
        'Design System UI Kit with interactive Figma variables and auto-layout',
      ],
      entryLevelRoles: ['Junior UX Designer', 'UI / Visual Designer', 'Product Design Associate'],
      growthPath: ['Product Designer', 'Senior UX Architect', 'Staff Product Designer', 'Head of Design'],
    },
    {
      id: 'career-cybersecurity',
      careerName: 'Cybersecurity & Threat Analyst',
      domain: 'Information Security & Infrastructure',
      salaryRange: '$105,000 – $170,000',
      jobGrowthOutlook: '+32% (Critical workforce shortage)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Network Protocols (TCP/IP, DNS, SSL)', 'Linux Command Line & Scripting', 'Packet Inspection (Wireshark)', 'Vulnerability Assessment', 'Cryptography Fundamentals', 'Security Compliance & Reporting'],
      skillGaps: [
        { skill: 'Network Protocols & Packet Capture', currentStatus: 'Strong', priority: 'Low', action: 'Keep analyzing real-world PCAP dumps in Wireshark', learningTimeWeeks: 1 },
        { skill: 'Linux & Scripting', currentStatus: 'Strong', priority: 'Low', action: 'Write automated bash and Python incident response playbooks', learningTimeWeeks: 2 },
        { skill: 'Technical Documentation & Reporting', currentStatus: 'Missing', priority: 'High', action: 'Learn to write formal SOC incident tickets and executive vulnerability summaries', learningTimeWeeks: 3 },
        { skill: 'Cloud Security (AWS IAM & VPC)', currentStatus: 'Developing', priority: 'Medium', action: 'Configure least-privilege IAM policies and security groups on AWS', learningTimeWeeks: 3 },
      ],
      coursesAndCerts: [
        'CompTIA Security+ / CySA+',
        'Offensive Security Certified Professional (OSCP)',
        'Certified Information Systems Security Professional (CISSP)',
      ],
      suggestedProjects: [
        'Automated honeypot sensor network logging malicious brute-force attempts to an ELK stack',
        'Custom port scanner and vulnerability checker in C++ and Python',
        'Zero-trust network configuration for a mock enterprise organization',
      ],
      entryLevelRoles: ['SOC Analyst Level 1', 'Junior Penetration Tester', 'Information Security Associate'],
      growthPath: ['Security Engineer', 'Senior Penetration Tester', 'Lead Incident Responder', 'Chief Information Security Officer (CISO)'],
    },
    {
      id: 'career-software-eng',
      careerName: 'Full-Stack Software Engineer',
      domain: 'Software Architecture & Web Technologies',
      salaryRange: '$108,000 – $175,000',
      jobGrowthOutlook: '+25% (Sustained demand)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Data Structures & Algorithms', 'TypeScript & React', 'Node.js / Express APIs', 'Relational & NoSQL Databases', 'Git Version Control & CI/CD', 'System Design Basics'],
      skillGaps: [
        { skill: 'Data Structures', currentStatus: 'Strong', priority: 'Low', action: 'Practice tree traversals and dynamic programming problems', learningTimeWeeks: 2 },
        { skill: 'REST & GraphQL APIs', currentStatus: 'Developing', priority: 'Medium', action: 'Build microservices with robust error handling and JWT authentication', learningTimeWeeks: 2 },
        { skill: 'CI/CD & Cloud Deployment', currentStatus: 'Developing', priority: 'Medium', action: 'Deploy containerized web services via Docker and GitHub Actions', learningTimeWeeks: 2 },
      ],
      coursesAndCerts: [
        'Full Stack Open (University of Helsinki)',
        'AWS Certified Developer Associate',
        'Frontend Masters: Professional TypeScript Track',
      ],
      suggestedProjects: [
        'Collaborative Kanban board with real-time WebSockets and optimistic UI',
        'API rate limiter and caching layer built with Redis and Express',
        'SaaS subscription billing engine with Stripe webhook integrations',
      ],
      entryLevelRoles: ['Associate Software Engineer', 'Junior Frontend Developer', 'Junior Backend Engineer'],
      growthPath: ['Software Engineer II', 'Senior Full-Stack Engineer', 'Staff Engineer', 'Engineering Manager / CTO'],
    },
    {
      id: 'career-product-management',
      careerName: 'Technical Product Manager',
      domain: 'Product Strategy & Technology Leadership',
      salaryRange: '$110,000 – $180,000',
      jobGrowthOutlook: '+18% (Executive track)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Product Strategy & Vision', 'Data Analysis & Metrics', 'Agile / Scrum Methodologies', 'User Story Mapping', 'Technical Architecture Fluency', 'Stakeholder Management'],
      skillGaps: [
        { skill: 'Technical Fluency', currentStatus: 'Strong', priority: 'Low', action: 'Leverage engineering background to bridge dev and business requirements', learningTimeWeeks: 1 },
        { skill: 'Executive Communication', currentStatus: 'Developing', priority: 'High', action: 'Practice PRFAQ and 1-page memo writing frameworks (Amazon style)', learningTimeWeeks: 3 },
        { skill: 'Product Analytics & Retention', currentStatus: 'Developing', priority: 'High', action: 'Analyze churn cohorts and design experiments to boost north star metrics', learningTimeWeeks: 2 },
      ],
      coursesAndCerts: [
        'Product School: Product Manager Certificate (PMC)',
        'Reforge: Product Strategy & Growth Series',
        'Scrum.org: Professional Scrum Product Owner (PSPO)',
      ],
      suggestedProjects: [
        'Complete Product Requirement Document (PRD) for an AI-powered student assistant',
        'Feature prioritization matrix and roadmap simulation for a mobile banking app',
        'Competitor teardown and user journey audit of major SaaS platforms',
      ],
      entryLevelRoles: ['Associate Product Manager (APM)', 'Product Analyst', 'Junior Product Owner'],
      growthPath: ['Product Manager', 'Senior PM', 'Director of Product', 'Chief Product Officer (CPO)'],
    },
    {
      id: 'career-quantitative-finance',
      careerName: 'Quantitative Analyst / Fintech Engineer',
      domain: 'Computational Finance & Algorithmic Trading',
      salaryRange: '$130,000 – $220,000',
      jobGrowthOutlook: '+20% (High compensation)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Advanced Calculus & Linear Algebra', 'Stochastic Modeling', 'Python / C++ for High Performance', 'Time Series Forecasting', 'Financial Derivatives Knowledge', 'Risk Management'],
      skillGaps: [
        { skill: 'Linear Algebra & Calculus', currentStatus: 'Strong', priority: 'Low', action: 'Expand into stochastic calculus and Monte Carlo simulations', learningTimeWeeks: 2 },
        { skill: 'Statistics & Time Series', currentStatus: 'Developing', priority: 'High', action: 'Master ARIMA, GARCH, and autoregressive models for financial assets', learningTimeWeeks: 3 },
        { skill: 'Financial Markets Domain', currentStatus: 'Missing', priority: 'Medium', action: 'Study option pricing models (Black-Scholes) and order book mechanics', learningTimeWeeks: 4 },
      ],
      coursesAndCerts: [
        'CQF (Certificate in Quantitative Finance)',
        'Coursera: Computational Investing (Georgia Tech)',
        'MIT OpenCourseWare: Mathematical Methods for Financial Engineers',
      ],
      suggestedProjects: [
        'Backtesting framework for an algorithmic momentum trading strategy in Python',
        'Monte Carlo option pricer with volatility surface visualization',
        'Crypto arbitrage detection pipeline with real-time exchange order books',
      ],
      entryLevelRoles: ['Junior Quantitative Analyst', 'Financial Risk Analyst', 'Fintech Data Engineer'],
      growthPath: ['Quantitative Strategist', 'Senior Quant Portfolio Manager', 'Partner / Chief Investment Officer'],
    },
    {
      id: 'career-cloud-devops',
      careerName: 'Cloud Solutions & DevOps Engineer',
      domain: 'Cloud Architecture & Reliability',
      salaryRange: '$112,000 – $178,000',
      jobGrowthOutlook: '+28% (High industry expansion)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Linux System Administration', 'Docker & Kubernetes', 'Infrastructure as Code (Terraform)', 'CI/CD Pipelines', 'Cloud Providers (AWS / GCP / Azure)', 'Monitoring & Observability'],
      skillGaps: [
        { skill: 'Linux & Scripting', currentStatus: 'Strong', priority: 'Low', action: 'Deepen container isolation (cgroups, namespaces) knowledge', learningTimeWeeks: 1 },
        { skill: 'Terraform & IaC', currentStatus: 'Developing', priority: 'High', action: 'Provision VPC, subnets, and autoscaling clusters declaratively', learningTimeWeeks: 3 },
        { skill: 'Kubernetes Orchestration', currentStatus: 'Developing', priority: 'High', action: 'Deploy multi-pod stateful applications with ingress controllers', learningTimeWeeks: 3 },
      ],
      coursesAndCerts: [
        'AWS Certified Solutions Architect Associate',
        'Certified Kubernetes Administrator (CKA)',
        'HashiCorp Certified: Terraform Associate',
      ],
      suggestedProjects: [
        'Automated GitOps pipeline deploying a microservice cluster with ArgoCD and Helm',
        'High-availability disaster recovery setup across two cloud availability zones',
        'Prometheus & Grafana telemetry dashboard monitoring latency and error rates',
      ],
      entryLevelRoles: ['Junior Cloud Engineer', 'DevOps Associate', 'Site Reliability Engineer I'],
      growthPath: ['Senior DevOps Engineer', 'Cloud Architect', 'Principal SRE', 'Head of Infrastructure'],
    },
    {
      id: 'career-research-academia',
      careerName: 'Research Scientist / Academic Specialist',
      domain: 'Scientific Discovery & Deep Tech',
      salaryRange: '$90,000 – $160,000',
      jobGrowthOutlook: '+14% (Stable intellectual career)',
      matchPercentage: 0,
      fitReason: '',
      readinessScore: 0,
      requiredSkills: ['Literature Review & Synthesis', 'Experimental Design', 'Mathematical Modeling', 'Academic Publishing & LaTeX', 'Statistical Validation', 'Grant Writing'],
      skillGaps: [
        { skill: 'Mathematical Modeling', currentStatus: 'Strong', priority: 'Low', action: 'Apply formal proofs to new algorithmic bounds', learningTimeWeeks: 2 },
        { skill: 'Academic Paper Writing', currentStatus: 'Developing', priority: 'High', action: 'Draft preprint manuscript and format citations using BibTeX', learningTimeWeeks: 3 },
        { skill: 'Peer Review & Critique', currentStatus: 'Developing', priority: 'Medium', action: 'Analyze 5 recent NeurIPS / ACM papers and write critique summaries', learningTimeWeeks: 2 },
      ],
      coursesAndCerts: [
        'Stanford Online: Writing in the Sciences',
        'NIH / NSF Grant Proposal Preparation Workshop',
        'IEEE Author Craft Workshops',
      ],
      suggestedProjects: [
        'Novel benchmark comparison paper submitted to an undergraduate symposium',
        'Replication of an influential scientific paper with open-source code release',
        'Comprehensive survey paper summarizing breakthroughs in autonomous systems',
      ],
      entryLevelRoles: ['Graduate Research Assistant', 'Junior Scientific Analyst', 'Research Fellow'],
      growthPath: ['Postdoctoral Fellow', 'Assistant Professor / Senior Research Scientist', 'Principal Investigator', 'Department Chair'],
    },
  ];

  // Calculate tailored match scores
  return careerCatalog
    .map((career) => {
      let score = 55; // baseline

      // Target career match bonus
      if (profile.targetCareer && career.careerName.toLowerCase().includes(profile.targetCareer.toLowerCase().slice(0, 5))) {
        score += 20;
      }

      // Archetype alignment
      if (dna.archetype.includes('Computational') && (career.id.includes('ai') || career.id.includes('finance'))) {
        score += 15;
      }
      if (dna.archetype.includes('Synthesizer') && (career.id.includes('ux') || career.id.includes('product'))) {
        score += 20;
      }
      if (dna.archetype.includes('Architect') && (career.id.includes('cyber') || career.id.includes('devops') || career.id.includes('software'))) {
        score += 18;
      }

      // Subject-specific bonuses
      const mathSub = subjectScores.find((s) => s.category === 'stem');
      const compSub = subjectScores.find((s) => s.category === 'computing');
      const designSub = subjectScores.find((s) => s.category === 'design');
      const commSub = subjectScores.find((s) => s.category === 'humanities');

      if (career.id.includes('ai')) {
        if (mathSub && mathSub.compositeScore > 85) score += 10;
        if (compSub && compSub.interest > 85) score += 8;
        career.fitReason = `High mathematics aptitude (${mathSub?.marks || 90}%), demonstrated project-building passion, and an analytical profile make AI & Data Science a top natural fit.`;
      } else if (career.id.includes('ux')) {
        if (designSub && designSub.compositeScore > 80) score += 15;
        if (commSub && commSub.compositeScore > 80) score += 8;
        career.fitReason = `Exceptional visual design sensitivity (${designSub?.marks || 92}%) and empathetic communication create the ideal foundation for human-centered product craft.`;
      } else if (career.id.includes('cyber')) {
        if (compSub && compSub.compositeScore > 85) score += 14;
        career.fitReason = `Outstanding performance in networking and low-level computer systems coupled with a natural investigative inclination for systems defense.`;
      } else if (career.id.includes('software')) {
        if (compSub && compSub.compositeScore > 80) score += 12;
        career.fitReason = `Well-rounded programming logic and structured problem solving with scalable product development opportunities across modern stacks.`;
      } else if (career.id.includes('finance')) {
        if (mathSub && mathSub.compositeScore > 88) score += 12;
        career.fitReason = `Top-tier quantitative calculation skills and mathematical modeling make algorithmic finance and fintech engineering highly lucrative and intellectually rewarding.`;
      } else if (career.id.includes('product')) {
        if (commSub && commSub.compositeScore > 75) score += 10;
        career.fitReason = `Strategic ability to synthesize customer requirements, business outcomes, and technological execution into a coherent product roadmap.`;
      } else if (career.id.includes('devops')) {
        if (compSub && compSub.compositeScore > 80) score += 10;
        career.fitReason = `Knack for automation, continuous delivery pipelines, and reliable cloud operations that keep modern enterprise tech running smoothly.`;
      } else if (career.id.includes('research')) {
        if (mathSub && mathSub.compositeScore > 85) score += 10;
        career.fitReason = `Deep intellectual curiosity, first-principles logic, and appetite for pushing past the boundaries of textbook knowledge.`;
      }

      // Check projects match
      if (profile.projects.some((p) => career.careerName.toLowerCase().includes(p.domain.toLowerCase()))) {
        score += 8;
      }

      // Clamp match percentage between 60 and 98
      const matchPercentage = Math.min(98, Math.max(62, Math.round(score)));
      const readinessScore = Math.max(45, Math.min(92, Math.round(matchPercentage * 0.85)));

      return {
        ...career,
        matchPercentage,
        readinessScore,
      };
    })
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}

export function generateRoadmap(
  profile: StudentProfile,
  subjectScores: SubjectStrengthScore[],
  gaps: KnowledgeGap[],
  topCareer: RecommendedCareer
): RoadmapWeek[] {
  const topWeakness = gaps[0]?.subject || 'Fundamental Concepts';
  const secondaryWeakness = gaps[1]?.subject || 'Applied Systems';

  const weeks: RoadmapWeek[] = [
    {
      weekNumber: 1,
      focus: `Foundations & Diagnostics: ${topWeakness}`,
      weeklyGoals: `Identify and isolate fundamental misconceptions in ${topWeakness}. Establish daily 45-minute revision routines.`,
      recommendedTopics: [
        `${topWeakness} Core Principles & Definitions`,
        'Step-by-step problem deconstruction without shortcuts',
        'Formulas, unit systems, and common pitfall analysis',
      ],
      practiceExercises: [
        'Complete 15 foundational problem sets on interactive sandboxes',
        'Construct a 1-page visual summary cheat-sheet',
        'Self-test with instant feedback quiz (target: >85% accuracy)',
      ],
      miniProject: `Diagnostic Portfolio: Document 5 hard problems in ${topWeakness} with annotated step-by-step resolutions.`,
      revisionTasks: [
        'Review high school prerequisites',
        'Organize digital flashcards for key definitions',
      ],
      expectedOutcome: 'Zero hesitation on core definitions and baseline arithmetic or syntax.',
      milestone: 'Mastery of Foundational Syntax & Rules',
      estimatedHours: Math.min(profile.weeklyStudyTime, 12),
      tasks: [
        { id: 'w1-t1', title: `Review foundational theory for ${topWeakness}`, description: 'Read core lecture notes and identify three specific confusion points.', completed: false, category: 'concept', timeEstimateHours: 2.5 },
        { id: 'w1-t2', title: 'Solve 15 targeted practice problems', description: 'Work through level-1 and level-2 difficulty problems with full steps.', completed: false, category: 'practice', timeEstimateHours: 3.5 },
        { id: 'w1-t3', title: 'Create reference formula and concept sheet', description: 'Consolidate rules and mental models onto a single clean sheet.', completed: false, category: 'review', timeEstimateHours: 2 },
        { id: 'w1-t4', title: 'Complete Week 1 knowledge verification checkpoint', description: 'Take a 20-minute timed diagnostic to confirm baseline retention.', completed: false, category: 'practice', timeEstimateHours: 2 },
      ],
    },
    {
      weekNumber: 2,
      focus: `Applied Bridge & Methodologies: ${secondaryWeakness}`,
      weeklyGoals: `Connect abstract rules to real-world scenarios in ${secondaryWeakness} and begin hands-on integration.`,
      recommendedTopics: [
        `${secondaryWeakness} Architecture & Workflow`,
        'Intermediate problem solving and multi-step derivations',
        'Tooling, debuggers, and modern industry frameworks',
      ],
      practiceExercises: [
        'Write 3 end-to-end practical workflows or proofs',
        'Conduct a peer code/work review session',
        'Simulate edge cases and boundary failures',
      ],
      miniProject: `Prototype Workshop: Build a standalone module or case study demonstrating ${secondaryWeakness} in action.`,
      revisionTasks: [
        'Spaced repetition check on Week 1 fundamentals',
        'Record a 2-minute Loom/voice explainer of the core concept',
      ],
      expectedOutcome: 'Confidence tackling non-trivial exercises without consulting the solution manual.',
      milestone: 'Independent Problem Solving Without Assistance',
      estimatedHours: Math.min(profile.weeklyStudyTime, 14),
      tasks: [
        { id: 'w2-t1', title: `Deep dive into ${secondaryWeakness} practical mechanics`, description: 'Watch specialized masterclass videos or read documentation.', completed: false, category: 'concept', timeEstimateHours: 3 },
        { id: 'w2-t2', title: 'Execute intermediate project simulation', description: 'Construct a working prototype applying the learned concepts.', completed: false, category: 'project', timeEstimateHours: 5 },
        { id: 'w2-t3', title: 'Debug 5 intentionally broken challenge scenarios', description: 'Diagnose syntax errors, logic faults, or calculation discrepancies.', completed: false, category: 'practice', timeEstimateHours: 3 },
        { id: 'w2-t4', title: 'Document key findings in learning journal', description: 'Summarize lessons learned and patterns noticed.', completed: false, category: 'review', timeEstimateHours: 2 },
      ],
    },
    {
      weekNumber: 3,
      focus: `Industry-Relevant Project: ${topCareer.careerName}`,
      weeklyGoals: `Synthesize strengths and overcome gaps by building a portfolio-worthy project aligned with ${topCareer.careerName}.`,
      recommendedTopics: [
        'Real-world industry specifications and project scope',
        'Version control, clean architecture, and modular code/design',
        'Performance optimization and evaluation benchmarks',
      ],
      practiceExercises: [
        'Implement the core algorithm / UX wireframe / security pipeline',
        'Stress-test edge cases with synthetic inputs or real datasets',
        'Optimize execution time or usability flow by at least 20%',
      ],
      miniProject: `Signature Portfolio Artifact: ${topCareer.suggestedProjects[0] || 'Full Capstone MVP'}`,
      revisionTasks: [
        'Refactor codebase or design tokens to meet professional guidelines',
        'Verify test coverage and documentation standards',
      ],
      expectedOutcome: 'A deployable, demonstrable artifact ready to showcase on GitHub, Behance, or LinkedIn.',
      milestone: 'Production-Grade Capstone Deployment',
      estimatedHours: Math.min(profile.weeklyStudyTime, 16),
      tasks: [
        { id: 'w3-t1', title: 'Draft project specification and architectural schematic', description: 'Define input/output contracts, user flows, and milestone checklist.', completed: false, category: 'concept', timeEstimateHours: 3 },
        { id: 'w3-t2', title: 'Build core feature logic and integration', description: 'Write the primary engine, algorithms, or visual interface.', completed: false, category: 'project', timeEstimateHours: 7 },
        { id: 'w3-t3', title: 'Conduct automated validation and benchmark testing', description: 'Run performance checks and usability evaluations.', completed: false, category: 'practice', timeEstimateHours: 3 },
        { id: 'w3-t4', title: 'Write comprehensive README and documentation', description: 'Explain the problem statement, architecture, setup, and key results.', completed: false, category: 'review', timeEstimateHours: 2 },
      ],
    },
    {
      weekNumber: 4,
      focus: `Communication, Pitching & Career Readiness`,
      weeklyGoals: `Translate project successes and academic recovery into articulate resume bullet points and confident interview narratives.`,
      recommendedTopics: [
        'Technical storytelling using the STAR (Situation, Task, Action, Result) method',
        'Whiteboard interview communication & live problem breakdown',
        'Personal brand optimization and networking outreach',
      ],
      practiceExercises: [
        'Record a 3-minute video walkthrough explaining your project to an industry interviewer',
        'Refactor resume bullet points with quantified impact statements',
        'Conduct a 30-minute mock technical interview with a peer or mentor',
      ],
      miniProject: 'Interactive Digital Portfolio / Pitch Deck: Polished online showcase featuring your capstone project.',
      revisionTasks: [
        'Comprehensive review of all 4 weeks of notes',
        'Set up 90-day ongoing learning roadmap for subsequent certifications',
      ],
      expectedOutcome: 'High interview readiness, articulate communication of strengths and growth, and verified career alignment.',
      milestone: 'Interview-Ready Professional Pitch & Showcase',
      estimatedHours: Math.min(profile.weeklyStudyTime, 12),
      tasks: [
        { id: 'w4-t1', title: 'Draft STAR interview responses for recent projects', description: 'Formulate clear narratives highlighting challenge, approach, and quantifiable result.', completed: false, category: 'concept', timeEstimateHours: 2.5 },
        { id: 'w4-t2', title: 'Deliver 3-minute recorded project demonstration', description: 'Focus on clear cadence, structured problem framing, and confident delivery.', completed: false, category: 'practice', timeEstimateHours: 3 },
        { id: 'w4-t3', title: 'Publish project repository and live interactive demo', description: 'Push code to GitHub with clean badges and screenshots or deploy to web hosting.', completed: false, category: 'project', timeEstimateHours: 3 },
        { id: 'w4-t4', title: 'Final Retrospective & PathFinder Milestone Certification', description: 'Audit all completed goals and celebrate your knowledge gap closure.', completed: false, category: 'review', timeEstimateHours: 1.5 },
      ],
    },
  ];

  return weeks;
}

export function analyzeStudentProfile(profile: StudentProfile): AnalysisResult {
  const subjectScores = calculateSubjectScores(profile);
  const coreStrengths = subjectScores.filter((s) => s.isStrength);
  const emergingStrengths = subjectScores.filter((s) => !s.isStrength && !s.isWeakness && !s.isHiddenStrength && s.compositeScore >= 68);
  const weakAreas = subjectScores.filter((s) => s.isWeakness);
  const hiddenStrengths = subjectScores.filter((s) => s.isHiddenStrength);

  const criticalGaps = detectKnowledgeGaps(profile, subjectScores);
  const learningDna = determineLearningDna(profile, subjectScores);
  const recommendedCareers = recommendCareers(profile, subjectScores, learningDna);
  const topCareer = recommendedCareers[0];
  const roadmap = generateRoadmap(profile, subjectScores, criticalGaps, topCareer);

  // Overall student strength index calculation
  const avgSubjectComposite = subjectScores.reduce((acc, s) => acc + s.compositeScore, 0) / (subjectScores.length || 1);
  const projectBonus = Math.min(15, profile.projects.length * 5);
  const skillBreadthBonus = Math.min(10, (profile.technicalSkills.length + profile.softSkills.length) * 1.2);
  const consistencyFactor = subjectScores.reduce((acc, s) => acc + s.consistency, 0) / (subjectScores.length || 1);

  const rawStrength = Math.round(
    avgSubjectComposite * 0.60 +
    projectBonus +
    skillBreadthBonus +
    (consistencyFactor - 50) * 0.20
  );
  const strengthIndex = Math.min(98, Math.max(48, rawStrength));
  const baseReadinessScore = Math.round(strengthIndex * 0.88);

  // Formulate learning summary
  let learningSummary = '';
  if (hiddenStrengths.length > 0) {
    const hidden = hiddenStrengths[0];
    learningSummary = `You show exceptional hidden potential in ${hidden.subject}. While your exam marks (${hidden.marks}%) are moderate, your high confidence (${hidden.confidence}%) and passionate interest (${hidden.interest}%) demonstrate genuine aptitude that conventional gradecards miss. Combined with your strong foundational subjects (${coreStrengths.map((s) => s.subject).join(', ') || 'core domains'}), you are primed for accelerated growth in ${topCareer.careerName}.`;
  } else if (coreStrengths.length > 0) {
    learningSummary = `Your profile demonstrates commanding authority in ${coreStrengths.map((s) => s.subject).join(' and ')}. By addressing the isolated knowledge gaps in ${weakAreas.map((s) => s.subject).join(', ') || 'adjacent topics'} through targeted practical projects, you can elevate your industry readiness from proficient to elite in ${topCareer.careerName}.`;
  } else {
    learningSummary = `You present a balanced, adaptable learning curve with steady growth potential. By anchoring your study schedule around high-impact milestone projects and resolving foundational gaps, you will unlock rapid trajectory gains.`;
  }

  return {
    strengthIndex,
    baseReadinessScore,
    adjustedReadinessScore: baseReadinessScore,
    learningSummary,
    learningDna,
    subjectScores,
    coreStrengths,
    emergingStrengths,
    weakAreas,
    hiddenStrengths,
    criticalGaps,
    recommendedCareers,
    roadmap,
    aiEnhanced: false,
  };
}
```

---

<a id="file-src-components-landingpagelayer-tsx"></a>
### 14. `src/components/LandingPageLayer.tsx`

- **Path:** `src/components/LandingPageLayer.tsx`
- **Category:** React Components
- **Metrics:** 457 lines · 26,118 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
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
  const { setCurrentLayer } = useStudent();

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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/20">
              <Compass className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              PathFinder AI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
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

      {/* Hero Section using the user-specified TicketStub Component */}
      <div className="relative z-10">
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
```

---

<a id="file-src-components-ticketstublanding-tsx"></a>
### 15. `src/components/TicketStubLanding.tsx`

- **Path:** `src/components/TicketStubLanding.tsx`
- **Category:** React Components
- **Metrics:** 1218 lines · 48,993 bytes

```typescript
import * as React from "react"
import { useStudent } from "../context/StudentContext"

// #region stub
// Pure: formatting, timing, halftone and globe maths.

export const clamp01 = (v: number): number => (v > 0 ? (v > 1 ? 1 : v) : 0)

export const smoothstep = (edge0: number, edge1: number, x: number): number => {
  if (edge0 === edge1) return x < edge0 ? 0 : 1
  const t = clamp01((x - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

/** 12745012 → "12,745,012". Negative, fractional or non-finite input never prints garbage. */
export const formatCount = (n: number, sep: string = ","): string => {
  const v = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0
  return String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep)
}

/** A clip-path polygon with the four corners cut: top-left, top-right, bottom-right, bottom-left, in px. */
export const chamfer = (tl: number, tr: number, br: number, bl: number): string =>
  "polygon(" +
  [
    tl + "px 0",
    "calc(100% - " + tr + "px) 0",
    "100% " + tr + "px",
    "100% calc(100% - " + br + "px)",
    "calc(100% - " + br + "px) 100%",
    bl + "px 100%",
    "0 calc(100% - " + bl + "px)",
    "0 " + tl + "px",
  ].join(", ") +
  ")"

export type TypeTiming = { type: number; hold: number; erase: number; gap: number }
export const TYPE: TypeTiming = { type: 55, hold: 2600, erase: 22, gap: 420 }

/** Where a looping typewriter is after `ms`: type a phrase, hold it, erase it, pause, next. */
export const typeFrame = (
  phrases: string[],
  ms: number,
  k: TypeTiming = TYPE,
): { index: number; text: string; phase: "type" | "hold" | "erase" | "gap" } => {
  const list = phrases.filter((p) => p.length > 0)
  if (!list.length) return { index: 0, text: "", phase: "gap" }
  const spans = list.map((p) => p.length * k.type + k.hold + p.length * k.erase + k.gap)
  const total = spans.reduce((a, b) => a + b, 0)
  let t = Number.isFinite(ms) && total > 0 ? ((ms % total) + total) % total : 0
  let i = 0
  while (i < list.length - 1 && t >= spans[i]) t -= spans[i++]
  const p = list[i]
  const typing = p.length * k.type
  if (t < typing) return { index: i, text: p.slice(0, Math.floor(t / k.type) + 1), phase: "type" }
  t -= typing
  if (t < k.hold) return { index: i, text: p, phase: "hold" }
  t -= k.hold
  const erasing = p.length * k.erase
  if (t < erasing) return { index: i, text: p.slice(0, p.length - Math.floor(t / k.erase)), phase: "erase" }
  return { index: i, text: "", phase: "gap" }
}

/** A small integer hash → [0, 1). Deterministic, so a scramble frame is reproducible. */
export const hash = (n: number): number => {
  let x = Math.imul((n | 0) ^ 0x9e3779b9, 0x85ebca6b)
  x ^= x >>> 13
  x = Math.imul(x, 0xc2b2ae35)
  x ^= x >>> 16
  return (x >>> 0) / 4294967296
}

export const NOISE = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+=/<>"

export const scramble = (text: string, p: number, tick: number): string => {
  if (!(p < 1)) return text
  const n = text.length
  let out = ""
  for (let i = 0; i < n; i++) {
    const ch = text[i]
    if (/\s/.test(ch) || p * 1.3 - 0.3 > i / n) out += ch
    else out += NOISE[Math.floor(hash(i * 131 + tick * 7919) * NOISE.length)]
  }
  return out
}

export type Ring = { x: number; y: number; r: number; a: number }
export type Tone = {
  fade: number
  depth: number
  lensX: number
  lensY: number
  lensR: number
  lens: number
  reveal: number
  wave: number
  time: number
  rings: Ring[]
  ringW: number
}

export const coverage = (x: number, y: number, w: number, h: number, s: Tone): number => {
  const ny = y / h
  let c = 1 - smoothstep(s.fade, 1.04, ny) * s.depth
  if (s.wave) c += s.wave * Math.sin((x / w) * 11 + s.time * 1.3 + ny * 4) * smoothstep(s.fade - 0.1, 1, ny)
  if (s.lens > 0) {
    const dx = x - s.lensX
    const dy = y - s.lensY
    c *= 1 - s.lens * Math.exp(-(dx * dx + dy * dy) / (s.lensR * s.lensR))
  }
  for (const g of s.rings) {
    const d = Math.hypot(x - g.x, y - g.y) - g.r
    c *= 1 - g.a * Math.exp(-(d * d) / (s.ringW * s.ringW))
  }
  c *= clamp01(s.reveal * 1.6 - (x / w) * 0.6)
  return clamp01(c)
}

export const dotRadius = (c: number, cell: number): number => cell * 0.66 * Math.sqrt(clamp01(c))

export const project = (theta: number, lon: number, tilt: number, roll: number): [number, number, number] => {
  const x0 = Math.cos(theta) * Math.sin(lon)
  const y0 = Math.sin(theta)
  const z0 = Math.cos(theta) * Math.cos(lon)
  const ct = Math.cos(tilt)
  const st = Math.sin(tilt)
  const y1 = y0 * ct - z0 * st
  const z1 = y0 * st + z0 * ct
  const cr = Math.cos(roll)
  const sr = Math.sin(roll)
  return [x0 * cr - y1 * sr, x0 * sr + y1 * cr, z1]
}

export const meridianPath = (
  lon: number,
  tilt: number,
  roll: number,
  cx: number,
  cy: number,
  r: number,
  steps: number = 96,
): string => {
  let d = ""
  let pen = false
  for (let i = 0; i <= steps; i++) {
    const [x, y, z] = project((i / steps) * Math.PI * 2, lon, tilt, roll)
    if (z < 0) {
      pen = false
      continue
    }
    d += (pen ? "L" : "M") + (cx + r * x).toFixed(1) + " " + (cy - r * y).toFixed(1)
    pen = true
  }
  return d
}

export const MAX_CAP = 0.2

export const fitWord = (
  ink100: number,
  asc100: number,
  w: number,
  maxH: number,
  letters: number,
): { size: number; extra: number } => {
  if (!(ink100 > 0) || !(w > 0)) return { size: 0, extra: 0 }
  let size = (100 * w) / ink100
  let extra = 0
  if (asc100 > 0 && maxH > 0 && (asc100 * size) / 100 > maxH) {
    size = (100 * maxH) / asc100
    if (letters > 1) extra = (w - (ink100 * size) / 100) / (letters - 1)
  }
  return { size, extra }
}

export const nextTick = (rate: number, rand: () => number = Math.random): { delay: number; add: number } => {
  const delay = 450 + rand() * 900
  const mean = Number.isFinite(rate) && rate > 0 ? (rate * delay) / 1000 : 0
  return { delay, add: mean > 0 ? Math.max(1, Math.round(mean * (0.4 + rand() * 1.2))) : 0 }
}
// #endregion

export type StubLink = { label: string; href?: string; onClick?: () => void }
export type StubLinkGroup = { title: string; links: StubLink[] }

export type TicketStubFooterProps = {
  brand?: string
  wordmark?: string
  company?: string
  year?: string | number
  sections?: StubLink[]
  defaultSection?: number
  onSectionChange?: (index: number) => void
  eyebrow?: string[]
  headline?: string[]
  description?: string
  cta?: StubLink
  onCtaClick?: () => void
  linkGroups?: StubLinkGroup[]
  statusLabels?: [string, string]
  statusCaption?: string
  defaultActive?: boolean
  onStatusChange?: (active: boolean) => void
  count?: number
  countLabel?: string
  rate?: number
  blurb?: string
  legal?: StubLink[]
  onDispatch?: (total: number) => void
  background?: string
  ink?: string
  muted?: string
  accent?: string
  accentDeep?: string
  accentInk?: string
  fontSans?: string
  fontSerif?: string
  fontMono?: string
  serifWeight?: number
  halftone?: boolean
  className?: string
}

const DEFAULT_SECTIONS: StubLink[] = [
  { label: "Overview" },
  { label: "Why Beyond Marks" },
  { label: "Three-Step Flow" },
  { label: "Core Capabilities" },
  { label: "Knowledge Gaps" },
  { label: "Adaptive Roadmaps" },
  { label: "Career Pathways" },
  { label: "Student Portal" },
]

const DEFAULT_LINKS: StubLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Student Login" },
      { label: "Intelligence Diagnostic" },
      { label: "Prerequisite Trees" },
      { label: "Adaptive Roadmaps" },
      { label: "Career Pathways" },
      { label: "Skill Matrix" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Knowledge-Gap Trees" },
      { label: "Hidden Strengths Discovery" },
      { label: "Readiness Scoring" },
      { label: "Create Student Profile" },
    ],
  },
]

const DEFAULT_EYEBROW = [
  "Beyond conventional exam marks",
  "Uncovering hidden student potential",
  "Closing prerequisite gaps while you learn",
]

const SANS = '"Plus Jakarta Sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
const SERIF = '"Plus Jakarta Sans", "GT Super Display", Georgia, serif'
const MONO = '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'

const CSS =
  ".tsf{position:relative;container-type:inline-size;background:var(--tsf-bg);color:var(--tsf-ink);font-family:var(--tsf-sans);overflow:clip;isolation:isolate;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}" +
  ".tsf *,.tsf *::before,.tsf *::after{box-sizing:border-box}" +
  ":where(.tsf) a{color:inherit;text-decoration:none}" +
  ":where(.tsf) button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:inherit}" +
  ":where(.tsf) :focus-visible{outline:1px solid var(--tsf-accent);outline-offset:3px}" +
  ".tsf-grid{--rail:clamp(16px,2.5cqw,36px);--nav:clamp(120px,13cqw,190px);--line:color-mix(in srgb,var(--tsf-ink) 12%,transparent);--oline:color-mix(in srgb,var(--tsf-aink) 16%,transparent);--pad:clamp(12px,2.25cqw,30px);position:relative;display:grid;" +
  "grid-template-columns:var(--rail) var(--nav) var(--rail) minmax(0,1.2fr) var(--rail) minmax(0,0.9fr) var(--rail);" +
  "grid-template-rows:clamp(32px,5cqw,72px) auto var(--rail) auto clamp(14px,1.7cqw,24px) auto}" +
  ".tsf-vl{grid-row:1/-1;justify-self:start;width:0;border-left:1px solid var(--line);pointer-events:none}" +
  ".tsf-hl{grid-column:1/-1;align-self:start;height:0;border-top:1px solid var(--line);pointer-events:none}" +
  // index
  ".tsf-nav{grid-column:2;grid-row:2;position:relative}" +
  ".tsf-nav ol{list-style:none;margin:0;padding:0;position:relative}" +
  ".tsf-nav li{border-bottom:1px solid var(--line)}" +
  ".tsf-nav-item{position:relative;display:flex;align-items:center;gap:clamp(8px,1cqw,14px);width:100%;height:clamp(24px,2.4cqw,32px);padding:0 6px;font-size:clamp(10.5px,.95cqw,13px);letter-spacing:.01em;color:color-mix(in srgb,var(--tsf-ink) 88%,transparent);transition:color .25s,background-color .25s,padding .35s cubic-bezier(.2,.8,.2,1)}" +
  ".tsf-nav-item span:first-child{color:var(--tsf-muted);font-variant-numeric:tabular-nums;transition:color .25s}" +
  ".tsf-nav-item:hover{background:color-mix(in srgb,var(--tsf-ink) 4%,transparent);padding-left:12px}" +
  ".tsf-nav-item:hover span:first-child,.tsf-nav-item[aria-current] span:first-child{color:var(--tsf-accent)}" +
  ".tsf-nav-item[aria-current]{color:var(--tsf-ink);padding-left:12px}" +
  ".tsf-nav-bar{position:absolute;left:-1px;top:0;width:2px;height:clamp(24px,2.4cqw,32px);background:var(--tsf-accent);transform:translateY(calc(var(--i) * (100% + 1px)));transition:transform .45s cubic-bezier(.7,0,.2,1);pointer-events:none}" +
  // hero
  ".tsf-hero{grid-column:4;grid-row:2;display:flex;flex-direction:column;min-width:0;padding-bottom:clamp(20px,2.4cqw,30px)}" +
  ".tsf-hero>:not(.tsf-eyebrow){margin-left:var(--pad);margin-right:var(--pad)}" +
  ".tsf-eyebrow{display:flex;align-items:center;gap:12px;padding-left:6px;height:clamp(26px,2.5cqw,32px);border-bottom:1px solid color-mix(in srgb,var(--tsf-ink) 40%,transparent);font-family:var(--tsf-mono);font-size:clamp(11px,1.05cqw,13.5px);white-space:nowrap}" +
  ".tsf-eyebrow svg{flex:none;width:12px;height:12px;max-width:none}" +
  ".tsf-type{min-width:0;overflow:hidden;text-overflow:clip}" +
  ".tsf-caret{display:inline-block;width:.55em;height:1.05em;margin-left:2px;vertical-align:-.18em;background:var(--tsf-accent);animation:tsf-blink 1s steps(1) infinite}" +
  ".tsf-dots{flex:1;min-width:24px;height:10px;opacity:.6;background-image:radial-gradient(circle,var(--dot,var(--tsf-ink)) .85px,transparent 1.25px);background-size:6px 5px;background-position:0 0;" +
  "-webkit-mask-image:linear-gradient(90deg,#000 0,#000 35%,rgba(0,0,0,.25) 50%,#000 65%,#000 100%);mask-image:linear-gradient(90deg,#000 0,#000 35%,rgba(0,0,0,.25) 50%,#000 65%,#000 100%);-webkit-mask-size:200% 100%;mask-size:200% 100%;animation:tsf-march 3.6s linear infinite}" +
  ".tsf-h{margin:clamp(28px,4.6cqw,64px) 0 0;font-weight:700;font-size:clamp(30px,3.65cqw,56px);line-height:1.12;letter-spacing:-.035em;color:var(--tsf-ink)}" +
  ".tsf-h span{display:block;overflow:hidden;padding-bottom:.06em;margin-bottom:-.06em}" +
  ".tsf-h span span{display:block;transform:translateY(0);transition:transform .9s cubic-bezier(.2,.8,.2,1)}" +
  ".tsf[data-seen='0'] .tsf-h span span{transform:translateY(110%)}" +
  ".tsf-p{margin:clamp(16px,2.1cqw,28px) 0 0;max-width:32em;font-size:clamp(13px,1.2cqw,16px);line-height:1.6;color:var(--tsf-muted)}" +
  ".tsf-cta{position:relative;display:flex;align-items:center;justify-content:center;gap:10px;margin-top:clamp(28px,6.6cqw,92px);height:clamp(42px,4cqw,52px);max-width:440px;background:var(--tsf-ink);color:var(--tsf-aink,#070b14);font-weight:700;font-size:clamp(12px,1.1cqw,14px);letter-spacing:.02em;text-transform:uppercase;overflow:hidden;transition:transform .2s}" +
  ".tsf-cta::before{content:'';position:absolute;inset:0;background:var(--tsf-accent);transform:scaleX(0);transform-origin:left;transition:transform .55s cubic-bezier(.7,0,.2,1)}" +
  ".tsf-cta:hover::before,.tsf-cta:focus-visible::before{transform:scaleX(1)}" +
  ".tsf-cta:active{transform:translateY(1px)}" +
  ".tsf-cta>span{position:relative;z-index:2;color:var(--tsf-aink,#070b14);font-weight:700}" +
  ".tsf-cta svg{position:relative;z-index:2;width:14px;height:14px;max-width:none;color:var(--tsf-aink,#070b14);opacity:.85;transform:none;transition:opacity .3s,transform .45s cubic-bezier(.2,.8,.2,1)}" +
  ".tsf-cta:hover svg,.tsf-cta:focus-visible svg{opacity:1;transform:translateX(3px)}" +
  // side
  ".tsf-side{grid-column:6;grid-row:2;display:flex;flex-direction:column;min-width:0}" +
  ".tsf-orbit{position:relative;height:clamp(92px,11.4cqw,160px);border-bottom:1px solid var(--line);cursor:grab;touch-action:pan-y;overflow:hidden}" +
  ".tsf-orbit:active{cursor:grabbing}" +
  ".tsf-orbit::before,.tsf-orbit::after{content:'';position:absolute;top:0;bottom:0;width:14%;background-image:radial-gradient(circle,color-mix(in srgb,var(--tsf-ink) 45%,transparent) .7px,transparent 1.1px);background-size:4px 4px;pointer-events:none}" +
  ".tsf-orbit::before{left:0;-webkit-mask-image:linear-gradient(90deg,#000,transparent);mask-image:linear-gradient(90deg,#000,transparent)}" +
  ".tsf-orbit::after{right:0;-webkit-mask-image:linear-gradient(270deg,#000,transparent);mask-image:linear-gradient(270deg,#000,transparent)}" +
  ".tsf-orbit svg{position:absolute;left:0;top:0;width:100%;height:100%;max-width:none;display:block}" +
  ".tsf-links{display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));gap:24px;padding:clamp(22px,2.6cqw,36px) clamp(12px,2.3cqw,32px) clamp(20px,2.4cqw,30px)}" +
  ".tsf-links h3{margin:0 0 clamp(14px,1.8cqw,24px);font-weight:600;font-size:clamp(18px,2cqw,26px);letter-spacing:-.03em;color:var(--tsf-ink)}" +
  ".tsf-links ul{list-style:none;margin:0;padding:0;display:grid;gap:clamp(4px,.55cqw,8px)}" +
  ".tsf-link{position:relative;display:inline-flex;align-items:center;font-size:clamp(13px,1.2cqw,16px);line-height:1.45;color:var(--tsf-muted);transition:color .25s,transform .35s cubic-bezier(.2,.8,.2,1)}" +
  ".tsf-link::before{content:'';position:absolute;left:-12px;top:50%;width:5px;height:5px;margin-top:-2.5px;background:var(--tsf-accent);transform:rotate(45deg) scale(0);transition:transform .3s cubic-bezier(.2,.8,.2,1)}" +
  ".tsf-link::after{content:'';position:absolute;left:0;right:0;bottom:-2px;height:1px;background:currentColor;transform:scaleX(0);transform-origin:right;transition:transform .4s cubic-bezier(.7,0,.2,1)}" +
  ".tsf-link:hover,.tsf-link:focus-visible{color:var(--tsf-ink);transform:translateX(12px)}" +
  ".tsf-link:hover::before,.tsf-link:focus-visible::before{transform:rotate(45deg) scale(1)}" +
  ".tsf-link:hover::after,.tsf-link:focus-visible::after{transform:scaleX(1);transform-origin:left}" +
  // ticket
  ".tsf-ticket{grid-column:2/7;grid-row:4;position:relative;z-index:1;display:grid;grid-template-columns:var(--nav) minmax(0,1fr);color:var(--tsf-aink)}" +
  ".tsf-stub{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--tsf-deep);" +
  "background-image:repeating-linear-gradient(135deg,color-mix(in srgb,var(--tsf-aink) 7%,transparent) 0 1px,transparent 1px 5px);transition:transform .35s cubic-bezier(.2,.8,.2,1),filter .3s;transform-origin:100% 100%}" +
  ".tsf-stub::after{content:'';position:absolute;right:0;top:14px;bottom:14px;width:1px;background-image:linear-gradient(to bottom,color-mix(in srgb,var(--tsf-aink) 45%,transparent) 50%,transparent 50%);background-size:1px 7px}" +
  ".tsf-stub:hover{transform:rotate(-1.4deg) translateY(-2px);filter:brightness(1.06)}" +
  ".tsf-stub:active{transform:rotate(-3deg) translateY(3px)}" +
  ".tsf-stub svg{width:clamp(30px,4.2cqw,54px);height:clamp(30px,4.2cqw,54px);max-width:none;transition:transform .7s cubic-bezier(.3,1.5,.4,1)}" +
  ".tsf-stub-tip{position:absolute;left:0;right:0;bottom:12px;text-align:center;font-family:var(--tsf-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;opacity:0;transform:translateY(4px);transition:opacity .3s,transform .3s}" +
  ".tsf-stub:hover .tsf-stub-tip,.tsf-stub:focus-visible .tsf-stub-tip{opacity:.7;transform:none}" +
  ".tsf-main{position:relative;display:grid;grid-template-columns:var(--rail) minmax(0,1fr) var(--rail) minmax(0,1fr);background:var(--tsf-accent);min-width:0}" +
  ".tsf-stats{grid-column:2;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;padding:clamp(18px,2.4cqw,32px) 0 clamp(18px,2.3cqw,30px) clamp(12px,2.3cqw,28px)}" +
  ".tsf-stat{display:flex;flex-direction:column;gap:4px;min-width:0}" +
  ".tsf-stat-v{display:flex;align-items:center;gap:10px;font-size:clamp(20px,2.2cqw,31px);line-height:1.1;letter-spacing:-.035em;font-variant-numeric:tabular-nums;white-space:nowrap}" +
  ".tsf-stat-c{font-size:clamp(11.5px,1.12cqw,14.5px);color:color-mix(in srgb,var(--tsf-aink) 62%,transparent)}" +
  ".tsf-status{display:flex;flex-direction:column;gap:4px;border-radius:2px}" +
  ".tsf-pulse{position:relative;flex:none;width:7px;height:7px;background:var(--tsf-aink);transform:rotate(45deg)}" +
  ".tsf-pulse::after{content:'';position:absolute;inset:-3px;border:1px solid var(--tsf-aink);animation:tsf-ping 1.8s cubic-bezier(0,0,.2,1) infinite}" +
  ".tsf-status[aria-pressed='false'] .tsf-pulse{background:transparent;border:1px solid var(--tsf-aink)}" +
  ".tsf-status[aria-pressed='false'] .tsf-pulse::after{display:none}" +
  ".tsf-status:hover .tsf-stat-c{color:var(--tsf-aink)}" +
  ".tsf-status-hint{font-family:var(--tsf-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;opacity:0;transition:opacity .25s}" +
  ".tsf-status:hover .tsf-status-hint,.tsf-status:focus-visible .tsf-status-hint{opacity:.6}" +
  ".tsf-gutcell{grid-column:3;border-left:1px solid var(--oline);border-right:1px solid var(--oline)}" +
  ".tsf-blurb{grid-column:4;position:relative;margin:0;padding:clamp(18px,2.4cqw,32px) clamp(12px,2.3cqw,28px) clamp(18px,2.3cqw,30px);font-family:var(--tsf-mono);font-size:clamp(11px,1.06cqw,13.5px);line-height:1.48;text-align:justify;hyphens:none}" +
  ".tsf-word{grid-column:2/-1;position:relative;border-top:1px solid var(--oline);cursor:crosshair;touch-action:pan-y}" +
  ".tsf-word canvas{position:absolute;left:0;top:0;width:100%;height:100%;max-width:none;display:block}" +
  ".tsf-odo{display:inline-flex}" +
  ".tsf-odo-d{display:inline-block;height:1.1em;overflow:hidden}" +
  ".tsf-odo-s{display:flex;flex-direction:column;transition:transform .7s cubic-bezier(.2,.9,.25,1)}" +
  ".tsf-odo-s span{display:block;height:1.1em;line-height:1.1em}" +
  ".tsf-bump{animation:tsf-bump .5s cubic-bezier(.2,.8,.2,1)}" +
  // footer
  ".tsf-foot{grid-column:1/-1;grid-row:6;display:grid;grid-template-columns:var(--rail) var(--nav) var(--rail) minmax(0,1.2fr) var(--rail) minmax(0,0.9fr) var(--rail);align-items:center;min-height:clamp(52px,6cqw,76px);font-size:clamp(11px,1cqw,13px)}" +
  ".tsf-copy{grid-column:2/4;padding-left:0;color:color-mix(in srgb,var(--tsf-ink) 88%,transparent);white-space:nowrap}" +
  ".tsf-foot .tsf-dots{--dot:var(--tsf-muted)}" +
  ".tsf-foot-l{grid-column:4;display:flex;padding-right:45%}" +
  ".tsf-foot-r{grid-column:6;display:flex;align-items:center;gap:clamp(14px,2.6cqw,32px);white-space:nowrap}" +
  ".tsf-foot-r>span{color:var(--tsf-muted)}" +
  ".tsf-foot-r a{position:relative;color:color-mix(in srgb,var(--tsf-ink) 88%,transparent);transition:color .2s}" +
  ".tsf-foot-r a:hover{color:var(--tsf-accent)}" +
  ".tsf-top{grid-column:7;justify-self:center;width:14px;height:14px;display:grid;place-items:center;color:var(--tsf-accent);transition:transform .6s cubic-bezier(.3,1.5,.4,1)}" +
  ".tsf-top svg{width:14px;height:14px;max-width:none}" +
  ".tsf-top:hover{transform:rotate(-90deg) scale(1.25)}" +
  "@keyframes tsf-blink{50%{opacity:0}}" +
  "@keyframes tsf-march{from{-webkit-mask-position:0 0;mask-position:0 0}to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}" +
  "@keyframes tsf-ping{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.9);opacity:0}}" +
  "@keyframes tsf-bump{0%{transform:translateY(0)}35%{transform:translateY(-3px)}100%{transform:translateY(0)}}" +
  // narrow: one column, index scrolls sideways, ticket stacks
  "@container (max-width: 860px){" +
  ".tsf-grid{grid-template-columns:var(--rail) minmax(0,1fr) var(--rail);grid-template-rows:none;row-gap:0;padding-top:20px}" +
  ".tsf-vl,.tsf-hl{display:none}" +
  ".tsf-nav,.tsf-hero,.tsf-side,.tsf-ticket{grid-column:2;grid-row:auto}" +
  ".tsf-nav{overflow-x:auto;scrollbar-width:none;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}" +
  ".tsf-nav ol{display:flex}" +
  ".tsf-nav li{border-bottom:0;border-right:1px solid var(--line);flex:none}" +
  ".tsf-nav-item{padding:0 12px;white-space:nowrap}" +
  ".tsf-nav-item:hover,.tsf-nav-item[aria-current]{padding-left:12px}" +
  ".tsf-nav-bar{display:none}" +
  ".tsf-nav-item[aria-current]{box-shadow:inset 0 -2px var(--tsf-accent)}" +
  ".tsf-hero{padding-top:28px;padding-bottom:36px}" +
  ".tsf-side{border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:24px}" +
  ".tsf-links{padding-left:14px}" +
  ".tsf-ticket{grid-template-columns:clamp(44px,12cqw,72px) minmax(0,1fr)}" +
  ".tsf-stub-tip{display:none}" +
  ".tsf-main{grid-template-columns:minmax(0,1fr)}" +
  ".tsf-stats,.tsf-blurb,.tsf-word{grid-column:1}" +
  ".tsf-stats{padding-left:16px;padding-right:16px}" +
  ".tsf-gutcell{display:none}" +
  ".tsf-blurb{border-top:1px solid var(--oline);padding-left:16px;padding-right:16px}" +
  ".tsf-foot{grid-column:1/-1;grid-row:auto;display:flex;flex-wrap:wrap;gap:12px 20px;padding:20px var(--rail)}" +
  ".tsf-foot-l{display:none}" +
  ".tsf-foot-r{flex:1;flex-wrap:wrap;gap:12px 20px}" +
  ".tsf-foot-r .tsf-dots{display:none}" +
  "}" +
  "@media (prefers-reduced-motion: reduce){" +
  ".tsf-dots,.tsf-caret,.tsf-pulse::after,.tsf-bump{animation:none}" +
  ".tsf-h span span,.tsf-odo-s,.tsf-stub,.tsf-stub svg,.tsf-cta::before,.tsf-nav-bar,.tsf-link,.tsf-top{transition:none}" +
  "}"

function Mark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden="true" focusable="false">
      <path fillRule="evenodd" fill="currentColor" d="M24 1.5 46.5 24 24 46.5 1.5 24Z M19.5 15.5 32 24 19.5 32.5Z" />
    </svg>
  )
}

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    if (typeof matchMedia === "undefined") return
    const mq = matchMedia("(prefers-reduced-motion: reduce)")
    const onMq = () => setReduced(mq.matches)
    onMq()
    mq.addEventListener("change", onMq)
    return () => mq.removeEventListener("change", onMq)
  }, [])
  return reduced
}

function Odometer({ value }: { value: number }) {
  const s = formatCount(value)
  return (
    <span className="tsf-odo" aria-hidden="true">
      {s.split("").map((ch, i) =>
        /\d/.test(ch) ? (
          <span className="tsf-odo-d" key={s.length - i}>
            <span className="tsf-odo-s" style={{ transform: "translateY(" + -Number(ch) * 10 + "%)" }}>
              {"0123456789".split("").map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </span>
        ) : (
          <span key={"s" + (s.length - i)}>{ch}</span>
        ),
      )}
    </span>
  )
}

function Eyebrow({ phrases, reduced, visible }: { phrases: string[]; reduced: boolean; visible: boolean }) {
  const [ms, setMs] = React.useState(0)
  const msRef = React.useRef(0)
  React.useEffect(() => {
    if (reduced || !visible) return
    const t0 = performance.now() - msRef.current
    const id = setInterval(() => {
      msRef.current = performance.now() - t0
      setMs(msRef.current)
    }, 40)
    return () => clearInterval(id)
  }, [reduced, visible])
  const text = reduced ? phrases[0] ?? "" : typeFrame(phrases, ms).text
  return (
    <div className="tsf-eyebrow">
      <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
        <path d="M6 1 11 6 6 11 1 6Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="sr-only">{phrases[0]}</span>
      <span className="tsf-type" aria-hidden="true">
        {text}
        {!reduced && <span className="tsf-caret" />}
      </span>
      <span className="tsf-dots" aria-hidden="true" />
    </div>
  )
}

function Blurb({ text, reduced, visible }: { text: string; reduced: boolean; visible: boolean }) {
  const [shown, setShown] = React.useState(text)
  const done = React.useRef(false)
  React.useEffect(() => {
    if (reduced || !visible || done.current) {
      setShown(text)
      return
    }
    done.current = true
    let raf = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const p = (now - t0) / 1400
      setShown(scramble(text, p, Math.floor((now - t0) / 45)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [text, reduced, visible])
  return (
    <p className="tsf-blurb">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
    </p>
  )
}

type Packet = { k: number; theta: number; speed: number; life: number }

const MERIDIANS = 12
const TILT = 0.34
const ROLL = -1.36

function Orbit({ reduced, visible, pulse }: { reduced: boolean; visible: boolean; pulse: number }) {
  const boxRef = React.useRef<HTMLDivElement>(null)
  const svgRef = React.useRef<SVGSVGElement>(null)
  const paths = React.useRef<(SVGPathElement | null)[]>([])
  const dots = React.useRef<(SVGCircleElement | null)[]>([])
  const st = React.useRef({
    spin: 0.4,
    vel: 0.14,
    drag: false,
    lastX: 0,
    lastT: 0,
    w: 1,
    h: 1,
    packets: [{ k: 3, theta: -1.2, speed: 0.32, life: Infinity }] as Packet[],
    paint: () => {},
  })

  React.useEffect(() => {
    const s = st.current
    if (pulse > 0 && s.packets.length < 7) {
      s.packets.push({ k: Math.floor(Math.random() * MERIDIANS), theta: -1.6, speed: 0.9 + Math.random() * 0.5, life: 1 })
      s.paint()
    }
  }, [pulse])

  React.useEffect(() => {
    const svg = svgRef.current
    const s = st.current
    if (!svg) return
    const paint = () => {
      const { w, h } = s
      const cx = w * 0.56
      const cy = h * 1.5
      const r = Math.min(h * 1.42, w * 0.62)
      for (let k = 0; k < MERIDIANS; k++) {
        const el = paths.current[k]
        if (el) el.setAttribute("d", meridianPath(s.spin + (k * Math.PI) / MERIDIANS, TILT, ROLL, cx, cy, r))
      }
      for (let i = 0; i < 7; i++) {
        const el = dots.current[i]
        const p = s.packets[i]
        if (!el) continue
        if (!p) {
          el.setAttribute("opacity", "0")
          continue
        }
        const [x, y, z] = project(p.theta, s.spin + (p.k * Math.PI) / MERIDIANS, TILT, ROLL)
        const Y = cy - r * y
        el.setAttribute("cx", (cx + r * x).toFixed(1))
        el.setAttribute("cy", Y.toFixed(1))
        el.setAttribute("opacity", z > 0 && Y < h - 1 ? "1" : "0")
      }
    }
    s.paint = paint
    const measure = () => {
      s.w = svg.clientWidth || 1
      s.h = svg.clientHeight || 1
      svg.setAttribute("viewBox", "0 0 " + s.w + " " + s.h)
      paint()
    }
    const ro = new ResizeObserver(measure)
    ro.observe(svg)
    measure()
    if (reduced || !visible) return () => ro.disconnect()
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!s.drag) {
        s.vel += (0.14 - s.vel) * (1 - Math.exp(-dt * 1.6))
        s.spin += s.vel * dt
      }
      for (const p of s.packets) p.theta += p.speed * dt
      s.packets = s.packets.filter((p) => p.life === Infinity || p.theta < Math.PI * 1.5)
      for (const p of s.packets) if (p.life === Infinity && p.theta > Math.PI * 1.5) p.theta -= Math.PI * 2
      paint()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [reduced, visible])

  const onDown = (e: React.PointerEvent) => {
    const s = st.current
    s.drag = true
    s.lastX = e.clientX
    s.lastT = performance.now()
    s.vel = 0
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = (e: React.PointerEvent) => {
    const s = st.current
    if (!s.drag) return
    const now = performance.now()
    const d = ((e.clientX - s.lastX) / s.w) * 2.4
    s.spin += d
    s.vel = d / Math.max(0.008, (now - s.lastT) / 1000)
    s.lastX = e.clientX
    s.lastT = now
    if (reduced || !visible) s.paint()
  }
  const onUp = () => {
    const s = st.current
    s.drag = false
    s.vel = Math.max(-6, Math.min(6, s.vel))
  }

  return (
    <div
      ref={boxRef}
      className="tsf-orbit"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      aria-hidden="true"
    >
      <svg ref={svgRef} preserveAspectRatio="none" focusable="false">
        {Array.from({ length: MERIDIANS }, (_, k) => (
          <path
            key={k}
            ref={(el) => {
              paths.current[k] = el
            }}
            fill="none"
            stroke="var(--tsf-ink)"
            strokeOpacity={0.82}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <circle
            key={i}
            ref={(el) => {
              dots.current[i] = el
            }}
            r={i === 0 ? 2.6 : 3.2}
            fill="var(--tsf-accent)"
            opacity={0}
          />
        ))}
      </svg>
    </div>
  )
}

function Wordmark({
  word,
  fontSerif,
  weight,
  color,
  halftone,
  reduced,
  visible,
}: {
  word: string
  fontSerif: string
  weight: number
  color: string
  halftone: boolean
  reduced: boolean
  visible: boolean
}) {
  const boxRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [height, setHeight] = React.useState<number | null>(null)
  const st = React.useRef({
    lens: 0,
    lensTarget: 0,
    lx: 0,
    ly: 0,
    rings: [] as Ring[],
    reveal: 0,
    rot: 0,
    rotTarget: 0,
    time: 0,
    kick: () => {},
  })

  const iAt = word.indexOf("i")
  const shown = iAt > -1 ? word.slice(0, iAt) + "\u0131" + word.slice(iAt + 1) : word

  React.useEffect(() => {
    const box = boxRef.current
    const canvas = canvasRef.current
    const ctx = canvas && canvas.getContext("2d")
    if (!box || !canvas || !ctx) return
    const s = st.current
    const g = { w: 1, h: 1, dpr: 1, font: "", size: 0, track: 0, x0: 0, base: 0, dx: 0, dy: 0, dr: 0, cell: 6 }

    const setFont = (px: number, track: number) => {
      ctx.font = weight + " " + px + "px " + fontSerif
      ctx.letterSpacing = track.toFixed(2) + "px"
    }

    const measure = () => {
      const w = box.clientWidth
      if (!w) return
      setFont(100, -3)
      const m100 = ctx.measureText(shown)
      const ink100 = m100.actualBoundingBoxLeft + m100.actualBoundingBoxRight || m100.width
      const fit = fitWord(ink100, m100.actualBoundingBoxAscent || 72, w * 0.995, w * MAX_CAP, shown.length)
      const size = fit.size || 1
      g.size = size
      g.track = -0.03 * size
      if (fit.extra) {
        setFont(size, g.track)
        const m0 = ctx.measureText(shown)
        const ink0 = m0.actualBoundingBoxLeft + m0.actualBoundingBoxRight
        if (shown.length > 1 && ink0 > 0) g.track += (w * 0.995 - ink0) / (shown.length - 1)
      }
      setFont(size, g.track)
      g.font = ctx.font
      const m = ctx.measureText(shown)
      const asc = m.actualBoundingBoxAscent || size * 0.72
      g.x0 = m.actualBoundingBoxLeft
      g.dr = 0
      let top = asc
      if (iAt > -1) {
        const pre = ctx.measureText(shown.slice(0, iAt)).width
        const iw = ctx.measureText("\u0131").width - g.track
        const xh = ctx.measureText("x").actualBoundingBoxAscent || size * 0.5
        g.dr = size * 0.085
        g.dx = g.x0 + pre + iw / 2
        g.dy = xh + g.dr * 1.55
        top = Math.max(top, g.dy + g.dr * 1.05)
      }
      const h = Math.ceil(top + size * 0.05)
      g.base = h + size * 0.01
      g.dy = g.base - g.dy
      g.w = w
      g.h = h
      g.dpr = Math.min(2, window.devicePixelRatio || 1)
      g.cell = Math.max(3.5, Math.min(9, w / 170))
      canvas.width = Math.round(w * g.dpr)
      canvas.height = Math.round(h * g.dpr)
      setHeight((prev) => (prev !== null && Math.abs(prev - h) < 0.5 ? prev : h))
      draw()
    }

    const draw = () => {
      const { w, h, dpr, cell } = g
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, w, h)
      ctx.letterSpacing = g.track.toFixed(2) + "px"
      ctx.font = g.font
      ctx.textBaseline = "alphabetic"
      if (halftone) {
        const tone: Tone = {
          fade: 0.44,
          depth: 0.84,
          lensX: s.lx,
          lensY: s.ly,
          lensR: w * 0.09,
          lens: s.lens * 0.95,
          reveal: s.reveal,
          wave: reduced ? 0 : 0.06,
          time: s.time,
          rings: s.rings,
          ringW: w * 0.02,
        }
        ctx.beginPath()
        const half = cell / 2
        for (let j = 0, y = half; y < h + half; j++, y += cell) {
          const off = j % 2 ? half : 0
          for (let x = off; x < w + half; x += cell) {
            const c = coverage(x, y, w, h, tone)
            if (c < 0.01) continue
            if (c > 0.995) {
              ctx.rect(x - half - 0.3, y - half - 0.3, cell + 0.6, cell + 0.6)
              continue
            }
            const r = dotRadius(c, cell)
            ctx.moveTo(x + r, y)
            ctx.arc(x, y, r, 0, Math.PI * 2)
          }
        }
        ctx.fillStyle = "#000"
        ctx.fill()
        ctx.globalCompositeOperation = "source-in"
      }
      ctx.fillStyle = color
      ctx.fillText(shown, g.x0, g.base)
      ctx.globalCompositeOperation = "source-over"
      if (g.dr > 0) {
        const a = Math.min(1, s.reveal * 1.6 - (g.dx / w) * 0.6)
        if (a > 0) {
          ctx.save()
          ctx.globalAlpha = halftone ? clamp01(a) : 1
          ctx.translate(g.dx, g.dy)
          ctx.rotate(s.rot)
          ctx.beginPath()
          ctx.moveTo(0, -g.dr)
          ctx.lineTo(g.dr, 0)
          ctx.lineTo(0, g.dr)
          ctx.lineTo(-g.dr, 0)
          ctx.closePath()
          ctx.fill()
          ctx.restore()
        }
      }
    }

    let raf = 0
    let last = 0
    const loop = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0
      last = now
      s.time += dt
      if (reduced || !halftone) {
        s.reveal = 1
        s.lens = s.lensTarget
        s.rot = s.rotTarget
        s.rings = []
      } else {
        s.reveal = Math.min(1, s.reveal + dt / 1.5)
        s.lens += (s.lensTarget - s.lens) * (1 - Math.exp(-dt * 7))
        s.rot += (s.rotTarget - s.rot) * (1 - Math.exp(-dt * 6))
        for (const r of s.rings) {
          r.r += g.w * 0.75 * dt
          r.a *= Math.exp(-dt * 1.4)
        }
        s.rings = s.rings.filter((r) => r.a > 0.02)
      }
      draw()
      const busy = !reduced && halftone && visible
      raf = busy ? requestAnimationFrame(loop) : 0
      if (!busy) last = 0
    }
    s.kick = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(measure)
    ro.observe(box)
    measure()
    let alive = true
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => alive && measure())
    if (visible || reduced || !halftone) s.kick()
    return () => {
      alive = false
      cancelAnimationFrame(raf)
      raf = 0
      ro.disconnect()
    }
  }, [shown, iAt, fontSerif, weight, color, halftone, reduced, visible])

  const local = (e: React.PointerEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top]
  }
  const onMove = (e: React.PointerEvent) => {
    const s = st.current
    const [x, y] = local(e)
    s.lx = x
    s.ly = y
    s.lensTarget = halftone && e.pointerType !== "touch" ? 1 : 0
    s.kick()
  }
  const onLeave = () => {
    st.current.lensTarget = 0
    st.current.kick()
  }
  const onClick = (e: React.MouseEvent) => {
    const s = st.current
    const r = e.currentTarget.getBoundingClientRect()
    if (halftone && !reduced) s.rings.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0, a: 0.9 })
    s.rotTarget += Math.PI / 2
    s.kick()
  }

  return (
    <div
      ref={boxRef}
      className="tsf-word"
      style={{ height: height === null ? undefined : height, aspectRatio: height === null ? "1000 / 240" : undefined }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onClick}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  )
}

export function TicketStubHero({
  brand = "PathFinder",
  wordmark = "PathFinder",
  company = "PathFinder AI",
  year = 2026,
  sections = DEFAULT_SECTIONS,
  defaultSection = 0,
  onSectionChange,
  eyebrow = DEFAULT_EYEBROW,
  headline = ["Discover your strengths.", "Close your knowledge gaps."],
  description = "Connect your course performance, confidence metrics, and practical projects. PathFinder AI discovers latent abilities, diagnoses root-cause prerequisites, and generates personalized career roadmaps beyond grades.",
  cta = { label: "Student Portal" },
  onCtaClick,
  linkGroups = DEFAULT_LINKS,
  statusLabels = ["Active Diagnosis", "Engine Paused"],
  statusCaption = "Diagnostic Engine",
  defaultActive = true,
  onStatusChange,
  count = 14820930,
  countLabel = "Pathways Analyzed",
  rate = 2.4,
  blurb,
  legal = [{ label: "All rights reserved" }, { label: "Explainable Rule-Based Architecture", href: "#" }, { label: "Evidence-Backed Learning", href: "#" }],
  onDispatch,
  background = "#070b14",
  ink = "#f1f5f9",
  muted = "#94a3b8",
  accent = "#ff6d36",
  accentDeep = "#d95a32",
  accentInk = "#070b14",
  fontSans = SANS,
  fontSerif = SERIF,
  fontMono = MONO,
  serifWeight = 700,
  halftone = true,
  className = "",
}: TicketStubFooterProps) {
  const rootRef = React.useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = React.useState(false)
  const [seen, setSeen] = React.useState(false)
  const [section, setSection] = React.useState(defaultSection)
  const [active, setActive] = React.useState(defaultActive)
  const [total, setTotal] = React.useState(count)
  const [punch, setPunch] = React.useState(0)
  const [pulse, setPulse] = React.useState(0)
  const totalRef = React.useRef(count)
  totalRef.current = total

  const word = wordmark ?? brand
  const text = description
  const blurbText =
    blurb ??
    "Connect your coursework, practical code, design portfolio, and exam marks. PathFinder AI identifies hidden capabilities and builds an actionable 4-week roadmap toward your target industry career."

  React.useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting)
        if (e.isIntersecting) setSeen(true)
      },
      { threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  React.useEffect(() => {
    if (!active || !visible || !(rate > 0)) return
    let id = 0
    const step = () => {
      const t = nextTick(rate)
      id = window.setTimeout(() => {
        setTotal((v) => v + t.add)
        step()
      }, t.delay)
    }
    step()
    return () => clearTimeout(id)
  }, [active, visible, rate])

  const pick = (i: number) => {
    setSection(i)
    onSectionChange?.(i)
  }
  const toggle = () => {
    setActive((a) => {
      onStatusChange?.(!a)
      return !a
    })
  }
  const dispatch = () => {
    const next = totalRef.current + 1
    setTotal(next)
    setPunch((p) => p + 1)
    setPulse((p) => p + 1)
    onDispatch?.(next)
  }
  const toTop = () => rootRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" })
  const hold = (href?: string) => (e: React.MouseEvent) => {
    if (!href || href === "#") e.preventDefault()
  }

  const vars = {
    "--tsf-bg": background,
    "--tsf-ink": ink,
    "--tsf-muted": muted,
    "--tsf-accent": accent,
    "--tsf-deep": accentDeep,
    "--tsf-aink": accentInk,
    "--tsf-sans": fontSans,
    "--tsf-mono": fontMono,
  } as React.CSSProperties

  const stubClip = chamfer(9, 9, 9, 9)
  const mainClip = chamfer(9, 9, 9, 9)

  return (
    <section
      ref={rootRef}
      className={"tsf w-full " + className}
      style={vars}
      data-seen={seen || reduced ? "1" : "0"}
      aria-label={brand}
    >
      <style>{CSS}</style>
      <div className="tsf-grid">
        {[2, 3, 4, 5, 6, 7].map((c) => (
          <span key={"v" + c} className="tsf-vl" style={{ gridColumn: c }} aria-hidden="true" />
        ))}
        {[2, 3, 4, 5, 6].map((r) => (
          <span key={"h" + r} className="tsf-hl" style={{ gridRow: r }} aria-hidden="true" />
        ))}

        <nav className="tsf-nav" aria-label="Sections">
          <ol>
            {sections.map((s, i) => {
              const inner = (
                <>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.label}</span>
                </>
              )
              return (
                <li key={s.label + i}>
                  {s.href ? (
                    <a
                      href={s.href}
                      className="tsf-nav-item"
                      aria-current={section === i ? "true" : undefined}
                      onClick={(e) => {
                        hold(s.href)(e)
                        pick(i)
                        s.onClick?.()
                      }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="tsf-nav-item"
                      aria-current={section === i ? "true" : undefined}
                      onClick={() => {
                        pick(i)
                        s.onClick?.()
                      }}
                    >
                      {inner}
                    </button>
                  )}
                </li>
              )
            })}
          </ol>
          <span className="tsf-nav-bar" style={{ "--i": section } as React.CSSProperties} aria-hidden="true" />
        </nav>

        <div className="tsf-hero">
          <Eyebrow phrases={eyebrow} reduced={reduced} visible={visible} />
          <h2 className="tsf-h">
            {headline.map((line, i) => (
              <span key={i}>
                <span style={{ transitionDelay: 0.12 + i * 0.1 + "s" }}>{line}</span>
              </span>
            ))}
          </h2>
          <p className="tsf-p">{text}</p>
          <button
            type="button"
            className="tsf-cta cursor-pointer"
            style={{ clipPath: chamfer(0, 0, 12, 0) }}
            onClick={() => {
              setPulse((p) => p + 1)
              onCtaClick?.()
            }}
          >
            <span>{cta.label}</span>
            <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
              <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="tsf-side">
          <Orbit reduced={reduced} visible={visible} pulse={pulse} />
          <div className="tsf-links" style={{ "--cols": Math.max(1, linkGroups.length) } as React.CSSProperties}>
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.label}>
                      {l.href ? (
                        <a href={l.href} className="tsf-link" onClick={hold(l.href)}>
                          {l.label}
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="tsf-link"
                          onClick={() => l.onClick?.()}
                        >
                          {l.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="tsf-ticket">
          <button
            type="button"
            className="tsf-stub"
            style={{ clipPath: stubClip }}
            onClick={dispatch}
            aria-label={"Punch the stub: analyze one student pathway (" + formatCount(total) + " solved)"}
          >
            <Mark style={{ transform: "rotate(" + punch * 90 + "deg)" }} />
            <span className="tsf-stub-tip" aria-hidden="true">
              Punch
            </span>
          </button>
          <div className="tsf-main" style={{ clipPath: mainClip }}>
            <div className="tsf-stats">
              <button type="button" className="tsf-status" aria-pressed={active} onClick={toggle}>
                <span className="tsf-stat-v">
                  {active ? statusLabels[0] : statusLabels[1]}
                  <span className="tsf-pulse" aria-hidden="true" />
                </span>
                <span className="tsf-stat-c">
                  {statusCaption} <span className="tsf-status-hint">{active ? "\u00b7 pause" : "\u00b7 resume"}</span>
                </span>
              </button>
              <div className="tsf-stat">
                <span className="tsf-stat-v">
                  <span key={punch} className={punch ? "tsf-bump" : undefined}>
                    <Odometer value={total} />
                  </span>
                  <span className="sr-only">{formatCount(total)}</span>
                </span>
                <span className="tsf-stat-c">{countLabel}</span>
              </div>
            </div>
            <span className="tsf-gutcell" aria-hidden="true" />
            <Blurb text={blurbText} reduced={reduced} visible={visible} />
            <p className="sr-only">{word}</p>
            <Wordmark
              word={word}
              fontSerif={fontSerif}
              weight={serifWeight}
              color={accentInk}
              halftone={halftone}
              reduced={reduced}
              visible={visible}
            />
          </div>
        </div>

        <footer className="tsf-foot">
          <span className="tsf-copy">
            &copy; {company ?? brand + " AI"}, {year}
          </span>
          <span className="tsf-foot-l" aria-hidden="true">
            <span className="tsf-dots" />
          </span>
          <div className="tsf-foot-r">
            {legal.map((l) =>
              l.href ? (
                <a key={l.label} href={l.href} onClick={hold(l.href)}>
                  {l.label}
                </a>
              ) : (
                <span key={l.label}>{l.label}</span>
              ),
            )}
            <span className="tsf-dots" aria-hidden="true" />
          </div>
          <button type="button" className="tsf-top" onClick={toTop} aria-label="Back to top">
            <Mark />
          </button>
        </footer>
      </div>
    </section>
  )
}
```

---

<a id="file-src-components-loginlayer-tsx"></a>
### 16. `src/components/LoginLayer.tsx`

- **Path:** `src/components/LoginLayer.tsx`
- **Category:** React Components
- **Metrics:** 734 lines · 35,823 bytes

```typescript
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
```

---

<a id="file-src-components-dashboardlayer-tsx"></a>
### 17. `src/components/DashboardLayer.tsx`

- **Path:** `src/components/DashboardLayer.tsx`
- **Category:** React Components
- **Metrics:** 107 lines · 5,074 bytes

```typescript
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
```

---

<a id="file-src-components-navbar-tsx"></a>
### 18. `src/components/Navbar.tsx`

- **Path:** `src/components/Navbar.tsx`
- **Category:** React Components
- **Metrics:** 363 lines · 15,397 bytes

```typescript
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
```

---

<a id="file-src-components-dashboardview-tsx"></a>
### 19. `src/components/DashboardView.tsx`

- **Path:** `src/components/DashboardView.tsx`
- **Category:** React Components
- **Metrics:** 522 lines · 21,389 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import {
  Brain,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Award,
  ChevronRight,
  Target,
  Compass,
  ArrowUpRight,
  Bot,
  RefreshCw,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    profile,
    analysis,
    setActiveTab,
    isAiLoading,
    fetchAiCoachInsights,
    aiCoachText,
    completedTasksCount,
    totalTasksCount,
  } = useStudent();

  // Radar data formatting
  const radarData = analysis.subjectScores.map((s) => ({
    subject: s.subject.length > 14 ? s.subject.substring(0, 12) + '...' : s.subject,
    fullName: s.subject,
    Marks: s.marks,
    Confidence: s.confidence,
    Interest: s.interest,
    Consistency: s.consistency,
  }));

  // Bar data formatting
  const barData = analysis.subjectScores.map((s) => ({
    name: s.subject.length > 12 ? s.subject.substring(0, 10) + '..' : s.subject,
    fullName: s.subject,
    Composite: s.compositeScore,
    Marks: s.marks,
  }));

  // Circular gauge calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (analysis.strengthIndex / 100) * circumference;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner / Student Executive Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-white">{profile.name}</span>
              <span>·</span>
              <span>{profile.educationLevel}</span>
              <span>·</span>
              <span>{profile.currentClass}</span>
              <span>·</span>
              <span className="text-indigo-400 font-medium">Goal: {profile.targetCareer}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Holistic Intelligence Diagnostic
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {analysis.learningSummary}
            </p>
          </div>

          {/* AI Coach Generator Button */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
            <button
              onClick={fetchAiCoachInsights}
              disabled={isAiLoading}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-500 rounded-lg hover:opacity-90 disabled:opacity-50 transition-all shadow-md whitespace-nowrap"
            >
              {isAiLoading ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>Synthesizing Coaching...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>{aiCoachText ? 'Regenerate AI Coach' : 'Generate AI Coach Brief'}</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-slate-400">
              Powered by Explainable Heuristics & Gemini AI
            </span>
          </div>
        </div>

        {/* Live AI Coach Response Card (if generated) */}
        {aiCoachText && (
          <div className="mt-6 border border-indigo-900/60 bg-indigo-950/30 rounded-xl p-4 sm:p-5 text-xs text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold">
              <Bot className="h-4 w-4" />
              <span>Executive AI Coach Guidance</span>
            </div>
            <div className="whitespace-pre-line leading-relaxed text-slate-300">
              {aiCoachText}
            </div>
          </div>
        )}
      </div>

      {/* KPI & Index Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Animated Strength Gauge Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Student Strength Index</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-white font-mono">
                {analysis.strengthIndex}
              </span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
            <span className="text-[11px] text-teal-400 font-medium block mt-1">
              Holistic Aptitude Rating
            </span>
          </div>

          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20 -rotate-90 transform" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-slate-800"
                strokeWidth="14"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-indigo-500 transition-all duration-1000 ease-out"
                strokeWidth="14"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <span className="absolute text-sm font-bold text-white font-mono">
              {analysis.strengthIndex}%
            </span>
          </div>
        </div>

        {/* Readiness Score Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Career Readiness Score</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-teal-300 font-mono">
                {analysis.adjustedReadinessScore}
              </span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-teal-500 h-full transition-all duration-500"
                style={{ width: `${analysis.adjustedReadinessScore}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 block mt-1.5">
              {completedTasksCount} of {totalTasksCount} roadmap tasks completed
            </span>
          </div>
        </div>

        {/* Hidden Strengths Count Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Hidden Strengths</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-violet-300 font-mono">
                {analysis.hiddenStrengths.length}
              </span>
              <span className="text-xs text-violet-400 font-medium">Discovered</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug mt-2">
            Latent potential where passion outpaces test gradecards.
          </p>
        </div>

        {/* Critical Gaps Count Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Prerequisite Gaps</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-amber-300 font-mono">
                {analysis.criticalGaps.length}
              </span>
              <span className="text-xs text-amber-400 font-medium">Priority Areas</span>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('gaps')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 mt-2 text-left"
          >
            <span>Inspect Root Causes</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Analytics Split: Radar Chart & Subject Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart: Holistic Subject Comparison */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-white">Multidimensional Subject Profile</h2>
              <span className="text-xs text-slate-400">
                Marks vs. Confidence vs. Interest vs. Consistency
              </span>
            </div>
            <span className="text-xs text-indigo-400 font-medium">Radar Mapping</span>
          </div>

          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: '#64748b', fontSize: 10 }}
                />
                <Radar
                  name="Marks"
                  dataKey="Marks"
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  fillOpacity={0.25}
                />
                <Radar
                  name="Confidence"
                  dataKey="Confidence"
                  stroke="#818cf8"
                  fill="#818cf8"
                  fillOpacity={0.25}
                />
                <Radar
                  name="Interest"
                  dataKey="Interest"
                  stroke="#34d399"
                  fill="#34d399"
                  fillOpacity={0.25}
                />
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                  formatter={(value) => <span className="text-slate-300">{value}</span>}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    fontSize: '11px',
                  }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Subject Composite Scores */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-white">Subject Strength Breakdown</h2>
                <span className="text-xs text-slate-400">Weighted Composite (45/20/20/15)</span>
              </div>
              <span className="text-xs text-teal-400 font-medium">Ranked</span>
            </div>

            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 10 }}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fill: '#cbd5e1', fontSize: 11 }}
                    width={90}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '8px',
                      fontSize: '11px',
                    }}
                    formatter={(val: any, name: any) => [`${val}%`, name]}
                  />
                  <Bar dataKey="Composite" fill="#6366f1" radius={[0, 4, 4, 0]} name="Strength Score" />
                  <Bar dataKey="Marks" fill="#38bdf8" radius={[0, 4, 4, 0]} name="Raw Marks" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
            Formula: 0.45(Marks) + 0.20(Confidence) + 0.20(Interest) + 0.15(Consistency)
          </div>
        </div>
      </div>

      {/* Categorized Findings: Hidden Strengths, Core Strengths, Weak Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hidden Strengths (Star Feature) */}
        <div className="rounded-2xl border border-violet-800/50 bg-gradient-to-b from-violet-950/30 to-slate-900/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-violet-300 font-bold text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Hidden Strengths</span>
            </div>
            <span className="text-xs text-violet-400">High Passion · Moderate Test</span>
          </div>

          {analysis.hiddenStrengths.length > 0 ? (
            <div className="space-y-3">
              {analysis.hiddenStrengths.map((sub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-violet-800/40 bg-slate-950/60 p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{sub.subject}</span>
                    <span className="text-xs font-mono text-violet-300 font-semibold">
                      {sub.compositeScore}% Composite
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>Marks: {sub.marks}%</span>
                    <span>·</span>
                    <span className="text-teal-400">Interest: {sub.interest}%</span>
                    <span>·</span>
                    <span className="text-indigo-400">Conf: {sub.confidence}%</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">
                    {sub.explanation}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-slate-400 p-4 rounded-lg bg-slate-950/40 text-center">
              No hidden discrepancies detected. Your test scores correlate closely with your interest levels.
            </div>
          )}
        </div>

        {/* Core Strengths */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Award className="h-4 w-4" />
              <span>Core Strengths</span>
            </div>
            <span className="text-xs text-slate-400">Verified Mastery</span>
          </div>

          <div className="space-y-3">
            {analysis.coreStrengths.length > 0 ? (
              analysis.coreStrengths.map((sub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{sub.subject}</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {sub.compositeScore}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{sub.explanation}</p>
                </div>
              ))
            ) : (
              <div className="text-xs text-slate-400 p-4 rounded-lg bg-slate-950/40 text-center">
                Emerging aptitude across subjects.
              </div>
            )}
          </div>
        </div>

        {/* Weak Areas & Knowledge Gaps */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="h-4 w-4" />
              <span>Weak Areas & Gaps</span>
            </div>
            <button
              onClick={() => setActiveTab('gaps')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View Trees →
            </button>
          </div>

          <div className="space-y-3">
            {analysis.weakAreas.length > 0 ? (
              analysis.weakAreas.map((sub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{sub.subject}</span>
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {sub.compositeScore}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{sub.explanation}</p>
                </div>
              ))
            ) : (
              <div className="text-xs text-slate-400 p-4 rounded-lg bg-slate-950/40 text-center">
                No acute failure points detected.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Learning DNA & Cognitive Archetype */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              <Brain className="h-4 w-4" />
              <span>Student Learning DNA</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {analysis.learningDna.archetype}
            </h2>
            <p className="text-xs text-indigo-300 font-medium">
              Secondary Archetype: {analysis.learningDna.secondaryArchetype}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {analysis.learningDna.description}
            </p>

            {/* Cognitive Traits */}
            <div className="flex flex-wrap gap-2 pt-2">
              {analysis.learningDna.traits.map((trait, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* DNA Dimension Bars */}
          <div className="w-full lg:w-80 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs font-semibold text-slate-300 block mb-2">
              Cognitive Trait Intensities
            </span>
            {analysis.learningDna.radarDimensions.map((dim, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{dim.attribute}</span>
                  <span className="text-slate-200 font-mono font-medium">{dim.score}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-500 h-full rounded-full"
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

<a id="file-src-components-knowledgegapview-tsx"></a>
### 20. `src/components/KnowledgeGapView.tsx`

- **Path:** `src/components/KnowledgeGapView.tsx`
- **Category:** React Components
- **Metrics:** 273 lines · 12,703 bytes

```typescript
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
```

---

<a id="file-src-components-roadmapview-tsx"></a>
### 21. `src/components/RoadmapView.tsx`

- **Path:** `src/components/RoadmapView.tsx`
- **Category:** React Components
- **Metrics:** 337 lines · 14,496 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import confetti from 'canvas-confetti';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Trophy,
  FolderGit2,
  Target,
  ArrowRight,
  Filter,
  Check,
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const {
    profile,
    analysis,
    toggleRoadmapTask,
    completedTasksCount,
    totalTasksCount,
    roadmapCompletionPercent,
    setActiveTab,
  } = useStudent();

  const [filterCategory, setFilterCategory] = useState<'all' | 'concept' | 'practice' | 'project' | 'review'>('all');
  const [activeWeekTab, setActiveWeekTab] = useState<number>(1);

  const handleTaskToggle = (weekNum: number, taskId: string, isCurrentlyCompleted: boolean) => {
    toggleRoadmapTask(weekNum, taskId);
    if (!isCurrentlyCompleted) {
      // Trigger subtle confetti burst
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#6366f1', '#14b8a6', '#8b5cf6'],
        });
      } catch (e) {
        // fallback silent
      }
    }
  };

  const topCareer = analysis.recommendedCareers[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Header & Readiness Tracker Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              <Calendar className="h-4 w-4" />
              <span>4-Week Personalized Action Blueprint</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Adaptive Learning & Gap Closure Roadmap
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Curated specifically for {profile.name} targeting{' '}
              <span className="text-white font-semibold">
                {profile.targetCareer !== 'Undecided' ? profile.targetCareer : topCareer?.careerName}
              </span>
              . Each completed milestone directly elevates your verified industry readiness.
            </p>
          </div>

          {/* Interactive Progress Meter */}
          <div className="w-full lg:w-72 bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Roadmap Progress</span>
              <span className="text-teal-400 font-mono font-bold">
                {completedTasksCount} / {totalTasksCount} ({roadmapCompletionPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-teal-400 h-full transition-all duration-500"
                style={{ width: `${roadmapCompletionPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-400">Career Readiness</span>
              <span className="text-indigo-300 font-mono font-semibold">
                {analysis.adjustedReadinessScore}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Week Selector Tabs & Task Category Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        {/* Week Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {analysis.roadmap.map((week) => {
            const isWeekActive = activeWeekTab === week.weekNumber;
            const weekCompletedCount = week.tasks.filter((t) => t.completed).length;
            const isWeekDone = weekCompletedCount === week.tasks.length && week.tasks.length > 0;

            return (
              <button
                key={week.weekNumber}
                onClick={() => setActiveWeekTab(week.weekNumber)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isWeekActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <span>Week {week.weekNumber}</span>
                {isWeekDone ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-300" />
                ) : (
                  <span className="text-[10px] opacity-80 font-mono">
                    ({weekCompletedCount}/{week.tasks.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'all'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterCategory('concept')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'concept'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Theory
          </button>
          <button
            onClick={() => setFilterCategory('practice')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'practice'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Practice
          </button>
          <button
            onClick={() => setFilterCategory('project')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterCategory === 'project'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Active Week Content */}
      {analysis.roadmap.map((week) => {
        if (week.weekNumber !== activeWeekTab) return null;

        const filteredTasks = week.tasks.filter((t) =>
          filterCategory === 'all' ? true : t.category === filterCategory
        );

        return (
          <div key={week.weekNumber} className="space-y-6">
            {/* Week Focus Overview Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                    Week {week.weekNumber} Theme
                  </span>
                  <h2 className="text-xl font-bold text-white mt-0.5">{week.focus}</h2>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>~{week.estimatedHours} Hours Required</span>
                  </span>
                  <span>·</span>
                  <span className="text-teal-400 font-medium">Milestone Target</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                <span className="font-semibold text-white">Weekly Objective: </span>
                {week.weeklyGoals}
              </p>

              {/* Sub-grid: Recommended Topics & Practice Exercises */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Key Topics to Cover
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {week.recommendedTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">▸</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Practice Exercises
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {week.practiceExercises.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">✓</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mini Project Highlight Banner */}
              <div className="rounded-xl border border-violet-900/60 bg-gradient-to-r from-violet-950/30 to-slate-950/40 p-4 flex items-start gap-3">
                <FolderGit2 className="h-5 w-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-violet-300 block">
                    Weekly Mini-Project
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                    {week.miniProject}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Tasks Checklist */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Action Item Checklist</h3>
                  <span className="text-xs text-slate-400">
                    Check off tasks as you finish them to raise your career readiness score
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {week.tasks.filter((t) => t.completed).length} / {week.tasks.length} Completed
                </span>
              </div>

              <div className="space-y-3">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => handleTaskToggle(week.weekNumber, task.id, task.completed)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      task.completed
                        ? 'border-emerald-900/60 bg-emerald-950/20 text-slate-300'
                        : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-white'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 focus:outline-none"
                    >
                      {task.completed ? (
                        <div className="h-5 w-5 rounded-md bg-emerald-600 text-white flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-md border border-slate-700 bg-slate-900 hover:border-indigo-500" />
                      )}
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            task.completed ? 'line-through text-slate-400' : 'text-white'
                          }`}
                        >
                          {task.title}
                        </span>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="capitalize">{task.category}</span>
                          <span>·</span>
                          <span>{task.timeEstimateHours} hrs</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcome & Milestone Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Expected Outcome
                </span>
                <p className="text-xs text-slate-200">{week.expectedOutcome}</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-1">
                <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block">
                  Milestone Achievement
                </span>
                <p className="text-xs text-white font-medium">{week.milestone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
```

---

<a id="file-src-components-careerpathwayview-tsx"></a>
### 22. `src/components/CareerPathwayView.tsx`

- **Path:** `src/components/CareerPathwayView.tsx`
- **Category:** React Components
- **Metrics:** 425 lines · 19,504 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { RecommendedCareer } from '../types';
import {
  Compass,
  Briefcase,
  TrendingUp,
  Award,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scale,
  X,
  Layers,
} from 'lucide-react';

export const CareerPathwayView: React.FC = () => {
  const { analysis, profile, setActiveTab } = useStudent();
  const [selectedCareer, setSelectedCareer] = useState<RecommendedCareer>(
    analysis.recommendedCareers[0]
  );
  const [compareCareers, setCompareCareers] = useState<string[]>([
    analysis.recommendedCareers[0]?.id || '',
    analysis.recommendedCareers[1]?.id || '',
  ]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [filterDomain, setFilterDomain] = useState<string>('all');

  const filteredCareers = analysis.recommendedCareers.filter((c) => {
    if (filterDomain === 'all') return true;
    return c.domain.toLowerCase().includes(filterDomain.toLowerCase());
  });

  const toggleCompareCareer = (id: string) => {
    setCompareCareers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Visual Header Banner */}
      <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <Compass className="h-4 w-4" />
              <span>Evidence-Backed Career Matching</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Recommended Career Pathways
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              PathFinder AI projects career alignments by weighing your academic strengths, hands-on
              projects, self-efficacy, and learning DNA against real industry competencies.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <Scale className="h-3.5 w-3.5" />
                <span>Side-by-Side Comparison ({compareCareers.length} selected)</span>
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Inspect Global Skill Matrix →
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-slate-800 aspect-video hidden lg:block">
            <img
              src="/src/assets/images/career_pathways_visual_1792212105755.jpg"
              alt="Career Pathways Visual"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Main Grid: Left Careers List + Right In-Depth Career Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Careers List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-slate-400">
              Matched Pathways ({analysis.recommendedCareers.length})
            </span>
            <span className="text-[11px] text-slate-400">Select card to view dossier</span>
          </div>

          {filteredCareers.map((career) => {
            const isSelected = career.id === selectedCareer?.id;
            const isMarkedForCompare = compareCareers.includes(career.id);

            return (
              <div
                key={career.id}
                onClick={() => setSelectedCareer(career)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-950/30 shadow-xl ring-1 ring-indigo-500/50'
                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] text-indigo-400 font-semibold block uppercase tracking-wider">
                      {career.domain}
                    </span>
                    <h2 className="text-base font-bold text-white mt-0.5">{career.careerName}</h2>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-extrabold text-teal-300 font-mono">
                      {career.matchPercentage}%
                    </span>
                    <span className="text-[10px] text-slate-400 block">Match Score</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                  {career.fitReason}
                </p>

                {/* Readiness Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Current Readiness</span>
                    <span className="font-mono text-slate-200">{career.readinessScore}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-500 h-full rounded-full"
                      style={{ width: `${career.readinessScore}%` }}
                    />
                  </div>
                </div>

                {/* Compare Checkbox & Salary Indicator */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/80 text-[11px]">
                  <span className="text-slate-400">{career.salaryRange || 'Competitive Pay'}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompareCareer(career.id);
                    }}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded transition-colors ${
                      isMarkedForCompare
                        ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{isMarkedForCompare ? '✓ In Compare' : '+ Compare'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Career Deep Dive */}
        <div className="lg:col-span-7 space-y-6">
          {selectedCareer ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-6">
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                    Target Pathway Dossier
                  </span>
                  <h2 className="text-2xl font-extrabold text-white mt-1">
                    {selectedCareer.careerName}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>{selectedCareer.salaryRange}</span>
                    <span>·</span>
                    <span className="text-teal-400">{selectedCareer.jobGrowthOutlook}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center shrink-0">
                  <span className="text-2xl font-black text-indigo-400 font-mono">
                    {selectedCareer.matchPercentage}%
                  </span>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Fit Alignment
                  </span>
                </div>
              </div>

              {/* Fit Rationale */}
              <div className="rounded-xl border border-indigo-900/40 bg-indigo-950/20 p-4 space-y-1.5">
                <span className="text-xs font-semibold text-indigo-300 block">
                  Why This Career Fits {profile.name}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedCareer.fitReason}
                </p>
              </div>

              {/* Required Core Skills & Gaps */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white">Competency Requirements & Status</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCareer.skillGaps.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 flex items-start justify-between gap-2"
                    >
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {item.skill}
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">
                          {item.action}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                          item.currentStatus === 'Strong'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : item.currentStatus === 'Developing'
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {item.currentStatus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Courses & Certifications */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  Recommended Courses & Industry Certifications
                </span>
                <div className="space-y-1.5">
                  {selectedCareer.coursesAndCerts.map((cert, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-950/40 text-xs text-slate-300 flex items-center gap-2.5"
                    >
                      <BookOpen className="h-4 w-4 text-indigo-400 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Projects */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  High-Impact Portfolio Projects
                </span>
                <div className="space-y-2">
                  {selectedCareer.suggestedProjects.map((proj, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-950/50 flex items-start gap-3"
                    >
                      <FolderGit2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entry Roles & Career Ladder */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Entry-Level Target Roles
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {selectedCareer.entryLevelRoles.map((role, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-teal-400">▪</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
                    Long-Term Growth Ladder
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {selectedCareer.growthPath.map((tier, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-indigo-400 font-mono text-[11px]">{i + 1}.</span>
                        <span>{tier}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 rounded-2xl border border-slate-800 bg-slate-900/40">
              Select a career from the left to view detailed requirements.
            </div>
          )}
        </div>
      </div>

      {/* Side-by-Side Career Comparison Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 overflow-hidden my-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white">Side-by-Side Pathway Comparison</h2>
                <span className="text-xs text-slate-400">
                  Benchmarking match scores, prerequisites, salary ranges, and career ladders
                </span>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {compareCareers.map((cId) => {
                const c = analysis.recommendedCareers.find((item) => item.id === cId);
                if (!c) return null;
                return (
                  <div
                    key={c.id}
                    className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-4"
                  >
                    <div>
                      <span className="text-[10px] text-indigo-400 font-semibold uppercase">
                        {c.domain}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{c.careerName}</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl font-black text-teal-300 font-mono">
                          {c.matchPercentage}%
                        </span>
                        <span className="text-xs text-slate-400">Match</span>
                      </div>
                    </div>

                    <div className="text-xs space-y-2 border-t border-slate-800 pt-3">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Salary Range</span>
                        <span className="text-white font-medium">{c.salaryRange}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Job Market Outlook</span>
                        <span className="text-teal-400 font-medium">{c.jobGrowthOutlook}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Readiness Score</span>
                        <span className="text-indigo-300 font-mono font-medium">{c.readinessScore}%</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-800 pt-3 text-xs">
                      <span className="text-slate-400 block text-[11px]">Key Gaps to Close</span>
                      <div className="space-y-1">
                        {c.skillGaps.slice(0, 3).map((g, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-300">{g.skill}</span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] ${
                                g.currentStatus === 'Strong'
                                  ? 'text-emerald-400'
                                  : g.currentStatus === 'Developing'
                                  ? 'text-sky-400'
                                  : 'text-amber-400'
                              }`}
                            >
                              {g.currentStatus}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-800 pt-3 text-xs">
                      <span className="text-slate-400 block text-[11px]">Peak Career Role</span>
                      <span className="text-white font-medium block mt-0.5">
                        {c.growthPath[c.growthPath.length - 1]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-right">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
```

---

<a id="file-src-components-skillcomparisonview-tsx"></a>
### 23. `src/components/SkillComparisonView.tsx`

- **Path:** `src/components/SkillComparisonView.tsx`
- **Category:** React Components
- **Metrics:** 195 lines · 8,760 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { RecommendedCareer, SkillGapItem } from '../types';
import { Layers, CheckCircle2, AlertCircle, Clock, ArrowRight, Filter } from 'lucide-react';

export const SkillComparisonView: React.FC = () => {
  const { analysis, profile, setActiveTab } = useStudent();
  const [selectedCareerId, setSelectedCareerId] = useState<string>(
    analysis.recommendedCareers[0]?.id || ''
  );
  const [statusFilter, setStatusFilter] = useState<'all' | 'Strong' | 'Developing' | 'Missing'>('all');

  const activeCareer =
    analysis.recommendedCareers.find((c) => c.id === selectedCareerId) ||
    analysis.recommendedCareers[0];

  const filteredSkills = activeCareer?.skillGaps.filter((item) => {
    if (statusFilter === 'all') return true;
    return item.currentStatus === statusFilter;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>Target vs. Current Competency Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industry Skill-Gap Comparison
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Detailed breakdown comparing {profile.name}'s current verified abilities against the
            expectations of high-growth technology and product careers.
          </p>
        </div>
      </div>

      {/* Career Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {analysis.recommendedCareers.slice(0, 5).map((career) => (
          <button
            key={career.id}
            onClick={() => setSelectedCareerId(career.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCareerId === career.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <span>{career.careerName}</span>
            <span className="ml-2 font-mono text-[10px] opacity-80">
              ({career.matchPercentage}% match)
            </span>
          </button>
        ))}
      </div>

      {/* Skill Matrix Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Skill Alignment for {activeCareer?.careerName}
            </h2>
            <span className="text-xs text-slate-400">
              {activeCareer?.skillGaps.length} Core Competencies Analyzed
            </span>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'all'
                  ? 'bg-slate-800 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter('Strong')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'Strong'
                  ? 'bg-emerald-950 text-emerald-300 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Strong
            </button>
            <button
              onClick={() => setStatusFilter('Developing')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'Developing'
                  ? 'bg-sky-950 text-sky-300 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Developing
            </button>
            <button
              onClick={() => setStatusFilter('Missing')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                statusFilter === 'Missing'
                  ? 'bg-amber-950 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Missing
            </button>
          </div>
        </div>

        {/* Tabular Skill Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 font-semibold">Required Skill / Domain</th>
                <th className="py-3 px-4 font-semibold">Current Status</th>
                <th className="py-3 px-4 font-semibold">Learning Priority</th>
                <th className="py-3 px-4 font-semibold">Est. Time to Mastery</th>
                <th className="py-3 px-4 font-semibold">Recommended Strategic Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/30">
              {filteredSkills?.map((skill, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                    {skill.skill}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium ${
                        skill.currentStatus === 'Strong'
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                          : skill.currentStatus === 'Developing'
                          ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}
                    >
                      {skill.currentStatus === 'Strong' && '✓'}
                      {skill.currentStatus === 'Developing' && '▲'}
                      {skill.currentStatus === 'Missing' && '●'}
                      <span>{skill.currentStatus}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`font-semibold ${
                        skill.priority === 'High'
                          ? 'text-red-400'
                          : skill.priority === 'Medium'
                          ? 'text-amber-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {skill.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono whitespace-nowrap tabular-nums">
                    {skill.learningTimeWeeks} {skill.learningTimeWeeks === 1 ? 'week' : 'weeks'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 max-w-md leading-relaxed">
                    {skill.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA to Roadmap */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-white">Ready to close these skill gaps? </span>
            <span>Follow the customized 4-week step-by-step roadmap.</span>
          </div>
          <button
            onClick={() => setActiveTab('roadmap')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors whitespace-nowrap"
          >
            <span>View Personalized Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
```

---

<a id="file-src-components-onboardingmodal-tsx"></a>
### 24. `src/components/OnboardingModal.tsx`

- **Path:** `src/components/OnboardingModal.tsx`
- **Category:** React Components
- **Metrics:** 807 lines · 35,666 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { StudentProfile, SubjectRecord, SubjectCategory } from '../types';
import { DEMO_PROFILES } from '../data/demoProfiles';
import {
  X,
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash2,
  Upload,
  Sparkles,
  BookOpen,
  Briefcase,
  Layers,
  FileSpreadsheet,
  Check,
  AlertCircle,
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const { profile, saveFullProfile, loadDemoProfile, importCsvSubjects, setActiveTab } = useStudent();

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<StudentProfile>(profile);
  const [csvInput, setCsvInput] = useState<string>('');
  const [csvStatus, setCsvStatus] = useState<string | null>(null);

  // New subject draft state
  const [newSubject, setNewSubject] = useState<{
    name: string;
    category: SubjectCategory;
    marks: number;
    confidence: number;
    interest: number;
    weeklyHours: number;
  }>({
    name: '',
    category: 'stem',
    marks: 80,
    confidence: 75,
    interest: 80,
    weeklyHours: 4,
  });

  // New skill/tag inputs
  const [techSkillInput, setTechSkillInput] = useState('');
  const [softSkillInput, setSoftSkillInput] = useState('');
  const [hobbyInput, setHobbyInput] = useState('');
  const [certInput, setCertInput] = useState('');

  // New project draft
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    domain: 'Software Engineering',
    technologies: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    saveFullProfile(formData);
    onClose();
    setActiveTab('dashboard');
  };

  const addSubject = () => {
    if (!newSubject.name.trim()) return;
    const subRecord: SubjectRecord = {
      id: `sub-${Date.now()}`,
      name: newSubject.name.trim(),
      category: newSubject.category,
      marks: Number(newSubject.marks),
      confidence: Number(newSubject.confidence),
      interest: Number(newSubject.interest),
      weeklyHours: Number(newSubject.weeklyHours),
      consistency: 80,
    };
    setFormData((prev) => ({
      ...prev,
      subjects: [...prev.subjects, subRecord],
    }));
    setNewSubject({
      name: '',
      category: 'stem',
      marks: 80,
      confidence: 75,
      interest: 80,
      weeklyHours: 4,
    });
  };

  const removeSubject = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.filter((s) => s.id !== id),
    }));
  };

  const handleAddProject = () => {
    if (!newProject.title.trim()) return;
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: `proj-${Date.now()}`,
          title: newProject.title.trim(),
          description: newProject.description.trim() || 'Applied student project.',
          domain: newProject.domain,
          technologies: newProject.technologies.split(',').map((t) => t.trim()).filter(Boolean),
        },
      ],
    }));
    setNewProject({ title: '', description: '', domain: 'Software Engineering', technologies: '' });
  };

  const handleLoadDemo = (key: 'aarav' | 'diya' | 'rohan') => {
    const demo = DEMO_PROFILES[key];
    if (demo) {
      setFormData(demo);
      loadDemoProfile(key);
      setCsvStatus(`Loaded ${demo.name} profile successfully!`);
    }
  };

  const handleCsvImport = () => {
    if (!csvInput.trim()) return;
    const result = importCsvSubjects(csvInput);
    if (result.success) {
      setCsvStatus(`Imported ${result.count} subjects into profile!`);
      setFormData((prev) => ({
        ...prev,
        subjects: profile.subjects,
      }));
    } else {
      setCsvStatus(result.error || 'Failed to import CSV.');
    }
  };

  const loadSampleCsv = () => {
    const sample = `Subject,Marks,Confidence,Interest,WeeklyHours,Category
Mathematics,92,88,95,5,stem
Physics,89,84,90,4,stem
Python Programming,72,85,92,4,computing
Statistics,58,45,60,2,stem
English & Communication,62,40,45,1.5,humanities`;
    setCsvInput(sample);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/50">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              Step {step} of 4
            </span>
            <h2 className="text-lg font-bold text-white">
              {step === 1 && 'Basic Student Details'}
              {step === 2 && 'Academic Performance & Subject Ratings'}
              {step === 3 && 'Practical Skills, Projects & Interests'}
              {step === 4 && 'Target Career Goal & Confirmation'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-800 h-1">
          <div
            className="bg-indigo-600 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* STEP 1: Basic Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Education Level
                  </label>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="High School / K-12">High School / K-12</option>
                    <option value="Undergraduate">Undergraduate (College / B.Tech / B.Des)</option>
                    <option value="Graduate">Graduate (Master's / Ph.D.)</option>
                    <option value="Diploma / Vocational">Diploma / Vocational</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Current Class or Semester
                  </label>
                  <input
                    type="text"
                    value={formData.currentClass}
                    onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="e.g. 2nd Year B.Tech Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Weekly Available Study Time (Hours)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={4}
                      max={40}
                      step={2}
                      value={formData.weeklyStudyTime}
                      onChange={(e) =>
                        setFormData({ ...formData, weeklyStudyTime: parseInt(e.target.value, 10) })
                      }
                      className="flex-1 accent-indigo-500"
                    />
                    <span className="text-sm font-mono text-indigo-400 font-semibold w-12 text-right">
                      {formData.weeklyStudyTime} hrs
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferred Learning Style
                  </label>
                  <select
                    value={formData.preferredLearningStyle}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredLearningStyle: e.target.value as any })
                    }
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="practical_projects">Practical Projects & Sandbox Building</option>
                    <option value="visual">Visual Diagrams & Flowcharts</option>
                    <option value="theoretical">Theoretical & First-Principles Proofs</option>
                    <option value="collaborative">Collaborative & Peer Discussion</option>
                    <option value="self_paced">Self-Paced Modular Reading</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferred Work Style
                  </label>
                  <select
                    value={formData.preferredWorkStyle}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredWorkStyle: e.target.value as any })
                    }
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="analytical_problem_solving">Analytical Problem Solving</option>
                    <option value="creative_design">Creative Design & Visual Craft</option>
                    <option value="hands_on_building">Hands-On Systems Engineering</option>
                    <option value="research_exploration">Research & Intellectual Exploration</option>
                    <option value="team_leadership">Team Leadership & Strategy</option>
                  </select>
                </div>
              </div>

              {/* Instant Demo Switcher Callout */}
              <div className="border border-indigo-900/50 bg-indigo-950/20 rounded-xl p-4 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-indigo-300 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                    Or test with a pre-configured sample profile:
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleLoadDemo('aarav')}
                    className="text-left p-2.5 rounded-lg border border-slate-800 bg-slate-950/70 hover:border-indigo-500/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-white block">Aarav Sharma</span>
                    <span className="text-[11px] text-slate-400 block">AI / High Math, Hidden Coding</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLoadDemo('diya')}
                    className="text-left p-2.5 rounded-lg border border-slate-800 bg-slate-950/70 hover:border-indigo-500/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-white block">Diya Patel</span>
                    <span className="text-[11px] text-slate-400 block">UX/UI / Visual & Empathy</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLoadDemo('rohan')}
                    className="text-left p-2.5 rounded-lg border border-slate-800 bg-slate-950/70 hover:border-indigo-500/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-white block">Rohan Verma</span>
                    <span className="text-[11px] text-slate-400 block">Cybersecurity / Systems</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Academic Performance & Subjects */}
          {step === 2 && (
            <div className="space-y-6">
              {/* CSV Upload Accordion / Section */}
              <div className="border border-slate-800 rounded-xl bg-slate-950/60 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <FileSpreadsheet className="h-4 w-4 text-indigo-400" />
                    <span>Import Academic Data via CSV</span>
                  </div>
                  <button
                    type="button"
                    onClick={loadSampleCsv}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Load Sample CSV
                  </button>
                </div>
                <textarea
                  value={csvInput}
                  onChange={(e) => setCsvInput(e.target.value)}
                  placeholder="Paste CSV: Subject,Marks,Confidence,Interest,WeeklyHours,Category"
                  rows={3}
                  className="w-full text-xs font-mono bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-300 focus:border-indigo-500 focus:outline-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <button
                    type="button"
                    onClick={handleCsvImport}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors"
                  >
                    Parse & Import Subjects
                  </button>
                  {csvStatus && (
                    <span className="text-xs text-indigo-300 font-medium">{csvStatus}</span>
                  )}
                </div>
              </div>

              {/* Subject list */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white">
                    Current Subjects ({formData.subjects.length})
                  </h3>
                  <span className="text-xs text-slate-400">
                    Normalized Marks + Confidence + Interest + Weekly Hours
                  </span>
                </div>

                <div className="space-y-2.5">
                  {formData.subjects.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg border border-slate-800 bg-slate-950/40"
                    >
                      <div className="min-w-[160px]">
                        <span className="text-sm font-semibold text-white block">{sub.name}</span>
                        <span className="text-xs text-slate-400 capitalize">
                          {sub.category} · {sub.weeklyHours}h/wk
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="text-center">
                          <span className="text-slate-400 block text-[10px]">Marks</span>
                          <span className="font-mono font-semibold text-slate-200">{sub.marks}%</span>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 block text-[10px]">Confidence</span>
                          <span className="font-mono font-semibold text-indigo-300">
                            {sub.confidence}%
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 block text-[10px]">Interest</span>
                          <span className="font-mono font-semibold text-teal-300">
                            {sub.interest}%
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeSubject(sub.id)}
                          className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                          title="Remove subject"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add New Subject Form */}
              <div className="border border-slate-800/80 rounded-xl bg-slate-950/70 p-4 space-y-3">
                <span className="text-xs font-semibold text-slate-300 block">
                  Add Subject Manually
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      placeholder="Subject Name (e.g. Data Structures)"
                      value={newSubject.name}
                      onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                      className="w-full text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <select
                      value={newSubject.category}
                      onChange={(e) =>
                        setNewSubject({ ...newSubject, category: e.target.value as any })
                      }
                      className="w-full text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="stem">STEM / Math / Science</option>
                      <option value="computing">Computing / Code</option>
                      <option value="design">Design / Creative</option>
                      <option value="humanities">Humanities / Comm</option>
                      <option value="commerce">Commerce / Business</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">
                      Marks (0-100): {newSubject.marks}%
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={newSubject.marks}
                      onChange={(e) =>
                        setNewSubject({ ...newSubject, marks: parseInt(e.target.value, 10) })
                      }
                      className="w-full accent-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">
                      Confidence: {newSubject.confidence}%
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={newSubject.confidence}
                      onChange={(e) =>
                        setNewSubject({ ...newSubject, confidence: parseInt(e.target.value, 10) })
                      }
                      className="w-full accent-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">
                      Interest: {newSubject.interest}%
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={newSubject.interest}
                      onChange={(e) =>
                        setNewSubject({ ...newSubject, interest: parseInt(e.target.value, 10) })
                      }
                      className="w-full accent-teal-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">Weekly Hours</label>
                    <input
                      type="number"
                      min={0.5}
                      max={30}
                      step={0.5}
                      value={newSubject.weeklyHours}
                      onChange={(e) =>
                        setNewSubject({ ...newSubject, weeklyHours: parseFloat(e.target.value) || 1 })
                      }
                      className="w-full text-xs bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addSubject}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Subject to Profile</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Skills, Projects, and Interests */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Technical Skills */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Technical Skills & Tools
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {formData.technicalSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            technicalSkills: formData.technicalSkills.filter((_, idx) => idx !== i),
                          })
                        }
                        className="text-slate-400 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={techSkillInput}
                    onChange={(e) => setTechSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && techSkillInput.trim()) {
                        e.preventDefault();
                        setFormData({
                          ...formData,
                          technicalSkills: [...formData.technicalSkills, techSkillInput.trim()],
                        });
                        setTechSkillInput('');
                      }
                    }}
                    placeholder="Type skill & press Enter (e.g. Python, Docker, Figma)"
                    className="flex-1 text-xs bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (techSkillInput.trim()) {
                        setFormData({
                          ...formData,
                          technicalSkills: [...formData.technicalSkills, techSkillInput.trim()],
                        });
                        setTechSkillInput('');
                      }
                    }}
                    className="px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded-lg hover:bg-slate-700"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-slate-300">
                    Practical Projects ({formData.projects.length})
                  </label>
                  <span className="text-[11px] text-slate-400">
                    Evidence of hands-on ability beyond tests
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  {formData.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3 rounded-lg border border-slate-800 bg-slate-950/40 flex items-start justify-between gap-3"
                    >
                      <div>
                        <span className="text-xs font-semibold text-white block">{proj.title}</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{proj.description}</p>
                        <span className="text-[10px] text-indigo-400 mt-1 block">
                          Domain: {proj.domain} · Tech: {proj.technologies.join(', ') || 'General'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            projects: formData.projects.filter((p) => p.id !== proj.id),
                          })
                        }
                        className="text-slate-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/60 space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block">Add a Project</span>
                  <input
                    type="text"
                    placeholder="Project Title (e.g. Weather Prediction Model)"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none"
                  />
                  <textarea
                    placeholder="Brief description of what you built and outcomes..."
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    rows={2}
                    className="w-full text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Domain (e.g. Data Science, Web, Design)"
                      value={newProject.domain}
                      onChange={(e) => setNewProject({ ...newProject, domain: e.target.value })}
                      className="text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Tech stack (comma-separated)"
                      value={newProject.technologies}
                      onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                      className="text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddProject}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    Add Project
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Career Goal & Confirmation */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Target Career Goal
                </label>
                <p className="text-xs text-slate-400 mb-3">
                  Select your primary career aspiration. If you're exploring, choose "I am not sure yet" to let PathFinder AI discover your best match.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Data Science / AI',
                    'UX/UI Design',
                    'Cybersecurity',
                    'Full-Stack Software Engineering',
                    'Technical Product Management',
                    'Quantitative Finance',
                    'Cloud Solutions & DevOps',
                    'Research & Academia',
                    'I am not sure yet (Discover for me)',
                  ].map((career) => (
                    <button
                      key={career}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          targetCareer: career === 'I am not sure yet (Discover for me)' ? 'Undecided' : career,
                        })
                      }
                      className={`p-3 rounded-xl text-left border transition-all ${
                        formData.targetCareer === career ||
                        (career.includes('Discover') && formData.targetCareer === 'Undecided')
                          ? 'border-indigo-500 bg-indigo-950/40 text-white'
                          : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-semibold block">{career}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Profile Overview Summary Card */}
              <div className="border border-slate-800 rounded-xl bg-slate-950/70 p-4 space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">Analysis Readiness</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Student</span>
                    <span className="font-semibold text-white">{formData.name || 'Student'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Subjects</span>
                    <span className="font-semibold text-white">{formData.subjects.length} entered</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Projects</span>
                    <span className="font-semibold text-white">{formData.projects.length} documented</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Goal</span>
                    <span className="font-semibold text-indigo-400">{formData.targetCareer || 'Undecided'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4 bg-slate-950/80">
          <div>
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <span>Continue</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-teal-500 rounded-lg hover:opacity-95 transition-opacity shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                <span>Run PathFinder Analysis</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

<a id="file-src-components-reportmodal-tsx"></a>
### 25. `src/components/ReportModal.tsx`

- **Path:** `src/components/ReportModal.tsx`
- **Category:** React Components
- **Metrics:** 288 lines · 14,173 bytes

```typescript
import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import {
  Printer,
  Download,
  Share2,
  Copy,
  Check,
  Compass,
  Award,
  Sparkles,
  GitBranch,
  Calendar,
  Layers,
  FileText,
  User,
} from 'lucide-react';

export const ReportView: React.FC = () => {
  const { profile, analysis, completedTasksCount, totalTasksCount } = useStudent();
  const [copied, setCopied] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyInsightCard = () => {
    const text = `🎓 PathFinder AI Student Diagnostic: ${profile.name}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Student Strength Index: ${analysis.strengthIndex}/100
🎯 Target Career: ${profile.targetCareer}
🧬 Learning DNA: ${analysis.learningDna.archetype} (${analysis.learningDna.tagline})

✨ Core Strengths:
${analysis.coreStrengths.map((s) => `• ${s.subject} (${s.compositeScore}%)`).join('\n') || 'Developing foundational breadth'}

🌟 Hidden Strengths:
${analysis.hiddenStrengths.map((s) => `• ${s.subject} (High Interest & Confidence despite exam grades)`).join('\n') || 'None detected'}

⚠️ Priority Knowledge Gaps:
${analysis.criticalGaps.map((g) => `• ${g.subject}: ${g.rootCause}`).join('\n')}

🚀 Best-Fit Career Pathways:
${analysis.recommendedCareers.slice(0, 3).map((c) => `• ${c.careerName} (${c.matchPercentage}% match)`).join('\n')}

Generated by PathFinder AI`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ profile, analysis }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${profile.name.toLowerCase().replace(/\s+/g, '_')}_pathfinder_report.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Controls Bar (Hidden in Print) */}
      <div className="no-print rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Comprehensive Diagnostic Report</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Full academic dossier, gap analysis, and personalized career roadmaps ready for students, parents, and counselors.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleCopyInsightCard}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Card!' : 'Copy Shareable Insight Card'}</span>
          </button>

          <button
            onClick={handleExportJson}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md transition-colors"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Shareable Insight Card Preview */}
      <div className="no-print rounded-2xl border border-indigo-900/40 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-teal-950/20 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
            <Share2 className="h-4 w-4" />
            <span>Shareable Student Insight Card</span>
          </div>
          <span className="text-[11px] text-slate-400">Ideal for counselors & mentors</span>
        </div>

        <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/80 shadow-lg space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-base font-bold text-white block">{profile.name}</span>
              <span className="text-xs text-slate-400">{profile.currentClass} · {profile.educationLevel}</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase">Strength Index</span>
                <span className="text-base font-extrabold text-indigo-400 font-mono">{analysis.strengthIndex}/100</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase">DNA Archetype</span>
                <span className="text-xs font-semibold text-teal-300 block">{analysis.learningDna.archetype}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">Top Strength</span>
              <span className="text-white font-medium">{analysis.coreStrengths[0]?.subject || 'Well-rounded breadth'}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <span className="text-[11px] font-semibold text-violet-400 block mb-1">Hidden Potential</span>
              <span className="text-white font-medium">{analysis.hiddenStrengths[0]?.subject || 'Balanced interest'}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <span className="text-[11px] font-semibold text-teal-400 block mb-1">Best-Fit Career</span>
              <span className="text-white font-medium">{analysis.recommendedCareers[0]?.careerName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Student Dossier (Printable Canvas) */}
      <div className="print-page rounded-2xl border border-slate-800 bg-slate-900 p-8 space-y-8 text-slate-100 shadow-2xl">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg mb-1">
              <Compass className="h-6 w-6" />
              <span>PathFinder AI · Official Student Dossier</span>
            </div>
            <span className="text-xs text-slate-400">
              Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Student Strength Index</span>
            <span className="text-3xl font-extrabold text-white font-mono">{analysis.strengthIndex} / 100</span>
          </div>
        </div>

        {/* Section 1: Student Demographics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-slate-800 bg-slate-950/60 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Full Name</span>
            <span className="font-bold text-white text-sm">{profile.name}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Current Class / Level</span>
            <span className="font-semibold text-white">{profile.currentClass}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Target Career</span>
            <span className="font-semibold text-indigo-400">{profile.targetCareer}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Study Allocation</span>
            <span className="font-semibold text-white">{profile.weeklyStudyTime} hours/week</span>
          </div>
        </div>

        {/* Section 2: Executive Learning Diagnosis */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
            01. Executive Learning Diagnosis
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
            {analysis.learningSummary}
          </p>
        </div>

        {/* Section 3: Subject Breakdown Table */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
            02. Multidimensional Subject Evaluation
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 text-[10px] uppercase">
                <tr>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Raw Marks</th>
                  <th className="p-3">Confidence</th>
                  <th className="p-3">Interest</th>
                  <th className="p-3">Composite Score</th>
                  <th className="p-3">Diagnostic Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 font-mono text-[11px]">
                {analysis.subjectScores.map((s, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-sans font-medium text-white">{s.subject}</td>
                    <td className="p-3 font-sans text-slate-400 capitalize">{s.category}</td>
                    <td className="p-3 text-slate-300">{s.marks}%</td>
                    <td className="p-3 text-indigo-300">{s.confidence}%</td>
                    <td className="p-3 text-teal-300">{s.interest}%</td>
                    <td className="p-3 font-bold text-white">{s.compositeScore}%</td>
                    <td className="p-3 font-sans">
                      {s.isHiddenStrength ? (
                        <span className="text-violet-400 font-semibold">Hidden Strength</span>
                      ) : s.isStrength ? (
                        <span className="text-emerald-400 font-semibold">Core Strength</span>
                      ) : s.isWeakness ? (
                        <span className="text-amber-400 font-semibold">Prerequisite Gap</span>
                      ) : (
                        <span className="text-slate-400">Emerging</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Critical Knowledge Gaps */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
            03. Critical Knowledge Gaps & Root Causes
          </h2>
          <div className="space-y-2.5">
            {analysis.criticalGaps.map((gap, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{gap.subject}</span>
                  <span className="font-semibold text-amber-400 text-[11px]">{gap.severity} Priority · ~{gap.estimatedHours} hrs</span>
                </div>
                <p className="text-slate-300"><span className="text-slate-400 font-semibold">Root Cause: </span>{gap.rootCause}</p>
                <p className="text-slate-300"><span className="text-indigo-400 font-semibold">Resolution: </span>{gap.actionItem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Top Recommended Career Pathways */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
            04. Top Career Pathway Alignments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {analysis.recommendedCareers.slice(0, 3).map((career) => (
              <div key={career.id} className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2 text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-white">{career.careerName}</span>
                  <span className="font-mono font-bold text-teal-400">{career.matchPercentage}%</span>
                </div>
                <p className="text-slate-400 line-clamp-3 leading-relaxed">{career.fitReason}</p>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                  <span>Entry: {career.entryLevelRoles[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Footer */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          PathFinder AI · Empowering Students Beyond Conventional Marks · Autonomous Career & Gap Intelligence
        </div>
      </div>
    </div>
  );
};
```

---

<a id="file-src-components-landinghero-tsx"></a>
### 26. `src/components/LandingHero.tsx`

- **Path:** `src/components/LandingHero.tsx`
- **Category:** React Components
- **Metrics:** 200 lines · 11,276 bytes

```typescript
import React from 'react';
import { useStudent } from '../context/StudentContext';
import { ArrowRight, Compass, Target, Brain, Sparkles, CheckCircle2, ChevronRight, Layers, BarChart3, Rocket } from 'lucide-react';

interface LandingHeroProps {
  onStartAnalysis: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onStartAnalysis }) => {
  const { loadDemoProfile, setActiveTab } = useStudent();

  return (
    <div className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950">
      {/* Subtle radial backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Top announcement kicker */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 rounded-full px-3.5 py-1 backdrop-blur-sm">
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
              onClick={onStartAnalysis}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Start My Analysis</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => {
                loadDemoProfile('aarav');
                setActiveTab('dashboard');
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 transition-all whitespace-nowrap"
            >
              <span>Explore Demo Dashboard</span>
            </button>
          </div>

          {/* Clean proof metrics metadata */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
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
                src="/src/assets/images/pathfinder_hero_visual_1792212105910.jpg"
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
                  onClick={() => setActiveTab('gaps')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                >
                  <span>Inspect</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Step Product Flow */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">How It Works</h2>
            <p className="mt-1 text-2xl font-bold text-white">Three steps to clarity beyond grades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4 font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Build Your Holistic Profile</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enter academic marks alongside subject confidence, interest levels, practical projects, and available study hours. No single test score defines you.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-500">
                Supports manual entry or CSV spreadsheet import
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4 font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Synthesize AI Intelligence</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our weighted formula separates exam anxiety from genuine potential, pinpointing hidden strengths and decomposing weak subjects into prerequisite root causes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-500">
                Transparent math with zero black-box hallucination
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4 font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Follow Your Roadmap & Land Careers</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Follow a weekly curriculum with practice exercises, portfolio mini-projects, and trackable milestones. Explore 10+ aligned careers with live readiness scores.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-500">
                Interactive checkbox tracker updates readiness score in real-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

<a id="file-readme-md"></a>
### 27. `README.md`

- **Path:** `README.md`
- **Category:** Documentation
- **Metrics:** 129 lines · 6,877 bytes

```markdown
# PathFinder AI 🧭

> **Intelligent Student Career Discovery & Personalized Learning Pathways Platform**  
> *Beyond conventional marks: Uncovering hidden strengths, root-cause knowledge gaps, and evidence-backed career roadmaps.*

---

## 🎯 The Problem

In traditional education systems, millions of students make high-stakes career decisions based purely on standardized exam marks, passing trends, or peer pressure. 

- **The Fallacy of Grades**: A student who scores 70% in Computer Science might be judged as "average" or "unfit for tech," even though they possess 95% passion, spend every weekend coding open-source projects, and have high practical confidence.
- **Surface-Level Tutoring**: When students struggle in complex topics (like Machine Learning or Physics), they are told to simply "study more," ignoring the deeper prerequisite knowledge gaps (e.g., missing probability distributions or vector trigonometry) causing the failure.
- **Uncertain Career Fit**: Students lack personalized, data-backed guidance connecting their unique learning DNA and project portfolio to modern industry roles.

---

## 💡 The Solution: PathFinder AI

**PathFinder AI** is an intelligent, explainable decision-support and learning pathway platform. By combining normalized academic marks, subjective self-confidence, genuine interest, consistency, and practical project portfolios, PathFinder AI:

1. **Calculates the Holistic Student Strength Index**: Evaluates true academic aptitude using a transparent formula.
2. **Discovers Hidden Strengths**: Identifies latent potential where student passion and confidence outpace raw test scores.
3. **Deconstructs Knowledge Gaps**: Traces subject weaknesses back to prerequisite root causes and displays interactive visual dependency trees.
4. **Generates an Adaptive 4-Week Roadmap**: Provides weekly milestones, theory, practice problems, and mini-projects with an interactive checklist that dynamically updates the student's Career Readiness Score.
5. **Recommends 10+ Career Pathways**: Evaluates competencies against industry benchmarks, complete with side-by-side comparison, salary ranges, entry roles, and long-term career growth ladders.

---

## 🧮 Recommendation Engine & Scoring Mathematics

PathFinder AI avoids black-box hallucination by employing a rigorous, transparent weighted model:

$$\text{Subject Strength Score} = 0.45 \times \text{Marks}_{\text{norm}} + 0.20 \times \text{Confidence} + 0.20 \times \text{Interest} + 0.15 \times \text{Consistency}$$

### Key Thresholds:
- **Core Strength**: Composite Score $\ge 80\%$ with consistent marks.
- **Emerging Strength**: Composite Score between $68\%$ and $79\%$.
- **Critical Knowledge Gap**: Composite Score $< 66\%$ or Raw Marks $< 65\%$.
- **Hidden Strength Detection**: Triggered when **$\text{Interest} \ge 80\%$** and **$\text{Confidence} \ge 75\%$**, but **$\text{Marks} < 76\%$**. This reveals students whose capability is suppressed by test anxiety or exam format rather than lack of aptitude.

---

## 🚀 Key Features

- **Personalized Intelligence Dashboard**:
  - Animated SVG circular gauge for the Student Strength Index (out of 100).
  - Multi-dimensional Recharts Radar Chart (Marks vs. Confidence vs. Interest vs. Consistency).
  - Composite vs. Raw Marks comparative bar chart.
  - "Learning DNA" cognitive archetype engine (e.g., *Computational Intelligence Pioneer*, *Human-Centered Synthesizer*, *Systems Architect*).
- **Knowledge-Gap Root Cause Engine**:
  - Prerequisite topic breakdowns for Statistics, Physics, Programming, Communication, Documentation, and Product Metrics.
  - Interactive multi-tier dependency flow (Level 1 Foundation $\to$ Level 2 Intermediate $\to$ Level 3 Target).
- **Interactive 4-Week Weekly Roadmap**:
  - Theory, practice exercises, and signature portfolio mini-projects.
  - Interactive checkbox task tracking that recalibrates career readiness in real time.
- **10+ Industry Career Pathways**:
  - Data Science / AI Engineer
  - UX/UI & Product Designer
  - Cybersecurity & Threat Analyst
  - Full-Stack Software Engineer
  - Technical Product Manager
  - Quantitative Finance & Fintech Engineer
  - Cloud Solutions & DevOps Engineer
  - Research Scientist / Academic Specialist
  - Side-by-side comparison modal with salary, outlook, and ladder comparison.
- **Comprehensive Reports & Shareable Insight Cards**:
  - Clean printable official dossier (`window.print()`).
  - Copyable quick-summary "Student Insight Card".
  - JSON profile backup export.
- **Dual Engine Architecture**:
  - Works 100% offline with zero dependencies on external APIs.
  - Optional Gemini AI integration for deep executive mentorship synthesis when `GEMINI_API_KEY` is present.

---

## 🧑‍🎓 Pre-Configured Demo Student Profiles

Test the application instantly using the one-click profile switcher:

1. **Aarav Sharma**:
   - High Calculus (94%) and Physics (91%).
   - Moderate programming marks (71%), but **96% interest** and **88% confidence** $\to$ **Classic Hidden Strength in Python Systems!**
   - Weak in Statistics (58%) and Technical Writing (62%).
   - Target: *Data Science / AI Engineer*.

2. **Diya Patel**:
   - Creative design authority (95%) and strong communication (92%).
   - Moderate coding marks (70%), strong empathetic user research.
   - Weak in Quantitative Product Analytics (56%).
   - Target: *UX/UI & Product Design*.

3. **Rohan Verma**:
   - Systems & networking master (96% Networks, 92% OS).
   - Deep interest in Linux and penetration testing.
   - Weak in Project Documentation (52%) and Team Dynamics (54%).
   - Target: *Cybersecurity & Threat Analyst*.

---


## 🔮 Future Improvements & Product Roadmap

1. **LMS & Classroom Integrations**: Direct sync with Canvas, Google Classroom, and Moodle to automatically import gradebooks and assignment turnaround times.
2. **AI Mock Technical Interviews**: Real-time simulated voice/text interviews tailored to the student's exact detected skill gaps.
3. **Peer Study Squad Matching**: Algorithmic pairing of students with complementary strengths (e.g., pairing Aarav, who excels in Math, with Diya, who excels in Communication).
4. **Employer Skill Verification Portal**: Verifiable cryptographic skill badges that hiring managers and university admissions offices can trust.
5. **Mobile Touch Native PWA**: Offline-first mobile app with daily push notification study reminders and micro-quizzes.

---

## 🛠️ Tech Stack & Setup

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Recharts, Canvas Confetti.
- **Backend / API**: Express, Node.js (`server.ts`), `@google/genai` (Gemini 2.5 Flash).
- **Storage**: LocalStorage with schema validation.

### Running Locally:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
```

---

