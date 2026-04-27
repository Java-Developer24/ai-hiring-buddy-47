import { Video, FileSearch, Workflow, Code2, ShieldCheck } from "lucide-react";

export const FeaturesBento = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">Features</div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-charcoal">
            Every part of screening, <span className="italic text-coral">automated.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Wide card */}
          <div className="md:col-span-2 rounded-3xl bg-charcoal text-white p-8 relative overflow-hidden border border-charcoal">
            <div className="absolute -bottom-32 -right-20 w-80 h-80 coral-glow opacity-30" />
            <div className="relative grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <div className="h-11 w-11 rounded-2xl bg-coral text-white flex items-center justify-center mb-4">
                  <Video className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-2xl leading-tight">
                  Personalised video interview for every candidate.
                </h3>
                <p className="mt-3 text-base text-white/70">
                  Questions are generated from the candidate&apos;s resume against your JD — no two interviews are identical.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral mb-2">Question 3 of 6</div>
                <p className="text-sm text-white/90 leading-relaxed">
                  &ldquo;You mentioned scaling Postgres at TruePay. Walk me through how you handled the read-replica lag during the Q3 launch.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-coral rounded-full" />
                  </div>
                  <span className="text-[11px] text-white/60 font-mono">02:14</span>
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
  <div className="rounded-3xl border border-charcoal/10 bg-white p-6 flex flex-col hover:border-coral/30 hover:shadow-md transition">
    <div className="h-10 w-10 rounded-xl bg-coral/10 flex items-center justify-center mb-4 text-coral">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="font-display font-bold text-lg text-charcoal leading-tight">{title}</h3>
    <p className="mt-2 text-sm text-charcoal-muted">{body}</p>
  </div>
);