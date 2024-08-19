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

class Node {
    value;
    leftChild;
    rightChild;

    constructor(value) {
        this.value      = value;
        this.leftChild  = null;
        this.rightChild = null;
    }

    addLeftChild(node) {
        this.leftChild = node;
    }

    addRightChild(node) {
        this.rightChild = node;
    }
}

const root = new Node('A');
const b    = new Node('B');
const c    = new Node('C');
const d    = new Node('D');
const e    = new Node('E');
const f    = new Node('F');
const g    = new Node('G');

root.addLeftChild(b);
root.addRightChild(c);

b.addLeftChild(d);
b.addRightChild(e);

c.addLeftChild(f);
c.addRightChild(g);


function preOrderTraversal(node) {
    if (!node) return;

    const stack = new Stack();
    stack.push(node);

    while (!stack.isEmpty()) {
        const currentNode = stack.pop();
        console.log(currentNode.value);

        if (currentNode.rightChild) stack.push(currentNode.rightChild);
        if (currentNode.leftChild) stack.push(currentNode.leftChild);
    }
}

console.log('Pre-Order Non-Recursive');
preOrderTraversal(root);

function preOrderTraversalRecursive(node) {
    if (!node) return;

    console.log(node.value);
    preOrderTraversalRecursive(node.leftChild);
    preOrderTraversalRecursive(node.rightChild);
}

console.log('Pre-Order Recursive');

preOrderTraversalRecursive(root);