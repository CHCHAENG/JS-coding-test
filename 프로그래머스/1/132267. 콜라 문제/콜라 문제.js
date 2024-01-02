function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        const add = parseInt(n / a) * b;
        
        answer += add;
        n = add + (n % a);
    }
    
    return answer;
}