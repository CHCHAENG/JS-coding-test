function solution(s, n) {
    let answer = "";
    
    [...s].forEach((v) => {
        const val = v.charCodeAt();

        if (val >= 65 && val <= 90) {
            let next = val + n;
            
            if (next > 90) {
                next -= 26;   
            } 
            answer += String.fromCodePoint(next);
        } else if (val >= 97 && val <= 122) {
            let next = val + n;
            
            if (next > 122) {
                next -= 26;   
            } 
            answer += String.fromCodePoint(next);
        } else {
            answer += " ";
        }
    })
    return answer;
}