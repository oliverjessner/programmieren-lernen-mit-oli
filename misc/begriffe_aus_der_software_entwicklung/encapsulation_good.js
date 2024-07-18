class Account {
    #owner;
    #balance;

    constructor(owner, balance) {
        this.#owner = owner;
        this.#balance = balance;
    }

    getOwner() {
        return this.#owner;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log('Deposit amount must be positive');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Invalid withdrawal amount');
        }
    }
}

const account = new Account('Alice', 1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(200);
console.log(account.getBalance()); // 1300
account.withdraw(2000); // Invalid withdrawal amount
console.log(account.getBalance()); // 1300
