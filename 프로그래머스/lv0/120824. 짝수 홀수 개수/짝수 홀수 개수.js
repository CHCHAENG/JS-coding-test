function solution(num_list) {
    let answer = [0, 0];
    
    num_list.map((v) => {
        answer[v % 2]++;
    })
    
    return answer;
}