function solution(ineq, eq, n, m) {    
    const operator = (eq === "=") ? `${ineq}${eq}` : `${ineq}`;
    
    const answer = (eval(`${n} ${operator} ${m}`)) ? 1 : 0;
    
    return answer;
}