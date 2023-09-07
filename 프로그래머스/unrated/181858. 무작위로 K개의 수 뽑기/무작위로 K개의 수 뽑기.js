function solution(arr, k) {
    let answer = [];
    
    arr.map((v) => {
        if (!answer.includes(v) && answer.length < k)
            answer.push(v);
    })
    
    
    if (k - answer.length > 0) {
        while(answer.length < k)
            answer.push(-1);
    }
    
    return answer;
}