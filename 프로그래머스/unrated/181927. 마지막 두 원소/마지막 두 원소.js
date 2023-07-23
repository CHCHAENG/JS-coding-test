function solution(num_list) {
    let answer = num_list;
    let index = num_list.length - 1;
    
    let num1 = num_list[index] - num_list[index - 1];
    let num2 = num_list[index] * 2;
    
    num_list[index] > num_list[index - 1] ? answer.push(num1) : answer.push(num2);
    return answer;
}