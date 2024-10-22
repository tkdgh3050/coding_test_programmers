const fs = require('fs');
const score = fs.readFileSync(0).toString();
console.log(`Your score is ${Number(score)} point.`)