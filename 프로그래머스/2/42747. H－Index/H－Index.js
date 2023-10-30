function solution(citations) {
    citations.sort((a, b) => a - b);
    
    let length = citations.length;
    
    if (length > 1) {
        const index = Math.floor(length / 2);
        let val = citations[index];
        let temp = citations.filter((v) => v >= val);
        
        while (temp.length < val) {
            val--;
            temp = citations.filter((v) => v >= val);
        }
        
        return val;
    } else {
        return citations[0] > 0 ? 1 : 0;
    }
    
}