class Singleton {
    constructor(name) {
        if (!Singleton._instance) {
            this.name = name;
            Singleton._instance = this;
        }

        return Singleton._instance;
    }

    whoami() {
        console.log(`I am ${this.name}`);
    }
}

const instance = new Singleton('Oli');
const instance2 = new Singleton('Not Oli');

instance.whoami();
instance2.whoami();
