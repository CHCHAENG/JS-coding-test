function solution(rank, attendance) {
    let students = {};
    const temp = [...rank];
    let results = [];
    
    rank.sort((a, b) => a - b);
    
    rank.map((v, i) => {
        students[v] = temp.indexOf(v);
    })
    
    Object.values(students).map((v) => {
        if (attendance[v])
            results.push(v);
    })
    
    
    return results[0] * 10000 + results[1] * 100 + results[2];
}