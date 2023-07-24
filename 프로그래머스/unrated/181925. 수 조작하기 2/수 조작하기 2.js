function solution(numLog) {
    let answer = '';
    
    [...numLog].map((value, index) => {
        if (index === numLog.length - 1) return;
        
        answer += setValue(numLog[index + 1] - value);
    })
    return answer;
}

function setValue(s){
    return s === 1 ? 'w' : s === -1 ? 's' : s === 10 ? 'd' : 'a';
}