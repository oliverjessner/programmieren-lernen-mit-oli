class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    add(node) {
        this.children.push(node);
    }
}

const node = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node.add(node2);
node.add(node3);
node3.add(node4);

console.log(JSON.stringify(node, null, 4));
