`
2022 KAKAO TECH INTERNSHIP > 두 큐 합 같게 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/118667
`
function solution(queue1, queue2) {
  const maxCnt = queue1.length * 3; // 최대로 움직일 수 있는 횟수는 한 배열에서 모든값을 뺀 뒤 다른 배열에서 모든 값을 빼는 경우임
  let cnt = 0;
  let q1Sum = queue1.reduce((a, c) => a + c, 0);
  const totalSum = q1Sum + queue2.reduce((a, c) => a + c, 0);
  if (totalSum % 2 !== 0) return -1
  const halfSum = totalSum / 2;
  let q1Idx = 0; // js 의 shift의 경우 시간복잡도가 O(n) 이므로 이를 대신해 각각의 인덱스를 활용하여 구함
  let q2Idx = 0;

  while (cnt <= maxCnt) {
    if (halfSum === q1Sum) return cnt; // 만약 절반값이 1의 값과 같은 경우 리턴
    if (halfSum > q1Sum) { // 1의 배열이 절반값보다 작은 경우
      const val = queue2[q2Idx]; // 2의 배열에서 shift 해서 1에 push 하고 1의 합 값에 더해줌
      q1Sum += val;
      queue1.push(val);
      q2Idx++;
    } else { // 1의 배열이 절반값보다 큰 경우
      const val = queue1[q1Idx]; // 1의 배열에서 shift 해서 2에 push 하고 1의 합 값에서 빼줌
      q1Sum -= val;
      queue2.push(val);
      q1Idx++;
    }
    cnt++; // 횟수++
  }

  return -1;
}