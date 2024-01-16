class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = false;
        this.tail = false;
    }

    add(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

const list = new LinkedList();

list.add(1);
list.add(3);
list.add(10);

//console.log(list);
console.log(list.head);
