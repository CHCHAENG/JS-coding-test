function solution(my_string) {
    let answer = [];
    
    [...my_string].map((v) => {
        if (parseInt(v) >= 0 && parseInt(v) <= 9)
            answer.push(parseInt(v));
    })
    return answer.sort((a,b) => a - b);
}