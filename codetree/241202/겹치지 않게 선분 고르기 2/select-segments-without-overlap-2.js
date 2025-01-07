const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(val => val.trim().split(' ').map(Number));
const isAble = (a0, a1, b0, b1) => a1 < b0 || b1 < a0;

arr.sort((a,b) => {
    if (a[1] < b[1]) {
        return -1
    } else if (a[1] > b[1]){
        return 1
    } else {
        if (a[0] < b[0]) {
            return 1
        } else if (a[0] > b[0]) {
            return -1
        } else {
            return 0
        }
    }
})

let cnt = 1;
let last = arr[0];
for (let idx = 1; idx < arr.length; idx++) {
    if (isAble(...last, ...arr[idx])) {
        cnt += 1;
        last = arr[idx]
    }
}

console.log(cnt)