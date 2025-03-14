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

### Rule violated
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

### Rule violated
```js
function calculateShipping(order) {
  if (order.isInternational()) {
    return order.getWeight() * 10;
  } else if (order.isExpress()) {
    return order.getWeight() * 5;
  } else {
    return order.getWeight() * 2;
  }
}
```

### Rule observed
```js
const shippingRates = {
  international: order => order.getWeight() * 10,
  express: order => order.getWeight() * 5,
  standard: order => order.getWeight() * 2
};
```

```js
function calculateShipping(order) {
  if (order.isInternational()) return shippingRates.international(order);
  if (order.isExpress()) return shippingRates.express(order);
  return shippingRates.standard(order);
}
```

```js
// order.type = "international" | "express" | "standard"
function calculateShipping(order) {
  const shippingRateStrategy = shippingRates[order.type] 
                            ?? shippingRates["standard"];
  
  return shippingRateStrategy(order);
}
```
