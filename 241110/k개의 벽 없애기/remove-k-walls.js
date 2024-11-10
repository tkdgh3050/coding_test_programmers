// n*n
// 숫자 0,1 로만 이루어짐
    // 0: 이동가능
    // 1: 벽
// k 개의 벽을 없애 도착점까지 최소시간
// 상하좌우 움직임
// 도착점 못가면 -1

// bfs 로 가면서 없앤 벽의 수랑 이동한 거리 기록
// 끝에 도달하면 거기서 탈출

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = info.trim().split(' ').map(Number);
const arr = data.slice(0,n).map(v => v.trim().split(' ').map(Number));
const start = data.slice(-2,-1)[0].trim().split(' ').map(v => Number(v) - 1);
const end = data.slice(-1)[0].trim().split(' ').map(v=> Number(v)-1)

const dx = [1, -1 ,0 ,0]
const dy = [0 ,0,1, -1 ]
const isRange = (x,y) => x>=0 && y>=0 && x<n && y<n;

const visited = Array.from({length:n}, () => Array(n).fill(false));
let minVal = -1;
const bfs = (start, end) => {
    const queue = [[...start, 0, 0]];
    while (queue.length) {
        const [nowX, nowY, nowTime, nowBreak] = queue.shift();
        for (let idx = 0; idx < dx.length; idx++) {
            const newX = nowX + dx[idx];
            const newY = nowY + dy[idx];
            if (!isRange(newX, newY) || visited[newX][newY]) continue;
            if (arr[newX][newY] === 1 && nowBreak === k) continue;

            if (newX === end[0] && newY === end[1]) return minVal = nowTime + 1;
            
            visited[newX][newY] = true;
            if (arr[newX][newY] === 1) {
                queue.push([newX, newY, nowTime + 1, nowBreak + 1])
            } else {
                queue.push([newX, newY, nowTime + 1, nowBreak])
            }
        }
    }
}

bfs(start, end)
console.log(minVal)