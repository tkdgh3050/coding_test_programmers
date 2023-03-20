`
행렬의 곱셈
https://school.programmers.co.kr/learn/courses/30/lessons/12949
`
function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) { // 앞 행렬의 행을 가져오고
    let tempArr = [];
    for (let j = 0; j < arr2[0].length; j++) { // 뒤 행렬의 열을 가져오고
      let temp = 0;
      for (let k = 0; k < arr1[0].length; k++) { // 가져온 값을 곱해서 더해주는 작업
        temp += arr1[i][k] * arr2[k][j];
      }
      tempArr.push(temp);
    }
    answer.push(tempArr);
  }
  return answer;
}
