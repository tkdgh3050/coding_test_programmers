const fs = require('fs');
const [n, ...students] = fs.readFileSync(0).toString().trim().split('\n');

let cnt = 0;
for (let idx = 0; idx < n; idx++) {
    const score = students[idx].trim().split(' ')
    const avg = score.reduce((a,c) => a + Number(c), 0) / score.length;
    if (avg >= 60) {
        console.log('pass')
        cnt += 1;
    } else {
        console.log('fail')
    }
}
console.log(cnt)