//dp 사용
// m일 때 n번쨰 옷을 입었을 때 최대 만족도 값
// 초기 m은 0

const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.map(v => v.trim().split(' ').map(Number));
const cloth = Array.from({length: n}, () => Array(m).fill(0));
const dp = Array.from({length: n}, () => Array(m).fill(0));

for (let idx = 0; idx < arr.length; idx++) {
    const [start, end, cost] = arr[idx];
    for (let x = start-1; x <= end-1; x++) {
        cloth[idx][x] = cost;
    }
}

for (let y = 1; y < m; y++) {
    for (let x = 0; x < n; x++) {
        if (cloth[x][y] === 0) continue;
        for (let z = 0; z < n; z++) {
            if (cloth[z][y-1] === 0) continue;
            dp[x][y] = Math.max(dp[x][y], dp[z][y-1] + Math.abs(cloth[z][y-1] - cloth[x][y]))
        }
    }
}

let max = 0;

for (let x = 0; x < n; x++) {
    max = Math.max(max, dp[x][m-1])
}

console.log(max)