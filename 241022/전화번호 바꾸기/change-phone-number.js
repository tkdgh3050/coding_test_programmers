const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split('-');
[val[1], val[2]] = [val[2], val[1]];
console.log(val.join('-'));