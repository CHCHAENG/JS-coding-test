function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        if (i % 5 === 0){
            str = i.toString();
            check = true;
            
            for (let i = 1; i <= 9; i++) {
                if (i === 5)
                    continue;
                if (str.includes(i.toString()))
                    check = false;
                    
            }
            if (check) 
                answer.push(i);
        }
    }
    
    if (answer.length === 0)
        answer.push(-1);
    
    return answer;
}