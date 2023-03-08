'''
점프와 순간 이동
https://school.programmers.co.kr/learn/courses/30/lessons/12980
'''
def solution(n):
  ans = 1
  while n != 1:
    if n % 2 == 0: # 두배씩 줄여나가다가 두배로 줄이지 못하는 부분에서는 1씩 빼주면 가장 효율적임
      n = n // 2
    else:
      n -= 1
      ans += 1
  return ans