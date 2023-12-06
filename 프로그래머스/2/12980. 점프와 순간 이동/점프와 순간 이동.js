function solution(n) {
    let answer = 0;
    
    // 2의 거듭제곱이 아닐 경우까지만 반복
    while ((n & (n - 1))) {
        if (n % 2 === 1) {
            answer++;
            n--;
        } else {
            n = Math.floor(n / 2);
        }
    }
    
    return ++answer;
}