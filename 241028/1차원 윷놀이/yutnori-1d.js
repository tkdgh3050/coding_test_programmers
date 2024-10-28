const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');
const [turn, pan, mal] = info.trim().split(' ').map(Number);
const turnArr = val.trim().split(' ').map(Number);

const check = Array.from({length: turn}, () => 1);
const temp = [];
let maxVal = 0;

function countGoalIn(arr) {
    // 순서쌍을 받으면 골에 몇명 들어갈 수 있는지 카운트하기
    let cnt = 0;
    let temp = 1;
    for (let idx = 0; idx < arr.length; idx++) {
        if (cnt >= mal) break;
        temp += arr[idx];
        if (temp >= pan) {
            cnt += 1;
            temp = 1;
        }
    }
    return cnt;
}

function makePer(level) {
    // 들어올 수 있는 순서쌍을 만들기
    if (maxVal === mal) return;
    if (level === turn) {
        maxVal = Math.max(maxVal, countGoalIn(temp));
    } else {
        for (let x = 0; x < turnArr.length; x++) {
            if (check[x]) {
                check[x] = 0;
                temp.push(turnArr[x])
                makePer(level+1);
                temp.pop()
                check[x] = 1;
            }
        }
    }
}

makePer(0);
console.log(maxVal)