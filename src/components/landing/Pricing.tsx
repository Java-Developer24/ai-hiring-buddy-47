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
    <section id="pricing" className="py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-lg font-medium text-charcoal-muted uppercase tracking-wider">// Pricing //</div>
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
                    ? "rounded-3xl bg-coral text-cream p-8 border-2 border-amber relative"
                    : "rounded-3xl bg-white border border-charcoal/10 p-8"
                }
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-coral text-[13px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <div className={`text-lg font-semibold ${isHighlight ? "text-amber" : "text-charcoal-muted"}`}>{p.name}</div>
                <div className="mt-3 flex items-end gap-1">
                  <span className={`font-display font-bold text-4xl ${isHighlight ? "text-cream" : "text-charcoal"}`}>{p.price}</span>
                  <span className={`pb-1 text-lg ${isHighlight ? "text-cream/60" : "text-charcoal-muted"}`}>{p.sub}</span>
                </div>
                <Link
                  to="/login"
                  className={
                    isHighlight
                      ? "mt-6 inline-flex w-full items-center justify-center h-11 rounded-full bg-amber text-coral font-semibold hover:opacity-90 transition"
                      : "mt-6 inline-flex w-full items-center justify-center h-11 rounded-full bg-coral text-cream font-semibold hover:bg-charcoal transition"
                  }
                >
                  {p.name === "Enterprise" ? "Contact sales" : "Sign up now"}
                </Link>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-lg ${isHighlight ? "text-cream/85" : "text-charcoal"}`}>
                      <Check className={`h-4 w-4 flex-none mt-0.5 ${isHighlight ? "text-amber" : "text-coral"}`} strokeWidth={3} />
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