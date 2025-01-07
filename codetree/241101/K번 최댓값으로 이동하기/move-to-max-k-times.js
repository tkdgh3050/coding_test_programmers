// n*n
// 1~100 숫자가 적혀있음
// 상하좌우로 이동
// 이동을 k번 반복 후 위치 리턴
// k번 못할 경우 그냥 종료

// 지금 있는 위치가 x 라고 하면
// x보다 작은 숫자 중 가장 큰 수로 이동
    // 단, x 주위를 x보다 큰 수로 둘러싸고 있으면 이동불가 -> 갈 수 있는 곳 판단하는게 BFS
// 큰 수가 여러개면 아래 조건으로 필터리
    // 행이 작은 순
    // 열이 작은 순

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = info.trim().split(' ').map(Number);
const arr = data.slice(0, n).map(v => v.trim().split(' ').map(Number));
const start = data[data.length-1].trim().split(' ').map(Number);
const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1 ,0];
const isRange = (x, y) => x>=0 && y>=0 && x<n && y<n;

let visited = Array.from({length: n}, () => Array(n).fill(0))
let queue = []
// BFS로 갈 수 있는 모든 좌표 뽑아내는 함수
const getRoot = (x, y) => {
    const rootList = [];
    const targetVal = arr[x][y]
    while (queue.length) {
        const [nowX, nowY] = queue.shift();

        for (let idx = 0; idx < dx.length; idx++) {
            const newX = nowX + dx[idx];
            const newY = nowY + dy[idx];
            if (isRange(newX, newY) && targetVal > arr[newX][newY] && visited[newX][newY] === 0) {
                visited[newX][newY] = 1;
                rootList.push([newX,newY, arr[newX][newY]])
                queue.push([newX,newY])
            }
        }
    }
    return rootList
}

// 갈 수 있는 좌표 중 필터링 해주는 함수
const getNext = (goList) => {
    const maxVal = Math.max(...goList.map(v => v[2]));
    const maxList = goList.filter(v => v[2] === maxVal);
    
    maxList.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    });

    return maxList[0]
}

let nowX = start[0] - 1;
let nowY = start[1] - 1;

for (let count = 1; count <= k; count++) {
    queue.push([nowX, nowY]);
    const goList = getRoot(nowX, nowY);

    if (goList.length === 0) break;

    [nowX, nowY] = getNext(goList);
    visited = Array.from({length: n}, () => Array(n).fill(0))
}

console.log(nowX + 1, nowY + 1);