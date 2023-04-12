`
뒤에 있는 큰 수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/154539
`
function solution(numbers) {
  const answer = Array(numbers.length).fill(-1); // 정답을 위한 dp 미리 만들어 두기
  let stack = []; // 업데이트가 필요한 인덱스 쌓아두는 스택
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) { // 업데이트할 스택이 있고 그 값들이 현재 값보다 작으면
      answer[stack.pop()] = numbers[i]; // 업데이트하면서 스택에서는 제외 시키기
    }
    stack.push(i);  // 지금 값은 차후 업데이트를 위해 넣어두기
  }
  return answer;
}