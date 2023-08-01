function solution(my_string, index_list) {
    var answer = '';
    
    index_list.map((value) => {
        answer += my_string.at(value);
    })
    return answer;
}