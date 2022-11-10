class CoffeeMaschine {
    #waterTank = 100;
    #beans = 100;
    #name;

    constructor(name = 'no name') {
        this.#name = name;
    }

    #checkForEnoughWater(waterLoss) {
        if (this.#waterTank - waterLoss < 0) {
            throw new Error('Not enough water error');
        }
    }

    #rinse(quantity) {
        const waterLoss = quantity * 10;
        const beansLoss = quantity * 11;

        this.#checkForEnoughWater(waterLoss);
        if (this.#beans - beansLoss < 0) {
            throw new Error('Not enough beans error');
        }

        this.#beans -= beansLoss;
        this.#waterTank -= waterLoss;
    }

    #heatWater(quantity) {
        const waterLoss = quantity * 1.5;

        this.#checkForEnoughWater(waterLoss);

        this.#waterTank -= waterLoss;
    }

    brewCoffee(quantity) {
        this.#heatWater(quantity);
        this.#rinse(quantity);

        return `${this.#name} generated ${quantity} coffee(s)`;
    }

    checkWater() {
        return `Water ${this.#waterTank}l`;
    }

    checkBeans() {
        return `Beans ${this.#beans}g`;
    }

    refillWater(water) {
        this.#waterTank += water;
    }

    refillBeans(beans) {
        this.#beans += beans;
    }
}

const cm1 = new CoffeeMaschine('miele');

console.log(cm1.brewCoffee(7));
console.log(cm1.checkWater());
console.log(cm1.checkBeans());

try {
    console.log(cm1.brewCoffee(7));
    console.log(cm1.checkWater());
    console.log(cm1.checkBeans());
} catch (e) {
    cm1.refillWater(100);
    cm1.refillBeans(100);
    console.log(cm1.brewCoffee(7));
    console.log(cm1.checkWater());
    console.log(cm1.checkBeans());
}
