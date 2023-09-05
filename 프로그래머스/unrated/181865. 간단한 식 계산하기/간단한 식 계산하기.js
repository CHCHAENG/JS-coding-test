function solution(binomial) {
    const arr = binomial.split(" ");
    
    switch(arr[1]) {
        case "+" :
            return +arr[0] + +arr[2];
            break;
        case "-" :
            return +arr[0] - +arr[2];
            break;
        case "*" : 
            return arr[0] * arr[2];
            break;
    }
}