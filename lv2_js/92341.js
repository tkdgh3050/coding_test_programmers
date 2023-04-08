`
2022 KAKAO BLIND RECRUITMENT > 주차 요금 계산
https://school.programmers.co.kr/learn/courses/30/lessons/92341
`
function solution(fees, records) {
  // 정보 나누기
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  // 차량정보 담을 Map 생성 {number: [시간], }
  const recordMap = new Map();
  const result = [];
  const END_TIME = '23:59';

  // for records
  // if has ? set [...기존, 시간] : set []
  for (let record of records) {
    const [time, car,] = record.split(' ');
    recordMap.has(car) ? recordMap.set(car, [...recordMap.get(car), time]) : recordMap.set(car, [time])
  }

  // for map
  // 총 시간 계산할 임시변수 = 0
  // if 짝수
  // 두개씩 시간계산해서 총 시간 더하기
  // 홀수
  // 마지막에 23:59 append 하고 총 시간 더하기
  // arr에 number: 총시간 으로 값 넣기
  for (let [key, record] of recordMap) {
    let tempTime = 0;
    if (record.length % 2 === 0) {
      tempTime = getFullTime(record);
    } else {
      tempTime = getFullTime([...record, END_TIME]);
    }
    // 이용시간이 기본 시간보다 적으면 기본요금 아니면 요금계산
    const totalFee = tempTime <= basicTime ? basicFee : basicFee + Math.ceil((tempTime - basicTime) / unitTime) * unitFee;
    result.push([key, totalFee]);
  }

  // arr에 key를 기준으로 오름차순 정렬
  result.sort((a, b) => a[0] - b[0]);
  // arr에 value 리턴
  return result.map(v => v[1]);
}

function getFullTime(arr) { // 전체 이용시간을 계산하는 함수
  let fullTime = 0;
  const timeToSec = (time) => { // 시간문자열을 초로 바꿔주는 함수
    const [hour, sec] = time.split(':');
    return parseInt(hour) * 60 + parseInt(sec);
  }

  for (let i = 0; i < arr.length; i = i + 2) {
    fullTime += timeToSec(arr[i + 1]) - timeToSec(arr[i]);
  }

  return fullTime;
}