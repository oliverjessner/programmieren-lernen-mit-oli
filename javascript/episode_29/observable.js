import Observer from './observer.js';

export default class Observable {
    #observers = [];

    subscribe(observer) {
        if (observer instanceof Observer) {
            this.#observers.push(observer);
        }
    }

    unsubsribe(remObserver) {
        if (observer instanceof Observer) {
            this.#observers = this.#observers.filter(observer => observer !== remObserver);
        }
    }

    notify(data) {
        this.#observers.forEach(observer => observer.update(data));
    }
}
