function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        const n1 = arr1.reduce((acc, cur) => acc + cur);
        const n2 = arr2.reduce((acc, cur) => acc + cur);
    
        return n1 === n2 ? 0 : n1 > n2 ? 1 : -1;
    } else {
        return arr1.length > arr2.length ? 1 : -1;   
    } 
}