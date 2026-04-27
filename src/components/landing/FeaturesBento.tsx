import { Video, FileSearch, Workflow, Code2, ShieldCheck } from "lucide-react";

export const FeaturesBento = () => {
  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-lg font-medium text-charcoal-muted uppercase tracking-wider">// Features //</div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-charcoal">
            Every part of screening, <span className="italic text-coral">automated.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Wide card */}
          <div className="md:col-span-2 rounded-3xl bg-coral text-cream p-8 relative overflow-hidden border border-coral">
            <div className="absolute -bottom-32 -right-20 w-80 h-80 amber-glow opacity-40" />
            <div className="relative grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <div className="h-11 w-11 rounded-2xl bg-amber text-coral flex items-center justify-center mb-4">
                  <Video className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-2xl leading-tight">
                  Personalised video interview for every candidate.
                </h3>
                <p className="mt-3 text-lg text-cream/70">
                  Questions are generated from the candidate's resume against your JD — no two interviews are identical.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-cream/10 rounded-2xl p-5">
                <div className="text-[13px] uppercase tracking-wider text-amber mb-2">Question 3 of 6</div>
                <p className="text-lg text-cream leading-relaxed">
                  "You mentioned scaling Postgres at TruePay. Walk me through how you handled the read-replica lag during the Q3 launch."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-cream/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-amber rounded-full" />
                  </div>
                  <span className="text-[12px] text-cream/60">02:14</span>
                </div>
              </div>
            </div>
          </div>

          <FeatureCard icon={FileSearch} title="Resume × JD match scoring" body="Semantic match, not keyword counting." />
          <FeatureCard icon={Workflow} title="Autonomous outcome actions" body="Auto-reject, auto-invite, auto-shortlist on your rules." />
          <FeatureCard icon={Code2} title="Coding & skills assessments" body="Live sandbox with anti-cheat, scored automatically." />
          <FeatureCard icon={ShieldCheck} title="Audit trail & compliance" body="Every decision logged. EEOC-ready exports." />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, body }: { icon: any; title: string; body: string }) => (
  <div className="rounded-3xl border border-charcoal/10 bg-white p-6 flex flex-col">
    <div className="h-10 w-10 rounded-xl bg-cream border border-charcoal/10 flex items-center justify-center mb-4 text-coral">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="font-display font-semibold text-lg text-charcoal leading-tight">{title}</h3>
    <p className="mt-2 text-lg text-charcoal-muted">{body}</p>
  </div>
);