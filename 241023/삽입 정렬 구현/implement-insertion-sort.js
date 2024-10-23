const fs = require('fs');
const [_,val] = fs.readFileSync(0).toString().trim().split('\n');

const arr = val.trim().split(' ').map(Number);

for (let x = 1; x < arr.length; x++) {
    const now = arr[x];
    for (let y = x-1; y >= 0; y--) {
        if (arr[y] > now) {
            arr[y+1] = arr[y];
        } else {
            arr[y+1] = now;
            break;
        }
        if (y === 0) arr[0] = now
    }
}

console.log(...arr)