function solution(n, lost, reserve) {
    let finalLost = lost.filter((l) => !reserve.includes(l));
    let finalReserve = reserve.filter((l) => !lost.includes(l));
    
    let answer = n - finalLost.length;

    finalLost.sort((a, b) => a - b);
    
    finalLost.forEach((v, i) => {
        if(finalReserve.length===0){
            return;
        }
        
        if (finalReserve.includes(v - 1)) {
            finalReserve = finalReserve.filter((l) => l !== v - 1);
            answer++;
        }
        
        else if (finalReserve.includes(v + 1)){
            finalReserve = finalReserve.filter((l) => l !== v + 1);
            answer++;
        }
    })
    return answer;
}