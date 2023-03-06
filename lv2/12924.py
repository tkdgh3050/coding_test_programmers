'''
숫자의 표현
https://school.programmers.co.kr/learn/courses/30/lessons/12924
'''
def solution(n):
  mid = n // 2
  cnt = 1
  for start in range(1, mid+1):
    for end in range(start, mid+2):
      sumVal = sum(list(range(start, end+1)))
      if sumVal == n:
        cnt += 1
      if sumVal > n:
        break
  return cnt