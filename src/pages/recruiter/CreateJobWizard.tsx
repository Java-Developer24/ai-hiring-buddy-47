import { useState } from "react";
import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
  X,
  Check,
  Sparkles,
  Plus,
  AlertCircle,
  HelpCircle,
  Info
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const Stepper = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Role details", "Job description", "Configure"];
  return (
    <div className="flex items-center justify-between mb-8 relative px-4">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-charcoal/10 -translate-y-1/2 z-0" />
      {steps.map((step, i) => (
        <div key={step} className="relative z-10 flex flex-col items-center gap-2">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
            i + 1 <= currentStep ? "bg-coral text-cream shadow-sm" : "bg-white border border-charcoal/10 text-charcoal-muted"
          }`}>
            {i + 1 < currentStep ? <Check className="h-4 w-4" /> : i + 1}
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
            i + 1 === currentStep ? "text-coral" : "text-charcoal-muted"
          }`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

const CreateJobWizard = () => {
  const [step, setStep] = useState(1);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [responsibilities, setResponsibilities] = useState([
    "Design and scale backend services",
    "Work with product and AI teams on platform workflows",
  ]);
  const [mustHaves, setMustHaves] = useState([
    "Python",
    "Distributed systems",
    "PostgreSQL",
  ]);
  const [mcqQuestions, setMcqQuestions] = useState(8);
  const [videoQuestions, setVideoQuestions] = useState(6);
  const [codingQuestions, setCodingQuestions] = useState(1);
  const navigate = useNavigate();

  const handleAnalyse = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate("/jobs/1/pipeline");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      if (step === 2) setAnalyzed(false);
    }
  };

  return (
    <RecruiterLayout title={step === 1 ? "Create new job" : step === 2 ? "Upload JD" : "Configure AI"} showNewJobButton={false}>
      <div className="p-6 flex flex-col items-center bg-cream/40 min-h-[calc(100vh-3rem)]">
        <div className="w-full max-w-[720px] space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => step === 1 ? navigate("/jobs") : handleBack()}
              className="h-8 w-8 rounded-lg border border-charcoal/10 bg-white flex items-center justify-center text-charcoal-muted hover:text-charcoal transition shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">Back to {step === 1 ? 'Jobs' : 'Previous step'}</span>
          </div>

          <div className="bg-white border border-charcoal/10 rounded-[24px] shadow-sm overflow-hidden p-9 relative">
            {/* <button className="absolute top-9 right-9 text-xs font-semibold text-charcoal-muted hover:text-coral underline transition">
              Save as draft
            </button> */}

            <Stepper currentStep={step} />

            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div>
                  <h2 className="font-display font-bold text-xl text-charcoal">Tell us about the role</h2>
                  <p className="text-sm text-charcoal-muted mt-1">This will be shown to candidates on the application page.</p>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Job title *</label>
                    <input type="text" defaultValue="Senior Backend Engineer" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Work type</label>
                    <div className="flex bg-cream/30 p-1 rounded-xl border border-charcoal/10 h-11">
                      {["Remote", "Hybrid", "On-site"].map((t) => (
                        <button key={t} className={`flex-1 rounded-lg text-xs font-bold transition ${t === "Remote" ? "bg-coral text-cream" : "text-charcoal-muted"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Department *</label>
                    <select className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition appearance-none">
                      <option>Engineering</option>
                      <option>Product</option>
                      <option>Design</option>
                      <option>Operations</option>
                      <option>Sales</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Location</label>
                    <input type="text" defaultValue="Hyderabad, India" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Seniority level *</label>
                    <select className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition appearance-none">
                      <option>Senior</option>
                      <option>Mid-level</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Number of openings</label>
                    <input type="number" defaultValue="2" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Employment type</label>
                    <select className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition appearance-none">
                      <option>Full-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Internal reference</label>
                    <input type="text" placeholder="Optional" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition" />
                  </div>
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Role family *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {["Backend", "Frontend", "Full stack", "Platform", "Product", "Analytics", "Operations", "Custom"].map((role) => (
                        <button
                          key={role}
                          className={`h-10 rounded-xl border text-xs font-bold transition ${
                            role === "Backend" ? "border-coral bg-coral text-cream" : "border-charcoal/10 bg-white text-charcoal-muted hover:text-charcoal"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2 border-t border-charcoal/5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Key responsibilities</label>
                      <button
                        onClick={() => setResponsibilities([...responsibilities, "Add another responsibility"])}
                        className="text-[11px] font-bold text-coral hover:underline"
                      >
                        + Add more
                      </button>
                    </div>
                    <div className="space-y-2">
                      {responsibilities.map((item, index) => (
                        <input
                          key={`${item}-${index}`}
                          value={item}
                          onChange={(e) => {
                            const next = [...responsibilities];
                            next[index] = e.target.value;
                            setResponsibilities(next);
                          }}
                          className="w-full h-10 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Must-have skills</label>
                      <button
                        onClick={() => setMustHaves([...mustHaves, "New skill"])}
                        className="text-[11px] font-bold text-coral hover:underline"
                      >
                        + Add more
                      </button>
                    </div>
                    <div className="space-y-2">
                      {mustHaves.map((item, index) => (
                        <input
                          key={`${item}-${index}`}
                          value={item}
                          onChange={(e) => {
                            const next = [...mustHaves];
                            next[index] = e.target.value;
                            setMustHaves(next);
                          }}
                          className="w-full h-10 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-charcoal/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-charcoal">Salary range</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <input type="text" defaultValue="80,000" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition" />
                    </div>
                    <div className="col-span-1">
                      <input type="text" defaultValue="120,000" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition" />
                    </div>
                    <div className="col-span-1">
                      <select className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition appearance-none">
                        <option>USD</option>
                        <option>INR</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button onClick={handleNext} className="w-full h-12 bg-coral text-cream font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-charcoal transition shadow-sm mt-4">
                  Next: Upload job description <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div>
                  <h2 className="font-display font-bold text-xl text-charcoal">Upload your job description</h2>
                  <p className="text-sm text-charcoal-muted mt-1">Our AI will extract skills, experience requirements, and generate personalised interview questions.</p>
                </div>

                <div className="flex gap-8">
                  <div className="w-[45%] space-y-6">
                    <div>
                      <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block mb-3">Upload or paste JD</label>
                      <div className="border-2 border-dashed border-charcoal/10 rounded-2xl p-6 bg-cream/20 flex flex-col items-center justify-center gap-2 hover:bg-cream/40 transition cursor-pointer group">
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-charcoal-muted group-hover:text-coral group-hover:scale-110 transition">
                          <Upload className="h-5 w-5" />
                        </div>
                        <span className="text-[13px] font-semibold text-charcoal-muted">Drag & drop your JD here</span>
                        <span className="text-[11px] text-charcoal-muted/60">PDF or DOCX · Max 10MB</span>
                        <button className="text-[11px] font-bold text-coral hover:underline mt-1">Browse files</button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-charcoal/5"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="bg-white px-3 text-charcoal-muted/50 font-bold uppercase tracking-wider text-[10px]">or paste text below</span>
                      </div>
                    </div>

                    <textarea
                      placeholder="Paste your job description text here…"
                      className="w-full h-40 p-4 rounded-xl border border-charcoal/10 bg-cream/10 text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition resize-none"
                    ></textarea>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block">Hiring notes for AI</label>
                      <textarea
                        placeholder="Add anything the AI should prioritize, avoid, or probe for in candidates..."
                        className="w-full h-28 p-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-coral/20 transition resize-none"
                      />
                    </div>

                    <button onClick={handleAnalyse} className="w-full h-11 bg-charcoal text-cream font-bold rounded-xl hover:bg-coral transition">
                      Analyse JD
                    </button>
                  </div>

                  <div className="w-[55%] border-l border-charcoal/5 pl-8 min-h-[400px]">
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest flex items-center gap-1.5">
                        AI extracted criteria <Sparkles className="h-3 w-3 text-plum" />
                      </label>
                    </div>

                    {!analyzed && !analyzing && (
                      <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-40">
                        <FileText className="h-12 w-12 text-charcoal-muted mb-3" />
                        <p className="text-sm font-medium text-charcoal-muted">Analysis results will appear here after you upload or paste a JD.</p>
                      </div>
                    )}

                    {analyzing && (
                      <div className="space-y-4 pt-4">
                        <div className="h-4 bg-charcoal/5 rounded-full w-3/4 animate-pulse" />
                        <div className="h-4 bg-charcoal/5 rounded-full w-1/2 animate-pulse" />
                        <div className="h-20 bg-charcoal/5 rounded-xl w-full animate-pulse mt-8" />
                        <div className="flex items-center gap-2 mt-8">
                          <div className="h-4 w-4 border-2 border-coral border-t-transparent rounded-full animate-spin" />
                          <span className="text-xs font-bold text-coral">AI is reading your job description...</span>
                        </div>
                      </div>
                    )}

                    {analyzed && (
                      <div className="space-y-6 animate-in fade-in duration-700">
                        <div className="space-y-2.5">
                          <span className="text-[11px] font-bold text-charcoal/60">Required skills</span>
                          <div className="flex flex-wrap gap-2">
                            {["Python", "FastAPI", "PostgreSQL", "Docker", "GCP"].map(s => (
                              <span key={s} className="px-2.5 py-1 rounded-lg bg-cream border border-charcoal/10 text-xs font-semibold text-charcoal flex items-center gap-1.5">
                                {s} <X className="h-3 w-3 text-charcoal-muted cursor-pointer" />
                              </span>
                            ))}
                            <button className="px-2.5 py-1 rounded-lg border border-dashed border-charcoal/20 text-xs font-semibold text-charcoal-muted flex items-center gap-1.5 hover:bg-cream transition">
                              + Add skill
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-bold text-charcoal/60">Min experience</span>
                            <div className="flex items-center gap-2">
                              <input type="number" defaultValue="4" className="w-16 h-9 rounded-lg border border-charcoal/10 bg-white text-sm px-3 focus:outline-none" />
                              <span className="text-xs text-charcoal-muted">years</span>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-bold text-charcoal/60">Education</span>
                            <select className="w-full h-9 rounded-lg border border-charcoal/10 bg-white text-xs px-2 focus:outline-none appearance-none">
                              <option>Bachelor's</option>
                              <option>Master's</option>
                            </select>
                          </div>
                        </div>

                        <div className="h-px bg-charcoal/5 w-full" />

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <h4 className="text-[11px] font-bold text-charcoal uppercase tracking-wider">Sample interview questions</h4>
                            <span className="px-1.5 py-0.5 rounded bg-plum/10 text-plum text-[9px] font-bold">AI GENERATED</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex gap-3 items-start">
                              <span className="h-5 px-1.5 rounded bg-[#E8EDFF] text-[#2D5BFF] text-[9px] font-bold flex items-center shrink-0">BEHAVIOURAL</span>
                              <p className="text-[12px] text-charcoal leading-relaxed">Describe a time you optimised a slow database query in production.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="h-5 px-1.5 rounded bg-amber-soft text-amber-warm text-[9px] font-bold flex items-center shrink-0">TECHNICAL</span>
                              <p className="text-[12px] text-charcoal leading-relaxed">How would you design a rate-limited REST API at scale?</p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <span className="h-5 px-1.5 rounded bg-coral/10 text-coral text-[9px] font-bold flex items-center shrink-0">ROLE FIT</span>
                              <p className="text-[12px] text-charcoal leading-relaxed">Which role responsibilities from the JD should this candidate own in their first 90 days?</p>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-cream/30 border border-charcoal/5 flex items-start gap-2.5">
                            <Info className="h-4 w-4 text-charcoal-muted shrink-0 mt-0.5" />
                            <p className="text-[10px] text-charcoal-muted leading-normal">Final questions are uniquely generated per candidate based on their specific resume gaps vs this JD.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button onClick={handleBack} className="flex items-center gap-1.5 text-sm font-bold text-charcoal-muted hover:text-charcoal transition">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <div className="flex items-center gap-4">
                    {analyzed && <button className="text-xs font-bold text-charcoal-muted hover:text-coral transition">Re-analyse</button>}
                    <button
                      onClick={handleNext}
                      disabled={!analyzed}
                      className={`h-12 px-8 font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-sm ${
                        analyzed ? "bg-coral text-cream hover:bg-charcoal" : "bg-charcoal/5 text-charcoal-muted cursor-not-allowed"
                      }`}
                    >
                      Next: Configure scoring <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div>
                  <h2 className="font-display font-bold text-xl text-charcoal">Configure how the AI screens candidates</h2>
                  <p className="text-sm text-charcoal-muted mt-1">Set once. The AI runs autonomously — you only review edge cases.</p>
                </div>

                <div className="grid gap-6 xl:grid-cols-3">
                  <div className="space-y-6 rounded-2xl border border-charcoal/10 bg-cream/30 p-6">
                    <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block">Resume match weights</label>
                    {[
                      { label: "Skills match", value: 40 },
                      { label: "Experience match", value: 30 },
                      { label: "Education match", value: 20 },
                      { label: "Certifications", value: 10 },
                    ].map(w => (
                      <div key={w.label} className="space-y-2.5">
                        <div className="flex justify-between text-xs font-bold text-charcoal">
                          <span>{w.label}</span>
                          <span>{w.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-cream rounded-full overflow-hidden">
                          <div className="h-full bg-coral rounded-full" style={{ width: `${w.value}%` }} />
                        </div>
                      </div>
                    ))}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-[11px] font-bold">
                      Total: 100% <Check className="h-3 w-3" />
                    </div>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-charcoal/10 bg-cream/30 p-6">
                    <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block">Autonomous decisions</label>
                    <div className="space-y-4">
                      <div className="h-8 w-full rounded-full flex overflow-hidden border border-charcoal/5">
                        <div className="h-full bg-[#FFE5E5] w-[40%] flex items-center justify-center">
                          <span className="text-[8px] font-bold text-[#FF4D4D] uppercase">Auto-reject</span>
                        </div>
                        <div className="h-full bg-[#FFF4E5] w-[25%] flex items-center justify-center border-x border-white/50">
                          <span className="text-[8px] font-bold text-[#FF9933] uppercase">Review</span>
                        </div>
                        <div className="h-full bg-[#E5F9F1] w-[35%] flex items-center justify-center">
                          <span className="text-[8px] font-bold text-[#00CC88] uppercase">Auto-shortlist</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-charcoal-muted">Auto-reject below</span>
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-bold text-charcoal">40</span>
                            <HelpCircle className="h-3 w-3 text-charcoal-muted/50" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-charcoal-muted">Auto-shortlist above</span>
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-bold text-charcoal">75</span>
                            <HelpCircle className="h-3 w-3 text-charcoal-muted/50" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-cream/30 border border-charcoal/5 flex items-start gap-2.5">
                        <Info className="h-4 w-4 text-charcoal-muted shrink-0 mt-0.5" />
                        <p className="text-[10px] text-charcoal-muted leading-normal">Candidates scoring 40–75 go to your review queue.</p>
                      </div>
                      <div className="pt-2 border-t border-charcoal/5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-charcoal">Apply red flag penalty</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[11px] font-bold text-charcoal">
                            <span>Penalty per flag</span>
                            <span className="text-destructive">−10 pts</span>
                          </div>
                          <div className="h-1.5 w-full bg-cream rounded-full overflow-hidden">
                            <div className="h-full bg-destructive/60 rounded-full w-[30%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 rounded-2xl border border-charcoal/10 bg-cream/30 p-6">
                    <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block">Interview settings</label>
                    <div className="space-y-4">
                      <div className="space-y-3 rounded-2xl border border-charcoal/10 bg-cream/30 p-4">
                        <div className="flex justify-between text-[11px] font-bold text-charcoal">
                          <span>MCQ assessment questions</span>
                          <span>{mcqQuestions}</span>
                        </div>
                        <Slider value={[mcqQuestions]} onValueChange={(value) => setMcqQuestions(value[0])} min={5} max={20} step={1} />
                      </div>
                      <div className="space-y-3 rounded-2xl border border-charcoal/10 bg-cream/30 p-4">
                        <div className="flex justify-between text-[11px] font-bold text-charcoal">
                          <span>Video interview questions</span>
                          <span>{videoQuestions}</span>
                        </div>
                        <Slider value={[videoQuestions]} onValueChange={(value) => setVideoQuestions(value[0])} min={3} max={12} step={1} />
                      </div>
                      <div className="space-y-3 rounded-2xl border border-charcoal/10 bg-cream/30 p-4">
                        <div className="flex justify-between text-[11px] font-bold text-charcoal">
                          <span>Machine coding problems</span>
                          <span>{codingQuestions}</span>
                        </div>
                        <Slider value={[codingQuestions]} onValueChange={(value) => setCodingQuestions(value[0])} min={1} max={4} step={1} />
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-charcoal-muted block">Prep time / question</span>
                        <div className="flex bg-cream/30 p-1 rounded-lg border border-charcoal/10 h-9">
                          {["15s", "30s", "60s"].map(t => (
                            <button key={t} className={`flex-1 rounded-md text-[10px] font-bold transition ${t === "30s" ? "bg-coral text-cream" : "text-charcoal-muted"}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="h-px bg-charcoal/5" />
                      <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block">Assessment modules</label>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-charcoal">Video interview</span>
                            <span className="text-[9px] font-bold text-charcoal-muted/50 uppercase tracking-wider">ALWAYS ON</span>
                          </div>
                          <Switch defaultChecked disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-charcoal-muted">Skills MCQ test</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-charcoal-muted">Coding sandbox</span>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-charcoal/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-charcoal-muted">Load preset:</span>
                      <select className="h-9 px-3 rounded-lg border border-charcoal/10 bg-white text-xs font-medium focus:outline-none">
                        <option>Engineering</option>
                        <option>Sales</option>
                      </select>
                      <button className="text-[11px] font-bold text-coral hover:underline">Save as preset</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={handleBack} className="h-12 flex-1 border border-charcoal/10 bg-white text-charcoal font-bold rounded-xl hover:bg-cream/40 transition">
                      Save as draft
                    </button>
                    <button onClick={handleNext} className="h-12 flex-[2] bg-coral text-cream font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-charcoal transition shadow-lg shadow-coral/10">
                      Publish job <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default CreateJobWizard;
