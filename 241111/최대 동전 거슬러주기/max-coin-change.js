// n개의 동전종류
// 금액 M을 거슬러줌
// 최대 동전 수
// 거슬러주는게 불가능할경우 -1
// dp
// n원까지의 최대 동전수

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.trim().split(' ').map(Number);

const dp = Array(m+1).fill(-1);

for (let idx = 0; idx < n; idx++) {
    dp[arr[idx]] = 1;
}

for (let money = 2; money <= m; money++) {
    let max = -1;
    for (let idx = 0; idx < n; idx++) {
        if (money - arr[idx] < 1) continue;
        max = Math.max(max,dp[money - arr[idx]] + 1)
    }
    dp[money] = Math.max(dp[money], max)
}

console.log(dp[m])