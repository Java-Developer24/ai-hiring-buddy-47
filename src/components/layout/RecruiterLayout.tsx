import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutGrid, Briefcase, ClipboardList, Settings, Plus, ChevronDown, LogOut } from "lucide-react";
import { ReactNode } from "react";
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
  const active = location.pathname === path || (path !== "/dashboard" && location.pathname.startsWith(path));

  return (
    <Link
      to={path}
      className={`relative w-full h-10 px-3 rounded-xl flex items-center gap-3 text-sm font-medium transition ${
        active ? "bg-cream/15 text-cream" : "text-cream/60 hover:text-cream hover:bg-cream/5"
      }`}
    >
      <Icon className="h-[18px] w-[18px] flex-none" />
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="h-5 min-w-5 px-1.5 rounded-full bg-destructive text-[10px] font-bold text-white flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  );
};

export const RecruiterLayout = ({ children, title, showNewJobButton = true }: { children: ReactNode; title: string; showNewJobButton?: boolean }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-cream">
      {/* Sidebar */}
      <aside className="w-52 bg-charcoal flex flex-col px-3 py-4 gap-0.5 fixed inset-y-0 left-0 z-50">
        <Link to="/dashboard" className="mb-4 px-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-coral flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-amber/30 rounded-full blur-md" />
            <span className="relative font-display font-bold text-amber text-lg leading-none">H</span>
          </div>
          <span className="font-display font-bold text-[18px] tracking-tight text-cream">HireIQ</span>
        </Link>

        <div className="px-3 mb-1 text-[9px] uppercase tracking-wider text-cream/50 font-semibold">Workspace</div>
        <SidebarItem Icon={LayoutGrid} label="Dashboard" path="/dashboard" />
        <SidebarItem Icon={Briefcase} label="Jobs" path="/jobs" />
        <SidebarItem Icon={ClipboardList} label="Review Queue" path="/review" badge="3" />
        <SidebarItem Icon={Settings} label="Settings" path="/settings" />

        <div className="flex-1" />
        <div className="border-t border-cream/10 pt-2 px-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-amber text-coral flex items-center justify-center text-xs font-bold flex-none">AZ</div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-cream truncate">Alex</div>
            <div className="text-[10px] text-cream/50 truncate">Acme Corp · Admin</div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-cream/50" />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col ml-52">
        {/* Top bar */}
        <header className="h-12 bg-white border-b border-charcoal/10 flex items-center justify-between px-5 sticky top-0 z-40">
          <div className="text-sm text-charcoal-muted">
            <span className="text-charcoal font-semibold">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            {showNewJobButton && (
              <Link to="/jobs/new" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-coral text-cream text-xs font-bold hover:bg-charcoal transition shadow-sm">
                <Plus className="h-3.5 w-3.5" /> New Job
              </Link>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-2 h-9 px-2 rounded-lg hover:bg-cream/60 transition focus:outline-none">
                  <span className="text-xs font-bold text-charcoal">Alex</span>
                  <div className="h-7 w-7 rounded-full bg-coral text-cream flex items-center justify-center text-[10px] font-bold shadow-sm">AZ</div>
                  <ChevronDown className="h-3.5 w-3.5 text-charcoal-muted" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-xl border-charcoal/10 shadow-xl">
                <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-charcoal-muted font-bold">Alex Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-charcoal/5" />
                <DropdownMenuItem className="text-xs font-medium py-2.5 cursor-pointer rounded-lg">Profile Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-xs font-medium py-2.5 cursor-pointer rounded-lg">Billing & Usage</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-charcoal/5" />
                <DropdownMenuItem
                  onClick={() => navigate("/")}
                  className="text-xs font-bold py-2.5 cursor-pointer rounded-lg text-destructive hover:bg-destructive/5"
                >
                  <LogOut className="h-3.5 w-3.5 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Body */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
