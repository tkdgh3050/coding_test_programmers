const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

val === 100 ? console.log('pass') : console.log('failure')