const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

const size = val ** 2;

console.log(size);
if (val < 5) console.log('tiny')