const fs = require('fs');

let mcq = fs.readFileSync('src/pages/candidate/AssessmentMCQ.tsx', 'utf8');
mcq = mcq.replace('"Start Video Interview"', '"Complete Assessment"');
fs.writeFileSync('src/pages/candidate/AssessmentMCQ.tsx', mcq);
