//n+1 * 3 dp
// 한 층 올라갈때 마다 이전 층 기반으로 갈 수 있는 곳의 최대값 넣기

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = val.trim().split(' ').map(Number);
const dp = Array.from({length: n}, () => Array(4).fill(0));
let maxVal = 0;

dp[0][1] = arr[0];
dp[1][0] = arr[1];

for (let x = 3; x < n; x=x+2) {
    dp[x][0] = dp[x-2][0] + arr[x];
}

for (let x = 2; x <= 3; x++) {
    dp[x-1][x] = dp[x-2][x-1] + arr[x-1];
}

for (let y = 1; y <= 3; y++) {
    for (let x = y+1; x < n; x=x+2) {
        dp[x][y] = Math.max(dp[x-2][y], dp[x-1][y-1]) + arr[x];
    }
}


console.log(Math.max(...dp[dp.length-1]))