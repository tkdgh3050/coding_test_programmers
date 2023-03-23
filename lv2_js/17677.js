`
2018 KAKAO BLIND RECRUITMENT > [1차] 늎스 클러스터링
https://school.programmers.co.kr/learn/courses/30/lessons/17677
`
function solution(str1, str2) {
  const MULTIPLE = 65536;
  const arr1 = getLengthTwoChrArr(str1);
  const arr2 = getLengthTwoChrArr(str2);
  if (arr1.length === 0 && arr2.length === 0) return MULTIPLE;
  const sim = getSim(arr1, arr2);
  return parseInt(sim * MULTIPLE);
}

function getLengthTwoChrArr(str) {  // 문자열에서 두글자씩 뽑았을 때, 문자만 포함하고 있는 경우만 추출하는 함수
  const arr = [];
  for (let i = 0; i <= str.length - 2; i++) {
    const sub = str.substring(i, i + 2).toLowerCase();
    if (!sub.match(/([^a-z])/g)) {
      arr.push(sub);
    }
  }
  return arr;
}

function getSim(arr1, arr2) { //자카드 유사도 값 구하는 함수
  let dup = 0;
  let answer = arr1.length + arr2.length;
  arr1.forEach(v => { // A 배열에 있는 값이 B 배열에 있는 경우 중복으로 체크하고 B 배열의 값을 지운다
    if (arr2.includes(v)) {
      dup += 1;
      delete arr2[arr2.indexOf(v)];
    }
  })
  return dup / (answer - dup);
}