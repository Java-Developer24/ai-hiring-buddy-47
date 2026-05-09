import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "recruiter@hireiq.com" && password === "hireiq123") {
      navigate("/dashboard");
    } else if (email === "candidate@hireiq.com" && password === "hireiq123") {
      window.location.href = "http://localhost:8081/candidate/login";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full rounded-3xl border border-charcoal/10 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] animate-in fade-in zoom-in duration-300 md:p-10">
      <div className="space-y-1.5 text-center mb-7">
        <h1 className="font-display font-bold text-2xl text-charcoal">
          Welcome back
        </h1>
        <p className="text-[13px] text-charcoal-muted">
          Sign in to your HireIQ workspace
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-charcoal uppercase tracking-wider">
            Work email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={`w-full h-11 px-3.5 rounded-xl bg-cream/40 border text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition ${error ? "border-destructive" : "border-charcoal/10"}`}
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold text-charcoal uppercase tracking-wider">
              Password
            </label>
            <button
              type="button"
              className="text-[10px] text-coral font-bold hover:underline"
            >
              Forgot?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full h-11 pl-3.5 pr-10 rounded-xl bg-cream/40 border border-charcoal/10 text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 focus:bg-white transition`}
            />

            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal transition"
            >
              {showPwd ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-[11px] font-medium text-destructive bg-destructive/5 p-2.5 rounded-lg border border-destructive/10 animate-in slide-in-from-top-1">
            <AlertCircle className="h-3.5 w-3.5" /> {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full h-11 rounded-xl bg-coral text-white font-bold text-sm hover:bg-coral-dark transition-all shadow-sm active:scale-[0.98]"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 p-3.5 rounded-2xl bg-amber-soft/60 border border-amber/20">
        <p className="text-[10px] font-bold text-charcoal uppercase tracking-widest text-center mb-2.5">
          Demo Access
        </p>
        <div className="grid grid-cols-1 gap-1.5 text-[11px]">
          <div className="flex justify-between items-center">
            <span className="text-charcoal-muted">Recruiter:</span>
            <code className="bg-white px-1.5 py-0.5 rounded text-charcoal text-[10px]">
              recruiter@hireiq.com
            </code>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-charcoal-muted">Candidate:</span>
            <code className="bg-white px-1.5 py-0.5 rounded text-charcoal text-[10px]">
              candidate@hireiq.com
            </code>
          </div>
          <div className="flex justify-between items-center pt-1.5 mt-1 border-t border-amber/20">
            <span className="text-charcoal-muted">Password:</span>
            <code className="bg-white px-1.5 py-0.5 rounded text-charcoal text-[10px]">
              hireiq123
            </code>
          </div>
        </div>
      </div>

      {/* <div className="mt-6 text-center text-xs text-charcoal-muted">
         New to HireIQ?{" "}
         <Link to="/onboarding" className="text-coral font-bold hover:underline">Create organisation account</Link>
        </div> */}
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[400px] w-[400px] coral-glow opacity-40 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] amber-glow opacity-30 pointer-events-none" />
      <Link
        to="/"
        className="mb-8 hover:scale-105 transition-transform relative z-10"
      >
        <HireIqLogo />
      </Link>
      <div className="relative z-10 w-full max-w-[520px]">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
