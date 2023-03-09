'''
멀리 뛰기
https://school.programmers.co.kr/learn/courses/30/lessons/12914
'''
from math import comb
def solution(n):
  answer = 0
  for i in range(0, n // 2 + 1): 
    answer += comb(n-i, i)     #1 두개가 2 하나가 되고 해당 수 묶음을 중복이 되지 않게 뽑아서 순서를 나열하면 되므로 조합을 계속해서 더하는 값이 정답 
  return answer % 1234567