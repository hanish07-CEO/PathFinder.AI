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
