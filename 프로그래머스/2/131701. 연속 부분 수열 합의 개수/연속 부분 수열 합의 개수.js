function solution(elements) {
    let answer = new Set();
    const length = elements.length;
    
    for (let i = 1; i <= length; i++) {
        let rear = 0;
        let sum = 0;
        
        for (let j = 0; j < length; j++) {
            if (j === 0) {
                while (rear < i) {
                    sum += elements[rear++];
                }
            }
            else {
                sum -= elements[j - 1];
                if (rear === length) rear = 0;
                sum += elements[rear++];
            }
            answer.add(sum);
        }
    }
    
    return answer.size;
}