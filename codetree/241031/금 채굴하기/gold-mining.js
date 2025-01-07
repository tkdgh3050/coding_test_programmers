// k가 0이면 한칸 1이면 상하좌우 1번
// 채굴비용은 K∗K+(K+1)∗(K+1)
// 금 한 개의 가격이 m
// 손해보지 않으면서 가장 많은 금을 출력
// k가 최대임
// nXn

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,perGold] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

const maxSize = n % 2 === 0 ? n : n-1;
const getCost = (k) => k*k + (k+1)*(k+1);
let maxCnt = 0;
const getRange = (k) => {
    const dx = [];
    const dy = [];
    for (let x = -k; x <= k; x++) {
        for (let y = -k+Math.abs(x); y <= k-Math.abs(x); y++) {
            dx.push(x)
            dy.push(y);
        }
    }
    return [dx, dy]
}
const isRange = (x, y) => x >= 0 && x < n && y>=0 && y < n;

for (let size = 0; size <= maxSize; size++) {
    const [dx, dy] = getRange(size);
    const cost = getCost(size);

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            let coinCnt = 0;
            for (let idx = 0; idx < dx.length; idx++) {
                const newX = x + dx[idx];
                const newY = y + dy[idx];
                if (isRange(newX,newY) && arr[newX][newY] === 1) coinCnt += 1;
            }
            if (coinCnt * perGold >= cost) maxCnt = Math.max(maxCnt, coinCnt)
        }
    }
}

console.log(maxCnt)