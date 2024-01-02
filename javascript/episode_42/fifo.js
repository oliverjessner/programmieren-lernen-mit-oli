// First in First out
class FIFO {
    constructor() {
        this.items = [];
    }

    queue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items.slice(-1);
    }

    isEmpty() {
        return this.items.length == 0;
    }

    clear() {
        this.items = [];
    }
}

const queue = new FIFO();
queue.queue('h');
queue.queue('e');
queue.queue('l');
queue.queue('l');
queue.queue('o');

console.log(queue);

console.log(queue.dequeue() + queue.dequeue() + queue.dequeue() + queue.dequeue() + queue.dequeue());
