export default class List {
    constructor() {
        if (!List._instance) {
            this.dom = document.querySelector('#todo-list');
            List._instance = this;
        }

        return List._instance;
    }
}
