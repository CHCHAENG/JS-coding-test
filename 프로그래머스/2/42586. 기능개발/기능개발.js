function solution(progresses, speeds) {
    let answer = [];
    let cnt = [];
    
    progresses.forEach((v, i) => {
        let remain = 100 - v;
        
        if (remain % speeds[i] === 0) {
            cnt.push(remain / speeds[i]);
        } else {
            cnt.push(parseInt(remain / speeds[i]) + 1);
        }
    });
    
    
    cnt.forEach((v, i) =>{
        let c = 1;
        
        if (v >= cnt[i + 1]) {   
            while(v >= cnt[i + 1]) {
                cnt.splice(i + 1, 1);
                c++;
            }
            answer.push(c);
            
        } else {
            answer.push(c);
        }
    });
    
    return answer;
}