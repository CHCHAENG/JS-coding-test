function solution(cards1, cards2, goal) {
    var answer = "Yes";
    
    goal.forEach((v, i) => {
        if (cards1[0] === v) {
            cards1 = cards1.slice(1);
        } else if (cards2[0] === v) {
            cards2 = cards2.slice(1);
        } else {
            answer = "No"
        }
    })
    return answer;
}