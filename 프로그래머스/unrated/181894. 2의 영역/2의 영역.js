function solution(arr) {
    let answer = [];
    let indexResult = [];
    
    let index = arr.indexOf(2);
    
    
    if (index === -1) {
        answer.push(index);
        return answer;
    }
    
    while(index != -1){
        indexResult.push(index);
        index = arr.indexOf(2, index + 1);
    }

    const finalResult = arr.slice(indexResult[0], indexResult[indexResult.length - 1] + 1);
    
    answer.push(...finalResult);
    
    return answer;
}