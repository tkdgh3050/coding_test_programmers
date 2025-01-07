const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const visited = Array.from({length: n+1}, () => 1);
const temp = [];
function getPer(level) {
    if (level === n) {
        console.log(...temp)
    } else {
        for (let x = 1; x <= n; x++) {
            if(visited[x]) {
                visited[x] = 0;
                temp.push(x);
                getPer(level+1);
                temp.pop();
                visited[x] = 1;
            }
        }
    }
}

getPer(0);