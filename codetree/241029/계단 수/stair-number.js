// 계단 수 dp
// 이전 수의 -1, +1 더하면 됨
// 나눈 수를 출력해야하는 것 잊지말기
// 마지막 n에서 총합에 나머지 출력

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = Array.from({length: n}, () => Array(10).fill(0));
const divideNum = 10**9 + 7;

//초기값 세팅
for (let x = 1; x < 10; x++) {
    dp[0][x] = 1;
}

for (let x = 1; x < n; x++) {
    for (let y = 0; y < 10; y++) {
        if (y === 0) {
            dp[x][y] = dp[x-1][y+1]  % divideNum
        } else if (y === 9) {
            dp[x][y] = dp[x-1][y-1]  % divideNum;
        } else {
            dp[x][y] = (dp[x-1][y-1] + dp[x-1][y+1]) % divideNum;
        }
    }
}

console.log(dp[n-1].reduce((a,c) => a+c, 0) % (10**9 + 7))