import { Settings, Sparkles, ClipboardCheck } from "lucide-react";

const cards = [
  {
    n: "01",
    icon: Settings,
    iconBg: "bg-coral text-amber",
    title: "You configure the role",
    body: "Upload the JD, set thresholds, choose modules. 10 minutes.",
    tag: "One-time setup",
    tagBg: "bg-cream text-charcoal",
  },
  {
    n: "02",
    icon: Sparkles,
    iconBg: "bg-amber text-coral",
    title: "AI handles every candidate",
    body: "Resume matched, video interview generated, answers scored — 24/7.",
    tag: "Fully autonomous",
    tagBg: "bg-coral text-amber",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    iconBg: "bg-amber-warm text-cream",
    title: "You review the results",
    body: "Ranked shortlist, AI reasoning, suggested panel questions.",
    tag: "Human for exceptions only",
    tagBg: "bg-amber-soft text-amber-warm",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-24 bg-cream-warm">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-lg font-medium text-charcoal-muted uppercase tracking-wider">// How it works //</div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-charcoal">
            Three steps. Then it just <span className="italic">runs</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.n} className="rounded-3xl border border-charcoal/10 bg-white p-7 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${c.iconBg}`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-lg text-charcoal-muted">{c.n}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal leading-tight">{c.title}</h3>
              <p className="mt-2 text-lg text-charcoal-muted flex-1">{c.body}</p>
              <span className={`mt-6 inline-flex self-start text-[13px] font-semibold uppercase tracking-wide rounded-full px-3 py-1 ${c.tagBg}`}>
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};