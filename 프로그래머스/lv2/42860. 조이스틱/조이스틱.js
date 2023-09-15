function solution(name) {
    let answer = 0;
    let move = name.length - 1;
    
    [...name].map((v, i) => {
        answer += Math.min((v.charCodeAt() - "A".charCodeAt()), ("Z".charCodeAt() - v.charCodeAt() + 1));
        
        let index = i + 1;
        
        while (index < name.length && name[index] === "A")
            index++;
        
        move = Math.min(move, 
                          i * 2 + name.length - index, 
                          i + 2 * (name.length - index));
    })
    
    return move + answer;
}