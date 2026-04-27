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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "recruiter@hireiq.com" && password === "hireiq123") {
      navigate("/dashboard");
    } else if (email === "candidate@hireiq.com" && password === "hireiq123") {
      navigate("/candidate/login");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-[380px] bg-login-panel rounded-2xl border border-charcoal/10 p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] animate-in fade-in zoom-in duration-300">
    
      <div className="space-y-1 text-center mb-6">
        <h1 className="font-display font-bold text-xl text-white">Sign in to your account</h1>
        <p className="text-[13px] text-white/60">Enter credentials to access your portal</p>
      </div>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-white uppercase tracking-wider">Work email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={`w-full h-10 px-3 rounded-lg bg-login-bg/30 border text-sm text-white placeholder:text-white/60/40 focus:outline-none focus:ring-2 focus:ring-coral/20 transition ${error ? "border-destructive" : "border-charcoal/10"}`}
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold text-white uppercase tracking-wider">Password</label>
            <button type="button" className="text-[10px] text-coral font-bold hover:underline">Forgot?</button>
          </div>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-10 pl-3 pr-10 rounded-lg bg-login-bg/30 border border-charcoal/10 text-sm text-white placeholder:text-white/60/40 focus:outline-none focus:ring-2 focus:ring-coral/20 transition`}
            />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition">
              {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
          className="w-full h-10 rounded-lg bg-coral text-cream font-bold text-sm hover:bg-charcoal transition-all shadow-sm active:scale-[0.98]"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 p-3 rounded-xl bg-coral/5 border border-coral/10">
        <p className="text-[10px] font-bold text-coral uppercase tracking-widest text-center mb-2">Demo Access</p>
        <div className="grid grid-cols-1 gap-2 text-[11px]">
          <div className="flex justify-between">
            <span className="text-white/60">Recruiter:</span>
            <code className="bg-login-panel px-1 rounded text-white">recruiter@hireiq.com</code>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Candidate:</span>
            <code className="bg-login-panel px-1 rounded text-white">candidate@hireiq.com</code>
          </div>
          <div className="flex justify-between pt-1 border-t border-coral/10">
            <span className="text-white/60">Password:</span>
            <code className="bg-login-panel px-1 rounded text-white">hireiq123</code>
          </div>
        </div>
      </div>


      <div className="mt-6 text-center text-xs text-white/60">
        New to HireIQ?{" "}
        <Link to="/onboarding" className="text-coral font-semibold hover:underline">Create organisation account</Link>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-login-bg  flex flex-col items-center justify-center p-6">
      <Link to="/" className="mb-8 hover:scale-105 transition-transform"><HireIqLogo variant="light" /></Link>
      <LoginCard />
      {/* <div className="mt-8 text-center space-y-4">
        <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Trusted by 500+ teams</p>
        <div className="text-xs text-white/60">
          New to HireIQ?{" "}
          <Link to="/onboarding" className="text-coral font-bold hover:underline">Create workspace</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
