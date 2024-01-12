function solution(k, m, score) {
    let answer = 0;
    let list = [];
    
    // 이익이 발생하지 않는 경우
    if (score.length < m) return 0;
    
    // 오름차순으로 정렬
    score.sort((a, b) => a - b);
    // 남는 사과 제외
    score.splice(0, score.length % m);
    
    for (let i = 0; i < score.length; i += m) {
        answer += score[i] * m;
    }
    
    return answer;
}