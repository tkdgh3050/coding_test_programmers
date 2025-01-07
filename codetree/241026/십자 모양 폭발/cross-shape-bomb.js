const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input1);
const arr = Array.from({length: n}, (_, idx) => input2[idx].split(' ').map(Number));
const remove = input2[input2.length - 1].trim().split(' ').map(val => Number(val) -1);
const size = arr[remove[0]][remove[1]];

// 지워지는 부분을 0으로 바꿈
arr[remove[0]][remove[1]] = 0;

for (let x = 1; x < size; x++) {
    if (remove[0] - x >= 0) arr[remove[0] - x][remove[1]] = 0
    if (remove[0] + x < n) arr[remove[0] + x][remove[1]] = 0
    if (remove[1] - x >= 0) arr[remove[0]][remove[1] - x] = 0
    if (remove[1] + x < n) arr[remove[0]][remove[1] + x] = 0
}

// 중력을 적용시키는 작업 진행
const tempMat = [];
for (let x = 0; x < n; x++) {
    const temp = Array(n).fill(0)
    let idx = 0;
    for (let y = n-1; y >= 0; y--) {
        if (arr[y][x] !== 0) temp[idx++] = arr[y][x];
    }
    tempMat.push([...temp])
}

// 돌아간 방향에 맞게 출력
for (let x = n - 1; x >= 0; x--) {
    const temp = [];
    for (let y = 0 ; y < n; y++) {
        temp.push(tempMat[y][x]);
    }
    console.log(...temp)
}