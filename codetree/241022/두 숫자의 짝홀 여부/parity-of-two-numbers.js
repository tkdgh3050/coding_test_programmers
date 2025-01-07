const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

val.forEach(v => v % 2 === 0 ? console.log('even') : console.log('odd'))