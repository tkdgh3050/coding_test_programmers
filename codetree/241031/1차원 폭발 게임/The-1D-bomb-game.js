// m개 이상 연속인 것은 전부 터짐
// 터지면 아래로 내려오고
// 안터질 때까지 반복
// 최종적으로 남는 폭탄 수

// while문을 두고 플래그를 둔 다음에 터진 경우 한번 더 돌도록

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [bombCnt, limitCnt] = info.trim().split(' ').map(Number);
let bombList = data.map(Number);
let hasBoom = true;

while (hasBoom && bombList.length > 0) {
    // 하나씩 템프로 옮기면서 중복되는걸 다 pop;
    hasBoom = false;
    let tempList = [];
    let temp = [bombList[0]];
    for (let idx = 1; idx < bombList.length; idx++) {
        if (temp[temp.length-1] === bombList[idx]) {
            temp.push(bombList[idx]);
        } else {
            if (temp.length >= limitCnt) {
                hasBoom = true;
            } else {
                tempList = [...tempList, ...temp];
            }
            temp = [bombList[idx]];
        }
    }
    if (temp.length >= limitCnt) {
        hasBoom = true;
    }  else {
        tempList = [...tempList, ...temp];
    }
    bombList = [...tempList];
}

console.log(bombList.length)
for (let x of bombList) console.log(x)