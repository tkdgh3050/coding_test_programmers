// n층
// 왼, 가 오 3개 방
// 연속해서 같은 방 못감
// n층과 1층 같은 방 못감
// 최대한 많은 보물

// 처음 시작할 때 [왼, 가, 오] 로 값 계속 내려줌 (해당하는 부분에 -1)최대값 가지고 오다가 맨 마지막에

const fs =require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(3).fill(Array(3).fill(-1)))
let maxVal = 0;


for (let idx = 0; idx < 3; idx++) {
    dp[1][idx] = arr[0].map(v => v+arr[1][idx])
    dp[1][idx][idx] = 0
}

for (let idx = 2; idx < n; idx++) {
    for (let y = 0; y < 3; y++) {
        let maxArr = [0,0,0];
        for (let filter = 0; filter < 3; filter++) {
            if (filter === y) continue;
            for (let max = 0; max < 3; max++) {
                maxArr[max] = Math.max(maxArr[max], dp[idx-1][filter][max] + arr[idx][y])
            }
        }
        dp[idx][y] = [...maxArr]
    }
}

for (let idx = 0; idx < 3; idx++) {
    for (let y = 0; y < 3; y++) {
        if (idx === y) continue;
        for (let filter = 0; filter < 3; filter++) {
            if (idx === filter) continue;
            maxVal = Math.max(maxVal, dp[n-1][y][filter]);
        }
    }
}

console.log(maxVal)