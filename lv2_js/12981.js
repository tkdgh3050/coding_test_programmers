`
영어 끝말잇기
https://school.programmers.co.kr/learn/courses/30/lessons/12981
`
function solution(n, words) {
  let lastIdx = 0;
  let beforeWord = words[0];    // 처음 시작 단어를 이전 단어로 설정
  const wordSet = new Set([beforeWord]);  // 단어들이 언급되었는지 확인하기 위한 set
  for (let i = 1; i < words.length; i++) {
    if (wordSet.has(words[i]) || beforeWord.substring(beforeWord.length - 1) !== words[i].substring(0, 1)) { // 이미 언급되었거나 끝말이 이어진게 아니라면 멈춤
      lastIdx = i;
      break;
    }
    beforeWord = words[i];
    wordSet.add(words[i]);
  }

  return lastIdx === 0 ? [0, 0] : [lastIdx % n + 1, parseInt(lastIdx / n + 1)];
}