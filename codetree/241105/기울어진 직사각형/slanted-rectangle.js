// 직사각형이 이루는 지점의 숫자 합이 최대
// (-1, 1), (-1, -1), (1, -1), (1, 1)
// 완탐
// dx, dy
// 범위 내인지
// 최소크기 1, 최대크기 n-1
    // 최소크기 1, 최대크기 n-1
        // 1 ~ n-2
            // 1 ~ n-2

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));

const heightDx = [-1, 1]
const heightDy = [-1, 1]
const widthDx = [-1, 1]
const widthDy = [1, -1]

const isRange = (x, y) => x>= 0 && y >= 0 && x < n && y<n;
const sumVal = (width, height, x, y) => {
    let sum = 0;
    let nowX = x;
    let nowY = y;
    for (let idx = 1; idx <= width; idx++) {
        const newX = nowX + widthDx[0];
        const newY = nowY + widthDy[0];
        if (isRange(newX, newY)) {
            sum += arr[newX][newY];
            nowX = newX;
            nowY = newY;
        } else {
            return -1
        }
    }
    for (let idx = 1; idx <= height; idx++) {
        const newX = nowX + heightDx[0];
        const newY = nowY + heightDy[0];
        if (isRange(newX, newY)) {
            sum += arr[newX][newY];
            nowX = newX;
            nowY = newY;
        } else {
            return -1
        }
    }
    for (let idx = 1; idx <= width; idx++) {
        const newX = nowX + widthDx[1];
        const newY = nowY + widthDy[1];
        if (isRange(newX, newY)) {
            sum += arr[newX][newY];
            nowX = newX;
            nowY = newY;
        } else {
            return -1
        }
    }
    for (let idx = 1; idx <= height; idx++) {
        const newX = nowX + heightDx[1];
        const newY = nowY + heightDy[1];
        if (isRange(newX, newY)) {
            sum += arr[newX][newY];
            nowX = newX;
            nowY = newY;
        } else {
            return -1
        }
    }
    return sum
}
let maxVal = 0;

for (let x = n-1; x >= 2; x--) {
    for (let y = n-2; y >= 1; y--) {
        for (let width = 1; width <= n; width++) {
            for (let height = 1; height < n; height++) {
                const sum = sumVal(width, height, x, y);
                if (sum >= 0) maxVal = Math.max(maxVal, sum);
            }
        }
    }
}

console.log(maxVal)