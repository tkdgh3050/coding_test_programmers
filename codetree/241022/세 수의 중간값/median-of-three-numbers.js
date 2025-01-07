const fs = require('fs');
const [a,b,c] = fs.readFileSync(0).toString().trim().split(' ').map(v => Number(v));

b > a && b < c ? console.log(1) : console.log(0)