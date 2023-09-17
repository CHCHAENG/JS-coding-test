function solution(answers) {
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let [a, b, c] = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (p1[i % 5] === answers[i])
            a++;
        if (p2[i % 8] === answers[i])
            b++;
        if (p3[i % 10] === answers[i])
            c++;
    }
    
    if (a === b && b === c)
        return [1, 2, 3];
    
    let max = Math.max(a, b, c);

    if (a >= max) {
        if (a === b) 
            return [1, 2];

        if (a === c)
            return [1, 3];
    }
    
    if (b >= max)
        if (b === c)
            return [2, 3];
    
    return max === a ? [1] : max === b ? [2] : [3];
    
}