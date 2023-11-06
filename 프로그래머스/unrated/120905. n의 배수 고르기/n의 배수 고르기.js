function solution(n, numlist) {
    let answer = [];
    
    numlist.map((v, i) => {if (v % n === 0) answer.push(numlist[i])});
    return answer;
}