function solution(n,a,b) {
    let answer = 0;
    
    while (parseInt(a - 1 / 2) !== parseInt(b - 1 / 2))  {
        a % 2 === 0 ? a = a / 2 : a = parseInt(a / 2) + 1;
        b % 2 === 0 ? b = b / 2 : b = parseInt(b / 2) + 1;
    
        answer++;
    }
    
    return answer;
}