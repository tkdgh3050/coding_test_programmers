`
단속카메라
https://school.programmers.co.kr/learn/courses/30/lessons/42884
`
function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]); // 진출시점을 기준으로 오름차순 정렬
  const cam = [];
  for (let route of routes) {
    if (cam.length === 0) {
      cam.push(route);
      continue;
    }
    if (cam[cam.length - 1][1] >= route[0]) continue; // 지금 카메라가 설치된 지점보다 다음 차의 진입 시점이 전이라면 넘어가면 됨
    cam.push(route);  // 아니라면 지금 차량을 위해 진출시점에 카메라 설치 새로 하나 해야함
  }
  return cam.length;
}