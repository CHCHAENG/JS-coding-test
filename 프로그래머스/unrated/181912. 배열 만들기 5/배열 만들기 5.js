function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map(i => {
        value = i.slice(s, s + l);
        if (+value > k) answer.push(+value);
    })
    return answer;
}