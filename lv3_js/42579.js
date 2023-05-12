`
베스트앨범
https://school.programmers.co.kr/learn/courses/30/lessons/42579
`
function solution(genres, plays) {
  /* 아래와 같은 형태로 Map에 저장
  {
    '장르' : {
      노래 : [[0,400],[1,600]], 
      전체 플레이 수: 300
    }
  }
  */
  const answer = [];
  const map = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (map.has(genres[i])) { // 이미 존재하는 경우 
      const val = map.get(genres[i]);
      val.song = [...val.song, [i, plays[i]]];
      val.total += plays[i];
      map.set(genres[i], val);
    } else { // 새로운 장르인 경우
      map.set(genres[i], {
        song: [[i, plays[i]]],
        total: plays[i]
      })
    }
  }
  const arrs = Array.from(map).sort((a, b) => b[1].total - a[1].total); // 총 재생시간으로 내림차순 정렬
  for (let arr of arrs) {
    let song = arr[1].song.sort((a, b) => b[1] - a[1]); // 노래들의 재생시간으로 내림차순 정렬
    song = song.slice(0, 2); // 2개만 뽑아서
    song.forEach(v => answer.push(v[0])); // 정답에 넣어줌
  }
  return answer;
}