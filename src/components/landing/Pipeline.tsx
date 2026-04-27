import { ArrowRight, FileText, Sparkles, Video, Brain, ListChecks } from "lucide-react";

const stages = [
  { icon: FileText, title: "Resume submitted", note: "Candidate applies" },
  { icon: Sparkles, title: "AI match score", note: "<60s" },
  { icon: Video, title: "Video invite sent", note: "Automatic" },
  { icon: Brain, title: "AI analyses video", note: "Transcribed + scored" },
  { icon: ListChecks, title: "Shortlist ready", note: "Zero human action" },
];

export const Pipeline = () => {
  return (
    <section id="product" className="py-20 bg-cream">
      <div className="container">
        <div className="max-w-[1040px] mx-auto bg-white border border-charcoal/10 rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="text-center mb-10">
            <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">
              The autonomous pipeline
            </div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-charcoal">
              From application to shortlist, untouched.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-stretch">
            {stages.map((s, i) => (
              <div key={s.title} className="relative bg-cream border border-charcoal/10 rounded-2xl p-4 flex flex-col items-center text-center">
                <div className="h-11 w-11 rounded-xl bg-coral text-white flex items-center justify-center mb-3 shadow-sm">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-bold text-charcoal leading-tight">{s.title}</div>
                <div className="text-[11px] text-charcoal-muted mt-1">{s.note}</div>
                {i < stages.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coral z-10 bg-white rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm bg-charcoal rounded-full py-3 px-6">
            <span className="text-white/70"><b className="text-white">48</b> applied</span>
            <span className="text-white/30">·</span>
            <span className="text-white/70"><b className="text-white">27</b> auto-rejected</span>
            <span className="text-white/30">·</span>
            <span className="text-white/70"><b className="text-amber">9</b> shortlisted</span>
            <span className="text-white/30">·</span>
            <span className="text-white/70"><b className="text-white">3</b> in review</span>
          </div>
        </div>
      </div>
    </section>
  );
};