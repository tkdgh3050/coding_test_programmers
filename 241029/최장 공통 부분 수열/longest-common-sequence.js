// dp
// idx 는 검토를 진행한 자릿수
// 같은 글자가 있다면 그 자리까지 각각의 인덱스 움직이기

const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split('\n');
const dp = Array.from({length: Math.max(str1.length, str2.length)}, () => 0)

let idx1 = 0 
let idx2 = 0;

if (str1[idx1] === str2[idx2]) {
    dp[0] = 1;
    idx1 += 1;
    idx2 += 1;
}

for (let x = 1; x < dp.length; x++) {
    let cnt = 0;
    for (let one = idx1; one <= x; one++) {
        for (let two = idx2; two <= x; two++) {
            if (str1[one] === str2[two]) {
                idx1 = one+1;
                idx2 = two+1;
                cnt += 1;
                break;
            }
        }
    }
    dp[x] = dp[x-1] + cnt
}

console.log(dp[dp.length-1])