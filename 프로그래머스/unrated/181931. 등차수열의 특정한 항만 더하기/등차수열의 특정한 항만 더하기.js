function solution(a, d, included) {
    let answer = 0;
    
    included.map((value, index) => {
        if (value){
            answer += a + index * d;
        }
    })
    return answer;
}