const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const numberList = [1,2,3,4];

let count = 0;
let temp = [];

function checkBeauty(arr) {
    // 아름다운 수인지 확인하는 함수
    let idx = 0;
    while (idx < arr.length) {
        if (idx + arr[idx] > arr.length) return false;
        for (let x = idx; x < idx + arr[idx]; x++) {
            if (arr[x] !== arr[idx]) return false;
        }
        idx = idx + arr[idx];
    }
    return true;
}

function makeBeauty(level) {
    // 경우의 수를 모두 만들고 아름다운 수의 갯수를 카운팅해주는 함수
    if (level === n+1) {
        if(checkBeauty(temp)) count += 1;
    } else {
        for (let x = 0; x < numberList.length; x++) {
            temp.push(numberList[x]);
            makeBeauty(level+1);
            temp.pop();
        }
    }
}

makeBeauty(1);
console.log(count);