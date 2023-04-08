`
2018 KAKAO BLIND RECRUITMENT > [3차] n진수 게임
https://school.programmers.co.kr/learn/courses/30/lessons/17687
`
function solution(n, t, m, p) {
  // 정답을 위한 배열 하나 추가
  // 문자열 빈칸 하나 두고 추가
  // 숫자 인덱스 = 0
  const answer = [];
  let allNumber = ' '; // 차후 인덱싱 하기 편하도록 0번째에 빈칸 추가
  let number = 0;

  // while 문자열 길이 <= t
  // 숫자 인덱스를 차례대로 n진법으로 바꾼 뒤 문자열에 추가
  while (allNumber.length <= t * m + p) {
    allNumber += number.toString(n).toUpperCase();
    number++;
  }

  // for t 만큼 정답 배열에 (t)*m + p 문자열을 추가
  for (let i = 0; i < t; i++) {
    answer.push(allNumber[i * m + p]);
  }
  return answer.join('');
}