import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Database,
  PlayCircle,
  TerminalSquare,
  Check,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setStoredCandidateStage } from "@/lib/candidateFlow";

const AssessmentCoding = () => {
  const navigate = useNavigate();
  const starterCode = [
    "SELECT id, email, created_at",
    "FROM users",
    "WHERE created_at >= NOW() - INTERVAL '30 days'",
    "ORDER BY created_at DESC",
    "LIMIT 100;",
  ].join("\n");
  const notesCode = [
    "# Notes",
    "- Consider an index on created_at",
    "- Avoid a full table scan on 10M rows",
    "- Think about pagination strategy",
  ].join("\n");
  const [activeTab, setActiveTab] = useState<"solution.sql" | "notes.md">("solution.sql");
  const [language, setLanguage] = useState<"SQL" | "Python">("SQL");
  const [editorValue, setEditorValue] = useState(starterCode);
  const [runState, setRunState] = useState<"idle" | "running" | "partial" | "passing">("idle");

  const resetEditor = () => {
    setEditorValue(activeTab === "solution.sql" ? starterCode : notesCode);
    setRunState("idle");
  };

  const openTab = (tab: "solution.sql" | "notes.md") => {
    setActiveTab(tab);
    setEditorValue(tab === "solution.sql" ? starterCode : notesCode);
    setRunState("idle");
  };

  const handleRun = () => {
    setRunState("running");
    window.setTimeout(() => {
      if (editorValue.toLowerCase().includes("limit 100") && editorValue.toLowerCase().includes("order by")) {
        setRunState("passing");
      } else {
        setRunState("partial");
      }
    }, 900);
  };

  return (
    <CandidateLayout className="bg-cream" showLogo={true} backHref="/candidate/mailbox" backLabel="Back to mailbox">

      {/* Warning Banner */}
      <div className="bg-amber-soft/90 border-b border-amber-warm/10 py-1.5 px-8 flex items-center justify-center gap-2 flex-none">
        <AlertTriangle className="h-3 w-3 text-amber-warm" />
        <p className="text-[9px] font-bold text-charcoal/70 uppercase tracking-widest">Tab switching and copy-paste are monitored during this assessment</p>
      </div>

      <div className="flex-1 flex overflow-hidden bg-cream p-6">
        <div className="flex-1 flex overflow-hidden rounded-[28px] border border-charcoal/10 shadow-sm bg-white">
        {/* Left Panel: Problem description */}
        <div className="w-[42%] bg-white border-r border-charcoal/10 overflow-y-auto p-8 space-y-8">
           <div className="space-y-4">
              <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest block">Problem 1</span>
              <h2 className="text-2xl font-display font-bold text-charcoal flex items-center gap-3">
                <Database className="h-6 w-6 text-coral" />
                Optimise database query
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-coral/10 text-coral text-[10px] font-bold uppercase tracking-wider">45 min round</span>
                <span className="px-3 py-1 rounded-full bg-amber-soft text-amber text-[10px] font-bold uppercase tracking-wider">Database systems</span>
              </div>
           </div>

           <div className="space-y-6 text-sm text-charcoal leading-relaxed">
              <p>
                Given a <code className="bg-cream px-1.5 py-0.5 rounded font-mono">users</code> table with 10 million rows, write a SQL query that efficiently retrieves all users who registered in the last 30 days, ordered by registration date descending.
              </p>

              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">Example</h4>
                 <div className="p-4 bg-cream/30 border border-charcoal/5 rounded-xl font-mono text-[12px] text-charcoal-muted">
                    <p className="font-bold text-charcoal mb-2">Input:</p>
                    <p>users table with columns: id, email, created_at, status...</p>
                 </div>
                 <div className="p-4 bg-cream/30 border border-charcoal/5 rounded-xl font-mono text-[12px] text-charcoal-muted">
                    <p className="font-bold text-charcoal mb-2">Expected Output:</p>
                    <p>Paginated list of users ordered DESC by created_at...</p>
                 </div>
              </div>

              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">Constraints</h4>
                 <ul className="space-y-2 text-xs font-medium text-charcoal-muted">
                    <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-coral" /> Use PostgreSQL syntax</li>
                    <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-coral" /> Query must use index if available</li>
                    <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-coral" /> Handle 10M rows efficiently</li>
                 </ul>
              </div>

              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">Evaluation focus</h4>
                 <div className="grid gap-3">
                    {[
                      "Correctness and valid query structure",
                      "Efficiency and index-aware filtering",
                      "Readable reasoning and practical tradeoffs",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 rounded-xl border border-charcoal/10 bg-cream/40 p-3">
                        <Check className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                        <p className="text-xs text-charcoal leading-relaxed">{item}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Right Panel: Code Editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
           <div className="h-12 bg-charcoal px-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2">
                   {(["SQL", "Python"] as const).map((item) => (
                     <button
                       key={item}
                       onClick={() => setLanguage(item)}
                       className={`px-3 py-1 rounded-md text-[11px] font-bold transition ${
                         language === item ? "bg-white text-charcoal" : "bg-white/5 text-white/70 hover:bg-white/10"
                       }`}
                     >
                       {item}
                     </button>
                   ))}
                 </div>
                 <div className="h-5 w-px bg-white/10" />
                 <div className="flex items-center gap-2">
                   {(["solution.sql", "notes.md"] as const).map((tab) => (
                     <button
                       key={tab}
                       onClick={() => openTab(tab)}
                       className={`px-3 py-1 rounded-md text-[11px] font-bold transition ${
                         activeTab === tab ? "bg-coral text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
                       }`}
                     >
                       {tab}
                     </button>
                   ))}
                 </div>
              </div>
              <button
                onClick={resetEditor}
                className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 hover:text-white transition"
              >
                 <RefreshCw className="h-3 w-3" /> Reset to starter
              </button>
           </div>

           <div className="flex-1 bg-charcoal p-6 font-mono text-[13px] leading-relaxed overflow-y-auto custom-scrollbar">
              <div className="grid h-full grid-cols-[32px_1fr] gap-4">
                 <div className="text-white/20 select-none text-right">
                    {Array.from({ length: Math.max(editorValue.split("\n").length, 15) }).map((_, i) => (
                      <div key={i} className="h-6">{i + 1}</div>
                    ))}
                 </div>
                 <textarea
                   value={editorValue}
                   onChange={(event) => setEditorValue(event.target.value)}
                   spellCheck={false}
                   className="h-full w-full resize-none bg-transparent text-white/90 outline-none"
                 />
              </div>
           </div>

           <div className="h-1/3 bg-[#111513] border-t border-white/5 flex flex-col">
              <div className="p-4 flex items-center justify-between border-b border-white/5">
                 <div className="flex items-center gap-3">
                    <button
                      onClick={handleRun}
                      className="h-9 px-4 bg-[#00CC88] text-white text-xs font-bold rounded-lg hover:bg-[#00CC88]/80 transition flex items-center gap-2"
                    >
                      <PlayCircle className="h-3.5 w-3.5" />
                      {runState === "running" ? "Running..." : "Run code"}
                    </button>
                    <button
                      onClick={() => {
                        setStoredCandidateStage("coding_done");
                        navigate("/submission-done/coding");
                      }}
                      className="h-9 px-4 bg-coral text-white text-xs font-bold rounded-lg hover:bg-coral-dark transition"
                    >
                      Submit solution
                    </button>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="text-[11px] font-mono font-bold text-white/40">⏱ 42:18</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{language} mode</div>
                 </div>
              </div>
              <div className="flex-1 p-5 overflow-y-auto font-mono text-[12px] space-y-2.5">
                 <div className="flex items-center justify-between">
                   <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Test results</p>
                   <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                     <TerminalSquare className="h-3 w-3" />
                     Runtime feedback
                   </div>
                 </div>

                 {runState === "idle" && (
                   <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/50 leading-relaxed">
                     Press <span className="text-white/80">Run code</span> to simulate validation against performance and correctness checks.
                   </div>
                 )}

                 {runState === "running" && (
                   <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/70 leading-relaxed animate-pulse">
                     Executing test suite, checking query structure, and evaluating index-friendly filters...
                   </div>
                 )}

                 {runState === "passing" && (
                   <div className="space-y-2.5">
                     <div className="flex items-center gap-2 text-[#00CC88]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Test 1 passed
                     </div>
                     <div className="flex items-center gap-2 text-[#00CC88]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Test 2 passed
                     </div>
                     <div className="flex items-center gap-2 text-[#00CC88]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Test 3 passed
                     </div>
                     <div className="rounded-xl border border-[#00CC88]/20 bg-[#00CC88]/10 p-4 text-[#9ef2cf]">
                       Strong result. Your query preserves ordering, includes a row cap, and reads as index-aware.
                     </div>
                   </div>
                 )}

                 {runState === "partial" && (
                   <div className="space-y-2.5">
                     <div className="flex items-center gap-2 text-[#00CC88]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Test 1 passed
                     </div>
                     <div className="flex items-center gap-2 text-[#00CC88]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Test 2 passed
                     </div>
                     <div className="flex items-center gap-2 text-[hsl(var(--coral))]">
                        <XCircle className="h-3.5 w-3.5" /> Test 3 failed — Expected 100 rows ordered DESC by `created_at`
                     </div>
                     <div className="rounded-xl border border-[hsl(var(--coral))]/20 bg-[hsl(var(--coral))]/10 p-4 text-white/80">
                       Hint: make sure the final query preserves descending sort order and an explicit result limit.
                     </div>
                   </div>
                 )}
              </div>
           </div>
        </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default AssessmentCoding;
