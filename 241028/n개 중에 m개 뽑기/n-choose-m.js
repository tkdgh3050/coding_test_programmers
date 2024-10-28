const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function getComb(now, arr) {
    if (arr.length === m) {
        return console.log(...arr);
    } else {
        for (let x = now; x <= n; x++) {
            getComb(x+1, [...arr, x])
        }
    }
}

getComb(1, [])