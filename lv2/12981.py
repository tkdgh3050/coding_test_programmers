'''
영어 끝말잇기
https://school.programmers.co.kr/learn/courses/30/lessons/12981
'''
def solution(n, words):
  wordsSet = set([words[0]])      # 단어가 중복되는지 확인하기 위한 set 생성. 첫번째 단어는 미리 넣어둔다
  prevWord = words[0]             # 이전단어와 이번 단어의 앞뒤 끝말잇기가 가능한지 확인하기 위한 변수. 첫번째 단어는 미리 넣어둔다
  endIndex = 0                    # 게임이 끝난 순간의 인덱스 값을 받기 위한 변수
  for i, word in enumerate(words[1:]):  # 두번째 단어부터 받는다
    endIndex = i+1                      # for문을 시작할 때 첫번쨰는 제외했으므로 인덱스에는 1을 추가한 값을 넣어준다
    if prevWord[-1] != word[0]:         # 이전단어의 뒷 알파벳과 현재 말한 단어의 첫 알파벳이 일치하지 않으면 게임종료
      return [endIndex % n + 1, endIndex // n + 1]
    if word in wordsSet:                # 이전에 말한 단어를 또 하면 게임종료
      return [endIndex % n + 1, endIndex // n + 1]
    wordsSet.add(word)
    prevWord = word
  return [0,0]