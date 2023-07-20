function solution(str1, str2) {
  let answer = "";

  for (let i = 0; i < str1.length; i++) {
    answer += str1.slice(i, i + 1);
    answer += str2.slice(i, i + 1);
  }
  return answer;
}
