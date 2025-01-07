const fs = require('fs');
const data = fs.readFileSync(0).toString().trim().split('\n');

let arr = data.slice(0, -1).map(v => v.trim().split(' ').map(Number));
const direction = data.slice(-1)[0];
const n = 4;

const DIR = {
    L: 'L',
    R: 'R',
    U: 'U',
    D: 'D'
}

// 한쪽방향으로 모아주는 함수
const move = (dir) => {
    const temp = Array.from({length: n}, () => Array(n).fill(0))
    if (dir === DIR.R) {
        for (let x = 0; x < n ; x++) {
            let tempIdx = n-1;
            for (let y = n-1; y >= 0; y--) {
                if (arr[x][y] === 0) continue;
                temp[x][tempIdx] = arr[x][y];
                tempIdx -= 1;
            }
        }
    } else if (dir === DIR.L) {
        for (let x = 0; x < n ; x++) {
            let tempIdx = 0;
            for (let y = 0; y < n ;y++) {
                if (arr[x][y] === 0) continue;
                temp[x][tempIdx] = arr[x][y];
                tempIdx += 1;
            }
        }
    } else if (dir === DIR.U) {
        for (let y = 0; y < n ; y++) {
            let tempIdx = 0;
            for (let x = 0; x < n; x++) {
                if (arr[x][y] === 0) continue;
                temp[tempIdx][y] = arr[x][y];
                tempIdx += 1;
            }
        }
    } else {
        for (let y = 0; y < n ; y++) {
            let tempIdx = n-1;
            for (let x = n-1; x >= 0; x--) {
                if (arr[x][y] === 0) continue;
                temp[tempIdx][y] = arr[x][y];
                tempIdx -= 1;
            }
        }
    }
    arr = temp;
}

// 합치는 함수 (방향도 받아야 함)
const merge = (dir) => {
    const temp = Array.from({length: n}, () => Array(n).fill(0))
    if (dir === DIR.R) {
        for (let x = 0; x < n ; x++) {
            let tempIdx = n-1;
            let idx = n-1;
            while (tempIdx >= 0) {
                if (tempIdx !== 0 && arr[x][tempIdx] === arr[x][tempIdx-1]) {
                    temp[x][idx] = arr[x][tempIdx] * 2;
                    tempIdx -= 2;
                } else {
                    temp[x][idx] = arr[x][tempIdx];
                    tempIdx -= 1;
                }
                idx -= 1;
            }
        }
    } else if (dir === DIR.L) {
        for (let x = 0; x < n ; x++) {
            let tempIdx = 0;
            let idx = 0;
            while (tempIdx < n) {
                if (tempIdx !== n-1 && arr[x][tempIdx] === arr[x][tempIdx+1]) {
                    temp[x][idx] = arr[x][tempIdx] * 2;
                    tempIdx += 2;
                } else {
                    temp[x][idx] = arr[x][tempIdx];
                    tempIdx += 1;
                }
                idx += 1;
            }
        }
    } else if (dir === DIR.U) {
        for (let y = 0; y < n ; y++) {
            let tempIdx = 0;
            let idx = 0;
            while (tempIdx < n) {
                if (tempIdx !== n-1 && arr[tempIdx][y] === arr[tempIdx+1][y]) {
                    temp[idx][y] = arr[tempIdx][y] * 2;
                    tempIdx += 2;
                } else {
                    temp[idx][y] = arr[tempIdx][y];
                    tempIdx += 1;
                }
                idx += 1;
            }
        }
    } else {
        for (let y = 0; y < n ; y++) {
            let tempIdx = n-1;
            let idx = n-1;
            while (tempIdx >= 0) {
                if (tempIdx !== 0 && arr[tempIdx][y] === arr[tempIdx-1][y]) {
                    temp[idx][y] = arr[tempIdx][y] * 2;
                    tempIdx -= 2;
                } else {
                    temp[idx][y] = arr[tempIdx][y];
                    tempIdx -= 1;
                }
                idx -= 1;
            }
        }
    }
    arr = temp;
}

move(direction);
merge(direction)
arr.forEach(v => console.log(...v))