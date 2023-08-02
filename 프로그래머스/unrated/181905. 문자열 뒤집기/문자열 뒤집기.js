function solution(my_string, s, e) {
    var answer = '';
    answer += my_string.slice(0, s);
    const reverseStr = my_string.slice(s, e + 1);
    
    answer += reverseStr.split('').reverse().join('');
    answer += my_string.slice(e + 1);
    return answer;
}