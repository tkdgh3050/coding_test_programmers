`
2018 KAKAO BLIND RECRUITMENT > [3차] 압축
https://school.programmers.co.kr/learn/courses/30/lessons/17684
`
function solution(msg) {
  // 투포인터 사용, w: 현재입력, c: 다음 글자 이동용
  // 색인번호를 가지는 Map 생성
  const answer = [];
  let w = 0;
  let c = 0;
  const wordMap = new Map();
  for (let i = 0; i < 26; i++) {
    wordMap.set(String.fromCharCode(65 + i), i + 1);
  }

  // while w < msg.length
  // c = w
  // while c < msg.length
  // w~c 가 Map에 있는 경우 -> c+1
  // w~c 가 Map에 없는 경우 break
  // w~c 을 배열에 넣고
  // w~c+1 를 사전에 추가
  // w = c
  while (w < msg.length) {
    c = w;
    while (c < msg.length) {
      if (wordMap.has(msg.slice(w, c + 1))) {
        c++;
      } else {
        break;
      }
    }
    answer.push(wordMap.get(msg.slice(w, c)));
    if (w !== c) wordMap.set(msg.slice(w, c + 1), wordMap.size + 1);
    w = c;
  }
  return answer
}