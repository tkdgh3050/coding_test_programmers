'''
최댓값과 최솟값
https://school.programmers.co.kr/learn/courses/30/lessons/12939
'''
def solution(s):
  arr = list(map(int, s.split(' ')))
  return f'{min(arr)} {max(arr)}'