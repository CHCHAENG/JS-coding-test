function solution(s){
    let list = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") list++;
        else list--;
        
        if (list < 0) return false;
    }
    
    return list !== 0 ? false : true;
}