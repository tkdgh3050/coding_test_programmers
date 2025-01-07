const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ');
console.log(`${parseInt(val[0]/val[1])}...${val[0] % val[1]}`)