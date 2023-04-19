`
2018 KAKAO BLIND RECRUITMENT > [3차] 방금그곡
https://school.programmers.co.kr/learn/courses/30/lessons/17683
`
function solution(m, musicinfos) {
  const infos = [];
  let result = null;
  const convertM = convertSharp(m);

  for (let music of musicinfos) {  // 음악정보를 객체로 분리 - 길이정보 변경, 길이정보만큼 악보 변경함수 실행
    let [before, after, title, melody] = music.split(',');
    const duration = getDuration(before, after);
    melody = getFullMelody(duration, melody);
    infos.push({ duration, title, melody, before });
  }

  for (let info of infos) {
    if (info.melody.includes(convertM)) { // 악보.includes m
      if (!result) { // if result null
        result = info; //result = info continue
        continue;
      }
      if (result.duration < info.duration) { // if result 길이 < 길이
        result = info; // result 변경
        continue;
      }
      if (result.duration === info.duration) { // if result 길이 === 길이
        if (result.before > info.before) {  // 먼저 재생된 곡으로 변경
          result = info;
        }
      }
    }
  }
  return result ? result.title : "(None)";
}

function getDuration(before, after) { // 시간을 받아서 재생시간 반환
  const [bHour, bMin] = before.split(':');
  const [aHour, aMin] = after.split(':');
  return (parseInt(aHour) * 60 + parseInt(aMin)) - (parseInt(bHour) * 60 + parseInt(bMin));
}

function convertSharp(melody) { // #이 있는 음을 소문자로 변경해주는 함수
  const arr = [];
  for (let m of melody) {
    if (m === '#') {
      arr[arr.length - 1] = arr[arr.length - 1].toLowerCase();
    } else {
      arr.push(m);
    }
  }
  return arr.join('');
}

function getFullMelody(duration, melody) { // 재생시간을 기반으로 전체음을 반환해주는 함수
  const arr = convertSharp(melody);
  const full = [];

  for (let i = 0; i < duration; i++) {
    full.push(arr[i % arr.length]);
  }
  return full.join('');
}