class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello my name is ${this.name}`);
    }
}

class Bird extends Animal {
    fly() {
        this.speak();
        console.log(`I am flying`);
    }
}

class BirdOfPrey extends Bird {
    attack() {
        console.log(`I am attacking`);
    }
}

const adler = new BirdOfPrey('Weißkopfadler');

adler.fly();
adler.attack();
