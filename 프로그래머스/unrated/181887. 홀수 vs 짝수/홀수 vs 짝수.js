function solution(num_list) {
    const sum = {odd : 0, even : 0};
          
    num_list.map((value, idx) => {
        // 홀수
        if ((idx + 1) % 2) {
            sum.odd += value;
        }
        // 짝수
        else {
            sum.even += value;
        }
    })
    
    return Math.max(sum.odd, sum.even);
}