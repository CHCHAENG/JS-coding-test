function solution(word) {
    const arr = ['A', 'E', 'I', 'O', 'U'];
    const list = [];
    
    const dfs = (length, str) => {
        if (length <= 5) {
            list.push(str);
            
            for (let i = 0; i < 5; i++) {
                dfs(length + 1, str + arr[i]);
            }
        }
    }
    
    dfs(0, '');
    
    return list.indexOf(word);
}