// 사람수 n
// 가로줄 m
// 모든 가로줄을 사용했을 때랑 동일한 결과가 나오도록 하는 최소 가로줄 수
const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const lineArr = data.map(v => v.trim().split(' ').map(Number));

const getRes = (line) => {
    const arr = Array.from({length:m+1}, () => Array(n+1).fill(0));
    let order = ''
    for (let [y, x] of line) {
        arr[x][y] = y+1;
        arr[x][y+1] = y;
    }
    let nowY = 0;
    for (let y = 1; y<=n; y++) {
        nowY = y;
        for (let x = 1; x<=m; x++) {
            if (arr[x][nowY] !== 0) {
                nowY = arr[x][nowY]
            }
        }
        order += String(nowY)
    }
    return order
}

const dfs = (level, arr) => {
    if (level === lineArr.length-1) {
        if (arr.length === lineArr.length) return;
        
        if (getRes(arr.map(v => lineArr[v])) === criteria) {
            minCnt = Math.min(minCnt, arr.length);
        }
    } else {
            dfs(level+1, [...arr, level])
            dfs(level+1, [...arr])
    }
}

const criteria = getRes(lineArr);
let minCnt = lineArr.length;
dfs(0,[]);

console.log(minCnt)