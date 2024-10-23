const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

const answer = Array.from({length:n}, () => Array(n).fill(0));

let idx = 0;
let cnt = 1;

for (let x = n-1; x >= 0; x--) {
    if (idx % 2 === 0) {
        for (let y = n-1; y >= 0; y--) {
            answer[y][x] = cnt;
            cnt += 1;
        }
    } else {
        for (let y = 0; y < n; y++) {
            answer[y][x] = cnt;
            cnt += 1;
        }
    }
    idx += 1;
}

for (let x = 0; x < n; x++) {
    console.log(...answer[x])
}