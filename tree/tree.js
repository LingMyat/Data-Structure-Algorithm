//Tree
//Binary Tree
//Normal Tree
//WeightedGraph


//Normal Tree
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