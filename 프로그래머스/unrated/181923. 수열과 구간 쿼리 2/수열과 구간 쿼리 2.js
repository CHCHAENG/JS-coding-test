function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(([a, b, c], index) => {
        k_i = -1;
        
        for (let i = a; i <= b; i++) {
            if (arr[i] > c) {
                if (k_i !== -1) {
                    if (k_i > arr[i])
                        k_i = arr[i];
                } else {
                    k_i = arr[i];
                }   
            }  
        }
        
        answer.push(k_i);
    })
    
    return answer;
}