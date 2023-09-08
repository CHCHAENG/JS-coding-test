function solution(strArr) {
    let cntArr = {};
    
    strArr.map((v) => {
        const temp = v.length;
        
        cntArr[temp] = cntArr[temp] ?? []
        cntArr[temp].push(v);
    })
    
    let length = Object.values(cntArr).map((a) => a.length);
    return Math.max(...length);
}