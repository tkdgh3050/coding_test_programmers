// dp를 사용해서
// 각 숫자까지의 최대합을 기록해두면
// 그 다음 숫자는 이전 기록 하나씩 맞는 숫자 더한 값의 최대값

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.trim().split(' ').map(Number);

const dp = Array.from({length: n}, () => 0);
dp[0] = arr[0];

for (let dpIdx = 1; dpIdx < n; dpIdx++) {
    for (let idx = 0; idx < dpIdx; idx++) {
        dp[dpIdx] = Math.max(dp[idx] + arr[dpIdx-idx-1], dp[dpIdx])
    }
    dp[dpIdx] = Math.max(dp[dpIdx], arr[dpIdx])
}

console.log(dp[n-1])