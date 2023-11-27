function solution(tickets) {
    tickets.sort();
    
    let answer = [];
    let result = [];
    let visited = [];
    
    const length = tickets.length;
    
    const dfs = (start, count) => {
        result.push(start);
        
        if (count === length) {
            answer = result;
            return true;
        }
        
        for (let i = 0; i < length; i++) {
            if (!visited[i] && tickets[i][0] === start) {
                visited[i] = true;
                
                if (dfs(tickets[i][1], count + 1)) return true;
                
                visited[i] = false;
            }
        }
        
        result.pop();
        
        return false;
    }
    
    dfs("ICN", 0);
    return answer;
}
  