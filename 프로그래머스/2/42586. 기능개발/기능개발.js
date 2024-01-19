function solution(progresses, speeds) {
    let answer = [];
    let i = 0;
    let cnt = 0;
    
    while (progresses.length) {
        i = Math.ceil((100 - progresses[0]) / speeds[0]);

        for (let j = 1; j < progresses.length; j++) {
            progresses[j] += i * speeds[j];
        }
        
        cnt = 1;
        
        for (let j = 1; j < progresses.length; j++) {
            if (progresses[j] >= 100) cnt++;
            else break;
        }
        answer.push(cnt);
        progresses.splice(0, cnt);
        speeds.splice(0, cnt);
    }
    
    return answer;
}