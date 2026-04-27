const stats = [
  { v: "87%", l: "reduction in time-to-shortlist" },
  { v: "100%", l: "candidates scored consistently" },
  { v: "<4 hrs", l: "average time to first shortlist" },
  { v: "0", l: "candidates without an update" },
];

export const Stats = () => (
  <section className="py-20">
    <div className="container max-w-6xl">
      <div className="rounded-3xl bg-coral text-cream p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden border border-coral">
        <div className="absolute inset-0 grid-bg opacity-20" />
        {stats.map((s) => (
          <div key={s.l} className="relative">
            <div className="font-display font-bold text-4xl lg:text-5xl text-amber">{s.v}</div>
            <div className="mt-2 text-lg text-cream/70 max-w-[180px]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);