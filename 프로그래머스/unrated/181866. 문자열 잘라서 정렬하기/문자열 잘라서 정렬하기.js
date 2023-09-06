function solution(myString) {
    let index = myString.indexOf("x");
    let newIndex = 0;
    let answer = [];
    
    answer.push(myString.slice(0, index));
    
    while (true) {   
        newIndex = myString.indexOf("x" , index + 1);
        
        if (newIndex === -1){
            if (index !== myString.length - 1)
                answer.push(myString.slice(index + 1));
            break;
        }
           
        
        answer.push(myString.slice(index + 1, newIndex));
        index = newIndex;
    }
    
    return answer.filter((v) => v !== "").sort();
}