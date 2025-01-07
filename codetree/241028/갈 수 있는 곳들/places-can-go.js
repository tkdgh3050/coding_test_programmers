//n*n
// 0은 이동 가능
// k개의 시작점에서 상하좌우 인접한 곳 이동해 도달 가능한 칸 수
// 시작점 인덱스 보정 필요
// 각 점에 대해 bfs 적용하고 visited 개수 세면 될 듯

const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.slice(0, n).map(v => v.trim().split(' ').map(Number));
const spot = val.slice(n).map(v => v.trim().split(' ').map(num => Number(num) - 1));

const visited = Array.from({length: n}, () => Array(n).fill(0));
const isRange = (x, y) => x >= 0 && x < n && y >= 0 && y < n;
const dx = [1, 0 ,-1, 0];
const dy = [0, 1, 0 ,-1];
let answer = 0;

function BFS(x, y) {
    visited[x][y] = 1;
    const queue = [[x, y]];

    while (queue.length > 0) {
        const [nowX, nowY] = queue.shift();

        for (let idx = 0; idx < dx.length; idx++) {
            const newX = nowX + dx[idx];
            const newY = nowY + dy[idx];

            if (isRange(newX, newY) && !visited[newX][newY] && !arr[newX][newY]) {
                queue.push([newX, newY]);
                visited[newX][newY] = 1;
            }
        }
    }
}

for (let [x,y] of spot) {
    BFS(x,y)
}

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++){
        if (visited[x][y] === 1) answer += 1;
    }
}

console.log(answer)