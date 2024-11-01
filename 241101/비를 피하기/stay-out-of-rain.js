// n*n
// 0,1,2,3 으로만 이루어짐
    // 0: 이동가능
    // 1: 벽
    // 2: 사람
    // 3: 우산
// h명의 사람이 서있음
// 비를 피할 수 있는 공간 m개
// 사람마다 우산으로 갈 수 있는 최소거리
    // 못 피하면 -1
// 상하좌우 이동

// dx 쓰고
// 사람마다 bfs , 사람마다 방문한 곳 visited

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

let visited = Array.from({length: n}, () => Array(n).fill(0));
let queue = [];
const initialize = (x, y) => {
    visited = Array.from({length: n}, () => Array(n).fill(0));
    queue = [[x,y, 0]];
    visited[x][y] = 1;
}
const isRange = (x, y) => x>=0 && y>=0 && x<n && y<n; 
const dx = [-1,0,0,1];
const dy = [0,-1,1,0];

const getDistance = () => {
    while(queue.length) {
        const [nowX, nowY, nowCost] = queue.shift();
        if (arr[nowX][nowY] === 3) return nowCost
        for (let idx = 0; idx < dx.length; idx++){
            const newX = nowX + dx[idx];
            const newY = nowY + dy[idx];
            if (isRange(newX, newY) && arr[newX][newY] !== 1 && visited[newX][newY] === 0) {
                queue.push([newX,newY, nowCost+1]);
                visited[newX][newY] = 1;
            }
        }
    }
    return -1
}

for (let x = 0; x < n; x++) {
    let print = [];
    for (let y = 0; y < n ; y++) {
        if (arr[x][y] === 2) {
            initialize(x,y);
            const distance = getDistance();
            print.push(distance);
        } else {
            print.push(0)
        }
    }
    console.log(...print)
}