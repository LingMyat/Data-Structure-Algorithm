//Queue
//FIFO
//Priority Queue
//Circular Queue

class Queue {
    queue = [];

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return $this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}