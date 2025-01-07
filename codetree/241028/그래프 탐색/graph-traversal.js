const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.map(v => v.trim().split(' ').map(Number));

const visited = Array.from({length: n + 1}, () => 0);
const line = Array.from({length: n+1}, () => []);

for (let [x, y] of arr) {
    line[x].push(y);
    line[y].push(x);
}

let answer  = 0;

function DFS(node) {
    for (let n of line[node]) {
        if (visited[n] === 0) {
            visited[n] = 1;
            answer += 1;
            DFS(n)
        }
    }
}

visited[1] = 1;
DFS(1)
console.log(answer)