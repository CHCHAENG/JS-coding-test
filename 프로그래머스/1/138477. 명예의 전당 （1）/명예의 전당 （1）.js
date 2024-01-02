function solution(k, score) {
    let answer = Array(score.length).fill(0);
    let list = [];
    
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            list.push(score[i]);
            list.sort((a, b) => a - b);
        } else {
            if (score[i] > list[0]) {
                list[0] = score[i];
                list.sort((a, b) => a - b);
            }
        }
        
        answer[i] = list[0];
    }   
    
    return answer;
}