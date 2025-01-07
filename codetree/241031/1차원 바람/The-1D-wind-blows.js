// n*m건물 바람 q번
// 특정 행의 모든 값을 왼쪽 혹은 오른쪽으로 밀어버림
// 특정 행 한칸 밀래면 위아래 행에 영향 줌
// 위아래 행 중에 같은 열에 같은 숫자가 존재하는 경우 밀린 방향에 반대방향으로 한칸씩 밀림
// 전파를 계속 진행함 다음 행은 반대방향으로

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = info.trim().split(' ').map(Number);
const building = data.slice(0,n).map(v => v.trim().split(' ').map(Number));
const windArr = data.slice(n).map(v => v.trim().split(' '))

const doWind = (wind, line) => {
    if (wind === 'L') {
        building[line] = [...building[line].slice(-1), ...building[line].slice(0, -1)]
    } else {
        building[line] = [...building[line].slice(1), building[line][0]]
    } 
}

const changeWind = (wind) => wind === 'L' ? 'R' : 'L'

const doWave = (waveWind, waveLine, grad) => {
    let isCan = false;
    const direction = grad === 'U' ? 1 : -1

    for (let idx = 0; idx < m; idx++) {
        if (building[waveLine][idx] === building[waveLine+direction][idx]) {
            isCan = true;
            break;
        }
    }

    if (isCan) {
        doWind(waveWind, waveLine);
        return [true, waveWind, waveLine];
    }
    return [false]
}

for (let windCnt = 0; windCnt < q; windCnt++) { // 바람 횟수
    //첫번째 라인 변동 수행
    
    const wind = windArr[windCnt][1];
    const line = Number(windArr[windCnt][0]) - 1;
    doWind(wind, line);

    // 위아래 전파하는 while문
    let isWaveUp = true;
    let upInfo = [changeWind(wind), line-1]
    let isWaveDown = true;
    let downInfo = [changeWind(wind), line+1]
    while (isWaveUp || isWaveDown) {
        if (isWaveUp && upInfo[1] >= 0) {
            const info = doWave(upInfo[0], upInfo[1], 'U');
            if (info[0]) upInfo = [changeWind(info[1]), info[2] - 1];
            else isWaveUp = false;
        } else {
            isWaveUp = false;
        }
        if (isWaveDown && downInfo[1] < n) {
            const info = doWave(downInfo[0], downInfo[1], 'D');
            if (info[0]) downInfo = [changeWind(info[1]), info[2] + 1];
            else isWaveDown = false;
        } else {
            isWaveDown = false;
        }
    }
}

building.forEach(row => console.log(...row))