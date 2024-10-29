// dp 사용
// 자기 앞에 숫자 중에서 작은 값 중 dp가 가장 큰 값 +1
// 초기값 세팅 첫번째 1

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = val.trim().split(' ').map(Number);

const dp = Array.from({length:n}, () => 0);

dp[0] = 1;

for (let x = 1; x < n; x++) {
    let maxVal = 0;
    for (let y = 0; y < x; y++) {
        if (arr[y] < arr[x]) {
            maxVal = Math.max(maxVal, dp[y])
        }
    }
    dp[x] = maxVal + 1;
}

console.log(Math.max(...dp))