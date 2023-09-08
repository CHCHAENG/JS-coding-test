function solution(n_str) {
    while(true) {
        if (n_str.indexOf("0") === 0){
            n_str = n_str.slice(1);
        } else 
            break;
    }
    
    return n_str;
}