const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function binarySearch (list, left, right, value) {
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (list[mid] < value) {
            left = mid + 1;
        } else if (list[mid] > value) {
            right = mid;
        } else {
            return mid;
        }
    }
    
    return right;
} 

function solution (N, list) {
    const arr = [];
    arr.push(list[0]);
    
    for (let i = 1; i < N; i++) {
        if (arr[arr.length - 1] < list[i]){
            arr.push(list[i]);
        }
        else {
            let index = binarySearch(arr, 0, arr.length - 1, list[i]);
            arr[index] = list[i];
        }
    }
    
    console.log(arr.length);
}

let N = 0;
let list = [];

rl.on('line', function(line) {
    if (N !== 0) {
        list = line.split(" ").map(Number);
    } else {
        N = +line;
    }
}).on('close', () => {
    solution(N, list);
    process.exit();
});