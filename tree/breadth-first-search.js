class Node {
    value;
    children;

    constructor(value) {
        this.value    = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

const root = new Node('A');
const b    = new Node('B');
const c    = new Node('C');
const d    = new Node('D');
const e    = new Node('E');

root.addChild(b);
root.addChild(c);

b.addChild(d);
b.addChild(e);

//BFS breadth first search with queue

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

function breadthFirstSearch(root) {
    const queue = new Queue();

    queue.enqueue(root);

    while(!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if(currentNode) {
            console.log(currentNode.value);

            currentNode
                .children
                .forEach(child => queue.enqueue(child));
        }
    }
}
console.log('BFS');

breadthFirstSearch(root);

//BFS breadth first search with queue recursive

function bfsRecursive(queue = []) {
    if(queue.length === 0) return;

    const currentNode = queue.shift();

    console.log(currentNode.value);

    currentNode
        .children
        .forEach(child => queue.push(child));
    
    bfsRecursive(queue);
}

console.log('BFS Recursive');
bfsRecursive([root]);