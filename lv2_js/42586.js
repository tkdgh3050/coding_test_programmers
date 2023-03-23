`
기능개발
https://school.programmers.co.kr/learn/courses/30/lessons/42586
`
function solution(progresses, speeds) {
  const answer = [];
  let finishDay = progresses.map((v, i) => {       // 작업이 끝나기 위해 걸리는 날짜를 계산
    return Math.ceil((100 - v) / speeds[i]);
  });
  while (finishDay.length > 0) {
    const doneDay = finishDay[0];               // 날짜를 순차적으로 하나씩 가져오면서
    const deployIdx = [0];                      // 배포하는 날 다음 배포건도 포함해서 배포 가능한지 인덱스를 넣는 배열 선언
    for (let i = 1; i < finishDay.length; i++) {
      if (finishDay[i] <= doneDay) {
        deployIdx.push(i);
      } else {
        break;                              // 앞에 있는 배포 건이 배포되지 않으면 뒤에 있는 배포건은 배포할 수 없으므로 다음 배포건이 작은 순간 break
      }
    }
    finishDay = finishDay.filter((v, i) => !(deployIdx.includes(i)));  // 배포 건은 제외시켜주고
    answer.push(deployIdx.length);              // 배포 건 수 기록
  }
  return answer;
}