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
