// n * n , 각 칸에는 숫자 적혀있음
// n개의 칸을 색칠해 행과 열 중복되지 않게 색칠
// 색칠된 칸의 합
// 최댓값
// visited 사용하여 순열 만들기

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const visited = Array.from({length: n}, () => 0);
let maxSum = 0;

const getSum = (list) => {
    let sum = 0;
    for (let idx = 0; idx < list.length; idx++) {
        sum += arr[idx][list[idx]]
    }
    return sum;
}

function getPer(level, list) {
    if (level === n) {
        maxSum = Math.max(maxSum, getSum(list))
    } else {
        for (let idx = 0; idx < n; idx++) {
            if (visited[idx] === 0) {
                visited[idx] = 1;
                getPer(level+1, [...list, idx])
                visited[idx] = 0;
            }
        }
    }
}

getPer(0, [])

console.log(maxSum)