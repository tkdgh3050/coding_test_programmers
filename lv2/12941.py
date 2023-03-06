'''
최솟값 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12941
'''
def solution(A,B):
  A.sort()
  B.sort(reverse=True)
  return sum([A[i]*B[i] for i in range(len(A))])