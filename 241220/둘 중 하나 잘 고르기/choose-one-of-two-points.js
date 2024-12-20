const fs = require('fs')
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(val => val.trim().split(' ').map(Number));
const diff = arr.map((val,idx) => ({v: val[0]-val[1], i: idx}))
let sum = 0;
diff.sort((a,b) => a.v-b.v)

for (let idx = 0; idx < 2*n; idx++) {
    if (idx < n) {
        sum += arr[diff[idx].i][1]
    } else {
        sum += arr[diff[idx].i][0]
    }
}

console.log(sum)