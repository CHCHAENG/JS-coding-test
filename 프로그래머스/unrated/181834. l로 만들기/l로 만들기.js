function solution(myString) {
    let answer ="";
    
    [...myString].map((v) => {
        v.charCodeAt() < "l".charCodeAt() ? answer += 'l' : answer += v;
    })

    return answer;
}