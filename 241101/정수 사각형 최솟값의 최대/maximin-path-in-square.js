//n*n 행렬
// 1,1 에서 시작 n,n을 간다
// 오른쪽 , 아래만 이동 가능
// 거쳐간 위치의 숫자 중 최솟값을 가장 크게 만드는 것 (하한선을 최대로 높이는 것)
// 초기값 (0행 0열 최솟값들 세팅)
// 1행1열~ n까지 min(max(위 왼쪽) ,자기자신) 비교해서 최솟값 세팅

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(n).fill(Number.MAX_SAFE_INTEGER));

// 초기값 세팅
dp[0][0] = arr[0][0]
for (let idx = 1; idx < n ;idx++) {
    dp[0][idx] = Math.min(dp[0][idx-1], arr[0][idx]);
    dp[idx][0] = Math.min(dp[idx-1][0], arr[idx][0])
}

for (let x = 1; x < n; x++) {
    for (let y = 1; y < n; y++) {
        dp[x][y] = Math.min(Math.max(dp[x-1][y], dp[x][y-1]), arr[x][y]);
    }
}

console.log(dp[n-1][n-1])