class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }
}

const bank = new Queue();

bank.enqueue('oli');
bank.enqueue('egon');
bank.enqueue('jeremy');

console.log(bank);
console.log(bank.dequeue() + ' ' + bank.dequeue() + ' ' + bank.dequeue());

