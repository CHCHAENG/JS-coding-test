function solution(arr)
{
    let answer = [];
    
    arr.forEach((v, i) => {
        if (arr[i] !== arr[i + 1]) {
            answer.push(v);
        }
    })
    
    return answer;
}