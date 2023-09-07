function solution(arr, flag) {
    var answer = [];
    flag.map((v, i) => {
        if (v) {
            for (let k = 0; k < arr[i] * 2; k++){
                answer.push(arr[i]);    
            }
            
        } else {
            for (let k = 0; k < arr[i]; k++){
                answer.pop();
            }
        }
    })
    return answer;
}