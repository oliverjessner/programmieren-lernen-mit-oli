// Last in First out
class LIFO {
    constructor() {
        this.items = [];
    }

    push(item) {
        if (this.items.length < 10000) {
            this.items.push(item);

            return true;
        } else {
            console.error('stack overflow');

            return false;
        }
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items.slice(-1);
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

const stack = new LIFO();
stack.push('h');
stack.push('e');
stack.push('l');
stack.push('l');
stack.push('o');

console.log(stack);

console.log(stack.pop() + stack.pop() + stack.pop() + stack.pop() + stack.pop());
