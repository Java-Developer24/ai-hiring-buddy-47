const fs = require('fs');

let content = fs.readFileSync('src/pages/candidate/SubmissionDone.tsx', 'utf-8');

// The error says "Unexpected closing "div" tag does not match opening "CandidateLayout" tag"
// Let's count divs and see if there is an extra one due to my regex replacement

// Clean it up by writing it cleanly:
content = `import { CandidateLayout } from "@/components/layout/CandidateLayout";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Mail,
  Clock,
  Lock,
  Check,
  ExternalLink,
  Sparkles
} from "lucide-react";

const SubmissionDone = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();

  const handleDone = () => {
    if (type) {
      localStorage.setItem("candidate_stage", type);
      if (type === "coding_done") navigate("/candidate/tracking");
      else navigate("/candidate/mailbox");
    } else {
      navigate("/candidate/dashboard");
    }
  };

  return (
    <CandidateLayout className="bg-[#F5F7FA]" hideHeader>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-[440px] w-full animate-in zoom-in duration-700">
          <div className="bg-white border border-charcoal/10 rounded-[24px] overflow-hidden shadow-sm relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#00CC88]" />

            <div className="p-6 text-center space-y-6">
              <div className="space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#E5F9F1] flex items-center justify-center text-[#00CC88] mx-auto shadow-sm relative">
                  <div className="absolute inset-0 bg-[#00CC88]/10 rounded-full animate-ping duration-[3s]" />
                  <CheckCircle2 className="h-8 w-8 relative z-10" />
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-display font-bold text-charcoal tracking-tight">You're all done, Jordan!</h1>
                  <p className="text-[13px] text-charcoal-muted leading-relaxed max-w-[340px] mx-auto">
                    Your responses have been submitted for <span className="font-bold text-charcoal">Senior Backend Engineer</span> at <span className="font-bold text-charcoal"> HireIQ Partner Solutions</span>.
                  </p>
                </div>
              </div>

              <div className="bg-cream/30 rounded-xl p-4 text-left space-y-3 border border-charcoal/5">
                <h4 className="text-[9px] font-bold text-charcoal-muted uppercase tracking-widest">What you completed</h4>
                {type === "mcq_done" && (
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-[12px] font-semibold text-charcoal">Skills assessment completed</span>
                  </div>
                )}
                {type === "video_done" && (
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-[12px] font-semibold text-charcoal">Video interview completed</span>
                  </div>
                )}
                {type === "coding_done" && (
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-[12px] font-semibold text-charcoal">Machine coding round completed</span>
                  </div>
                )}
              </div>

              <div className="text-left space-y-4 pt-1">
                <h4 className="text-[9px] font-bold text-charcoal-muted uppercase tracking-widest">What happens next</h4>
                <div className="space-y-3">
                   <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-lg bg-coral/5 flex items-center justify-center text-coral shrink-0">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[12px] font-bold text-charcoal">Results sent to priya@email.com</p>
                        <p className="text-[10px] text-charcoal-muted leading-tight">Check your inbox (and spam folder)</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-lg bg-coral/5 flex items-center justify-center text-coral shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[12px] font-bold text-charcoal">Expected response within 5 business days</p>
                        <p className="text-[10px] text-charcoal-muted leading-tight">The team is reviewing candidates now</p>
                      </div>
                   </div>
                </div>
              </div>

              <button onClick={handleDone} className="w-full h-11 mb-4 rounded-xl bg-charcoal text-white font-bold text-sm hover:bg-charcoal/90 transition shadow-sm">Done</button>
              <div className="pt-4 border-t border-charcoal/5">
                <button className="text-[10px] font-bold text-charcoal-muted hover:text-charcoal flex items-center gap-1.5 mx-auto transition">
                  Privacy policy & data deletion <ExternalLink className="h-2.5 w-2.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 animate-pulse">
            <div className="flex items-center gap-2 text-[11px] font-bold text-charcoal-muted/40 uppercase tracking-widest">
              Powered by HireIQ <Sparkles className="h-3 w-3" />
            </div>
            <p className="text-[10px] text-charcoal-muted/30">AI-powered autonomous hiring</p>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default SubmissionDone;
`;
fs.writeFileSync('src/pages/candidate/SubmissionDone.tsx', content);
