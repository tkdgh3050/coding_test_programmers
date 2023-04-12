`
다리를 지나는 트럭
https://school.programmers.co.kr/learn/courses/30/lessons/42583
`
function solution(bridge_length, weight, truck_weights) {
  const queue = Array(bridge_length - 1).fill(0); // 다리 길이-1 만큼 0이 들어간 큐 만들기
  const first = truck_weights.shift();
  queue.push(first); // 맨 마지막 트럭 하나 push
  let bridgeWeight = first; // 큐에 들어있는 무게 합
  let time = 1; // 시간 = 1;

  while (bridgeWeight > 0) { // 다리 위에 아무 트럭도 없을 때까지 반복
    const outTruck = queue.shift(); // 큐 shift() 하고 무게 합 빼기
    bridgeWeight -= outTruck;
    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) { // 다음 트럭이 존재하고 && 큐 무게와 다음 트럭 합친 값이 weight을 안넘으면
      const inTruck = truck_weights.shift(); // 트럭 하나 추가
      queue.push(inTruck);
      bridgeWeight += inTruck;
    } else { // 아니면 0 추가
      queue.push(0);
    }
    time++;  // 시간++;
  }
  return time;
}