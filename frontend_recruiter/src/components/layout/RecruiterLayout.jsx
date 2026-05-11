import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Briefcase,
  ClipboardList,
  Settings,
  Plus,
  ChevronDown,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarItem = ({ Icon, label, path, badge, collapsed = false }) => {
  const location = useLocation();
  const active =
    location.pathname === path ||
    (path !== "/dashboard" && location.pathname.startsWith(path));

  return (
    <Link
      to={path}
      title={collapsed ? label : undefined}
      className={`relative w-full h-10 rounded-xl flex items-center text-sm font-medium transition ${
        collapsed ? "justify-center px-2" : "gap-3 px-3"
      } ${
        active
          ? "bg-cream/15 text-cream"
          : "text-cream/60 hover:text-cream hover:bg-cream/5"
      }`}
    >
      <Icon className="h-[18px] w-[18px] flex-none" />
      {!collapsed && <span className="flex-1 text-left">{label}</span>}
      {badge && (
        <span
          className={`rounded-full bg-destructive text-[10px] font-bold text-white flex items-center justify-center ${
            collapsed
              ? "absolute right-1.5 top-1.5 h-4 min-w-4 px-1"
              : "h-5 min-w-5 px-1.5"
          }`}
        >
          {badge}
        </span>
      )}
    </Link>
  );
};

const SIDEBAR_COLLAPSED_STORAGE_KEY = "recruiter-sidebar-collapsed";

export const RecruiterLayout = ({
  children,
  title,
  showNewJobButton = true,
}) => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY) === "true"
    );
  });

  useEffect(() => {
    window.localStorage.setItem(
      SIDEBAR_COLLAPSED_STORAGE_KEY,
      String(sidebarCollapsed),
    );
  }, [sidebarCollapsed]);

  return (
    <div className="min-h-screen flex bg-cream">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col gap-0.5 bg-charcoal px-3 py-4 transition-all duration-300 ${sidebarCollapsed ? "w-[84px]" : "w-[228px]"}`}
      >
        <div
          className={`mb-4 flex items-center ${sidebarCollapsed ? "justify-center" : "justify-between px-2"}`}
        >
          <Link
            to="/dashboard"
            className={`flex items-center gap-2 ${sidebarCollapsed ? "justify-center" : ""}`}
          >
            <div className="h-8 w-8 rounded-lg bg-coral flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-amber/30 rounded-full blur-md" />
              <span className="relative font-display font-bold text-amber text-lg leading-none">
                H
              </span>
            </div>
            {!sidebarCollapsed && (
              <span className="font-display font-bold text-[18px] tracking-tight text-cream">
                HireIQ
              </span>
            )}
          </Link>
          {!sidebarCollapsed && (
            <button
              type="button"
              onClick={() => setSidebarCollapsed(true)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-cream/60 transition hover:bg-cream/10 hover:text-cream"
              aria-label="Collapse sidebar"
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          )}
        </div>

        {!sidebarCollapsed && (
          <div className="px-3 mb-1 text-[9px] uppercase tracking-wider text-cream/50 font-semibold">
            Workspace
          </div>
        )}
        <SidebarItem
          Icon={LayoutGrid}
          label="Dashboard"
          path="/dashboard"
          collapsed={sidebarCollapsed}
        />
        <SidebarItem
          Icon={Briefcase}
          label="Jobs"
          path="/jobs"
          collapsed={sidebarCollapsed}
        />
        <SidebarItem
          Icon={ClipboardList}
          label="Review Queue"
          path="/review"
          badge="3"
          collapsed={sidebarCollapsed}
        />
        <SidebarItem
          Icon={Settings}
          label="Settings"
          path="/settings"
          collapsed={sidebarCollapsed}
        />

        <div className="flex-1" />
        <div
          className={`border-t border-cream/10 pt-2 ${sidebarCollapsed ? "px-0" : "px-2"} flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2"}`}
        >
          <div className="h-8 w-8 rounded-full bg-amber text-coral flex items-center justify-center text-xs font-bold flex-none">
            AZ
          </div>
          {!sidebarCollapsed && (
            <>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold text-cream truncate">
                  Alex
                </div>
                <div className="text-[10px] text-cream/50 truncate">
                  Acme Corp · Admin
                </div>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-cream/50" />
            </>
          )}
        </div>
      </aside>

      {/* Main */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? "ml-[84px]" : "ml-[228px]"}`}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-charcoal/10 bg-white px-4">
          <div className="flex items-center gap-3 text-sm text-charcoal-muted">
            <button
              type="button"
              onClick={() => setSidebarCollapsed((value) => !value)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-charcoal/10 text-charcoal-muted transition hover:bg-cream/60 hover:text-charcoal"
              aria-label={
                sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
            >
              {sidebarCollapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </button>
            <span className="text-charcoal font-semibold">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            {showNewJobButton && (
              <Link
                to="/jobs/new"
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-coral text-cream text-xs font-bold hover:bg-charcoal transition shadow-sm"
              >
                <Plus className="h-3.5 w-3.5" /> New Job
              </Link>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-2 h-9 px-2 rounded-lg hover:bg-cream/60 transition focus:outline-none">
                  <span className="text-xs font-bold text-charcoal">Alex</span>
                  <div className="h-7 w-7 rounded-full bg-coral text-cream flex items-center justify-center text-[10px] font-bold shadow-sm">
                    AZ
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-charcoal-muted" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 rounded-xl border-charcoal/10 shadow-xl"
              >
                <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-charcoal-muted font-bold">
                  Alex Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-charcoal/5" />
                <DropdownMenuItem className="text-xs font-medium py-2.5 cursor-pointer rounded-lg">
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs font-medium py-2.5 cursor-pointer rounded-lg">
                  Billing & Usage
                </DropdownMenuItem>
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
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};
