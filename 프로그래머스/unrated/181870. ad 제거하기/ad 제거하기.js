function solution(strArr) {
    const str = "ad";
    const answer = [];
    
    strArr.map((v) => {
        if (!v.includes(str))
            answer.push(v);
    });
    
   return answer;
}