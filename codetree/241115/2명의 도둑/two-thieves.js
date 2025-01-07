// n*n
// 하나의 행을 정해 연속한 m개의 열을 선택
// 두 도둑의 선택이 겹치면 안됨
// 각 칸에는 숫자 적혀있음
// 최대로 가져갈 수 있는 숫자 c, 적절하게 선택해서 가져갈 수 있음
// 가치는 숫자의 제곱
// 가치 최대 총합

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m,c] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));
const maxArr = [];

const isOverlay = (x1, y1, x2, y2) => {
    if (x1 !== x2) return false;
    if (y1+m <= y2) return false;
    return true;
}

const getMaxComb = (level, list, sum, limit) => {
    if (limit > c) return;
    if (level === list.length) {
        max = Math.max(sum, max)
    } else {
        getMaxComb(level+1,list, sum + Math.pow(list[level], 2), limit + list[level])
        getMaxComb(level+1,list, sum, limit)
    }
}

// 선택했을 때의 최대값 구해두고 
// (각 칸을 첫번째로 선택했을 때 얻을 수 있는 최대값 기록해두기, 카운팅까지)
let max = 0;
for (let x = 0; x < n; x++) {
    for (let y = 0; y <= n - m; y++) {
        max = 0;
        getMaxComb(0,arr[x].slice(y, y+m), 0, 0)
        maxArr.push([max, x, y])
    }
}

let maxVal = 0;

// 조합해서 최댓값을 찾는다 (겹치면 패스)
const dfs = (level, list) => {
    if (list.length === 2) {
        const [val1, x1, y1] = maxArr[list[0]];
        const [val2, x2, y2] = maxArr[list[1]];

        if (isOverlay(x1, y1, x2, y2)) return;
        maxVal = Math.max(val1+val2, maxVal);
    } else {
        if (level === maxArr.length) return;
        dfs(level+1, [...list, level])
        dfs(level+1, [...list])
    }
}

dfs(0,[])
console.log(maxVal)
