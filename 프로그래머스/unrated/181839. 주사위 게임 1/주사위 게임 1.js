function solution(a, b) {
    // a가 짝수
    if (a % 2 === 0){
        // b도 짝수
        if (b % 2 === 0)
            return Math.abs(a - b);
        // b는 홀수
        else return 2 * (a + b);
    } 
    // a는 홀수
    else {
        // b는 짝수
        if (b % 2 === 0)
            return 2 * (a + b);
        // b도 홀수
        else return a ** 2 + b ** 2;
    }
}