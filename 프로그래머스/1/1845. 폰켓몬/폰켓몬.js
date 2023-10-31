function solution(nums) {
    let answer = [];
    
    nums.map((v) => {
        if (!answer.includes(v)) answer.push(v);
    })
    
    
    return +nums.length / 2 < answer.length ? +nums.length / 2 : answer.length;
}