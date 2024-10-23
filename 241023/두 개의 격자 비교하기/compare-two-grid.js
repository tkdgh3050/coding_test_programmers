const fs = require('fs');
let [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = info.trim().split(' ').map(Number);
const arr1 = [];
const arr2 = [];
for (let x = 0; x < n; x++) {
    arr1.push(val[x].trim().split(' '));
    arr2.push(val[x+n].trim().split(' '));
}

for (let x = 0; x < n; x++) {
    const row = []
    for (let y = 0; y < m; y++) {
        arr1[x][y] === arr2[x][y] ? row.push(0) : row.push(1)
    }
    console.log(...row)
}