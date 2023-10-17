function solution(age) {
    let answer = "";
    
    [...age.toString()].map((v) => {
        answer += String.fromCodePoint(parseInt(v) + 97);
    })
    
    return answer;
}