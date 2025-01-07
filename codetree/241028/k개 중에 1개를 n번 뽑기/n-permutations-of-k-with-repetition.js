const fs = require('fs');
const [k, n] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const answer = [];
const temp = [];

function DFS(level) {
    if (level === n) {
        answer.push([...temp])
    } else {
        for (let x = 1; x <= k; x++) {
            temp.push(x);
            DFS(level+1);
            temp.pop();
        }
    }
}

DFS(0);

answer.forEach(val => console.log(...val))