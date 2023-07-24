function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(([a, b, c], index) => {
        k_i = -1;
    // console.log('row', a, b, c);
        for (let i = a; i <= b; i++) {
             
                if (arr[i] > c) {
                    
                    if (k_i > arr[i]) k_i = arr[i];
                    else if (k_i !== -1) k_i = k_i;
                    else k_i = arr[i];
                } 
            
        }
        
        answer.push(k_i);
        // console.log('k : ', k_i);
    })
    
    return answer;
}