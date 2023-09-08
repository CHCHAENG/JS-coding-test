function solution(n) {
    let answer = Array.from({ length: n }, () => []);    
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            i === j ? answer[i][j] = 1 : answer[i][j] = 0;
        }
    }
    return answer;
}