export default class InpupObserver {
    #domObject;

    update(text) {
        this.#domObject.setAttribute('placeholder', text);
    }
}
