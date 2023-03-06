'''
JadenCase 문자열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12951
'''
def solution(s):
  arr = s.lower().split(' ')
  return ' '.join(['' if a == '' else a[0].upper() + a[1:] for a in arr])