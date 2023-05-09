`
2020 KAKAO BLIND RECRUITMENT > 문자열 압축
https://school.programmers.co.kr/learn/courses/30/lessons/60057
`
function solution(s) {
  /*
  s의 길이를 반으로 자르고 (내림) -> len
  하나씩 줄이면서 확인 -> len - 1
  for (len--)
      let '문자열'
      let dup = 1
      for (한칸씩)
          if (값 === 문자열) {
              dup++
          } else {
              res += (len + if dup > 0 ? dup.toString().length : 0) 
              문자열 = 값
              dup = 1
          }
      res += (len + if dup > 0 ? dup.toString().length : 0) 
      res += 남은 문자열
      Math.min(res, best);
  */
  let best = s.length;
  for (let cutSize = parseInt(s.length / 2); cutSize > 0; cutSize--) {
      let result = 0;
      let cutString = s.slice(0, cutSize);
      let dupCnt = 1;
      for (let i = 1; i < parseInt(s.length / cutSize); i++) {
          let nowString = s.slice(i * cutSize, (i + 1) * cutSize);
          if (cutString === nowString) {
              dupCnt++;
          } else {
              result = result + cutSize + (dupCnt > 1 ? dupCnt.toString().length : 0);
              cutString = nowString;
              dupCnt = 1;
          }
      }
      result = result + cutSize + (dupCnt > 1 ? dupCnt.toString().length : 0);
      result += s.length % cutSize;
      best = Math.min(best, result);
  }
  return best;
}