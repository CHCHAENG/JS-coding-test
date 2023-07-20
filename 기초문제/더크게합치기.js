function solution(a, b) {
  let answer = 0;
  const ab = String(a) + String(b);
  const ba = String(b) + String(a);

  answer = ab >= ba ? ab : ba;
  return Number(answer);
}
