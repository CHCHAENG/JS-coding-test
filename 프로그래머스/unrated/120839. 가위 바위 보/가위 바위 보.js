function solution(rsp) {
    let answer = "";
    
    [...rsp].forEach((v) => {
        if (v === "2") answer += "0";
        else if (v === "0") answer += "5";
        else answer += "2";
    });
    
    return answer;
}