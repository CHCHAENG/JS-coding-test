function solution(q, r, code) {
    var answer = '';
    const arr = code.split('');
    
    arr.map((str,index) => {
        if (index % q === r)
            answer += str;
    })
    return answer;
}