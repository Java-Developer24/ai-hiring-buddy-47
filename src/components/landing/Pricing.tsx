import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: ["2 active jobs", "50 applications/month", "Resume scoring", "Email support"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹12,000",
    sub: "/month",
    features: ["Unlimited jobs", "500 applications", "All AI modules", "Coding sandbox", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "",
    features: ["Unlimited everything", "ATS integrations", "SSO & SAML", "SLA & dedicated CSM"],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-cream-warm">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">Pricing</div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-charcoal">
            Plans that scale with <span className="italic">your hiring.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => {
            const isHighlight = p.highlight;
            return (
              <div
                key={p.name}
                className={
                  isHighlight
                    ? "rounded-3xl bg-charcoal text-white p-8 relative shadow-xl shadow-coral/10 lg:scale-[1.02]"
                    : "rounded-3xl bg-white border border-charcoal/10 p-8"
                }
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Most popular
                  </span>
                )}
                <div className={`text-[11px] font-bold uppercase tracking-[0.2em] ${isHighlight ? "text-coral" : "text-charcoal-muted"}`}>{p.name}</div>
                <div className="mt-4 flex items-end gap-1.5">
                  <span className={`font-display font-bold text-5xl ${isHighlight ? "text-white" : "text-charcoal"}`}>{p.price}</span>
                  <span className={`pb-2 text-sm ${isHighlight ? "text-white/60" : "text-charcoal-muted"}`}>{p.sub}</span>
                </div>
                <Link
                  to="/login"
                  className={
                    isHighlight
                      ? "mt-6 inline-flex w-full items-center justify-center h-11 rounded-full bg-coral text-white text-sm font-bold hover:bg-coral-dark transition"
                      : "mt-6 inline-flex w-full items-center justify-center h-11 rounded-full bg-charcoal text-white text-sm font-bold hover:bg-coral transition"
                  }
                >
                  {p.name === "Enterprise" ? "Contact sales" : "Sign up now"}
                </Link>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${isHighlight ? "text-white/85" : "text-charcoal"}`}>
                      <Check className={`h-4 w-4 flex-none mt-0.5 ${isHighlight ? "text-coral" : "text-coral"}`} strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};