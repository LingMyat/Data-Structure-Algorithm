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

