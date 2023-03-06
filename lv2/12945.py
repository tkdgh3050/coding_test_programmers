'''
피보나치 수
https://school.programmers.co.kr/learn/courses/30/lessons/12945
'''
d = [0] * 100001
def fib(n):
  if n == 1 or n==2:
    return 1
  if d[n] != 0:
    return d[n]
  d[n] = fib(n-2) + fib(n-1)
  return d[n]
for i in range(1000, 100001, 1000):
  fib(i)
def solution(n):
  return fib(n) % 1234567