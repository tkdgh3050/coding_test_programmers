`
2019 KAKAO BLIND RECRUITMENT > 오픈채팅방
https://school.programmers.co.kr/learn/courses/30/lessons/42888
`
function solution(record) {
  // 결과용 - result
  // 아이디 - 닉네임 매핑 맵
  // in out arr[('Enter', 아이디), ('Leave', 아이디)]
  // CHANGE = Change, Enter, Leave
  const result = [];
  const idNicknameMap = new Map();
  const logArr = [];
  const [CHANGE, ENTER, LEAVE] = ['Change', 'Enter', 'Leave'];

  // record 돌면서 각 operation에 맞는 동작 진행
  // for record 
  // [operation]
  // if (change) map 
  // else if (enter) map, arr
  // else if (leave) arr
  for (let log of record) {
    const [operation, id, nickname] = log.split(' ');
    switch (operation) {
      case CHANGE:
        idNicknameMap.set(id, nickname);
        break;
      case ENTER:
        idNicknameMap.set(id, nickname);
        logArr.push([operation, id]);
        break;
      case LEAVE:
        logArr.push([operation, id]);
        break;
      default:
    }
  }

  // 등록된 로그를 돌면서 출력 메세지 담기
  // for arr
  // if (enter)
  // else if (leave)
  for (let log of logArr) {
    if (log[0] === ENTER) {
      result.push(`${idNicknameMap.get(log[1])}님이 들어왔습니다.`);
    } else if (log[0] === LEAVE) {
      result.push(`${idNicknameMap.get(log[1])}님이 나갔습니다.`);
    }
  }
  return result;
}