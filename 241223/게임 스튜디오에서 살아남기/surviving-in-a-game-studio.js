// T를 총 3번 /  B를 연속으로 3번
// n일 살아남기 위해 만들 수 있는 n자리 평가 문자열의 가짓수
const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const DIV_VAL = 10**9 + 7

let dp = Array.from({length: 3}, () => Array(3).fill(0));

const init = () => {
    dp[0][0] = 1;
    dp[1][0] = 1;
    dp[0][1] = 1;
}

const doAdd = () => {
    const tempDp = Array.from({length: 3}, () => Array(3).fill(0));
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (x === 0) {
                tempDp[x][y] = (tempDp[x][y]+ dp[x][y]) % DIV_VAL
                tempDp[x+1][y] = (tempDp[x+1][y]+ dp[x][y]) % DIV_VAL
                if (y !== 2) tempDp[x][y+1] = (tempDp[x][y+1]+ dp[x][y]) % DIV_VAL
            } else if (x === 1) {
                tempDp[x-1][y] = (tempDp[x-1][y]+ dp[x][y]) % DIV_VAL
                tempDp[x+1][y] =(tempDp[x+1][y] + dp[x][y]) % DIV_VAL
                if (y !== 2) tempDp[x-1][y+1] =(tempDp[x-1][y+1] + dp[x][y]) % DIV_VAL
            } else {
                tempDp[x-2][y] = (tempDp[x-2][y]+ dp[x][y]) % DIV_VAL
                if (y !== 2) tempDp[x-2][y+1] = (tempDp[x-2][y+1]+ dp[x][y]) % DIV_VAL
            }
        }
    }
    dp = tempDp
}

const sum = () => dp.reduce((a,c) => a + c.reduce((inA, inC) => inA + inC,0),0) % DIV_VAL;
const div = (tempDp) => tempDp.map((row) => row.map(val => val % DIV_VAL));

const operate = () => { 
    init();

    for (let cnt = 1; cnt <n; cnt++) {
        doAdd();
    }
}

operate();
console.log(sum())
