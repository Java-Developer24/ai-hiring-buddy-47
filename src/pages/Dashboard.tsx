import { Link, useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import { recruiterJobs } from "@/lib/recruiterMock";

const Metric = ({ label, value, tone }: { label: string; value: string; tone?: "good" | "bad" }) => (
  <div className="rounded-2xl border border-charcoal/10 bg-white p-5">
    <div className="text-xs text-charcoal-muted">{label}</div>
    <div className={`mt-2 font-display font-bold text-3xl ${tone === "good" ? "text-coral" : tone === "bad" ? "text-destructive" : "text-charcoal"}`}>{value}</div>
  </div>
);

const StatusPill = ({ s }: { s: "Active" | "Paused" }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${s === "Active" ? "bg-amber/20 text-coral" : "bg-charcoal/10 text-charcoal-muted"}`}>
    <span className={`h-1.5 w-1.5 rounded-full ${s === "Active" ? "bg-amber" : "bg-charcoal-muted"}`} />
    {s}
  </span>
);

const feed = [
  { dot: "bg-destructive", text: "Auto-rejected Ahmed S. — score 31 · Senior Backend Engineer", time: "2 min ago" },
  { dot: "bg-blue-500", text: "Sent video invite to Jordan M. — score 74", time: "8 min ago" },
  { dot: "bg-amber", text: "Shortlisted Sara K. · Product Manager", time: "1 hr ago" },
  { dot: "bg-destructive", text: "Auto-rejected James T. — score 28", time: "2 hrs ago" },
  { dot: "bg-blue-500", text: "Sent video invite to Mohan R. — score 81", time: "3 hrs ago" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <RecruiterLayout title="Dashboard">
      <div className="p-8 space-y-6">
        <div>
          <h1 className="font-display font-bold text-2xl text-charcoal">Good morning, Alex</h1>
          <p className="text-sm text-charcoal-muted mt-1">Here's what the AI has been doing across your active jobs.</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Metric label="Active jobs" value="6" />
            <Metric label="Applications this week" value="48" />
            <Metric label="AI auto-rejected today" value="12" tone="bad" />
            <Metric label="Shortlisted" value="9" tone="good" />
          </div>

        {/* Two column */}
        <div className="grid lg:grid-cols-5 gap-5">
          {/* Jobs table */}
          <div className="lg:col-span-3 rounded-2xl bg-white border border-charcoal/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-charcoal/10 flex items-center justify-between">
              <h3 className="font-display font-bold text-base text-charcoal">Active jobs</h3>
              <button onClick={() => navigate("/jobs")} className="text-xs text-coral font-semibold hover:underline">View all</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-charcoal-muted">
                  <th className="px-5 py-3 font-medium">Job title</th>
                  <th className="px-3 py-3 font-medium text-center">Candidates</th>
                  <th className="px-3 py-3 font-medium text-center">Applied</th>
                  <th className="px-3 py-3 font-medium text-center">Video done</th>
                  <th className="px-3 py-3 font-medium text-center">AI rejected</th>
                  <th className="px-3 py-3 font-medium text-center">Shortlist</th>
                  <th className="px-3 py-3 font-medium text-center">Pending</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recruiterJobs.map((j) => (
                  <tr key={j.id} onClick={() => navigate(`/jobs/${j.id}`)} className="border-t border-charcoal/5 hover:bg-cream/40 cursor-pointer transition">
                    <td className="px-5 py-4 font-medium text-charcoal">{j.title}</td>
                    <td className="px-3 py-4 text-center text-charcoal">{j.candidates}</td>
                    <td className="px-3 py-4 text-center text-charcoal">{j.applied}</td>
                    <td className="px-3 py-4 text-center text-charcoal">{j.video}</td>
                    <td className="px-3 py-4 text-center text-destructive font-semibold">{j.aiRejected}</td>
                    <td className="px-3 py-4 text-center text-charcoal font-semibold">{j.shortlisted}</td>
                    <td className="px-3 py-4 text-center">
                      {j.pending > 0 ? (
                        <span className="inline-flex items-center justify-center h-6 min-w-6 px-1.5 rounded-full bg-amber-soft text-amber-warm text-[11px] font-bold">{j.pending}</span>
                      ) : (
                        <span className="text-charcoal-muted">0</span>
                      )}
                    </td>
                    <td className="px-5 py-4"><StatusPill s={j.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Activity feed */}
          <div className="lg:col-span-2 rounded-2xl bg-white border border-charcoal/10 p-5 flex flex-col">
            <h3 className="font-display font-bold text-base text-charcoal">AI activity</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["All", "Rejections", "Invites", "Shortlists"].map((p, i) => (
                <button key={p} className={`px-3 py-1 rounded-full text-[11px] font-medium ${i === 0 ? "bg-coral text-cream" : "bg-cream text-charcoal-muted hover:text-charcoal"}`}>{p}</button>
              ))}
            </div>
            <ul className="mt-4 space-y-3 flex-1">
              {feed.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className={`mt-1.5 h-2 w-2 rounded-full flex-none ${f.dot}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-charcoal leading-snug">{f.text}</p>
                    <p className="text-[11px] text-charcoal-muted mt-0.5">{f.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl bg-amber-soft border border-amber-warm/30 p-3.5 flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-amber-warm flex-none mt-0.5" />
              <div className="flex-1">
                <p className="text-[12px] text-charcoal font-medium">Review queue has 3 candidates waiting 18h+</p>
                <button className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-amber-warm hover:underline">
                  Review now <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default Dashboard;
