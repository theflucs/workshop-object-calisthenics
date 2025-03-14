## Rule #3: Wrap all primitives and strings
Create specific types that encapsulate primitives and strings, adding domain meaning and behavior to otherwise generic values.

### Benefits:
- Increases code expressiveness through domain-specific types
- Prevents primitive obsession (a well-known code smell)
- Centralizes validation and formatting logic
- Makes impossible states unrepresentable through type constraints


### Refactor strategies
- Create value objects for domain concepts (Money, EmailAddress, PhoneNumber)
- Add validation and behavior methods to these wrapper classes
- Replace primitive parameters with typed objects
- Group related primitives into meaningful business objects

### Code that violates the rule
```js
function procPymnt(usr, amt, curr, pType) {
  const tx = curr === "EUR" ? amt * 0.22 : amt * 0.1;
  const tamt = amt + tx;
  
  if (usr.pHist && usr.pHist.lstPymt > 0 && pType === "cc") {
    return { sts: "ok", ttl: tamt, fee: tamt * 0.03 };
  }
  
  return { sts: "err", ttl: tamt, msg: "inv pymt method" };
}
```

### Rule observed
```js
function processPayment(user, amount, currency, paymentType) {
  const tax = currency === "EUR" ? amount * 0.22 : amount * 0.1;
  const totalAmount = amount + tax;
  
  if (user.paymentHistory && user.paymentHistory.lastPayment > 0 && paymentType === "creditCard") {
    return { status: "ok", total: totalAmount, fee: totalAmount * 0.03 };
  }
  
  return { status: "error", total: totalAmount, message: "Invalid payment method" };
}
```