function solution(code) {
    
    const arr = code.split('');
    let answer = '';
    let mode = 0;
    
    arr.map((input, index) => {
        
        if (mode === 0){
            if (input !== "1"){
                answer += (index % 2 === 0) ? input : "";
            } else {
                mode = 1;
            }
        } else {
            if (input !== "1"){
                answer += (index % 2 !== 0) ? input : "";
            } else {
                mode = 0;
            }
        }
    })
    
    if (answer === "")
        answer = "EMPTY";
    
    return answer;
}