class Queue {
    constructor() {
        this.storage = new Object();
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        return this.rear - this.front;
    }
    
    enqueue(element) {
        this.storage[this.rear] = element;
        this.rear++;
    }
    
    dequeue() {
        let removed = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        
        if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        }
        
        return removed;
    }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue)

queue.enqueue(6);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
