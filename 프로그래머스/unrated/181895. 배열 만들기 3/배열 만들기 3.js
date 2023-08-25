function solution(arr, intervals) {
    let answer = [];
    
    intervals.map(([a,b]) => {
        const newArr = arr.slice(a, b + 1);
        newArr.map((i) => answer.push(i));
    })
    return answer;
}