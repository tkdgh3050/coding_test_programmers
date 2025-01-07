const fs = require('fs');
const a = fs.readFileSync(0).toString();

console.log((Number(a) + 1.5).toFixed(2))