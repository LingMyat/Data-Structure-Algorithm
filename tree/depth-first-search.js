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

//DFS depth first search

class Stack {
    elements = [];

    /**
     * Adds a new element to the top of the stack.
     *
     * @param {*} element - the element to be added to the stack
     * @return {undefined} this function does not return any value
     */
    push(element) {
        this.elements.push(element);
    }

    /**
     * Removes and returns the top element from the stack.
     *
     * @return {*} The top element from the stack, or undefined if the stack is empty.
     */
    pop() {
        return this.elements.pop();
    }

    /**
     * Returns the top element from the stack without removing it.
     *
     * @return {*} The top element from the stack, or undefined if the stack is empty.
     */
    peek() {
        return this.elements[this.elements.length - 1];
    }
    
    /**
     * Checks if the stack is empty.
     *
     * @return {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     *
     * @return {number} The size of the stack.
     */
    size() {
        return this.elements.length;
    }
}

function depthFirstSearch(root) {
    const stack = new Stack();

    stack.push(root);

    while(!stack.isEmpty()) {
        const currentNode = stack.pop();

        if(currentNode) {
            console.log(currentNode.value);
            
            for(let i = currentNode.children.length - 1; i >= 0; i--) {
                stack.push(currentNode.children[i]);
            }
        }
    }
}
console.log('DFS');

depthFirstSearch(root);

//DFS Recursive

function dfsRecursive(node) {
    if(!node) return;

    console.log(node.value);

    node
        .children
        .forEach(child => dfsRecursive(child));
}  

console.log('DFS Recursive');

dfsRecursive(root);
