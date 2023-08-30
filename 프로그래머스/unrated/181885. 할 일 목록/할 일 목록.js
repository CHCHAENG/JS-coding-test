function solution(todo_list, finished) {
    const answer = [];
    finished.map((v, i) => {
        if (!v) 
           answer.push(todo_list[i])
    })
    return answer;
}