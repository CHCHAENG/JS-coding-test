class Stack {
    constructor() {
        this.storage = new Object();
        this.size = 0;
    }
    
    push (element) {
        this.size++;
        this.storage[this.size] = element;
    }
    
    pop () {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        
        return removed;
    }
    
    top () {
        return this.storage[this.size];
    }
}

const stack = new Stack();

stack.push(3);
stack.push(5);
console.log(stack.top());
stack.push(7);
console.log(stack.top());
stack.push(2);
console.log(stack.top());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
