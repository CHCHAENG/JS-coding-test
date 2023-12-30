function solution(s) {
    let answer = [];
    
    [...s].forEach((v, i) => {
        if (i === 0) {
            answer.push(-1);
            return;
        }
        
        const index = s.lastIndexOf(v, i - 1);
        
        if (index === -1) answer.push(-1);
        else answer.push(i - index);
    })
    
    return answer;
}