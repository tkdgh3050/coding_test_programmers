const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const cntArr = Array(b).fill(0);

while (a > 1) {
    cntArr[a % b] += 1;
    a = parseInt(a / b)
}

console.log(cntArr.reduce((a,c) => a + c**2, 0));