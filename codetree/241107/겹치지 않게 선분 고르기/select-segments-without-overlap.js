// dfs 이용해서 경우의 수 뽑고 최대 갯수 기록

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const lineArr = data.map(v => v.trim().split(' ').map(Number));
let maxVal =0;

const dfs = (level, arr) => {
    if (level === n) {
        maxVal = Math.max(maxVal, checkCnt(arr))
    } else {
        dfs(level+1, [...arr, lineArr[level]])
        dfs(level+1, [...arr])
    }
}

const checkCnt = (arr) => {
    const temp = []
    for (let [x1, x2] of arr) {
        temp.push([x1, 1])
        temp.push([x2, -1])
    }
    temp.sort((a,b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    });
    let cnt = 0;
    let total = 0;
    for (let [_, val] of temp) {
        total += val;
        if (total > 1) return 0;
        if (total === 0) cnt += 1;
    }
    return cnt
}

dfs(0,[]);

console.log(maxVal)