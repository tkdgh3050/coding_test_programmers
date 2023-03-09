'''
N개의 최소공배수
https://school.programmers.co.kr/learn/courses/30/lessons/12953
'''
from math import gcd
def solution(arr):
  answer = 1
  for i in arr:
    answer = answer * i // gcd(answer, i)   # 최대공약수를 이용해 최소공배수를 배열 안의 값들을 하나씩 빼면서 계산
  return answer