class BankAccount {
    balance = 0;

    constructor(name) {
        this.name = name;
    }

    toString() {
        return {
            name: this.name,
            balance: this.balance,
            explanation: `This acc belongs to ${this.name}, the balance is ${this.balance}`,
        };
    }
}

const olisAcc = new BankAccount('oli');

console.log(olisAcc.toString());
