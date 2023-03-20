`
2018 KAKAO BLIND RECRUITMENT > [1차] 캐시
https://school.programmers.co.kr/learn/courses/30/lessons/17680
`
function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];                                     // 캐시를 보관할 리스트
  if (cacheSize === 0) return cities.length * 5;      // cache크기가 0이라면 아래 로직을 탈 필요 없음
  for (city of cities) {
    city = city.toLowerCase();
    const cacheIdx = cache.indexOf(city);             // 캐시에 값이 존재하는지 확인
    if (cacheIdx >= 0) {                              // 존재한다면
      cache = cache.filter(v => v !== city);          // 해당 값을 빼고
      cache.push(city);                               // 맨 뒤에 넣어준다 - LRU 정책때문
      answer += 1;
      continue;
    }
    if (cache.length < cacheSize) {                   // 캐시에 값이 없는데 캐시에 들어가 있는 값이 캐시크기보다 작다면
      cache.push(city);                               // 그냥 값 넣고
      answer += 5;
    } else {
      cache.shift();                                  // 캐시 크기를 초과했다면 맨 앞에 값을 빼고 넣어줌 - LRU
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}