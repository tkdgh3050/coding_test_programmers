const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.trim().split(' ').map(Number);
const sum = arr.reduce((a,c) => a+c, 0)
let max = 0;

function dfs(level, div) {
    if (div[0] > sum/2 || div[1] > sum/2) return;
    if (level === n) {
        if (div[0] === div[1]) max = Math.max(max, div[0])        
        return;
    }
    dfs(level+1, [div[0]+arr[level], div[1], div[2]])
    dfs(level+1, [div[0], div[1]+arr[level], div[2]])
    dfs(level+1, [div[0], div[1], div[2]+arr[level]])
}

dfs(0, [0,0,0])

console.log(max)