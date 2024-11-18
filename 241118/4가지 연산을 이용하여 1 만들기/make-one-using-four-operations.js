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

const findCount = (n) => {
    const queue = [[n, 0]];
    const visited = new Set();
    visited.add(n);

    while (queue.length) {
        const [val, cnt] = queue.shift();
        if (val === 1) return minCnt = cnt;

        // 가능한 연산 순서대로 큐에 추가
        if (val % 3 === 0 && !visited.has(val / 3)) {
            queue.push([val / 3, cnt + 1]);
            visited.add(val / 3);
        }
        if (val % 2 === 0 && !visited.has(val / 2)) {
            queue.push([val / 2, cnt + 1]);
            visited.add(val / 2);
        }
        if (!visited.has(val - 1)) {
            queue.push([val - 1, cnt + 1]);
            visited.add(val - 1);
        }
        if (!visited.has(val + 1)) {
            queue.push([val + 1, cnt + 1]);
            visited.add(val + 1);
        }
    }
}

findCount(num);
console.log(minCnt)