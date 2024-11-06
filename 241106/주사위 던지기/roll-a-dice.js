// n*n
// m방향 상하좌우 이동
// 격자판과 주사위 붙은 곳에 숫자 새겨짐

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m,r,c] = info.trim().split(' ').map(Number);
const moveArr = data.trim().split(' ');

const DIR = {
    L: 0,
    R: 1,
    U: 2,
    D: 3
};

const dx = [0,0,-1,1];
const dy = [-1,1,0,0];
let nowDice = [4,3,5,2,6];

const arr = Array.from({length: n}, () => Array(n).fill(0));

const isRange = (x, y) => x>=0 && y>=0 && x <n && y< n;
const getDir = (dir) => {
    let val = 0;
    switch(dir) {
        case 'L':
            val = DIR.L;
            break;
        case 'R':
            val = DIR.R;
            break;
        case 'U':
            val = DIR.U;
            break;
        case 'D':
            val = DIR.D;
            break;
        default:
            val = -1
    }
    return val
}
const move = (dir, nowX, nowY) => {
    const newX = nowX + dx[dir]
    const newY = nowY + dy[dir]

    if (!isRange(newX, newY)) return [nowX, nowY];

    arr[newX][newY] = nowDice[dir]
    
    if (dir === DIR.L) {
        nowDice = [7-nowDice[4], nowDice[4], nowDice[2], nowDice[3], nowDice[0]]
    } else if (dir === DIR.R) {
        nowDice = [nowDice[4], 7-nowDice[4], nowDice[2], nowDice[3], nowDice[1]]
    } else if (dir === DIR.U) {
        nowDice = [nowDice[0], nowDice[1], 7-nowDice[4], nowDice[4], nowDice[2]]
    } else {
        nowDice = [nowDice[0], nowDice[1], nowDice[4], 7-nowDice[4], nowDice[3]]
    }
    return [newX, newY]
}

let nowX = r-1;
let nowY = c-1;
arr[nowX][nowY] = 6

for (let val of moveArr) {
    [nowX, nowY] = move(getDir(val), nowX, nowY)
}

let sum = 0;
for (let x = 0; x < n ;x++) {
    for (let y = 0; y <n ; y++) {
        sum += arr[x][y]
    }
}
console.log(sum)