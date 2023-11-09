function solution(hp) {
    let answer = 0;
    
    while (hp > 0) {
        if (hp >= 5) {
            let num = parseInt(hp / 5);
            
            answer += num;
            
            hp = hp - (5 * num);
        }
        else if (hp >= 3) {
            let num = parseInt(hp / 3);
            answer += num;
            
            hp = hp - (3 * num);
        } else {
            answer += hp;
            hp = 0;
        }
    }
    return answer;
}