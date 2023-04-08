`
2018 KAKAO BLIND RECRUITMENT > [3차] 파일명 정렬
https://school.programmers.co.kr/learn/courses/30/lessons/17686
`
function solution(files) {
  // number = .match(/[0-9]+/)[0]
  // head = .split(number)[0].toLowerCase()
  const arr = [];
  for (let i = 0; i < files.length; i++) {
    const number = files[i].match(/[0-9]+/)[0];
    const head = files[i].split(number)[0].toLowerCase();
    arr.push([head, parseInt(number), i]);
  }
  arr.sort((a, b) => (a[0].localeCompare(b[0])) || (a[1] - b[1]) || (a[2] - b[2])); // head, number, index 순으로 오름차순 정렬
  return arr.map(v => files[v[2]]);
}