`
행렬 테두리 회전하기
https://school.programmers.co.kr/learn/courses/30/lessons/77485
`
function solution(rows, columns, queries) {
  // matrix 만들기
  let matrix = [];
  let val = 1;
  for (let row = 0; row < rows; row++) {
    const temp = [];
    for (let col = 0; col < columns; col++) {
      temp.push(val++);
    }
    matrix.push(temp);
  }

  const result = [];
  let min = 0;
  for (let query of queries) {
    [matrix, min] = getRotateMatrix(matrix, query);
    result.push(min);
  }
  return result;
}

function getRotateMatrix(matrix, query) { // 회전한 매트릭스와 가장작은 값 리턴하는 함수
  const valArr = [];
  let min = 0;
  const [up, left, down, right] = query.map(v => v - 1); // 인덱스 맞춰주기 위해 1 빼기
  valArr.push(matrix[up][left]); // 첫번째값 넣어두기
  min = valArr[0];

  for (let i = left + 1; i <= right; i++) { // 한칸 건너뛰 오른쪽으로
    valArr.push(matrix[up][i]); // 현재 값 valArr에 넣어두고
    min = Math.min(min, valArr[valArr.length - 1]); // 최소값 갱신하고
    matrix[up][i] = valArr[valArr.length - 2]; // matrix 값 변경
  }
  for (let i = up + 1; i <= down; i++) { // 한칸 건너뛰 아래쪽으로
    valArr.push(matrix[i][right]); // 현재 값 valArr에 넣어두고
    min = Math.min(min, valArr[valArr.length - 1]); // 최소값 갱신하고
    matrix[i][right] = valArr[valArr.length - 2]; // matrix 값 변경
  }
  for (let i = right - 1; i >= left; i--) { // 한칸 건너뛰 왼쪽으로
    valArr.push(matrix[down][i]); // 현재 값 valArr에 넣어두고
    min = Math.min(min, valArr[valArr.length - 1]); // 최소값 갱신하고
    matrix[down][i] = valArr[valArr.length - 2]; // matrix 값 변경
  }
  for (let i = down - 1; i >= up; i--) { // 한칸 건너뛰 왼쪽으로
    valArr.push(matrix[i][left]); // 현재 값 valArr에 넣어두고
    min = Math.min(min, valArr[valArr.length - 1]); // 최소값 갱신하고
    matrix[i][left] = valArr[valArr.length - 2]; // matrix 값 변경
  }
  return [matrix, min];
}