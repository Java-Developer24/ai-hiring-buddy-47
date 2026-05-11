const stats = [
  { v: "87%", l: "reduction in time-to-shortlist" },
  { v: "100%", l: "candidates scored consistently" },
  { v: "<4 hrs", l: "average time to first shortlist" },
  { v: "0", l: "candidates without an update" },
];

export const Stats = () => (
  <section className="py-20 bg-cream">
    <div className="container max-w-6xl">
      <div className="rounded-3xl bg-charcoal text-white p-10 lg:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute -top-20 -right-20 h-72 w-72 coral-glow opacity-25 pointer-events-none" />
        {stats.map((s) => (
          <div key={s.l} className="relative">
            <div className="font-display font-bold text-4xl lg:text-5xl text-coral">
              {s.v}
            </div>
            <div className="mt-2 text-sm text-white/70 max-w-[180px] leading-relaxed">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
