import { Check, X } from "lucide-react";

const rows = [
  ["AI scores resume vs JD", "Partial", true, true],
  ["Questions generated from resume", false, false, true],
  ["Sends invites autonomously", false, "Manual", true],
  ["AI voice video interview", false, true, true],
  ["Auto-rejects with personalised email", false, false, true],
  ["Plain-English AI recommendation", false, "Score only", true],
  ["Human required per candidate", "Always", "Often", false],
];

const cell = (v) => {
  if (v === true)
    return <Check className="h-4 w-4 text-coral mx-auto" strokeWidth={3} />;
  if (v === false)
    return <X className="h-4 w-4 text-charcoal-muted/40 mx-auto" />;
  return <span className="text-xs text-charcoal-muted font-medium">{v}</span>;
};

export const Comparison = () => {
  return (
    <section className="py-24 bg-cream-warm">
      <div className="container max-w-[900px]">
        <div className="text-center mb-10">
          <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">
            Comparison
          </div>
          <h2 className="mt-2 font-display font-bold text-4xl text-charcoal">
            How HireIQ stacks up.
          </h2>
        </div>

        <div className="rounded-3xl border border-charcoal/10 bg-white overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-charcoal/10 bg-cream/50">
                <th className="text-left p-4 font-bold text-charcoal-muted text-[11px] uppercase tracking-wider">
                  Feature
                </th>
                <th className="p-4 font-bold text-charcoal-muted text-[11px] uppercase tracking-wider">
                  Traditional ATS
                </th>
                <th className="p-4 font-bold text-charcoal-muted text-[11px] uppercase tracking-wider">
                  HireVue / Jobma
                </th>
                <th className="p-4 font-display font-bold text-coral text-[12px] uppercase tracking-wider border-l-2 border-coral bg-coral/5">
                  HireIQ
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-charcoal/5 last:border-0"
                >
                  <td className="p-4 text-charcoal font-medium">{r[0]}</td>
                  <td className="p-4 text-center">{cell(r[1])}</td>
                  <td className="p-4 text-center">{cell(r[2])}</td>
                  <td className="p-4 text-center border-l-2 border-coral bg-coral/5">
                    {cell(r[3])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
