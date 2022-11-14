export default class Observer {
    domObject;

    constructor(selector) {
        this.domObject = document.querySelector(selector);
    }

    update(text) {
        this.domObject.innerText = text;
    }
}
