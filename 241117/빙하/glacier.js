//n*m
// 빙하정보
    // 1: 빙하
    // 0: 물
// 빙하로 둘러싸여있는 물은 녹는 것에 영향 안줌
// 빙하가 전부 녹는데 걸리는 시간, 마지막으로 녹은 빙하의 크기

//만약 뚫려있으면 visited 가다 보면 외곽에 0을 만나게 됨
// 뚫려있다면 큐에 넣고 같이 진행하고 진행할 때 level을 넣어놓고 진행
// 본인 차례되면 1을 0으로 바꾸기, 방문처리
// 주위에 방문하지 않은 곳을 보고 0이면 level, 1이면 level+1 로 넣기

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

const queue = [];
const visited = Array.from({length: n}, () => Array(m).fill(false));

const init = () => {
    for (let y = 0; y < m ; y++) {
        visited[0][y] = true;
        visited[n-1][y] = true;
        queue.push([0,y,1])
        queue.push([n-1,y,1])
    }
    for (let x = 1; x < n - 1; x++) {
        visited[x][0] = true;
        visited[x][m-1] = true;
        queue.push([x,0,1])
        queue.push([x,m-1,1])
    }
}

const inRange = (x,y) => x>=0 && y>=0 && x<n && y<m;
const dx = [1, -1, 0, 0]
const dy = [0, 0,1, -1]

const countMap = new Map();

const findInner = () => {
   while (queue.length) {
        const [x,y, level] = queue.shift();
        for (let idx = 0; idx < dx.length; idx++) {
            const newX = x + dx[idx]
            const newY = y + dy[idx];
            if (inRange(newX, newY) && !visited[newX][newY]) {
                visited[newX][newY] = true;
                if (arr[newX][newY] === 1) {
                    queue.push([newX,newY,level+1])
                    arr[newX][newY] = 0;
                    countMap.has(level) ? countMap.set(level, countMap.get(level)+1) : countMap.set(level,1);
                } else {
                    queue.push([newX,newY,level])
                }
            }
        }
   }
}

init();
findInner();
console.log(...Array.from(countMap).sort((a,b) => b[0] - a[0])[0])