class Person {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`My name is ${this.name}`);
    }
}

class Policemen extends Person {
    #job = 'policemen';

    work() {
        console.log('lets catch bad guy!');
    }

    talk() {
        super.talk();
        console.log(`my job is ${this.#job}`);
    }
}

class FireFighter extends Person {
    #job = 'firefighter';

    work() {
        console.log('lets extinguish fires!');
    }
}

const bill = new Policemen('Bill');
const ted = new FireFighter('Ted');
const allPersons = [bill, ted, {}, 1, 'sdf', true];

allPersons.forEach(function (person) {
    if (person instanceof Object) {
        person.talk();
    }
});
