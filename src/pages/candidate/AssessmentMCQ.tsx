import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Clock,
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setStoredCandidateStage } from "@/lib/candidateFlow";

const AssessmentMCQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const questions = [
    {
      q: "Which of the following indexing strategies would best optimise a PostgreSQL query performing a range scan on a timestamp column with high cardinality?",
      opts: [
        { id: "A", text: "B-Tree index on the timestamp column" },
        { id: "B", text: "Hash index on the timestamp column" },
        { id: "C", text: "GIN index with trigram extension" },
        { id: "D", text: "Partial index with a WHERE clause filter" }
      ]
    },
    {
      q: "In a microservices architecture, which pattern is primarily used to maintain data consistency across services without using distributed transactions?",
      opts: [
        { id: "A", text: "Saga Pattern" },
        { id: "B", text: "CQRS" },
        { id: "C", text: "Event Sourcing" },
        { id: "D", text: "API Gateway" }
      ]
    },
    {
      q: "What is the primary benefit of using a Gunicorn/Uvicorn worker model for Python web applications?",
      opts: [
        { id: "A", text: "Handling multiple concurrent requests across CPU cores" },
        { id: "B", text: "Automatic database connection pooling" },
        { id: "C", text: "In-memory caching of static assets" },
        { id: "D", text: "Built-in rate limiting for APIs" }
      ]
    },
    {
      q: "Which HTTP status code is most appropriate for a request that failed because the client has sent too many requests in a given amount of time?",
      opts: [
        { id: "A", text: "429 Too Many Requests" },
        { id: "B", text: "403 Forbidden" },
        { id: "C", text: "503 Service Unavailable" },
        { id: "D", text: "400 Bad Request" }
      ]
    },
    {
      q: "When designing a REST API, what is the 'Idempotency' property primarily concerned with?",
      opts: [
        { id: "A", text: "Ensuring multiple identical requests have the same effect as a single request" },
        { id: "B", text: "Encrypting sensitive data in transit" },
        { id: "C", text: "Reducing latency through edge caching" },
        { id: "D", text: "Authenticating users via JWT tokens" }
      ]
    }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected("");
    } else {
      setStoredCandidateStage("mcq_done");
      navigate("/practice");
    }
  };

  return (
    <CandidateLayout className="bg-cream" showLogo={true} backHref="/device-check/assessment" backLabel="Back to setup">

      {/* Warning Banner */}
      <div className="bg-amber-soft/50 border-b border-amber-warm/10 py-2 px-8 flex items-center justify-center gap-2">
        <AlertTriangle className="h-3.5 w-3.5 text-amber-warm" />
        <p className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">Tab switching is monitored during this assessment</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-[680px] w-full bg-white border border-charcoal/10 rounded-[32px] p-10 shadow-sm space-y-10 animate-in slide-in-from-bottom-4 duration-500">
           <div className="space-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">Question {currentQuestion + 1} of {questions.length}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-1.5 bg-cream rounded-full overflow-hidden">
                    <div className="h-full bg-coral transition-all duration-500" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-charcoal-muted shrink-0">
                    <Clock className="h-3.5 w-3.5 text-amber-warm" />
                    18:42
                  </div>
                </div>
              </div>
              <h2 className="text-lg md:text-xl font-medium text-charcoal leading-relaxed">
                {questions[currentQuestion].q}
              </h2>
           </div>

           <RadioGroup value={selected} onValueChange={setSelected} className="space-y-3">
             {questions[currentQuestion].opts.map((opt) => (
               <label
                 key={opt.id}
                 className={`flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer group ${
                   selected === opt.id
                    ? "bg-coral/[0.03] border-coral shadow-sm"
                    : "bg-white border-charcoal/10 hover:border-charcoal/20"
                 }`}
               >
                 <RadioGroupItem value={opt.id} className="sr-only" />
                 <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                   selected === opt.id ? "border-coral bg-coral" : "border-charcoal/20 group-hover:border-charcoal/30"
                 }`}>
                   {selected === opt.id && <div className="h-2 w-2 rounded-full bg-white" />}
                 </div>
                 <span className={`text-sm font-medium ${selected === opt.id ? "text-coral" : "text-charcoal"}`}>
                   {opt.id}. {opt.text}
                 </span>
               </label>
             ))}
           </RadioGroup>

           <div className="space-y-4 pt-4">
             <button
               onClick={handleNext}
               disabled={!selected}
               className={`w-full h-12 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-lg ${
                 selected ? "bg-[hsl(var(--charcoal))] hover:bg-charcoal shadow-[hsl(var(--charcoal))]/10" : "bg-charcoal/10 cursor-not-allowed shadow-none"
               }`}
             >
               {currentQuestion === questions.length - 1 ? "Complete Assessment and Start with Video Interview" : "Next question"} <ArrowRight className="h-4 w-4" />
             </button>
             <p className="text-center text-[10px] text-charcoal-muted italic font-medium">
               You cannot return to previous questions.
             </p>
           </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default AssessmentMCQ;
