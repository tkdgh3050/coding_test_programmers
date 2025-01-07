const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

val === 1 ? console.log('t') : console.log('f')