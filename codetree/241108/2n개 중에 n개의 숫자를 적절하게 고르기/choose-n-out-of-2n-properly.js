// 2n개의 숫자가 주어지면 2개의 그룹으로 나눠 그룹합의 차가 최소
// 전체 합을 구한 뒤에 n개씩 골랐을 때 합의 차 최소를 구함
// dfs

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.trim().split(' ').map(Number);

const totalSum = arr.reduce((a,c) => a+c, 0);
let minSum = Number.MAX_SAFE_INTEGER;
const check = Array.from({length: arr.length}, () => 0);
const DFS = (level, list, nowIdx) => {
    if (level === n) {
        minSum = Math.min(minSum, Math.abs(totalSum-2*list.reduce((a,c) => a+c, 0)))
    } else {
        for (let idx = nowIdx; idx < arr.length; idx++) {
            if (check[idx] === 0) {
                check[idx] = 1;
                DFS(level+1, [...list, arr[idx]], idx);
                check[idx] = 0;
            }
        }
    }
}

DFS(0,[], 0)
console.log(minSum)