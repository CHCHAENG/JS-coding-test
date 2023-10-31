function solution(participant, completion) {
    let list = {};
    
    participant.forEach((v) => {
        if (list[v]) list[v]++;
        else list[v] = 1;
    });
        
    completion.forEach((v) => {
        list[v]--;
        
        if (list[v] === 0) {
            delete list[v];
        }
    });
    
    return Object.keys(list)[0];
}