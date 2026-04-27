import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCta = () => (
  <section id="companies" className="py-24 bg-cream">
    <div className="container max-w-4xl">
      <div className="rounded-[32px] bg-charcoal text-white p-12 lg:p-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] coral-glow opacity-30 pointer-events-none" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Ready to let AI do <br /><span className="italic text-coral">the hiring?</span>
          </h2>
          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-coral text-white font-bold hover:bg-coral-dark transition shadow-lg shadow-coral/30"
          >
            Start hiring smarter <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-5 text-sm text-white/50">
            No credit card · Cancel anytime · 10-minute setup
          </p>
        </div>
      </div>
    </div>
  </section>
);