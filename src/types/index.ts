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
