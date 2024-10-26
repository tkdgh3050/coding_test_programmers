const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, startX, startY] = input1.trim().split(' ').map((val, idx) => idx === 0 ? Number(val) : Number(val) - 1);
const arr = input2.map(val => val.trim().split(' '). map(Number));

const dx = [-1, 1, 0 ,0];
const dy = [0, 0, -1, 1];

const isInRange = (x, y) => x>=0 && x < n && y>=0 && y < n;

let isMoving = true;
let nowX = startX;
let nowY = startY;
const answer = [arr[nowX][nowY]];
while (isMoving) {
    isMoving = false;
    for (let x = 0; x < dx.length; x++) {
        const next = [nowX + dx[x], nowY + dy[x]]
        if (isInRange(...next) && arr[next[0]][next[1]] > arr[nowX][nowY]) {
            [nowX, nowY] = [next[0], next[1]]
            answer.push(arr[nowX][nowY])
            isMoving = true;
            break;
        } 
    }
}

console.log(...answer)