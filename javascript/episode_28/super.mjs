class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello my name is ${this.name}`);
    }
}

class Bird extends Animal {
    constructor(name, wingSpread) {
        super(name);
        this.wingSpread = wingSpread;
    }

    fly() {
        console.log(`I am flying`);
    }
}

class BirdOfPrey extends Bird {
    constructor(name, wingSpread, color) {
        super(name, wingSpread);
        this.color = color;
    }

    attack() {
        console.log(`I am attacking`);
    }

    fly() {
        super.fly();
        console.log('I am a bird of prey I am flying 100km/h');
    }
}

const spatz = new Bird('spatz', '20cm');
const adler = new BirdOfPrey('Weißkopfadler', '2m', 'black&white');

adler.fly();
