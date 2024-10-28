// dx 부여해서 bfs 하고 횟수별로 가중치 담아두기
// 같은 위치에 도달하면 최소값일 경우만 유지 아니면 리턴
// 불가능하면 -1

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const [startX, startY, endX, endY] = val.trim().split(' ').map(v => Number(v) - 1);

const visited = Array.from({length: n}, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
const isRange = (x, y) => x >= 0 && x < n && y >= 0 && y < n;
const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

const queue = [[startX, startY, 0]];
visited[startX][startY] = 0;

function BFS() {
    while (queue.length > 0) {
        const [x, y, cost] = queue.shift();
        if (x === endX && y === endY) break;

        for (let idx = 0; idx < dx.length; idx++) {
            const newX = x + dx[idx];
            const newY = y + dy[idx];
            const newCost = cost + 1;
            
            if (isRange(newX, newY) && visited[newX][newY] > newCost) {
                visited[newX][newY] = newCost;
                queue.push([newX, newY, newCost]);
            }
        }
    }
}

BFS();
console.log(visited[endX][endY] === Number.MAX_SAFE_INTEGER ? -1 : visited[endX][endY]);