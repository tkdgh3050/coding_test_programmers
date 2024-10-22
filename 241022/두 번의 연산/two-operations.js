const fs = require('fs');
let val = Number(fs.readFileSync(0).toString())

if (val % 2 === 1) val += 3;
if (val % 3 === 0) val /= 3;
console.log(val);