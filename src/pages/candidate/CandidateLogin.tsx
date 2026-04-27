import { Link, useNavigate } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";
import { useState } from "react";
import { Chrome, Eye, EyeOff } from "lucide-react";
import { getStoredCandidateStage, setStoredCandidateStage } from "@/lib/candidateFlow";

export default function CandidateLogin() {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (getStoredCandidateStage() === "browsing") {
      setStoredCandidateStage("browsing");
    }
    navigate("/candidate/dashboard");
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6">
      <Link to="/candidate/landing" className="mb-8 hover:scale-105 transition-transform"><HireIqLogo variant="dark" /></Link>

      <div className="w-full max-w-[460px] bg-white border border-charcoal/10 rounded-[28px] p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-90" />

        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-2xl text-charcoal">Candidate Portal</h1>
          <p className="text-[13px] text-charcoal-muted mt-2">Sign in to view jobs, mailbox updates, and application tracking</p>
        </div>

        <button className="w-full h-12 rounded-xl border border-charcoal/10 bg-cream text-charcoal font-bold text-sm flex items-center justify-center gap-3 hover:bg-white transition">
          <Chrome className="h-4 w-4 text-coral" />
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-charcoal/10" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">or continue with email</span>
          <div className="h-px flex-1 bg-charcoal/10" />
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-charcoal uppercase tracking-wider">Email address</label>
            <input
              type="email"
              defaultValue="candidate@hireiq.com"
              className="w-full h-11 px-4 rounded-xl bg-white border border-charcoal/10 text-sm text-charcoal placeholder:text-charcoal-muted/60 focus:outline-none focus:ring-2 focus:ring-coral/30 transition"
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-charcoal uppercase tracking-wider">Password</label>
              <button type="button" className="text-[10px] text-amber font-bold hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                defaultValue="hireiq123"
                className="w-full h-11 pl-4 pr-10 rounded-xl bg-white border border-charcoal/10 text-sm text-charcoal placeholder:text-charcoal-muted/60 focus:outline-none focus:ring-2 focus:ring-coral/30 transition"
                required
              />
              <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal transition">
                {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full h-11 mt-2 rounded-xl bg-coral text-white font-bold text-sm hover:bg-coral-dark transition-all shadow-lg shadow-coral/20 active:scale-[0.98]">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
