`
연속 부분 수열 합의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/131701
`
function solution(elements) {
  const answerSet = new Set();
  const doubleElements = [...elements, ...elements];      // 순환으로 최대 2개의 배열까지만 확인하므로 배열을 두배로 만듬
  for (let len = 1; len <= elements.length; len++) {      // 1개부터 배열의 길이까지 원소의 합을 구함
    for (let i = 0; i < doubleElements.length - len; i++) {   // 합을 구할 인덱스 반복문
      answerSet.add(doubleElements.slice(i, i + len).reduce((a, c) => a + c, 0));  // 집합에다가 해당 수열의 합을 넣어줌
    }
  }
  return answerSet.size;
}