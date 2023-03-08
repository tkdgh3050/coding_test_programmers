'''
구명보트
https://school.programmers.co.kr/learn/courses/30/lessons/42885
'''
from collections import deque
def solution(people, limit):
  d = deque(sorted(people)) # 정렬된 뒤 양쪽으로 수를 빼야하므로 deque 자료형 사용
  answer = 0
  while len(d) != 0:        # 배열에 값이 남아있지 않을 때 까지 반복
    if len(d) > 1 and d[0] + d[-1] <= limit:  # 만약 남은 수가 한개 이상이고 양쪽 수를 더했을 때 제한보다 작다면 두 수를 동시에 빼고
      d.popleft()
      d.pop()
    else:         # 아니라면 어차피 한명만 탈 수 있으므로 큰 수를 뺀다
      d.pop()
    answer += 1
  return answer