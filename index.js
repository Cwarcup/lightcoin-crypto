class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let trans of this.transactions) {
      balance += trans.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  
  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }
}

// Withdrawal subclass
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}

// Deposit subclass
class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}




// DRIVER CODE

const myAccount = new Account("cwarcup");

let t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1.value);

let t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);


let t3 = new Deposit(120.00, myAccount);
t3.commit();
// console.log('Transaction 3', t3);
