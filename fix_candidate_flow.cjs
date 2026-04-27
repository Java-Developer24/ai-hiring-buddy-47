const fs = require('fs');
const path = require('path');

// 1. Update ApplyPage to redirect to mailbox and set stage
let applyPage = fs.readFileSync('src/pages/candidate/ApplyPage.tsx', 'utf-8');
applyPage = applyPage.replace(/<Link to="\/device-check"/, '<button onClick={() => { localStorage.setItem("candidate_stage", "applied"); window.location.href = "/candidate/mailbox"; }}');
applyPage = applyPage.replace(/<\/Link>/, '</button>');
fs.writeFileSync('src/pages/candidate/ApplyPage.tsx', applyPage);

// 2. Update DeviceCheck to read "type" parameter and update the "Continue to practice round" button to go to corresponding assessment
let deviceCheck = fs.readFileSync('src/pages/candidate/DeviceCheck.tsx', 'utf-8');
if (!deviceCheck.includes('useSearchParams')) {
  deviceCheck = deviceCheck.replace(/import \{ Link \} from "react-router-dom";/, 'import { Link, useSearchParams, useNavigate } from "react-router-dom";');
  deviceCheck = deviceCheck.replace(/export default function DeviceCheck\(\) \{/, `export default function DeviceCheck() {\n  const [searchParams] = useSearchParams();\n  const type = searchParams.get("type");\n  const navigate = useNavigate();\n\n  const handleContinue = () => {\n    if (type === "mcq") navigate("/assessment-mcq");\n    else if (type === "video") navigate("/practice");\n    else if (type === "coding") navigate("/assessment-coding");\n    else navigate("/practice");\n  };\n`);
  deviceCheck = deviceCheck.replace(/<Link to="\/practice"/, '<button onClick={handleContinue}');
  deviceCheck = deviceCheck.replace(/<\/Link>/, '</button>');
  fs.writeFileSync('src/pages/candidate/DeviceCheck.tsx', deviceCheck);
}

// 3. Update AssessmentMCQ, VideoInterview, AssessmentCoding to set state on "Complete"
// Since these are mocked, let's just find the link or navigate that takes to submission done and inject state update
function updateStateAndNav(file, newState) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/navigate\("\/submission-done"\)/g, `navigate("/submission-done?type=${newState}")`);
  fs.writeFileSync(file, content);
}
updateStateAndNav('src/pages/candidate/AssessmentMCQ.tsx', 'mcq_done');
updateStateAndNav('src/pages/candidate/VideoInterview.tsx', 'video_done');
updateStateAndNav('src/pages/candidate/AssessmentCoding.tsx', 'coding_done');

// 4. Update SubmissionDone to handle the state update and show mailbox button
let subDone = fs.readFileSync('src/pages/candidate/SubmissionDone.tsx', 'utf-8');
if (!subDone.includes('useSearchParams')) {
  subDone = subDone.replace(/import \{ ExternalLink, CheckCircle2 \} from "lucide-react";/, 'import { ExternalLink, CheckCircle2 } from "lucide-react";\nimport { useSearchParams, useNavigate } from "react-router-dom";');
  subDone = subDone.replace(/export default function SubmissionDone\(\) \{/, `export default function SubmissionDone() {\n  const [searchParams] = useSearchParams();\n  const type = searchParams.get("type");\n  const navigate = useNavigate();\n\n  const handleDone = () => {\n    if (type) {\n      localStorage.setItem("candidate_stage", type);\n      if (type === "coding_done") navigate("/candidate/tracking");\n      else navigate("/candidate/mailbox");\n    } else {\n      navigate("/candidate/dashboard");\n    }\n  };\n`);

  // Replace the Done button
  subDone = subDone.replace(/<button className="w-full text-sm font-bold text-charcoal-muted hover:text-charcoal transition">/, '<button onClick={handleDone} className="w-full text-sm font-bold text-charcoal-muted hover:text-charcoal transition">');
  fs.writeFileSync('src/pages/candidate/SubmissionDone.tsx', subDone);
}
