// 카드게임
// 2명이 플레이
// 각자 자연수 적히 카드 가지고 시작

// 둘 중 하나 선택 (카드는 쉬프트 해서 진행)
    // 대결
        // 카드 비교해서 진사람이 본인 카드 숫자만큼 점수획득
        // 작은 사람 카드 버림
        // 같은 점수 시 둘다 버림
    // 버리기
        // 둘다 버림
// 한쪽이 카드 모두 소진 시 종료
// 얻은 점수 합으로 최종결과
// 내 최고 점수 출력
// dfs

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const arr1 = arr[0];
const arr2 = arr[1];

let maxScore = 0;

function DFS(idx1, idx2, score) {
    if (idx1 >= n || idx2 >= n) {
        maxScore = Math.max(maxScore, score);
    } else {
        // 싸우기
        if (arr1[idx1] > arr2[idx2]) {
            DFS(idx1, idx2+1, score + arr2[idx2])
        } else if (arr1[idx1] < arr2[idx2]) {
            DFS(idx1+1, idx2, score);
        } 
        // 버리기
        DFS(idx1+1, idx2+1, score);
    }
}

DFS(0,0,0)

console.log(maxScore)