const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());
console.log(val);
if (val < 0) console.log('minus')