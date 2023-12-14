function solution(n) {
    const changeNum = n.toString(3).split("").reverse().join("");
        
    return parseInt(changeNum,3)
}