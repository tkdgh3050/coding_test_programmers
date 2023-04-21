`
연속된 부분 수열의 합
https://school.programmers.co.kr/learn/courses/30/lessons/178870
`
function solution(sequence, k) { // 투 포인터로 풀이
  // 인덱스와 길이 담은 객체
  let result = null;
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  while (left < sequence.length && right < sequence.length) {
    if (sum === k) { // 합이 k와 같다면
      if (!result) {  // result의 값이 없는 경우
        result = { left, right }; // 값을 대입하고
      } else { // result의 값이 있는 경우
        if (result.right - result.left > right - left) {  // 기존 것보다 범위가 작다면 갱신
          result = { left, right };
        }
      }
      sum += sequence[++right]; // 오른쪽 포인터를 한 칸 이동해서 계속 탐색할 수 있도록 진행
    }
    if (sum < k) {  // 만약 합이 k 보다 작다면
      sum += sequence[++right]; // 오른쪽 포인터를 오른쪽으로 옮기고 합에 더해주고
    } else if (sum > k) { //만약 합이 k 보다 크다면
      sum -= sequence[left++];  // 왼쪽 포인터 값을 합에서 빼주고 오른쪽으로 이동한다.
    }
  }
  return [result.left, result.right];
}