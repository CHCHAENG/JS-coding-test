function solution(n) {
    let answer = 0;
    const isOdd = n % 2 ? true : false;
    
    for (let i = 1; i <= n; i++) {
       if (isOdd) {
           if (i % 2 !== 0){
               answer += i;
           }
       } else {
           if (i % 2 === 0) {
               answer += i * i;
           }
       }
    }
    return answer;
}