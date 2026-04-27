import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  Upload,
  ExternalLink,
  Check,
  Globe,
  Mail,
  Users,
  Sliders,
  Puzzle,
  CreditCard
} from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Branding");

  const tabs = [
    { label: "Branding", icon: Globe },
    { label: "Email templates", icon: Mail },
    { label: "Team members", icon: Users },
    { label: "Scoring presets", icon: Sliders },
    { label: "Integrations", icon: Puzzle },
    { label: "Account & billing", icon: CreditCard },
  ];

  return (
    <RecruiterLayout title="Settings" showNewJobButton={false}>
      <div className="p-8 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="font-display font-bold text-2xl text-charcoal">Settings</h1>
          <p className="text-sm text-charcoal-muted mt-1">Manage your organisation, branding, team, and integrations.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-charcoal/10 gap-8 overflow-x-auto no-scrollbar">
          {tabs.map(t => (
            <button
              key={t.label}
              onClick={() => setActiveTab(t.label)}
              className={`pb-4 px-1 text-sm font-bold whitespace-nowrap transition-all relative ${
                activeTab === t.label ? "text-coral" : "text-charcoal-muted hover:text-charcoal"
              }`}
            >
              {t.label}
              {activeTab === t.label && (
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-coral rounded-full" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "Branding" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-8">
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">Organisation</h3>
                </div>

                <div className="flex items-center gap-6">
                  <div className="h-24 w-24 border-2 border-dashed border-charcoal/10 rounded-2xl flex flex-col items-center justify-center gap-2 bg-cream/20 shrink-0">
                    <div className="h-8 w-12 bg-coral/10 rounded flex items-center justify-center">
                      <div className="h-4 w-6 bg-coral/20 rounded-sm" />
                    </div>
                    <button className="text-[10px] font-bold text-coral hover:underline">Change logo</button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Company name</label>
                      <input type="text" defaultValue=" HireIQ Partner Solutions" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Tagline</label>
                      <input type="text" defaultValue="AI-powered hiring at scale" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm focus:outline-none transition" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal uppercase tracking-tight">Brand colour</label>
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-coral shrink-0 border border-charcoal/10" />
                    <input type="text" defaultValue="#1a2744" className="w-full h-11 px-4 rounded-xl border border-charcoal/10 bg-white text-sm font-mono focus:outline-none transition uppercase" />
                  </div>
                </div>
              </section>

              <section className="space-y-6 pt-6 border-t border-charcoal/5">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">Candidate portal</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-charcoal">Show company tagline</p>
                      <p className="text-xs text-charcoal-muted">Display your tagline on the application landing page.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-charcoal">Show salary range</p>
                      <p className="text-xs text-charcoal-muted">Make the salary range visible to candidates.</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-charcoal">Allow cover note</p>
                      <p className="text-xs text-charcoal-muted">Let candidates add an optional cover message.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </section>

              <button className="h-12 px-8 bg-coral text-cream font-bold rounded-xl hover:bg-charcoal transition shadow-lg shadow-coral/10">
                Save branding
              </button>
            </div>

            {/* Right: Preview */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">Preview — how candidates see you</label>
                  <Link to="/apply/demo" target="_blank" className="text-[10px] font-bold text-coral hover:underline flex items-center gap-1">
                    Open in new tab <ExternalLink className="h-2.5 w-2.5" />
                  </Link>
                </div>

                <div className="rounded-[24px] border border-charcoal/10 bg-[#F5F7FA] p-6 h-[500px] shadow-inner overflow-hidden relative group">
                  <div className="bg-white rounded-xl shadow-2xl h-full flex flex-col overflow-hidden scale-90 group-hover:scale-95 transition duration-500">
                    <div className="h-10 bg-[#0D1829] px-4 flex items-center shrink-0">
                      <div className="h-4 w-6 bg-white/20 rounded flex items-center justify-center">
                        <div className="h-2 w-3 bg-white/40 rounded-[1px]" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="h-6 bg-charcoal/10 rounded-md w-3/4" />
                        <div className="flex gap-2">
                          <div className="h-4 bg-charcoal/5 rounded-full w-16" />
                          <div className="h-4 bg-coral/10 rounded-full w-12" />
                        </div>
                      </div>
                      <div className="h-24 bg-cream/30 rounded-xl" />
                      <div className="space-y-3 pt-4">
                        <div className="h-9 bg-cream rounded-lg border border-charcoal/5" />
                        <div className="h-9 bg-cream rounded-lg border border-charcoal/5" />
                        <div className="h-20 bg-cream rounded-lg border border-charcoal/5" />
                        <div className="h-10 bg-coral rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F7FA] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Email templates" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Application Received", "Interview Invitation", "Rejection", "Shortlist Confirmation"].map((template) => (
                <div key={template} className="p-4 bg-white border border-charcoal/10 rounded-xl hover:border-coral/40 transition cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-charcoal">{template}</h4>
                    <button className="text-[10px] font-bold text-coral opacity-0 group-hover:opacity-100 transition">Edit</button>
                  </div>
                  <p className="text-xs text-charcoal-muted line-clamp-2">Hi {"{{candidate_name}}"},\n\nThank you for applying to the Senior Backend Engineer position at ABC PVT LTD...</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Team members" && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">Active Members (3)</h3>
              <button className="h-8 px-3 bg-coral text-cream text-[10px] font-bold rounded-lg hover:bg-charcoal transition">Add Member</button>
            </div>
            <div className="bg-white border border-charcoal/10 rounded-xl overflow-hidden shadow-sm">
              {[
                { name: "Alex Johnson", role: "Admin", email: "alex@datapanther.com" },
                { name: "Sam Wilson", role: "Recruiter", email: "sam@datapanther.com" },
                { name: "Jordan Smith", role: "Hiring Manager", email: "jordan@datapanther.com" }
              ].map((member, i) => (
                <div key={i} className="px-5 py-4 border-b border-charcoal/5 last:border-0 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-coral/10 text-coral flex items-center justify-center text-[10px] font-bold">{member.name.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                      <p className="text-sm font-bold text-charcoal">{member.name}</p>
                      <p className="text-[10px] text-charcoal-muted">{member.email}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cream border border-charcoal/10 text-[9px] font-bold text-charcoal-muted uppercase">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Scoring presets" && (
          <div className="space-y-4 animate-in fade-in duration-500">
            {["Engineering Roles", "Product & Design", "Sales & Marketing"].map((preset) => (
              <div key={preset} className="p-5 bg-white border border-charcoal/10 rounded-2xl flex items-center justify-between hover:border-coral/40 transition cursor-pointer">
                <div>
                  <h4 className="text-sm font-bold text-charcoal">{preset}</h4>
                  <p className="text-[10px] text-charcoal-muted mt-0.5">Skills (40%), Experience (30%), Education (20%), Certs (10%)</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-8 px-3 rounded-lg border border-charcoal/10 bg-white text-[10px] font-bold text-charcoal-muted hover:text-charcoal transition">Duplicate</button>
                  <button className="h-8 px-3 rounded-lg border border-charcoal/10 bg-white text-[10px] font-bold text-charcoal-muted hover:text-charcoal transition">Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {(activeTab === "Integrations" || activeTab === "Account & billing") && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-40">
            <div className="h-16 w-16 rounded-full bg-cream flex items-center justify-center text-charcoal-muted">
              {(() => {
                const Icon = tabs.find(t => t.label === activeTab)?.icon || Globe;
                return <Icon className="h-8 w-8" />;
              })()}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-charcoal">{activeTab}</h3>
              <p className="text-sm text-charcoal-muted">This settings panel is coming soon.</p>
            </div>
          </div>
        )}
      </div>
    </RecruiterLayout>
  );
};

export default Settings;
