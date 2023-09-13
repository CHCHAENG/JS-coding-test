function solution(number, k) {
    let answer = [];
    
    [...number].map((v, i) => {
        while (k > 0 && answer[answer.length - 1] < v) {
            answer.pop();
            k--;
        }
        
        answer.push(v);
    })
    
    
    return answer.splice(0, answer.length - k).join("");
}