function solution(elements) {
    let answer = new Set();
    const length = elements.length;
    
    for (let i = 0; i < length; i++) {
        let sum = 0;
        
        for (let j = i; j < length + i; j++) {
            sum += elements[j % length];
            answer.add(sum);
        }
    }
    return answer.size;
}