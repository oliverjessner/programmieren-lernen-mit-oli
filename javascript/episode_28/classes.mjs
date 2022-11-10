// very simple explanation
class CoffeeMaschine {
    // public properties
    name = 'no name';
    // private properties
    #outputHeatWater = 'heat water';

    constructor(name) {
        if (name) {
            this.name = name;
        }
    }

    // private method
    #heatWater() {
        console.log(this.#outputHeatWater);
    }

    // public method
    brewCoffee() {
        this.#heatWater();
        return 'coffee';
    }
}

const cm1 = new CoffeeMaschine('miele');
const cm2 = new CoffeeMaschine('AEG');
const cm3 = new CoffeeMaschine();

console.log(cm1.brewCoffee());
console.log(cm1);
