const fs = require('fs');
const n = fs.readFileSync(0).toString();

console.log(Number(n).toFixed(2))