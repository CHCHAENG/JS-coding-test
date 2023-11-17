function solution(rsp) {
    const list = {
        2 : 0,
        0 : 5,
        5 : 2
    }
    
    let answer = [...rsp].map((v) => list[v]).join("");
    
    return answer;
}