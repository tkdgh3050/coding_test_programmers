const fs = require('fs');
let val = fs.readFileSync(0).toString().trim();

console.log(val === 'a' ? 'z' : String.fromCharCode(val.charCodeAt() - 1))