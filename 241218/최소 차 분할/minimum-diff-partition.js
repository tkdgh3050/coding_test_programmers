const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.trim().split(' ').map(Number);

let answer = Number.MAX_SAFE_INTEGER;
const total = arr.reduce((a,c) => a+c,0);

function dfs(sum, now) {
    if (now === n) {
        answer = Math.min(answer, Math.abs(total - 2*sum))
        return;
    }
    dfs(sum + arr[now], now+1)
    dfs(sum, now+1)
}

dfs(0,0)
console.log(answer)