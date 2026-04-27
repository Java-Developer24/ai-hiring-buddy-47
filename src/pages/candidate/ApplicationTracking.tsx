import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { CheckCircle2, Clock, Briefcase, ChevronRight, Trophy, Sparkles, Activity } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CandidateStage, getCandidateApplications, getJobById, getStoredCandidateStage, hasReachedStage } from "@/lib/candidateFlow";

export default function ApplicationTracking() {
  const [stage, setStage] = useState<CandidateStage>("browsing");
  const [selectedApplicationId, setSelectedApplicationId] = useState<string>("");

  useEffect(() => {
    setStage(getStoredCandidateStage());
  }, []);

  const applications = useMemo(() => getCandidateApplications(stage), [stage]);

  useEffect(() => {
    if (!selectedApplicationId && applications.length > 0) {
      setSelectedApplicationId(applications[0].id);
    }
  }, [applications, selectedApplicationId]);

  const selectedApplication =
    applications.find((application) => application.id === selectedApplicationId) ?? applications[0];
  if (!selectedApplication) {
    return (
      <CandidateDashboardLayout title="Application Tracking">
        <div className="max-w-4xl mx-auto rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-charcoal">No applications yet</h2>
          <p className="text-sm text-charcoal-muted mt-2">Once you apply to a role, you will see its tracking timeline here.</p>
        </div>
      </CandidateDashboardLayout>
    );
  }
  const selectedJob = getJobById(selectedApplication?.jobId);
  const timelineStage = selectedApplication?.stage ?? "applied";

  const stages = [
    { key: "applied", label: "Application received", date: hasReachedStage(timelineStage, "applied") ? selectedApplication.appliedDate : "Pending" },
    { key: "mcq_done", label: "Skills assessment", date: hasReachedStage(timelineStage, "mcq_done") ? "Apr 27, 2026" : "Pending" },
    { key: "video_done", label: "Video interview", date: hasReachedStage(timelineStage, "video_done") ? "Apr 27, 2026" : "Pending" },
    { key: "coding_done", label: "Machine coding", date: hasReachedStage(timelineStage, "coding_done") ? "Apr 27, 2026" : "Pending" },
    { key: "offer", label: "Final review", date: "Pending" }
  ];

  const getStatus = (key: string, index: number) => {
    const stageOrder = ["applied", "mcq_done", "video_done", "coding_done", "offer"];
    const currentIndex = stageOrder.indexOf(timelineStage);

    if (index < currentIndex) return "completed";
    if (index === currentIndex) return "current";
    return "upcoming";
  };

  const currentStage = stages.find((_, index) => getStatus("", index) === "current") ?? stages[0];
  const previousStage = [...stages].reverse().find((_, indexFromEnd) => {
    const index = stages.length - 1 - indexFromEnd;
    return getStatus("", index) === "completed";
  });

  return (
    <CandidateDashboardLayout title="Application Tracking">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-[32px] border border-charcoal/10 bg-[linear-gradient(135deg,hsl(var(--charcoal)),#232b27)] p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-coral">Application command center</p>
              <h2 className="mt-3 text-4xl font-display font-bold">{selectedJob.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Track every completed stage, see what is currently active, and review all submitted applications from one place.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Activity, label: "Current", value: currentStage.label },
                { icon: Trophy, label: "Previous", value: previousStage ? previousStage.label : "None yet" },
                { icon: Sparkles, label: "Status", value: timelineStage === "coding_done" ? "Under review" : "In progress" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{label}</p>
                  <p className="mt-2 text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="bg-white rounded-[28px] border border-charcoal/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-charcoal/10 bg-cream/30">
              <h2 className="text-xl font-display font-bold text-charcoal">Applied jobs</h2>
              <p className="text-sm text-charcoal-muted mt-1">Select any application to review its full progress.</p>
            </div>
            <div className="p-3 space-y-3">
              {applications.map((application) => {
                const job = getJobById(application.jobId);
                const active = application.id === selectedApplicationId;
                return (
                  <button
                    key={application.id}
                    onClick={() => setSelectedApplicationId(application.id)}
                    className={`w-full text-left rounded-2xl border p-4 transition ${
                      active ? "border-coral bg-coral/5 shadow-sm" : "border-charcoal/10 hover:bg-cream"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-charcoal">{job.title}</p>
                        <p className="text-xs text-charcoal-muted mt-1">{application.company}</p>
                      </div>
                      <ChevronRight className={`h-4 w-4 ${active ? "text-coral" : "text-charcoal-muted"}`} />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-charcoal-muted">
                      <Briefcase className="h-3.5 w-3.5" />
                      Applied on {application.appliedDate}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-charcoal/10 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-charcoal/5 bg-[linear-gradient(135deg,hsl(var(--cream)),white)]">
              <h2 className="text-2xl font-display font-bold text-charcoal">{selectedJob.title}</h2>
              <p className="text-charcoal-muted mt-1">{selectedApplication.company} • Candidate journey timeline</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  ["Applied on", selectedApplication.appliedDate],
                  ["Current stage", currentStage.label],
                  ["Final state", timelineStage === "coding_done" ? "Submitted for review" : "Still active"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-charcoal/10 bg-white p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">{label}</p>
                    <p className="mt-2 text-sm font-bold text-charcoal">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-8">Journey map</h3>

              <div className="grid gap-5 md:grid-cols-2">
                {stages.map((s, i) => {
                  const status = getStatus(s.key, i);
                  return (
                    <div key={s.key} className={`rounded-[26px] border p-5 shadow-sm ${
                      status === "completed"
                        ? "border-coral bg-coral/[0.03]"
                        : status === "current"
                          ? "border-amber bg-amber-soft/40"
                          : "border-charcoal/10 bg-white"
                    }`}>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white shadow ${status === 'completed' ? 'text-coral' : status === 'current' ? 'text-amber' : 'text-charcoal/20'}`}>
                        {status === 'completed' ? <CheckCircle2 className="h-5 w-5" /> : status === 'current' ? <Clock className="h-5 w-5" /> : <div className="h-2 w-2 rounded-full bg-charcoal/20" />}
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <h4 className={`text-base font-bold ${status === 'upcoming' ? 'text-charcoal/40' : 'text-charcoal'}`}>{s.label}</h4>
                        {status === 'completed' && <span className="text-[10px] font-bold uppercase tracking-wider text-coral bg-coral/10 px-2 py-0.5 rounded-md">Done</span>}
                        {status === 'current' && <span className="text-[10px] font-bold uppercase tracking-wider text-amber bg-amber-soft px-2 py-0.5 rounded-md">In Progress</span>}
                      </div>
                      <time className={`mt-2 block text-xs font-medium ${status === 'upcoming' ? 'text-charcoal/30' : 'text-charcoal-muted'}`}>{s.date}</time>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
