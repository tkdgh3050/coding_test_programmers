const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split('\n');

const parent = b.trim().split(' ').map(Number);
const child = c.trim().split(' ').map(Number);
let answer = 'No'

function check(aArr, bArr) {
    for (let idx = 0; idx < aArr.length; idx++) {
        if (aArr[idx] !== bArr[idx]) return false;
    }
    return true;
}

for (let idx = 0; idx <= parent.length - child.length; idx++) {
    if (check(parent.slice(idx, idx+child.length), child)) {
        answer = 'Yes';
        break;
    }
}

console.log(answer)