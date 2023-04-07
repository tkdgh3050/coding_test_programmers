`
피로도
https://school.programmers.co.kr/learn/courses/30/lessons/87946
`
function solution(k, dungeons) {
  const caseList = getPermutations(dungeons); // 모든 순열을 받아온 뒤
  let maxCnt = 0;
  for (let list of caseList) {  // 순열을 하나씩 돌면서
    let tempK = k;
    let temp = 0;
    for (let i = 0; i < list.length; i++) { // 각 경우의 수가 몇번 방문할 수 있는지 계산하고
      if (list[i][0] <= tempK) {
        tempK -= list[i][1];
        temp++;
      } else {
        break;
      }
    }
    maxCnt = Math.max(maxCnt, temp); // 최대값을 갱신한다
  }
  return maxCnt
}

function getPermutations(arr) { // 모든 순열을 리턴해주는 함수
  const permList = [];
  const search = (i, list) => {
    if (i === list.length - 1) {
      permList.push([...list]);
    }
    for (let j = i; j < list.length; j++) {
      [list[i], list[j]] = [list[j], list[i]];
      search(i + 1, list);
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  search(0, arr);
  return permList;
}