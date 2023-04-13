`
큰 수 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/42883
`
function solution(number, k) {
  // number을 배열로 만들고 뒤집은 다음
  // 하나씩 빼서 스택에 쌓은 뒤 스택에 마지막 값이 지금 값보다 작으면 스택의 값 제거 , 아니라면 스택에 push
  // 만약 끝까지 뺐는데 k가 남아있다면 스택에서 하나씩 pop
  const numArr = [...number].reverse();
  const stack = [];
  while (k > 0 && numArr.length > 0) {
    if (stack.length === 0) {
      stack.push(numArr.pop());
      continue;
    }
    if (stack[stack.length - 1] < numArr[numArr.length - 1]) {
      stack.pop();
      k--;
    } else {
      stack.push(numArr.pop());
    }
  }
  if (k > 0) {
    while (k > 0) {
      stack.pop();
      k--;
    }
  }
  return stack.join('') + numArr.reverse().join('');
}