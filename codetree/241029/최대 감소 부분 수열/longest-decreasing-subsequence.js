// dp 사용
// 앞쪽에서 본인보다 큰 값일 때 dp의 값 중 최대를 골라 +1
// dp 중 최대값 출력

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = val.trim().split(' ').map(Number);

const dp = Array.from({length:n}, () => 1);
dp[0] = 1;

for (let now = 1; now < n; now++) {
    for (let before = 0; before < now; before++) {
        if (arr[now] < arr[before]) {
            dp[now] = Math.max(dp[now], dp[before] + 1);
        }
    }
}

console.log(Math.max(...dp))