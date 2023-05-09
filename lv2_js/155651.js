`
호텔 대실
https://school.programmers.co.kr/learn/courses/30/lessons/155651
`
function solution(book_time) { // 시작시간을 오름차순으로 나열한 뒤에 순차적으로 가능한지 확인하면 됨
  // arr = [[{start, end}],[],[],[]]
  // book_time 을 start 시간 기준으로 정렬
  // 한개 넣기
  // for (book_time)
      // flag = true
      // for (arr)
          // if(arr last end < book_time start) push,  flag = false, break
      // if (flag) arr.push
  const rooms = [];
  book_time.sort((a,b) => a[0].localeCompare(b[0]));
  for (let book of book_time) {
      let [bookStart, bookEnd] = getAfterCleanMinTime(book);
      if (rooms.length === 0) {
          rooms.push(bookEnd);
          continue;
      }
      let newRoomNeed = true;
      for (let i = 0; i < rooms.length; i++) {
          if (rooms[i] <= bookStart) {
              rooms[i] = bookEnd;
              newRoomNeed = false;
              break;
          }
      }
      if (newRoomNeed) rooms.push(bookEnd);
  }
  return rooms.length;
}
// 시간을 받으면 10분 추가해서 분으로 리턴
function getAfterCleanMinTime(book) {
  const [startTime, endTime] = book.map(time => time.split(':'));
  const start = parseInt(startTime[0]) * 60 + parseInt(startTime[1]);
  const end = parseInt(endTime[0]) * 60 + parseInt(endTime[1]) + 10;
  return [start, end];
}