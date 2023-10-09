function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    if (denom1 !== denom2) {
         let num = denom1 * denom2;
        answer[1] = num;
        answer[0] = (numer1 * parseInt(num/denom1)) + (numer2 * parseInt(num/denom2));
    } else {
        answer[1] = denom1;
        answer[0] = numer1 + numer2;
    }
    
    for (let i = 2; i <= answer[1]; i++) {
        while (answer[0] % i === 0 && answer[1] % i === 0) {
            answer[0] /= i;
            answer[1] /= i;
        }
    }

    return answer;
}