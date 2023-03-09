'''
H-Index
https://school.programmers.co.kr/learn/courses/30/lessons/42747
'''
def solution(citations):
  citations.sort()
  for i in range(len(citations)):
    if citations[i] >= len(citations) - i:  # 총 n편을 썼다면 순차적으로 n을 낮춰가면서 해당 인덱스 이후의 개수가 인용횟수보다 작거나 같아지는 순간의 인덱스를 출력하면 된다
      return len(citations) - i
  return 0                                  # 모두 돌았지만 답이 없는 경우인 1개의 논문을 작성했지만 인용이 0번인 경우를 위해 작성