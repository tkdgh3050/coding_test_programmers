// dp 사용
// 전에값까지에서 값이 0면 그냥 본인값을 채워넣기
// 초기값 세팅 dp[0] = 0

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = val.trim().split(' ').map(Number);

const dp = Array(n+1).fill(0);

for (let idx = 1; idx <= n; idx++) {
    if (dp[idx-1] > 0) {
        dp[idx] = dp[idx-1] + arr[idx-1];
    } else {
        dp[idx] = arr[idx-1];
    }
}
console.log(Math.max(...dp.slice(1)))