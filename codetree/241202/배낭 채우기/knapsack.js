const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.map(val => val.trim().split(' ').map(Number));

let dp = Array.from({length:m+1}, () => 0);
const weightSet = new Set();

for (let [weight, value] of arr) {
    const tempDp = [...dp]

    for (let w of [...weightSet]) {
        if (w+weight > m) continue;

        tempDp[weight+w] = Math.max(dp[weight+w], dp[w]+value);
        weightSet.add(weight+w)
    }

    if (weight <= m) {
        tempDp[weight] = Math.max(dp[weight], value);
        weightSet.add(weight);
    }

    dp = [...tempDp]
}

console.log(Math.max(...dp))