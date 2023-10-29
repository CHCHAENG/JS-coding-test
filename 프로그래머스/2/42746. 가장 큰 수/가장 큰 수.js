function solution(numbers) {
    let answer = [];
    
    numbers.map((v) => answer.push(v.toString()));
    
    answer.sort((a, b) => (b + a) - (a + b));
    
    return answer[0] === "0" ? "0" : answer.join("");
}