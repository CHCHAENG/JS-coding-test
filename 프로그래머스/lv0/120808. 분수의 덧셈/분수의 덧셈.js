function findGCD(a, b) {
    return a % b ? findGCD(b, (a % b)) : b;    
}

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    answer[0] = denom1 * numer2 + denom2 * numer1;
    answer[1] = denom1 * denom2;
    
    let gcd = findGCD(answer[0], answer[1]);
    answer[0] /= gcd;
    answer[1] /= gcd;
    
    return answer;
}