`
이진 변환 반복하기
https://school.programmers.co.kr/learn/courses/30/lessons/70129
`
function solution(s) {
  let zeroCnt = 0;    //제거한 0 개수 합계
  let processCnt = 0; //과정 반복 횟수 합계
  while (parseInt(s, 2) > 1) { //s를 10진수로 변환한 값이 1이 될때 까지 반복
    const beforeLength = s.length;                            //0을 제외하기 전의 길이
    const leftLength = [...s].filter(v => v === '1').length;  //0을 제거한 뒤의 길이
    zeroCnt += (beforeLength - leftLength); //위 두 수를 빼서 제거한 0의 개수를 확인
    processCnt += 1;
    s = leftLength.toString(2); //남은 1의 개수를 2진수로 변환
  }
  return [processCnt, zeroCnt];
}