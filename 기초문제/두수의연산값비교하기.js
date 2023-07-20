function solution(a, b) {
  let answer = 0;

  const ab = Number(`${a}${b}`);
  const ab2 = 2 * a * b;

  answer = ab >= ab2 ? ab : ab2;
  return answer;
}
