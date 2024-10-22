const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').reduce((a,c) => a + Number(c), 0);
console.log(val)