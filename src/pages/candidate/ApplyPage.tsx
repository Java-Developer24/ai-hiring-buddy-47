import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  MapPin,
  Check,
  X,
  ArrowRight,
  Camera,
  CheckCircle2,
  Lock,
  ChevronLeft
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "@/lib/candidateFlow";

const ApplyPage = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const job = getJobById(jobId);

  return (
    <CandidateLayout className="bg-cream" backHref="/candidate/jobs" backLabel="Back to jobs">
      <div className="flex-1 overflow-auto bg-cream">
        <div className="max-w-[680px] mx-auto py-12 px-6 space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <button
              onClick={() => navigate("/candidate/jobs")}
              className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-muted hover:text-charcoal transition"
            >
              <ChevronLeft className="h-4 w-4" />
              Return to job postings
            </button>

            <div className="space-y-4">
              <h1 className="text-4xl font-display font-bold text-charcoal tracking-tight">{job.title}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cream border border-charcoal/10 text-xs font-semibold text-charcoal-muted">{job.team}</span>
                <span className="px-3 py-1 rounded-full bg-[#E8EDFF] text-[#2D5BFF] text-xs font-bold uppercase tracking-wider">{job.level}</span>
                <span className="px-3 py-1 rounded-full bg-cream border border-charcoal/10 text-xs font-semibold text-charcoal-muted">{job.workMode}</span>
                <span className="px-3 py-1 rounded-full bg-cream border border-charcoal/10 text-xs font-semibold text-charcoal-muted">{job.employmentType}</span>
              </div>
              <p className="text-sm font-medium text-charcoal-muted flex items-center gap-4">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                <span className="flex items-center gap-1.5">{job.salary}</span>
              </p>
            </div>
            <div className="h-px bg-charcoal/5 w-full" />

            {/* Process overview */}
            <div className="bg-cream/30 border border-charcoal/5 rounded-[24px] p-6 space-y-6">
              <h3 className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">How this works</h3>
              <div className="flex items-center justify-between relative px-2">
                <div className="absolute top-4 left-0 right-0 h-px bg-charcoal/10 -translate-y-1/2 z-0" />
                {[
                  { step: 1, label: "Apply", active: true },
                  { step: 2, label: "Assessment" },
                  { step: 3, label: "Video interview" },
                  { step: 4, label: "Coding" }
                ].map((s) => (
                  <div key={s.step} className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      s.active ? "bg-[hsl(var(--charcoal))] text-white shadow-sm" : "bg-white border border-charcoal/10 text-charcoal-muted"
                    }`}>
                      {s.step}
                    </div>
                    <span className={`text-[10px] font-bold transition-colors ${s.active ? "text-charcoal" : "text-charcoal-muted"}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-xs text-charcoal-muted leading-relaxed font-medium">
                  This role includes a staged candidate journey with mailbox updates after each round.
                </p>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-charcoal/5">
                  <div className="h-8 w-8 rounded-lg bg-coral/5 flex items-center justify-center text-coral shrink-0">
                    <Camera className="h-4 w-4" />
                  </div>
                  <p className="text-[11px] text-charcoal-muted font-medium">You will need a camera and microphone for device verification and the video round.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-charcoal/10 rounded-[28px] p-8 shadow-sm space-y-8">
            <h2 className="text-xl font-display font-bold text-charcoal">Apply now</h2>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest">Full name *</label>
                <input type="text" defaultValue="Jordan Mehta" className="w-full h-12 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-coral transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest">Email address *</label>
                <input type="email" defaultValue="priya@email.com" className="w-full h-12 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-coral transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest flex justify-between">
                  Phone number <span className="text-charcoal-muted lowercase italic font-medium tracking-normal">Optional</span>
                </label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full h-12 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest">Resume *</label>
                <div className="border-2 border-dashed border-charcoal/10 rounded-2xl p-6 bg-cream/10 flex items-center justify-between group hover:border-coral/40 transition cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#00CC88] shadow-sm">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold text-charcoal">resume_priya_mehta.pdf</span>
                      <p className="text-[10px] text-charcoal-muted">248KB · Ready to upload</p>
                    </div>
                  </div>
                  <X className="h-4 w-4 text-charcoal-muted hover:text-[hsl(var(--coral))] transition" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest flex justify-between">
                  LinkedIn profile URL <span className="text-charcoal-muted lowercase italic font-medium tracking-normal">Optional</span>
                </label>
                <input type="text" placeholder="linkedin.com/in/yourname" className="w-full h-12 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-charcoal uppercase tracking-widest flex justify-between">
                  Cover note <span className="text-charcoal-muted lowercase italic font-medium tracking-normal">Optional</span>
                </label>
                <textarea placeholder="Tell us why you're a great fit…" className="w-full h-32 p-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-coral transition shadow-sm resize-none" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="h-5 w-5 rounded border border-charcoal/20 bg-[hsl(var(--charcoal))] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-[12px] text-charcoal-muted leading-snug">
                  I agree to my data being processed for this application. <button className="text-charcoal font-bold hover:underline">Privacy policy</button>
                </p>
              </div>

              <button
                onClick={() => navigate("/submission-done/application")}
                className="w-full h-14 bg-[hsl(var(--charcoal))] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-charcoal transition shadow-xl shadow-[hsl(var(--charcoal))]/10"
              >
                Submit application
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-[11px] text-charcoal-muted/60 pb-8">
            <div className="flex items-center gap-1.5">
              <Lock className="h-3 w-3" />
              <span>Your data is encrypted and stored securely</span>
            </div>
            <p>© 2024  HireIQ Partner Solutions · Powered by HireIQ</p>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default ApplyPage;
