import { Link, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, Mail, Activity, LogOut, ChevronDown } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { HireIqLogo } from "@/components/HireIqLogo";
import { getStoredCandidateStage, getVisibleMailboxMessages, getJobById } from "@/lib/candidateFlow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarItem = ({ Icon, label, path, badge }: { Icon: any; label: string; path: string; badge?: string }) => {
  const location = useLocation();
  const active = location.pathname.startsWith(path);

  return (
    <Link
      to={path}
      className={`relative w-full h-11 px-3 rounded-xl flex items-center gap-3 text-sm font-medium transition ${
        active ? "bg-coral text-white shadow-sm" : "text-charcoal-muted hover:text-charcoal hover:bg-charcoal/5"
      }`}
    >
      <Icon className="h-5 w-5 flex-none" />
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="h-5 min-w-5 px-1.5 rounded-full bg-amber text-[10px] font-bold text-coral flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  );
};

export const CandidateDashboardLayout = ({ children, title }: { children: ReactNode; title: string }) => {
  const navigate = useNavigate();
  const [mailCount, setMailCount] = useState(0);

  useEffect(() => {
    const stage = getStoredCandidateStage();
    const messages = getVisibleMailboxMessages(stage, getJobById().title);
    setMailCount(messages.length);
  }, [title]);

  return (
    <div className="min-h-screen flex bg-cream font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-charcoal/10 flex flex-col px-4 py-6 gap-2 fixed inset-y-0 left-0 z-50 shadow-sm">
        <Link to="/candidate/dashboard" className="mb-6 px-2">
          <HireIqLogo variant="dark" />
        </Link>

        <div className="px-3 mt-4 mb-2 text-[10px] uppercase tracking-wider text-charcoal-muted font-bold">Candidate Portal</div>

        <SidebarItem Icon={Briefcase} label="Job Postings" path="/candidate/jobs" />
        <SidebarItem Icon={Mail} label="Mailbox" path="/candidate/mailbox" badge={mailCount > 0 ? String(mailCount) : undefined} />
        <SidebarItem Icon={Activity} label="Application Tracking" path="/candidate/tracking" />

        <div className="flex-1" />

        <div className="bg-cream/50 rounded-2xl p-4 border border-charcoal/5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold flex-none shadow-sm">JD</div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-charcoal truncate">John Doe</div>
              <div className="text-xs text-charcoal-muted truncate">candidate@hireiq.com</div>
            </div>
          </div>
          <button
            onClick={() => navigate("/candidate/login")}
            className="w-full h-9 rounded-xl border border-charcoal/10 text-xs font-bold text-charcoal-muted hover:text-charcoal hover:bg-white transition flex items-center justify-center gap-2"
          >
            <LogOut className="h-3.5 w-3.5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col ml-64 min-h-screen">
        {/* Top bar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-charcoal/10 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="text-lg font-display font-bold text-charcoal">
            {title}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-2 h-10 px-3 rounded-xl hover:bg-charcoal/5 transition focus:outline-none">
                <span className="text-sm font-bold text-charcoal">John</span>
                <div className="h-8 w-8 rounded-full bg-charcoal text-white flex items-center justify-center text-xs font-bold shadow-sm">JD</div>
                <ChevronDown className="h-4 w-4 text-charcoal-muted" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-xl border-charcoal/10 shadow-xl">
              <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-charcoal-muted font-bold">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-charcoal/5" />
              <DropdownMenuItem className="text-sm font-medium py-2.5 cursor-pointer rounded-lg">Profile Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-charcoal/5" />
              <DropdownMenuItem
                onClick={() => navigate("/candidate/login")}
                className="text-sm font-bold py-2.5 cursor-pointer rounded-lg text-coral hover:bg-coral/5"
              >
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Body */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
