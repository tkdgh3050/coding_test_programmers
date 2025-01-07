const fs = require('fs');
let val = fs.readFileSync(0).toString().trim();

const answer = [...val].map(v => (v >= 'A' && v <= 'Z') ?  v.toLowerCase() : v.toUpperCase());
console.log(answer.join(''))