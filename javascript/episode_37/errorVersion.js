class Singleton {
    constructor() {
        if (Singleton._instance) {
            throw new Error("Singleton classes cant't be instantiated more than once");
        }

        Singleton._instance = this;
    }

    whoami() {
        console.log('I am a singleton class');
    }
}

const instance = new Singleton();
const instance2 = new Singleton();

instance.whomai();
instance2.whomai();
