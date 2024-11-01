// 1,2,5 만 이용해서 n을 나타내는 조합수
// 순서가 다르면 다른 것
// dp 이용해서 (idx-1) + (idx-2) + (idx-5) 하면됨
// 초기값 5까지 세팅;

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const dp = Array(n+1).fill(0);

//초기값 세팅
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
dp[4] = 5;
dp[5] = 9;

for (let idx = 6; idx <=n; idx++) {
    dp[idx] = (dp[idx-1] + dp[idx-2] + dp[idx-5]) % 10007;
}

console.log(dp[n])