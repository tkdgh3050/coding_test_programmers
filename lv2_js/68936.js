`
쿼드압축 후 개수 세기
https://school.programmers.co.kr/learn/courses/30/lessons/68936
`
function solution(arr) {
  // bfs 방식
  const stack = [arr]; // 쪼개 나가야할 행렬 넣어두는 스택
  let zero = 0;
  let one = 0;

  // while (stack에 값이 있을 때 까지)
  //     stack에서 pop
  //     만약 길이가 1x1이면 리절트에 넣기
  //     압축이 가능한지 확인
  //         가능하다면 그 값을 리절트에 +
  //         불가능하다면 4개로 쪼개서 스택에 쌓기
  while (stack.length > 0) {
    const val = stack.pop();
    const size = val.length;
    if (size === 1) {
      val[0][0] === 0 ? zero++ : one++;
      continue;
    }
    if (isQuad(val)) { // 압축 가능
      val[0][0] === 0 ? zero++ : one++;
    } else {
      const upRow = val.slice(0, size / 2);
      const downRow = val.slice(size / 2);
      stack.push(upRow.map(v => v.slice(0, size / 2)));
      stack.push(upRow.map(v => v.slice(size / 2)));
      stack.push(downRow.map(v => v.slice(0, size / 2)));
      stack.push(downRow.map(v => v.slice(size / 2)));
    }
  }
  return [zero, one];
}

function isQuad(arr) { // 모든 값이 같은지 확인
  const size = arr.length;
  const value = arr[0][0];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i][j] !== value) return false;
    }
  }
  return true;
}