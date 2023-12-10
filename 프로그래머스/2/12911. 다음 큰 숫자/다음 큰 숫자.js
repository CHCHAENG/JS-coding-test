function solution(n) {
    const checkBinaryNum = (n) => {
        const changeNum = n.toString('2').replaceAll("0", "");
        
        return changeNum.length;
    }
    
    const originNum = checkBinaryNum(n);
    
    while (true) {
        n++;
        const nextNum = checkBinaryNum(n);
        
        if (originNum === nextNum) return n;
    }
    
}