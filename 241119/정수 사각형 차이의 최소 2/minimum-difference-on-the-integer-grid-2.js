// 1,1 => n,n
// 거쳐간 숫자 중 최댓값 - 최솟값 을 최소로 만드는 프로그램
// dp로 해서 최대 최소값 유지해 나가면 됨

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(n).fill([0,0]));

const init = () => {
    dp[0][0] = [arr[0][0], arr[0][0]];

    for (let idx = 1; idx < n; idx++) {
        dp[idx][0] = changeLimit(...dp[idx-1][0], arr[idx][0]);
        dp[0][idx] = changeLimit(...dp[0][idx-1], arr[0][idx]);
    }
}

const changeLimit = (big, small, now) => {
    if (now > big) {
        return [now, small]
    } else if (small > now) {
        return [big, now]
    } else {
        return [big, small]
    }
}

const getLimit = (big1, small1, big2, small2, now) => {
    const one = changeLimit(big1,small1,now);
    const two = changeLimit(big2, small2, now);
    if (getDiff(one) > getDiff(two)) {
        return two;
    } else {
        return one;
    }
}

const getDiff = ([big, small]) => big - small

const findMin = () => {
    for (let x = 1; x < n; x++) {
        for (let y = 1; y < n; y++) {
            dp[x][y] = getLimit(...dp[x-1][y], ...dp[x][y-1], arr[x][y])
        }
    }
}

init();
findMin();
console.log(getDiff(dp[n-1][n-1]))