const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.map(v => v.trim().split(' ').map(Number));

const visited = Array.from({length: n}, () => Array(m).fill(1));

const dx = [0, 1];
const dy = [1 ,0];

const isRange = (x, y) => x>=0 && x< n && y>=0 && y<m;

let answer = 0;

function DFS(x, y) {
    if (answer) return;
    if (x === n - 1 && y === m-1) {
        answer = 1;
        return;
    }

    for (let d = 0; d < dx.length; d++) {
        const newX = x + dx[d];
        const newY = y + dy[d];

        if (isRange(newX, newY) && visited[newX][newY] && arr[newX][newY]) {
            visited[newX][newY] = 0;
            DFS(newX, newY);
        }
    }
}

visited[0][0] = 0;
DFS(0,0)
console.log(answer)