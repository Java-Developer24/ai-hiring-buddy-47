const fs = require('fs');

let mcq = fs.readFileSync('src/pages/candidate/AssessmentMCQ.tsx', 'utf8');
mcq = mcq.replace('navigate("/interview");', 'navigate("/candidate/submission-done");');
fs.writeFileSync('src/pages/candidate/AssessmentMCQ.tsx', mcq);

let video = fs.readFileSync('src/pages/candidate/VideoInterview.tsx', 'utf8');
video = video.replace('navigate("/interview");', 'navigate("/candidate/submission-done");');
fs.writeFileSync('src/pages/candidate/VideoInterview.tsx', video);

let coding = fs.readFileSync('src/pages/candidate/AssessmentCoding.tsx', 'utf8');
coding = coding.replace('navigate("/submission-done");', 'navigate("/candidate/submission-done");');
fs.writeFileSync('src/pages/candidate/AssessmentCoding.tsx', coding);
