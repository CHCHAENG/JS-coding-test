const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (input) {
    const fStack = [];
    const bStack = [];
    
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '<' :
                if (fStack.length > 0) bStack.push(fStack.pop());
                break;
            case '>' : 
                if (bStack.length > 0) fStack.push(bStack.pop());
                break;
            case '-' :
                if (fStack.length > 0) fStack.pop();
                break;
            default :
                fStack.push(input[i]);
                break;
        }
    }
    
    console.log(fStack.join("") + bStack.reverse().join(""));
}

let input = [];
let L;

rl.on('line', function(line) {
    if (input.length > 0) {
        solution(line);
    } else {
        L = +line;
        input.push(L);
    }
}).on('close', () => {
    process.exit();
})