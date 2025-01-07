const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

val >= 10 && val <= 20 ? console.log('yes') : console.log('no')