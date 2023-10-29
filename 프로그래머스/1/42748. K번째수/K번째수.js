function solution(array, commands) {
    let answer = [];
    commands.map(([i, j, k]) => {
        let newArr = array.slice(i - 1, j);
        newArr.sort((a, b) => a - b);
        answer.push(newArr[k - 1]);
    })
    
    return answer;
}