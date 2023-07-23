function solution(num_list) {
    let oddSum = "";
    let evenSum = "";
    
    num_list.map((value) => {
        (value % 2 === 0) ? oddSum += value : evenSum += value;
    })
    return (+oddSum) + (+evenSum);
}