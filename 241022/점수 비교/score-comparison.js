const fs = require('fs');
const val = fs.readFileSync(0).toString().split('\n');

const math = val[0].split(' ').map(v => Number(v))
const eng = val[1].split(' ').map(v => Number(v))

math[0] > math[1] && eng[0] > eng[1] ? console.log(1) : console.log(0)