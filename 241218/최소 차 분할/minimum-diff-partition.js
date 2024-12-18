const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.trim().split(' ').map(Number);

let answer = Number.MAX_SAFE_INTEGER;
const dp = Array.from({length: n}, () => 0);

arr.sort((a,b) => a-b)
dp[0] = arr[0];

for (let idx = 1; idx < n; idx++) {
    dp[idx] = dp[idx-1] + arr[idx]
}

for (let idx = 0; idx < n-1; idx++) {
    answer = Math.min(answer, Math.abs(dp[n-1] - 2* dp[idx]))
}

console.log(answer)