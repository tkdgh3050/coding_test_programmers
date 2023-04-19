`
2020 카카오 인턴십 > 수식 최대화
https://school.programmers.co.kr/learn/courses/30/lessons/67257
`
function solution(expression) {
  let result = 0;
  const expArr = expression.match(/\d+|[\-\+\*]/g); // expression을 배열로 변경
  const opSet = new Set(expArr.filter((v, i) => i % 2 === 1)); // 홀수번째 있는 값들을 set에 넣음
  const opPer = permutation(Array.from(opSet), opSet.size); // 연산자를 가지고 순열을 구함
  let idx = 0; // shift를 진행할 인덱스 정의

  for (let per of opPer) { // 수식에서 가능한 순열들 돌면서
    let temp = [];
    let exp = [...expArr];
    for (let op of per) { // 하나의 순열에서 연산해야할 연산자 하나씩 뽑으면서
      while (idx < exp.length) { // shift 대신에 인덱스를 한 칸씩 이동하면서 진행
        if (exp[idx] === op) { // 우리가 연산해야 할 연산자라면 연산 진행
          let val = 0;
          switch (op) {
            case '-':
              val = parseInt(temp[temp.length - 1]) - parseInt(exp[++idx]);
              break;
            case '+':
              val = parseInt(temp[temp.length - 1]) + parseInt(exp[++idx]);
              break;
            case '*':
              val = parseInt(temp[temp.length - 1]) * parseInt(exp[++idx]);
              break;
          }
          temp[temp.length - 1] = val.toString();
        } else { // 아니라면 temp에 값 넣어줌
          temp.push(exp[idx]);
        }
        idx++;
      }
      idx = 0;
      exp = [...temp];
      temp = [];
    }
    result = Math.max(result, Math.abs(parseInt(exp[0]))); // 최대값 넣기
  }
  return result;
}

function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  })
  return res;
}