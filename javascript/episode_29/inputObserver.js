import Observer from './observer.js';

export default class InpupObserver extends Observer {
    update(text) {
        const placeholder = `Write a new Message ${text}`;

        this.domObject.setAttribute('placeholder', placeholder);
    }
}
