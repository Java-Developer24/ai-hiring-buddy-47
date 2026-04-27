import { Link } from "react-router-dom";
import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { candidateJobs } from "@/lib/candidateFlow";

export default function CandidateJobs() {
  return (
    <CandidateDashboardLayout title="Job Postings">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-[28px] border border-charcoal/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-coral">Candidate portal</p>
              <h2 className="text-2xl font-display font-bold text-charcoal mt-2">Open roles at HireIQ Partner Solutions</h2>
              <p className="text-sm text-charcoal-muted mt-2 max-w-2xl">
                Review the current openings below. Once you apply, your next steps will appear in the mailbox section of the portal.
              </p>
            </div>
            <div className="text-sm text-charcoal-muted font-medium">{candidateJobs.length} active positions</div>
          </div>
        </div>

        <div className="grid gap-4">
          {candidateJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-[28px] border border-charcoal/10 p-6 md:p-7 flex flex-col gap-6 md:flex-row md:items-center md:justify-between hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-charcoal">{job.title}</h3>
                  <span className="px-2.5 py-1 rounded-md bg-amber-soft text-amber text-[10px] font-bold uppercase tracking-wider">
                    {job.team}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-charcoal-muted">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.employmentType}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.level}</span>
                </div>

                <p className="text-sm text-charcoal-muted leading-relaxed max-w-3xl">{job.summary}</p>
              </div>

              <Link
                to={`/apply/${job.id}`}
                className="h-11 px-6 rounded-xl bg-coral text-white font-bold text-sm flex items-center gap-2 hover:bg-coral-dark transition shadow-sm"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
