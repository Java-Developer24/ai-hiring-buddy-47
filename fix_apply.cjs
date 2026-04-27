const fs = require('fs');

let apply = fs.readFileSync('src/pages/candidate/ApplyPage.tsx', 'utf8');

// I need to ensure "Proceed to Assessment" button goes to `/candidate/mailbox`.
if (apply.includes('navigate("/candidate/mailbox")')) {
  console.log("Already has it.");
} else {
  console.log("Needs fixing.");
}
