const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val === 5) console.log('A');
if (val % 2 === 0) console.log('B');