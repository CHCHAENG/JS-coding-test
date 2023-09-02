function solution(num_list) {
    var answer = 0;
    
    if (num_list.length >= 11) {
        num_list.map((v) => answer += v);
    } else {
        answer = 1;
        num_list.map((v) => answer *= v);
    }
    
    return answer;
}