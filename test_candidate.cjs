const fs = require('fs');

const data = fs.readFileSync('src/pages/candidate/DeviceCheck.tsx', 'utf8');
if (data.includes('onClick={handleContinue}')) {
  console.log("DeviceCheck.tsx has handleContinue missing?");
}
