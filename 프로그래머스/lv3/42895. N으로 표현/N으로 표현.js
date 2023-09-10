function solution(N, number) {
    if (N === number)
        return 1;
    
    let answer = Array.from(new Array(9), () => new Set());
    
    answer.forEach((v,index) => {
        if (index !== 0) v.add(Number(String(N).repeat(index)));    
    })
    
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j < i; j++){
            for (let first of answer[j]) {
                for (let second of answer[i - j]){
                    answer[i].add(first + second);
                    answer[i].add(first - second);
                    answer[i].add(first * second);
                    answer[i].add(first / second);
                }
            }
        }
        if (answer[i].has(number))
            return i;
    }
    return -1;
}