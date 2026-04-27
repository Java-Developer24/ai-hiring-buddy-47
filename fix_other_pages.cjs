const fs = require('fs');

let mcq = fs.readFileSync('src/pages/candidate/AssessmentMCQ.tsx', 'utf8');
if (!mcq.includes('handleDone')) {
  mcq = mcq.replace('const handleDone = () => {', 'const handleDone = () => {');
  // wait let's just rewrite the end of AssessmentMCQ
}

let video = fs.readFileSync('src/pages/candidate/VideoInterview.tsx', 'utf8');
let coding = fs.readFileSync('src/pages/candidate/AssessmentCoding.tsx', 'utf8');
