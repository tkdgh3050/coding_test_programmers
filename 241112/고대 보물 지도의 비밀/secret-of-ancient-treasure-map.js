// n개의 숫자 일렬
// 원하는 만큼 연속되게 선택 가능
// 숫자들은 보물까지의 경로
// 양의 숫자는 보물과 가까움 음의숫자는 멀어짐
// 연속된 숫자 선택 시 음수가 k개를 초과하면 안됨
// 음수가 k개 이하로 나타나는 연속합 중 최댓값
// dp

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().split('\n')

const [n,k] = info.trim().split(' ').map(Number);
const arr = data.trim().split(' ').map(Number);

const dp = Array.from({length: k+1}, () => Array(n).fill(Number.MIN_SAFE_INTEGER));

let minusCount = 0;
let maxVal = Number.MIN_SAFE_INTEGER;

if (arr[0] >= 0) {
    dp[0][0] = arr[0]
    maxVal = dp[0][0]
} else {
    dp[0][0] = 0
    dp[1][0] = arr[0]
    minusCount += 1;
    maxVal = dp[1][0]
}

for (let idx = 1; idx < arr.length; idx++) {
    const now = arr[idx];
    if (now >= 0) { //양수일 떄
        for (let cnt = 0; cnt <= minusCount; cnt++) {
            dp[cnt][idx] = dp[cnt][idx-1] + now
            maxVal = Math.max(maxVal, dp[cnt][idx])
        }
    } else {
        dp[0][idx] = 0;
        minusCount < k ? minusCount += 1 : minusCount = k;
        for (let cnt = 1; cnt <= minusCount; cnt++) {
            dp[cnt][idx] = dp[cnt-1][idx-1] + now;
            maxVal = Math.max(maxVal, dp[cnt][idx])
        }
    }
}

console.log(maxVal)