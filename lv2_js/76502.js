`
괄호 회전하기
https://school.programmers.co.kr/learn/courses/30/lessons/76502
`
function solution(s) {
  let answer = 0;
  const arr = [...s];
  for (let i = 0; i < s.length; i++) {
    arr.unshift(arr.pop()); //arr 에서 하나씩 오른쪽으로 회전
    if (isRight(arr)) {
      answer += 1;
    }
  }
  return answer;
}

function isRight(arr) { //괄호가 올바르게 배치되어 있는지 확인하는 함수
  const mapping = new Map();
  mapping.set(']', '[');
  mapping.set('}', '{');
  mapping.set(')', '(');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (mapping.has(arr[i])) { // 우괄호 차례인 경우
      if (stack.length > 0 && stack[stack.length - 1] === mapping.get(arr[i])) { // 짝이 맞는 경우
        stack.pop(); //좌괄호를 빼고
      } else {
        return false; //아니라면 짝이 맞지 않으므로 false 
      }
    } else {
      stack.push(arr[i]); // 좌괄호는 무조건 push
    }
  }
  return stack.length === 0 ? true : false; //스택에 값이 남아있으면 괄호가 맞지 않는 것
}