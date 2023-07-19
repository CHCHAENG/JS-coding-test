function solution(my_string, overwrite_string, s) {
  let answer = "";

  answer += my_string.slice(0, s);
  answer += overwrite_string;

  if (answer.length < my_string.length) {
    restart_index = s + overwrite_string.length;
    answer += my_string.slice(restart_index);
  }

  return answer;
}
