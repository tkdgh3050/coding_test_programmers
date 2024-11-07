// 길이가 n인 수열
// 4,5,6 으로만 구성
// 인접한 두개의 연속 부분수열이 동일하면 안됨
// 가장 앞선 수열을 출력
// dfs 로 수열 만들고 수열 1~n-1 까지 가능한지 쭉 확인하는 함수 하나
// flag 하나 둬서 발견하면 다 리턴시켜버리기

const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let answer = '';
let flag = false;
const DFS = (level, now, arr) => {
    if (flag) return;
    if (level === n) {
        if (checkAble(arr)) {
            answer = arr.join('')
            flag = true;
        }
    } else {
        for (let idx = 4; idx <= 6; idx++) {
            if (idx === now) continue;
            DFS(level+1, idx, [...arr, idx])
        }
    }
}

const checkAble = (arr) => {
    if (arr.length === 1) return true;
    for (let len = 2; len <= parseInt(arr.length /2); len++) {
        for (let idx = 0; idx <= arr.length - len * 2; idx++) {
            if(arr.slice(idx, idx+len).join('') === arr.slice(idx+len, idx+len*2).join('')) return false;
        }
    }
    return true
}

DFS(0, 0, [])
console.log(answer)