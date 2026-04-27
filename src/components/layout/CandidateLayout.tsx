import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, LogOut, MapPin, Clock } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

export const CandidateLayout = ({
  children,
  showLogo = true,
  companyName = " HireIQ Partner Solutions",
  className = "bg-cream",
  hideHeader = false,
  backHref,
  backLabel = "Back",
}: {
  children: ReactNode;
  showLogo?: boolean;
  companyName?: string;
  className?: string;
  hideHeader?: boolean;
  backHref?: string;
  backLabel?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {showLogo && (
        <header className="h-16 bg-white/90 backdrop-blur-md border-b border-charcoal/10 flex items-center justify-between px-4 md:px-8 flex-none sticky top-0 z-50">
          <div className="flex items-center gap-4">
            {backHref ? (
              <Link
                to={backHref}
                className="inline-flex items-center gap-2 h-10 px-3 rounded-xl border border-charcoal/10 text-charcoal-muted hover:text-charcoal hover:bg-cream transition text-sm font-bold"
              >
                <ChevronLeft className="h-4 w-4" />
                {backLabel}
              </Link>
            ) : null}

            <Link to="/candidate/landing" className="flex items-center gap-3 group">
              <HireIqLogo />
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-bold text-charcoal text-sm leading-tight">{companyName}</span>
                <span className="text-[10px] text-charcoal-muted font-medium">Hiring Portal</span>
              </div>
            </Link>
          </div>

          {!hideHeader ? (
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-charcoal-muted text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 border-r border-charcoal/10 pr-4">
                  <MapPin className="h-3 w-3" /> Hyderabad
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> 20-25 mins
                </div>
              </div>
              <div className="h-7 w-px bg-charcoal/10 hidden md:block" />
              <button
                onClick={() => navigate("/candidate/login")}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-charcoal text-white hover:bg-charcoal/90 transition-all text-xs font-bold shadow-sm"
              >
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/candidate/login")}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-charcoal text-white hover:bg-charcoal/90 transition-all text-xs font-bold shadow-sm"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          )}
        </header>
      )}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};
