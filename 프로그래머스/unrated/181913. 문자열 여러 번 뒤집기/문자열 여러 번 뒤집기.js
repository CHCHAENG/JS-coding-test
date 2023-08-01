function solution(my_string, queries) {
    let answer = my_string;
    let str = '';
    
    queries.map(([a, b]) => {
        str = answer;
        
        answer = str.slice(0, a);
        
        for (let i = b; i >= a; i--){
            answer += str[i];
        }
        answer += str.slice(b + 1);
    })
    return answer;
}