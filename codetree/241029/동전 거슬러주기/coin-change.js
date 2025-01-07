// 최소 동전 수
// dp 사용
// 이전 값에서 올 수 있는 값 중 제일 최소값 + 1
// 초기값 설정은 동전 종류는 1, 나머지는 MAX
// 나중에 MAX일 경우 -1을 출력하도록 설정

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const MAX_INT = Number.MAX_SAFE_INTEGER
const [n,m] = info.trim().split(' ').map(Number);
const arr = val.trim().split(' ').map(Number);
const dp = Array.from({length: m+1}, () => MAX_INT);

// 동전 초기값 세팅
for (let idx = 0; idx < n; idx++) {
    dp[arr[idx]] = 1;
}

for (let num = 1; num <= m; num++) {
    for (let idx = 0; idx < n; idx++) {
        if (num - arr[idx] > 0 && dp[num - arr[idx]] !== MAX_INT) {
            dp[num] = Math.min(dp[num], dp[num - arr[idx]] + 1);
        }
    }
}

console.log(dp[m] === MAX_INT ? -1 : dp[m])