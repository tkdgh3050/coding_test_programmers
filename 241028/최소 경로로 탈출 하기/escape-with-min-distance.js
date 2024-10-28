//n * m
// 상하좌우 이동
// 최단거리
// 큐에 넣을 때 현재까지의 거리를 넣고, 만약 기존에 값이 있었으면 최소여부를 판단해서 최소면 계속 진행

const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.map(v => v.trim().split(' ').map(Number));

const visited = Array.from({length: n}, () => Array(m).fill(Number.MAX_SAFE_INTEGER));
const isRange = (x, y) => x>= 0 && x < n && y >= 0 && y < m;
const dx = [1, 0 ,-1, 0];
const dy = [0, 1, 0, -1];
const queue = [[0,0,0]];

function DFS() {
    while(queue.length > 0) {
        const [x, y, cost] = queue.shift();

        for (let idx = 0; idx < dx.length; idx++) {
            const newX = x + dx[idx];
            const newY = y + dy[idx];
            const newCost = cost + 1;

            if (isRange(newX, newY) && arr[newX][newY] && visited[newX][newY] > newCost) {
                visited[newX][newY] = newCost;
                queue.push([newX,newY,newCost]);
            }
        }
    }
}

DFS();

console.log(visited[n-1][m-1])