const fs = require('fs');
let [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const sum = arr.reduce((a,c) => a+c, 0).toString();

console.log(sum.slice(1) + sum[0])