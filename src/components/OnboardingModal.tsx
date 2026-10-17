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
