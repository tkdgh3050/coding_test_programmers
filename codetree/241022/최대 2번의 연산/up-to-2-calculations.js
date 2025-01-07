const fs = require('fs');
let val = Number(fs.readFileSync(0).toString());

if (val % 2 === 0) val /= 2;
if (val % 2 === 1) val = (val+1) / 2;
console.log(parseInt(val))