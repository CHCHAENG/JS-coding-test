function solution(myString) {
    let answer = [];
    
    answer = myString.split("x");
   
    return answer.map((v) => v.length);
}