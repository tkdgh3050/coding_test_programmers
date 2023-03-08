'''
예상 대진표
https://school.programmers.co.kr/learn/courses/30/lessons/12985
'''
from math import ceil
def solution(n,a,b):
  answer = 0
  while a != b:   # 대진이 반복될 때 값을 2로 나눈 값들의 올림 값들이 같아지면 둘은 동일한 곳에서 대진을 이루게 됨
    answer += 1
    a = ceil(a/2)
    b = ceil(b/2)
  return answer