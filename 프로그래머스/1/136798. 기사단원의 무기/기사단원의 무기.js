function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let list = new Set();
        
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                list.add(j);
                if (i / j != j) list.add(i / j);
            }
                
        }
        
        if (list.size > limit) answer += power;
        else answer += list.size;
    }
    return answer;
}