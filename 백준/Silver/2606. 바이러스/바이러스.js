let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let computerList = Array.from(Array(+input[0] + 1), () => []);

for (let i = 2; i < 2 + +input[1]; i++) {
    const [c, n] = input[i].split(" ");
    
    computerList[c].push(n);
    computerList[n].push(c);
}

let visited = ['1'];

const dfs = (start) => {
  for (let i of computerList[start]) {
    if (!visited.includes(i)) {
      visited.push(i);
      dfs(i);
    }
  }
};

dfs(1);

console.log(visited.length - 1);