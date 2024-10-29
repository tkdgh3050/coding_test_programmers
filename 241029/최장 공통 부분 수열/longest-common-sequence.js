// dp
// idx 는 검토를 진행한 자릿수
// 같은 글자가 있다면 그 자리까지 각각의 인덱스 움직이기

const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split('\n');
const dp = Array.from({length: str1.length}, () => Array(str2.length).fill(0));

let temp = 0;
for (let x = 0; x < str1.length; x++) {
    if (temp === 0 && str2[0] === str1[x]) temp = 1;
    dp[x][0] = temp;
}
temp = 0;
for (let y = 0; y < str2.length; y++) {
    if (temp === 0 && str1[0] === str2[y]) temp = 1;
    dp[0][y] = temp;
}

for (let x = 1; x < str1.length; x++) {
    for (let y = 1; y < str2.length; y++) {
        if (str1[x] === str2[y]) {
            dp[x][y] = dp[x-1][y-1] + 1;
        } else {
            dp[x][y] = Math.max(dp[x-1][y], dp[x][y-1])
        }
        
    }
}

console.log(dp[str1.length-1][str2.length-1])