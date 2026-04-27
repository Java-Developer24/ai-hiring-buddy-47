import { Check, X } from "lucide-react";

const rows: [string, boolean | string, boolean | string, boolean][] = [
  ["AI scores resume vs JD", "Partial", true, true],
  ["Questions generated from resume", false, false, true],
  ["Sends invites autonomously", false, "Manual", true],
  ["AI voice video interview", false, true, true],
  ["Auto-rejects with personalised email", false, false, true],
  ["Plain-English AI recommendation", false, "Score only", true],
  ["Human required per candidate", "Always", "Often", false],
];

const cell = (v: boolean | string) => {
  if (v === true) return <Check className="h-4 w-4 text-amber mx-auto" strokeWidth={3} />;
  if (v === false) return <X className="h-4 w-4 text-charcoal-muted/50 mx-auto" />;
  return <span className="text-lg text-charcoal-muted">{v}</span>;
};

export const Comparison = () => {
  return (
    <section className="py-24 bg-cream-warm">
      <div className="container max-w-[900px]">
        <div className="text-center mb-10">
          <div className="text-lg font-medium text-charcoal-muted uppercase tracking-wider">// Comparison //</div>
          <h2 className="mt-2 font-display font-bold text-4xl text-charcoal">
            How HireIQ stacks up.
          </h2>
        </div>

        <div className="rounded-3xl border border-charcoal/10 bg-white overflow-hidden">
          <table className="w-full text-lg">
            <thead>
              <tr className="border-b border-charcoal/10">
                <th className="text-left p-4 font-medium text-charcoal-muted">Feature</th>
                <th className="p-4 font-medium text-charcoal-muted">Traditional ATS</th>
                <th className="p-4 font-medium text-charcoal-muted">HireVue / Jobma</th>
                <th className="p-4 font-display font-bold text-coral border-l-2 border-amber bg-amber/10">HireIQ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-charcoal/5 last:border-0">
                  <td className="p-4 text-charcoal">{r[0]}</td>
                  <td className="p-4 text-center">{cell(r[1])}</td>
                  <td className="p-4 text-center">{cell(r[2])}</td>
                  <td className="p-4 text-center border-l-2 border-amber bg-amber/5">{cell(r[3])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};