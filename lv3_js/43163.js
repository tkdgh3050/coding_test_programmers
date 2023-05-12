`
단어 변환
https://school.programmers.co.kr/learn/courses/30/lessons/43163
`
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const graph = new Map();
  words.push(begin);
  for (let i = 0; i < words.length - 1; i++) { // 단어들을 노드로 만들어서 한글자씩 다른 경우를 연결해줌
    for (let j = i + 1; j < words.length; j++) {
      if (isOneDiff(words[i], words[j])) {
        graph.has(words[i]) ? graph.set(words[i], [...graph.get(words[i]), words[j]]) : graph.set(words[i], [words[j]]);
        graph.has(words[j]) ? graph.set(words[j], [...graph.get(words[j]), words[i]]) : graph.set(words[j], [words[i]]);
      }
    }
  }
  words.pop(begin);
  const visited = [begin];
  let cnt = 0;
  const q = [begin];
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      const last = graph.get(node).filter(v => !visited.includes(v));
      visited.push(...last);
      q.push(...last);
    }
    cnt = cnt + 1;
    if (q.includes(target)) return cnt;
  }
  return cnt;
}

function isOneDiff(a, b) { // 단어가 한 글자만 다른지 확인하는 함수
  let diffCnt = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diffCnt++;
    if (diffCnt > 1) return false;
  }
  return true;
}