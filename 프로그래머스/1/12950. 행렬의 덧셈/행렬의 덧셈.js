function solution(arr1, arr2) {
    arr1.forEach((v, index) => {
        for(let i = 0; i < v.length; i++) {
            arr1[index][i] += arr2[index][i];
        }
    });
    
    return arr1;
}