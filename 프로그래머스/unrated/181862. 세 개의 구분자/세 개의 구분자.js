function solution(myStr) {
    const answer = myStr.replace(/(a|b|c)/g, " ").split(" ").filter((x) => x !== "");
    
    return answer.length === 0 ? ["EMPTY"]: answer;
}