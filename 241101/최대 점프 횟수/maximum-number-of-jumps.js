// n개의 수
// 각 자리의 수는 최대 점프 가능 거리
// 최대 점프 횟수

// dp 로 해서 풀고 n은 max 값으로
const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const n  =Number(info);
const arr = data.trim().split(' ').map(Number);
const dp = Array(n).fill(0);

dp[0] = 0;
let earlyVal = 0;
let isEarly = false;
for (let idx = 0; idx < n-1; idx++) {
    for (let jump = 1; jump <= arr[idx]; jump++) {
        dp[idx+jump] = Math.max(dp[idx+jump], dp[idx] + 1);
    }
    if (dp[idx+1] === 0) {
        earlyVal = dp[idx];
        isEarly = true;
        break;
    }
}

isEarly ? console.log(earlyVal) : console.log(dp[n-1])