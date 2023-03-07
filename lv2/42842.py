'''
카펫
https://school.programmers.co.kr/learn/courses/30/lessons/42842
'''
def solution(brown, yellow):
  sumCnt = brown + yellow                     # 블록들의 합을 만들 수 있는 약수들의 곱 중에 정답이 있음
  answerIdx = 1                               # 최종 정답을 위한 변수
  if sumCnt ** 0.5 == int(sumCnt ** 0.5):     # 블록의 합이 제곱수면 해당 값이 정답이므로 예외처리
    return [int(sumCnt ** 0.5), int(sumCnt ** 0.5)]
  for i in range(2, int(sumCnt ** 0.5) + 1):          # 약수를 모두 검색할 필요 없이 절반만 확인하면 되므로 루트를 취함
    if sumCnt % i == 0:                               # 약수인 경우에
      if yellow == ((sumCnt // i) -2) * (i - 2):      # 해당 수가 yellow의 블록 수와 일치하는지 확인
        answerIdx = i
        break
  return [sumCnt // answerIdx, answerIdx]