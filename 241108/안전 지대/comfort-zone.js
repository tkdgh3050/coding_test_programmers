// 안전지대가 0이 될때까지 진행
// check를 만들어두고
// k 를 늘린 뒤 check에 색칠하고 (초기화하는 과정 포함)
// dfs 이용해서 탐색한 다음 check 색칠하도록 진행

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

const check = Array.from({length: n}, () => Array(m).fill(false));
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const isRange = (x,y) => x>=0 && y>=0 && x<n && y<m;
const rain = (k) => {
    let isAllRain = true;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (arr[x][y] <= k) {
                check[x][y] = true;
            } else {
                check[x][y] = false;
                isAllRain = false;
            }
        }
    }
    return isAllRain;
}
const DFS = (x,y) => {
    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx]
        const newY = y + dy[idx]
        if (isRange(newX, newY) && !check[newX][newY]) {
            check[newX][newY] = true;
            DFS(newX, newY)
        }
    }
}

let maxCnt = 0;
let maxK = 0;

for (let k = 1; k <= 100; k++) {
    if (rain(k)) break;

    let cnt = 0;
    for (let x = 0; x< n; x++) {
        for (let y = 0; y <m; y++) {
            if (!check[x][y]) {
                cnt += 1;
                DFS(x,y)
            }
        }
    }
    if (cnt > maxCnt) {
        maxCnt = cnt
        maxK = k
    }
}

console.log(maxK, maxCnt)