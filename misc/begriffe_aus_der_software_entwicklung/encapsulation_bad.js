class Account {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

const account = new Account('Alice', 1000);
console.log(account.balance);
account.balance = 2000;
console.log(account.balance);
