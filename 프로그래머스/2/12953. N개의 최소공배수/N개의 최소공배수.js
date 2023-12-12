function solution(arr) {
    let getLCM = (num1, num2) =>{
        let lcm = 1;

        while (true){
          if ((lcm % num1 == 0) && (lcm % num2 == 0)){
            break;
          }
          lcm++;
        }
        return lcm;
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        let val = getLCM(arr[i], arr[i + 1]);
        arr[i + 1] = val;
    }
      
    return arr[arr.length - 1];
}