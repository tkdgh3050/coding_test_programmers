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

const isOverlay = (x1, y1, cnt1, x2, y2) => {
    if (x1 !== x2) return false;
    if (y1+cnt1 <= y2) return false;
    return true;
}

// 선택했을 때의 최대값 구해두고 
// (각 칸을 첫번째로 선택했을 때 얻을 수 있는 최대값 기록해두기, 카운팅까지)
for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        let cnt = 0;
        let cost = 0;
        let weight = 0;
        for (let yPlus = y; yPlus < y+m; yPlus++) {
            if(yPlus >= n) break;
            if (weight + arr[x][yPlus] > c) continue;
            cnt = yPlus - y + 1;
            weight += arr[x][yPlus]
            cost += Math.pow(arr[x][yPlus], 2);
        }
        maxArr.push([cost, cnt, x, y])
    }
}

let maxVal = 0;

const dfs = (level, list) => {
    if (level === maxArr.length) return;
    if (list.length === 2) {
        const [val1, cnt1, x1, y1] = maxArr[list[0]];
        const [val2, cnt2, x2, y2] = maxArr[list[1]];

        if (isOverlay(x1, y1, cnt1, x2, y2)) return;
        maxVal = Math.max(val1+val2, maxVal);
    } else {
        dfs(level+1, [...list, level])
        dfs(level+1, [...list])
    }
}

dfs(0,[])
console.log(maxVal)
// 조합해서 최댓값을 찾는다 (겹치면 패스)
