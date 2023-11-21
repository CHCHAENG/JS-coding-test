let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ');

let answer = "==";

if (+a > +b) answer = ">";
else if (+a < +b) answer = "<";

console.log(answer)