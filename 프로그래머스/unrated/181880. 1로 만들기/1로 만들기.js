function solution(num_list) {
    let answer = 0;
    
    num_list.map((v, i) => {
        while(v !== 1) {
            v % 2 ? v = (v - 1) / 2 : v = v / 2; 
            answer++;
        }
    })
    return answer;
}