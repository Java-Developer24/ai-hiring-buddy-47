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
    <section id="product" className="py-20 bg-cream-warm">
      <div className="container">
        <div className="max-w-[900px] mx-auto bg-white border border-charcoal/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <div className="inline-block text-lg font-medium text-charcoal-muted uppercase tracking-wider">
              // The autonomous pipeline //
            </div>
            <h2 className="mt-2 font-display font-bold text-3xl text-charcoal">
              From application to shortlist, untouched.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-stretch">
            {stages.map((s, i) => (
              <div key={s.title} className="contents">
                <div className="relative bg-cream/60 border border-charcoal/10 rounded-2xl p-4 flex flex-col items-center text-center">
                  <div className="h-10 w-10 rounded-xl bg-coral text-amber flex items-center justify-center mb-2">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-semibold text-charcoal leading-tight">{s.title}</div>
                  <div className="text-[12px] text-charcoal-muted mt-1">{s.note}</div>
                  {i < stages.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coral/60 z-10" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg text-charcoal-muted bg-coral text-cream/90 rounded-full py-3 px-6">
            <span><b className="text-cream">48</b> applied</span>
            <span className="text-cream/50">·</span>
            <span><b className="text-cream">27</b> auto-rejected</span>
            <span className="text-cream/50">·</span>
            <span><b className="text-amber">9</b> shortlisted</span>
            <span className="text-cream/50">·</span>
            <span><b className="text-cream">3</b> in review</span>
          </div>
        </div>
      </div>
    </section>
  );
};