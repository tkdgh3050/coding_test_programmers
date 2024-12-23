const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.trim().split(' ').map(Number);

let dpMap = new Map();

for (let val of arr) {
    if(dpMap.size === 0) {
        dpMap.set(val, 1)
        dpMap.has(-val) ? dpMap.set(-val, dpMap.get(-val) + 1) : dpMap.set(-val, 1)
    } else {
        const tempMap = new Map();
        for (let dp of dpMap.keys()) {
            if (dp+val <= 20) {
                tempMap.has(dp+val) ? tempMap.set(dp+val, dpMap.get(dp) + tempMap.get(dp+val)) : tempMap.set(dp+val, dpMap.get(dp))
            } 
            if (dp-val >= -20) {
                tempMap.has(dp-val) ? tempMap.set(dp-val, dpMap.get(dp) + tempMap.get(dp-val)) : tempMap.set(dp-val, dpMap.get(dp))
            }
        }
        dpMap = tempMap;
    }
}

console.log(dpMap.has(m) ? dpMap.get(m) : 0)