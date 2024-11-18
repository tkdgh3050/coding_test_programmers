// 숫자 1 만들기
// 4가지 연산
    // -1
    // +1
    // /2
    // /3
//bfs
// 나누기를 먼저

const fs = require('fs');
const num = Number(fs.readFileSync(0).toString().trim())

let minCnt = Number.MAX_SAFE_INTEGER;

const calc = (mode, num) => {
    let isAble = true;
    let calcNum = num;

    if (mode === 0) {
        if (calcNum % 3 === 0) {
            calcNum /= 3
        } else {
            isAble = false;
        }
    } else if (mode === 1) {
        if (calcNum % 2 === 0) {
            calcNum /= 2
        } else {
            isAble = false;
        }
    } else if (mode === 2) {
        calcNum -= 1
    } else {
        calcNum += 1
    }
    return [isAble, calcNum]
}

const findCount = (n) => {
    const queue = [[n, 0]];
    while (queue.length) {
        const [val, cnt] = queue.shift();
        
        if (val === 1) return minCnt = cnt;
        if (val === 2 || val === 3) return minCnt = cnt+1;

        if (val % 3 === 0) {
            queue.push([val/3, cnt+1])
        } else {
            if (val % 2 === 0) queue.push([val/2, cnt+1])
            if ((val + 1) % 3 === 0) {
                queue.push([val+1, cnt+1])
            } else {
                queue.push([val-1, cnt+1])
            }
        }
    }
}

findCount(num);
console.log(minCnt)