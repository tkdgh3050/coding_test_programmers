'''
이진 변환 반복하기
https://school.programmers.co.kr/learn/courses/30/lessons/70129
'''
def solution(s):
  removeCnt = 0
  convertCnt = 0
  while s != '1':
    removeCnt += s.count('0')
    s = s.replace('0','')
    s = bin(len(s))[2:]
    convertCnt += 1
  return [convertCnt, removeCnt]