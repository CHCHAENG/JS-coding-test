function solution(picture, k) {
    let result = [];
    picture.map((v) => {
        let answer = "";
        v.split("").map((v) =>{
            answer += v.repeat(k);
        })
        for (let i = 0; i < k; i++) 
            result.push(answer);
    })
    
    return result;
}