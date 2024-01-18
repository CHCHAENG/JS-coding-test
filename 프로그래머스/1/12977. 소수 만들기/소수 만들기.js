function solution(nums) {
    let answer = 0;
    const length = nums.length;
    
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                const val = nums[i] + nums[j] + nums[k];
                answer++;
                
                for (let n = 2; n <= Math.sqrt(val); n++) {
                    if (val % n === 0) { 
                        answer--;
                        break;
                    }
                }
            }
        }
    }
    return answer;
}