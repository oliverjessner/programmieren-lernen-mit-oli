class NamedArray extends Array {
    pushCounter = 0;

    constructor(name, ...items) {
        super(...items);
        this.name = name;
    }

    push(value) {
        super.push(value);
        this.pushCounter++;
    }
}

const arr = new NamedArray('counter', 11, 22, 33, 44);

arr.forEach(a => console.log(a));
