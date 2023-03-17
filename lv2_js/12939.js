`
최댓값과 최솟값
https://school.programmers.co.kr/learn/courses/30/lessons/12939
`
function solution(s) {
  const arr = s.split(' '); //공백으로 값이 구분되어 있기 때문에 split 해주고
  return Math.min(...arr) + ' ' + Math.max(...arr); //최댓값과 최솟값을 구한다
}