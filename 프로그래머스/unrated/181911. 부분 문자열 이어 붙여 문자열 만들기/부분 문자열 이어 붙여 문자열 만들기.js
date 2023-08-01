function solution(my_strings, parts) {
    var answer = '';
    
    parts.map(([a, b], index) => {
        answer += my_strings[index].slice(a, b + 1);
    })
    return answer;
}