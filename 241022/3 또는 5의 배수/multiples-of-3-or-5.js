const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

val % 3 === 0 ? console.log('YES') : console.log('NO')
val % 5 === 0 ? console.log('YES') : console.log('NO')