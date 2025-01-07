const fs = require('fs');
const [_, str] = fs.readFileSync(0).toString().trim().split('\n');

const list = str.trim().split(' ').map(Number);

for (let x = list.length-1; x > 0; x--) {
    for (let y = 0; y < x; y++) {
        if (list[y] > list[y+1]) [list[y], list[y+1]] = [list[y+1], list[y]]
    }
}

console.log(...list)