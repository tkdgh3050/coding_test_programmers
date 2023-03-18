`
짝지어 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/12973
`
function solution(s) {
  const stack = [];
  const sList = [...s];
  for (chr of sList) { //s의 문자를 하나씩 받아오면서
    if (stack.length > 0 && stack[stack.length - 1] === chr) { //만약 stack에 값이 있다면 마지막에 넣은 값과 지금 들어온 문자가 같은지 확인
      stack.pop() //같다면 stack의 값을 빼고
    } else {
      stack.push(chr); //다르거나 스택에 값이 없다면 stack에 push
    }
  }

  return stack.length === 0 ? 1 : 0;  //stack에 값이 남아있다면 짝지어지지 못하는 것
}