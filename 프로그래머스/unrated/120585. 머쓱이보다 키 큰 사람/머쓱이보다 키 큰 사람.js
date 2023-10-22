function solution(array, height) {    
    let newArr = array.filter((V) => V > height);
    
    return newArr.length;
}