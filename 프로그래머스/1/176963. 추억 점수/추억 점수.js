function solution(name, yearning, photo) {
    let list = {};
    let answer = [];
    
    name.forEach((v, i) => {
        list[v] = yearning[i];
    });
    
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        
        photo[i].forEach((v) => {
            if (list[v]) sum += list[v];
        });
        
        answer.push(sum);
    }
    
    return answer;
}