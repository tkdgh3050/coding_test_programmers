`
JadenCase 문자열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12951
`
function solution(s) {
  const arr = s.toLowerCase().split(' ')  //모든 문자를 소문자로 변경한 뒤 공백을 기준으로 나눠주고
    .map(v => v.length > 1 ? v[0].toUpperCase() + v.slice(1,) : v.toUpperCase()); // 나눈 값이 1글자라면 대문자로 변경하고 2글자부터는 첫번째만 대문자로 변경하고 나머지 글자는 이어 붙인다
  return arr.join(' ');
}