function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a, b) => b - a);
    
    for (let i = 0; i < score.length; i = i + m) {
        const min = score[i + m - 1];
        if (min) answer += min * m;
    }
  return answer;
}