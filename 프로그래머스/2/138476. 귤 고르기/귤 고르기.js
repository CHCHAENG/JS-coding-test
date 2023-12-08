function solution(k, tangerine) {
    let list = [];
   
    tangerine.forEach((v) => {
        if (list[v]) list[v] = [v, ++list[v][1]];
        else list[v] = [v, 1];
    });
    
    list.sort((a, b) => b[1] - a[1]);
    
    let check = 0;
    
    for(let i = 0; i < list.length - 1; i++) {
        check += list[i][1];
        
        if (check >= k) {
            return i + 1;
            break;
        }
    }
    
    return list.length - 1;
}