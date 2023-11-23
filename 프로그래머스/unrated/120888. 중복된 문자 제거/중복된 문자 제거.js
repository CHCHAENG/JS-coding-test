function solution(my_string) {
    let answer = [];
    
    [...my_string].forEach((v) => {
        if (!answer.includes(v)) answer.push(v);
    });
    
    return answer.join("");
}