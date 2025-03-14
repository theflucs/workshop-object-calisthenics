## Rule #6:  Don't abbreviate (Use names that makes sense)
Use full, descriptive names for classes, methods, and variables instead of shortened or abbreviated versions.

### Benefits:
- Makes code immediately understandable without mental translation
- Reduces misinterpretation and confusion
- Improves searchability in codebases
- Makes code more accessible to new team members

### Refactor strategies
- Rename abbreviated identifiers to their full forms
- Use domain language from business specifications
- Consider context when naming (shorter names for smaller scopes)
- Prioritize clarity over brevity

### Rule violated
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