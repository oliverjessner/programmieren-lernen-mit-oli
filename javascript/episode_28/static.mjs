class BankAccount {
    static bankName = 'Olis bank';
    balance = 0;

    constructor(name) {
        this.name = name;
    }

    static compare(a, b) {
        return b.balance - a.balance;
    }
}

const olisAcc = new BankAccount('oli');
const timsAcc = new BankAccount('tim');
const hugosAcc = new BankAccount('hugo');
const all = [olisAcc, timsAcc, hugosAcc];

olisAcc.balance = 10;
timsAcc.balance = 100;
hugosAcc.balance = 53;

console.log(BankAccount.bankName);
