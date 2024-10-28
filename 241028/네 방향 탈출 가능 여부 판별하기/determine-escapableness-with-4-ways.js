const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.map(v => v.trim().split(' ').map(Number));

const dx = [1,0, -1, 0];
const dy = [0, 1, 0, -1];

const visited = Array.from({length: n}, () => Array(m).fill(1));
const queue = [[0,0]];
let answer = 0;

const isRange = (x, y) => x>= 0 && x < n && y >= 0 && y < m;

while (queue.length !== 0 && answer === 0) {
    const [x, y] = queue.shift();

    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx];
        const newY = y + dy[idx];
        if (newX === n-1 && newY === m-1) {
            answer = 1;
            break;
        }
        if (isRange(newX, newY) && visited[newX][newY] && arr[newX][newY]) {
            visited[newX][newY] = 0;
            queue.push([newX,newY])
        }
    }
}

console.log(answer)