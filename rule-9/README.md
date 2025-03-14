## Rule #9: No getters/setters/properties
Follow the "Tell, Don't Ask" principle by eliminating getters and setters, focusing instead on behavior-rich methods that perform operations rather than exposing internal state.

### Benefits:
- Improves encapsulation by hiding implementation details
- Moves behavior closer to the data it operates on
- Reduces feature envy and inappropriate intimacy between classes
- Creates more intention-revealing interfaces

### Refactor strategies
- Move behavior that uses the accessed data into the object that owns it
- Replace getters with methods that answer specific questions
- Replace setters with methods that perform specific actions
- Rethink object responsibilities to focus on behavior rather than data

### Rule violated
```js
class BankAccount {
  constructor() {
    this._balance = 0;
  }
  
  getBalance() {
    return this._balance;
  }
  
  setBalance(amount) {
    if (amount < 0) throw new Error('Balance cannot be negative');
    
    this._balance = amount;
  }
}
```
```js
function deposit(bankAccount, amount) {
	bankAccount.setBalance(bankAccount.getBalance() + amount);
}
```
```js
function withdraw(bankAccount, amount) {
    if (amount > bankAccount.getBalance()) 
      throw new Error('Insufficient funds');
    
    bankAccount.setBalance(bankAccount.getBalance() - amount);
}
```
### Rule observed
```js
class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this.balance += amount;
    return this.balance;
  }
  
  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdrawal amount must be positive');
    if (amount > this.balance) throw new Error('Insufficient funds');
    
    this.balance -= amount;
    return this.balance;
  }
  
  transferTo(destinationAccount, amount) {
    this.withdraw(amount);
    destinationAccount.deposit(amount);
  }
}
```