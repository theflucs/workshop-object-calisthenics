## Rule #5:  One dot per line
Limit to one object navigation operator (dot) per line of code, avoiding method chaining and respecting the Law of Demeter.

> **NOTE:** This rule doesn't apply if you are intentionally using the **Builder Pattern** or the **Fluent Pattern**

### Benefits:
- Reduces coupling between objects and their internal structures
- Makes code more robust against changes in object relationships
- Improves testability through better abstraction
- Makes debugging easier by isolating where errors could occur


### Refactor strategies
- Use intermediate variables to break up chains
- Create delegate methods that hide navigation details
- Apply the "Tell, Don't Ask" principle
- Restructure code to avoid needing to traverse object graphs

### Rule violated
```js
function calculateShippingCost(order) {
  const shippingCost = order.getCustomer().getAddress().getCountry().getShippingRate() * order.getTotalWeight();
  
  if (order.getCustomer().getMembershipLevel().hasDiscount()) {
    return shippingCost * 0.9;
  }
  
  return shippingCost;
}
```

### Rule observed
```js
function calculateShippingCost(order) {
  const customer = order.getCustomer();
  const address = customer.getAddress();
  const country = address.getCountry();
  const shippingRate = country.getShippingRate();
  const totalWeight = order.getTotalWeight();
  
  const shippingCost = shippingRate * totalWeight;
  const membership = customer.getMembershipLevel();
  
  return membership.hasDiscount() 
       ? shippingCost * 0.9
       : shippingCost;
}
```