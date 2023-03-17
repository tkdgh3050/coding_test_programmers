`
최솟값 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12941
`
function solution(A, B) {
  let answer = 0; //가장 큰 값과 가장 작은 값을 곱해서 더하는 것이 최솟값이 되므로
  A.sort((a, b) => a - b);  //A는 오름차순
  B.sort((a, b) => b - a);  //B는 내림차순 으로 정렬해서
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];  //곱하고 더한다
  }
  return answer;
}