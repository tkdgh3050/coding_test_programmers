const fs = require('fs');
const val = fs.readFileSync(0).toString().split('\n');

const A = val[0].trim().split(' ').map(v => Number(v))
const B = val[1].trim().split(' ').map(v => Number(v))

A[0] > B[0] && A[1] > B[1] ? console.log(1) : console.log(0)