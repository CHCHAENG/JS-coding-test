function solution(n) {
    let first = 0;
    let second = 1;
    let answer = 0;
    
    for (let i = 2; i <= n; i++) {
        answer = (first + second) % 1234567;
        
        first = second;
        second = answer;
    }
    
    return answer;
   
}