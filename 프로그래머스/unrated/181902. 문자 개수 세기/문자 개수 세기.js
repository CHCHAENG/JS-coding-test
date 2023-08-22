function solution(my_string) {
    const answer = Array.from({length: 52}, () => 0);
    
    Array.from(my_string).map((v) => {
        const index = v.charCodeAt();
        
        index > 96 ? answer[index - 97 + 26]++ : answer[index - 65]++;
    })
    
    return answer;
}