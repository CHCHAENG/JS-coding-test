function solution(num_list) {
    let re1 = 1;
    let re2 = 0;
    
    num_list.map((value) => {
        re1 *= value;
        re2 += value;
    })
  
    return (re1 < Math.pow(re2,2) ? 1 : 0);
}