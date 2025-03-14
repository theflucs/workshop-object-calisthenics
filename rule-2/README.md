## Rule #2 - Don't use else keyword
This rule eliminates the ELSE clause from your code, pushing you toward early returns, guard clauses, polymorphism, or the strategy pattern.

### Benefits:
- Reduces nesting levels and cognitive complexity
- Encourages clearer, more linear code paths
- Promotes polymorphic solutions over conditional logic
- Makes code more extensible through patterns rather than conditionals

### Refactoring Strategies:

- Use guard clauses with early returns for validation
- Replace conditional logic with polymorphism
- Implement the strategy pattern for varying behaviors
- Use the null object pattern to handle special cases

### Code that violates the rule
```js
function processPayment(payment) {
  if (payment.isValid()) {
    return payment.process();
  } else {
    throw new Error("Pagamento non valido");
  }
}
```

### Rule observed
```js
function processPayment(payment) {
  if (!payment.isValid()) {
    throw new Error("Pagamento non valido");
  }
  
  return payment.process();
}
```