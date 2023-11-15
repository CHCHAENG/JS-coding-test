class minHeap {
    constructor () {
        this.data = [];
    }
    
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getLeftChildIndex(i) {
        return i * 2 + 1;
    }
    
    getRightChildIndex(i) {
        return i * 2 + 2;
    }
    
    swap(a, b) {
        let temp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = temp;
    }
    
    size() {
        return this.data.length;
    }
    
    peek() {
        return this.data[0];
    }
    
    push(val) {
        this.data[this.data.length] = val;
        this.heapfiUp();
    }
    
    heapfiUp() {
        let curIndex = this.data.length - 1;
        
        while (+this.data[curIndex] < +this.data[this.getParentIndex(curIndex)]) {
            this.swap(curIndex, this.getParentIndex(curIndex));
            curIndex = this.getParentIndex(curIndex);
        }
    }
    
    poll() {
        let minVal = this.data[0];
        
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
    
        this.heapfiDown();
        return minVal;
    }
    
    heapfiDown() {
        let curIndex = 0;
        
        while (this.data[this.getLeftChildIndex(curIndex)] !== undefined) {
            
            let smallChildIndex = this.getLeftChildIndex(curIndex);
            
            if (this.data[this.getRightChildIndex(curIndex)] !== undefined && this.data[this.getLeftChildIndex(curIndex)] > this.data[this.getRightChildIndex(curIndex)]) {
                smallChildIndex = this.getRightChildIndex(curIndex);
            }
            
            if (this.data[curIndex] > this.data[smallChildIndex]) {
                this.swap(curIndex, smallChildIndex);
                curIndex = smallChildIndex;
            } else return;
        }
    }
}

function solution(scoville, K) {
    let answer = 0;
    
    const heap = new minHeap();
    
    for(let i of scoville) {
        heap.push(i);
    }
    
    while (heap.size() >= 2 && heap.peek() < K) {
        let n1 = heap.poll();
        let n2 = heap.poll();
        
        let newVal = n1 + (n2 * 2);
        heap.push(newVal);
        answer++;
    }
    
    return heap.peek() >= K ? answer : -1;
}