import Observer from './observer.js';

export default class Observable {
    #observers = [];

    subscribe(observer) {
        if (observer instanceof Observer) {
            this.#observers.push(observer);
        }
    }

    unsubsribe(remObserver) {
        if (remObserver instanceof Observer) {
            this.#observers = this.#observers.filter(observer => observer !== remObserver);
        }
    }

    autoNotify() {
        const changeUsername = document.querySelector('.change-username-input');

        changeUsername.addEventListener('keyup', e => {
            this.notify(e.target.value);
        });
    }

    notify(data) {
        this.#observers.forEach(observer => observer.update(data));
    }
}
