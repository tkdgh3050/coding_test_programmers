const fs = require('fs');
const val = fs.readFileSync(0).toString().split('-');
console.log(`${val[2]}.${val[0]}.${val[1]}`)