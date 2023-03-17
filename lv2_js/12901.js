`
올바른 괄호
https://school.programmers.co.kr/learn/courses/30/lessons/12901
`
function solution(s) {
  let stack = [];   //값을 하나씩 빼서 스택에 쌓는 용도
  for (chr of s) {
    if (chr === ')') {  //우괄호가 나오면 스택에 좌괄하고 있는지 확인하고 없다면 올바른 괄호가 되지 않으므로 false return
      if (stack.length === 0) return false;
      stack.pop();    //있다면 좌괄호 하나 pop
    } else {
      stack.push(chr);  //좌괄호는 스택에 쌓는다
    }
  }
  return stack.length === 0 ? true : false;
}