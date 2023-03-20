`
2019 카카오 개발자 겨울 인턴십 > 튜플
https://school.programmers.co.kr/learn/courses/30/lessons/64065
`
// 처음에는 배열로 바꾸는 것을 아래와 같이 했는데, string 형식을 보니 JSON 형식으로 변환하면 편하기 풀 수 있었음
function convertSortedArr(s) {
  return s.replace('{{', '').split('},{').map(v => v.split(',')).map(x => x.map(y => parseInt(y))).sort((a, b) => a.length - b.length)
}

function solution(s) {
  const answerSet = new Set();
  const sortedArr = convertSortedArr(s);
  for (arr of sortedArr) {
    for (num of arr) { //길이가 작은 배열부터 차례로 set에 값을 넣으면 답을 찾을 수 있음
      answerSet.add(num);
    }
  }
  return Array.from(answerSet);
}

//----------------------- 변경한 것은 아래와 같음
function convertSortedArr(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort((a, b) => a.length - b.length);
}
