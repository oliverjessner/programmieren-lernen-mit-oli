class BankAccount {
    #balance = 0;

    // setter
    set balance(value) {
        this.#balance += value * 0.95;
    }
}

const olisAcc = new BankAccount();

olisAcc.balance = 10;
console.log(olisAcc.balance);
