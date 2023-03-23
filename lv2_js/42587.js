`
프린터
https://school.programmers.co.kr/learn/courses/30/lessons/42587
`
function solution(priorities, location) {
  const idxArr = Array(priorities.length).fill(0).map((v, i) => v + i); // 문서에 고유값 부여
  const printOrderArr = []; //프린팅 순서를 넣기 위한 배열

  while (idxArr.length > 0) {
    let maxIdx = 0;
    priorities.reduce((a, c, i) => {
      if (a < c) {
        maxIdx = i;
        return c;
      } else {
        return a;
      }
    }, priorities[0]);  //큰 값이 있는 인덱스를 찾기 위한 반복문
    for (let i = 0; i < maxIdx; i++) {  //큰 값이 있는 인덱스 앞에 모든 숫자 차례대로 뒤로 보냄
      priorities.push(priorities.shift());
      idxArr.push(idxArr.shift());
    }
    priorities.shift();
    const printIdx = idxArr.shift();
    printOrderArr.push(printIdx);
    if (printIdx === location) break; // 원하는 location 값이 출력될 경우 while문을 멈춤
  }
  return printOrderArr.length;  // 원하는 배열에서 멈췄기 때문에 지금 프린팅 순서에 들어있는 길이가 출력 순서임
}