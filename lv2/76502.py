'''
괄호 회전하기
https://school.programmers.co.kr/learn/courses/30/lessons/76502
'''
from collections import deque

def isAvailable(arr):                             # 해당 배열이 올바른 괄호 문자열인지 출력해주는 함수
  stack = []
  pair = {'}' : '{', ']' : '[', ')' : '('}
  for i in arr:
    if len(stack) == 0:                           # stack에 아무것도 없다면 push
      stack.append(i)
    else:
      if i in pair and stack[len(stack)-1] == pair[i]:    # push할 값이 닫는 괄호일 때 앞전 stack 값이 올바른 여는 괄호라면 pop, 아니라면 push
        stack.pop()
      else:
        stack.append(i)
  return True if len(stack) == 0 else False       # stack에 값이 남아있지 않다면 올바른 괄호 문자열

def solution(s):
  answer = 0
  dq = deque(list(s))               # queue와 dequeue의 시간복잡도를 O(1) 로 하기 위해 deque 사용
  for i in range(len(dq)):          
    dq.append(dq.popleft())         # 앞 숫자를 하나 빼서 뒤에 넣는 작업
    if isAvailable(dq):             # 올바른 괄호 문자열이면 정답을 1 추가
      answer += 1
  return answer