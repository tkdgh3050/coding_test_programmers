`
불량 사용자
https://school.programmers.co.kr/learn/courses/30/lessons/64064
`
function solution(user_id, banned_id) {
  /*
  제외목록 = [
      [0,1],
      [0,2],
      [3,4],
      [3,4],
  ]
  dfs -> visited => 경로 하나씩 구하기
  */
  const banArr = [];
  for (let ban of banned_id) {
    banArr.push(getCanArr(ban, user_id));
  }
  const set = [];
  for (let i = 0; i < banArr[0].length; i++) {
    const queue = [];
    queue.push([banArr[0][i]]);
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.length === banArr.length) {
        set.push(node);
        continue;
      }
      banArr[node.length].forEach(v => {
        if (!node.includes(v)) {
          queue.push([...node, v]);
        }
      })
    }
  }
  return getUniqueCnt(set);

}

function getCanArr(ban, users) {
  const arr = [];
  const diffCnt = [...ban].filter(v => v === '*').length;
  let cnt = 0;
  for (let user of users) {
    if (user.length !== ban.length) continue;
    for (let i = 0; i < ban.length; i++) {
      if (ban[i] !== user[i]) cnt = cnt + 1;
      if (cnt > diffCnt) continue;
    }
    if (cnt === diffCnt) arr.push(user);
    cnt = 0;
  }
  return arr;
}

function getUniqueCnt(arr) {
  const set = new Set();
  for (let a of arr) {
    set.add(a.sort((a, b) => a.localeCompare(b)).join(''));
  }
  return set.size;
}