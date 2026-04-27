const fs = require('fs');

// SubmissionDone
let subDone = fs.readFileSync('src/pages/candidate/SubmissionDone.tsx', 'utf-8');
if (!subDone.includes('useSearchParams')) {
  subDone = subDone.replace(/import \{ CandidateLayout \} from "@\/components\/layout\/CandidateLayout";/, 'import { CandidateLayout } from "@/components/layout/CandidateLayout";\nimport { useSearchParams, useNavigate } from "react-router-dom";');
  subDone = subDone.replace(/const SubmissionDone = \(\) => \{/, `const SubmissionDone = () => {\n  const [searchParams] = useSearchParams();\n  const type = searchParams.get("type");\n  const navigate = useNavigate();\n\n  const handleDone = () => {\n    if (type) {\n      localStorage.setItem("candidate_stage", type);\n      if (type === "coding_done") navigate("/candidate/tracking");\n      else navigate("/candidate/mailbox");\n    } else {\n      navigate("/candidate/dashboard");\n    }\n  };\n`);

  // Replace the Done button logic, wait there is no done button right now!
  // It only has Privacy policy link. Let's add a "Done" button at the bottom of the card content.
  subDone = subDone.replace(/<div className="pt-4 border-t border-charcoal\/5">/, `<button onClick={handleDone} className="w-full h-11 mb-4 rounded-xl bg-charcoal text-white font-bold text-sm hover:bg-charcoal/90 transition shadow-sm">Done</button>\n              <div className="pt-4 border-t border-charcoal/5">`);

  // Conditionally render the "What you completed" section
  subDone = subDone.replace(/<h4 className="text-\[9px\] font-bold text-charcoal-muted uppercase tracking-widest">What you completed<\/h4>/, `<h4 className="text-[9px] font-bold text-charcoal-muted uppercase tracking-widest">What you completed</h4>\n                {type === "mcq_done" && (\n                  <div className="flex items-center gap-3">\n                    <div className="h-4 w-4 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">\n                      <Check className="h-2.5 w-2.5" />\n                    </div>\n                    <span className="text-[12px] font-semibold text-charcoal">Skills assessment completed</span>\n                  </div>\n                )}\n                {type === "video_done" && (\n                  <div className="flex items-center gap-3">\n                    <div className="h-4 w-4 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">\n                      <Check className="h-2.5 w-2.5" />\n                    </div>\n                    <span className="text-[12px] font-semibold text-charcoal">Video interview completed</span>\n                  </div>\n                )}\n                {type === "coding_done" && (\n                  <div className="flex items-center gap-3">\n                    <div className="h-4 w-4 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">\n                      <Check className="h-2.5 w-2.5" />\n                    </div>\n                    <span className="text-[12px] font-semibold text-charcoal">Machine coding round completed</span>\n                  </div>\n                )}`);

  // Clean up the old hardcoded stuff
  subDone = subDone.replace(/<div className="space-y-2\.5">[\s\S]*?<\/div>[\s]*?<\/div>/, '</div>');

  fs.writeFileSync('src/pages/candidate/SubmissionDone.tsx', subDone);
}
