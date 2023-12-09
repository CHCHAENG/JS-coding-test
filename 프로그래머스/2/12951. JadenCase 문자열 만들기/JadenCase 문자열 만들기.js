function solution(s) {
    s = s.split(" ");
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "") {
            let newStr = s[i][0].toUpperCase();
                
            for (let j = 1; j < s[i].length; j++) {
                newStr += s[i][j].toLowerCase();
            }
            
            s[i] = newStr;
        }
    }
    
    return s.join(" ");
}