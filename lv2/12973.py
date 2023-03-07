'''
짝지어 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/12973
'''
def solution(s):
  strStack = []         # stack에 쎃아가면서 이번에 넣은 값이 이전의 값과 중복되면 pop 아니면 append 하는 방식으로 진행
  for c in s:
    if len(strStack) > 0:
      if strStack[len(strStack)-1] == c:
        strStack.pop()
        continue
    strStack.append(c)    
  return 0 if len(strStack) > 0 else 1