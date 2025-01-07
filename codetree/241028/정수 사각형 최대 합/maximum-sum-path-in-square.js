// 오른쪽 밑으로만 이동
// 맨 오른쪽 끝이 목적지
// 가는 길의 최대 합
// dp로 풀것
// 초기값은 맨윗행 윗열 세팅

const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = val.map(v => v.trim().split(' ').map(Number));

const dp = Array.from({length: n}, () => Array(n).fill(0));

//초기값 세팅
dp[0][0] = arr[0][0]
for (let idx = 1; idx < n; idx++) {
    dp[0][idx] = dp[0][idx-1] + arr[0][idx];
    dp[idx][0] = dp[idx-1][0] + arr[idx][0];
}

// 점화식 적용

for (let x = 1; x < n; x++) {
    for (let y = 1; y < n; y++) {
        dp[x][y] = Math.max(dp[x-1][y], dp[x][y-1]) + arr[x][y]
    }
}

console.log(dp[n-1][n-1])