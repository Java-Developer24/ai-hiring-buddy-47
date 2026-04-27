import { Link } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 backdrop-blur-md bg-cream/70 border-b border-charcoal/10">
      <div className="container h-full flex items-center justify-between">
        <Link to="/"><HireIqLogo /></Link>
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-charcoal/80">
          <a href="#product" className="hover:text-charcoal transition-colors">Product</a>
          <a href="#how" className="hover:text-charcoal transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-charcoal transition-colors">Pricing</a>
          <a href="#companies" className="hover:text-charcoal transition-colors">For companies</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center px-4 h-9 rounded-full text-lg font-medium text-charcoal border border-charcoal/15 hover:bg-charcoal/5 transition"
          >
            Log in
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center px-4 h-9 rounded-full text-lg font-semibold bg-coral text-cream hover:bg-charcoal transition"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </header>
  );
};