const fs = require('fs');
const [k,n] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const temp = [];

function makePer(level) {
    if (level === n) {
        console.log(...temp);
    } else {
        for (let x = 1; x <= k; x++) {
            if (level > 1 && (temp[temp.length - 1] === x && temp[temp.length - 2] === x) ) {
                continue;
            } else {
                temp.push(x);
                makePer(level+1);
                temp.pop();
            }
        }
    }
}

makePer(0)