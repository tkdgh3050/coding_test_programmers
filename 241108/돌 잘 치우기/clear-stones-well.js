// n*n 격자
// 숫자 0, 1 로만 이루어짐
    // 0: 이동가능
    // 1: 돌
// m개의 돌만 치워서
// k개의 시작점에서 상하좌우 인접한 곳 이동해서 도달 가능한 칸의 수를 최대

// 돌을 지워보면서
// 시작점에서 도달 가능한 지점을 체크하고
// 체크한 개수가 몇개인지 세서 최대개수를 기록

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,k,m] = info.split(' ').map(Number);
const arr = data.slice(0,n).map(v => v.trim().split(' ').map(Number));
const startArr = data.slice(n).map(v => v.trim().split(' ').map(num => Number(num) - 1))

let check = Array.from({length:n}, () => Array(n).fill(0));
const stone = [];
const dx = [1, -1, 0,0];
const dy = [0,0,1,-1];
const isRange = (x,y) => x>=0&& y>=0 && x < n && y<n
let maxCnt = 0;

for (let x = 0; x < n; x++) {
    for (let y= 0; y < n; y++) {
        if (arr[x][y] === 1) stone.push([x,y])
    }
}

const initial = () => {
    for (let x = 0; x < n; x++) {
        for (let y= 0; y < n; y++) {
            check[x][y] = arr[x][y]
        }
    }
}

const combArr = [];
const dup = Array.from({length: stone.length}, () => 1);
const dfs = (level, nowIdx, list) => {
    if (level === m) {
        combArr.push(list)
    } else {
        for (let idx = nowIdx; idx < stone.length; idx++) {
            if (dup[idx]) {
                dup[idx] = 0;
                dfs(level+1, idx, [...list, stone[idx]])
                dup[idx] = 1;
            }
        }
    }
}
const bfs = () => {
    const queue = [...startArr];

    while (queue.length) {
        const [x,y] = queue.shift();
        check[x][y] = -1;
        for (let idx = 0; idx < dx.length; idx++) {
            const newX = x + dx[idx];
            const newY = y + dy[idx];
            if (isRange(newX, newY) && check[newX][newY] === 0) {
                check[newX][newY] = -1;
                queue.push([newX,newY])
            }
        }
    }
}
const count = () => {
    let cnt = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y< n; y++) {
            if (check[x][y] === -1) cnt += 1;
        }
    }
    return cnt
}

dfs(0, 0 ,[])


for (let remove of combArr) {
    // 맵을 초기화
    initial();
    
    // 돌의 위치를 배열에 넣어두고 조합으로 골라서 0으로 만듬
    for (let [x,y] of remove) {
        check[x][y] = 0;
    }

    // 시작지점에서 bfs를 이용해 도달가능한 지점을 -1로 만듬
    bfs();
    
    // -1의 개수를 세고 최대개수 기록
    maxCnt = Math.max(maxCnt,count());
}

console.log(maxCnt)