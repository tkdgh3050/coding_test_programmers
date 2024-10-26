const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input1.trim().split(' ').map((val, idx) => idx === 2 ? Number(val) - 1: Number(val));
const arr = input2.map(val => val.trim().split(' '). map(Number));

const isAllDownOk = (nowX, nowY, size) => {
    // 지금 좌표와 사이즈가 주어지면 그 아래쪽이 다 비었는지 확인
    for (let y = nowY; y < size; y++) {
        if (arr[nowX+1][y] !== 0) return false;
    }
    return true;
}

const changeAllOne = (nowX, nowY, size) => {
    // 좌표와 사이즈가 주어지면 해당 부분을 1로 바꿈
    for (let y = nowY; y < size; y++) {
        arr[nowX][y] = 1;
    }
}

for (let idx = 0; idx < n; idx++) {
    if (idx === n - 1 || !isAllDownOk(idx, k, m)) {
        changeAllOne(idx, k ,m);
        break;
    }
}

// 출력
for (let x = 0; x < n; x++) {
    console.log(...arr[x])
}