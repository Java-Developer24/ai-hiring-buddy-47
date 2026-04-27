const fs = require('fs');

let dc = fs.readFileSync('src/pages/candidate/DeviceCheck.tsx', 'utf8');

// The link from Mailbox is `/candidate/device-check?type=mcq`
// Wait, is there an issue with rendering DeviceCheck?
// Let's check what the device check file says about handleContinue.
