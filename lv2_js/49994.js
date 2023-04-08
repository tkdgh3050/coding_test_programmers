`
방문 길이
https://school.programmers.co.kr/learn/courses/30/lessons/49994
`
function solution(dirs) {
  const pathSet = new Set(); // 방문한 길을 기록해두는 집합
  const dirMap = {
    'U': [0, 1],
    'D': [0, -1],
    'R': [1, 0],
    'L': [-1, 0]
  };
  const range = { 'low': -5, 'high': 5 };
  let player = [0, 0]; //플레이어에 현재 위치

  // for dirs
  //before = player
  //after = player + dirMap
  // if after 범위 밖 continue
  // 안쪽이면 pathSet.add('before+after'), player = after
  for (let dir of dirs) {
    const before = player;
    const after = [player[0] + dirMap[dir][0], player[1] + dirMap[dir][1]];
    if (after[0] < range.low ||
      after[0] > range.high ||
      after[1] < range.low ||
      after[1] > range.high) continue;  //범위를 벗어난다면 continue
    pathSet.add(getPath(before, after));
    player = after;
  }
  return pathSet.size
}

function getPath(before, after) { // after 에서 before 를 가나 before 에서 after를 가나 같은 길이므로 통일하기 위해 축별로 오름차순 정렬
  const xString = [before[0], after[0]].sort((a, b) => a - b).join('');
  const yString = [before[1], after[1]].sort((a, b) => a - b).join('');
  return xString + yString;
}