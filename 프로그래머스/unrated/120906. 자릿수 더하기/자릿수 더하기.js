function solution(n) {
    let answer = 0;
    
    n.toString().split("").map((v) => answer += +v);
    
    return answer;
}