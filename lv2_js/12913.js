`
땅따먹기
https://school.programmers.co.kr/learn/courses/30/lessons/12913
`
function solution(land) {
  let dp = land[0]; //해당 열의 최댓값을 계속해서 기록해두는 배열
  for (let i = 1; i < land.length; i++) {
    const temp = [...dp]; // 최댓값 갱신을 위한 임시 배열
    for (let j = 0; j < land[0].length; j++) {
      temp[j] = land[i][j] + Math.max(...dp.filter((v, idx) => idx !== j)); // 다음행에서 이전 행의 최댓값 참조시 이전 행의 해당 열만 제외한 값 중에 최댓값을 가져와서 계산한다
    }
    dp = [...temp]; // 임시배열로 최댓값 갱신
  }
  return Math.max(...dp);
}
