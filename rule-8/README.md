## Rule #8: No classes with more than two instance variables
Limit classes to having no more than two instance variables, forcing you to think deeply about proper object composition and cohesion.

### Benefits:
- Promotes high cohesion within classes
- Encourages identification of hidden concepts and abstractions
- Results in more modular, composable designs
- Helps avoid the "God Object" anti-pattern

### Refactor strategies
- Extract related fields into new component classes
- Identify missing domain concepts to encapsulate related data
- Apply composition over inheritance
- Use value objects to group related attributes

### Rule violated
```js
class OrderService {
  constructor(
    userRepository,
    productRepository,
    inventoryService,
    paymentGateway,
    orderRepository,
    emailService,
    logger,
    taxCalculator,
    shippingService,
    discountCalculator
  ) {
    this.userRepository = userRepository;
    this.productRepository = productRepository;
    this.inventoryService = inventoryService;
    this.paymentGateway = paymentGateway;
    this.orderRepository = orderRepository;
    this.emailService = emailService;
    this.logger = logger;
    this.taxCalculator = taxCalculator;
    this.shippingService = shippingService;
    this.discountCalculator = discountCalculator;
  }
  
  createOrder(userId, items) {
    // Implementazione con molte dipendenze
  }
}
```

### Rule observed
```js
class OrderService {
  constructor(orderFactory, orderRepository) {
    this.orderFactory = orderFactory;
    this.orderRepository = orderRepository;
  }
  
  createOrder(orderRequest) {
    const order = this.orderFactory.createFrom(orderRequest);
    return this.orderRepository.save(order);
  }
}
```

```js
class OrderFactory {
  constructor(productRepository, inventoryService) {
    this.productRepository = productRepository;
    this.inventoryService = inventoryService;
  }
  
  createFrom(orderRequest) {
    // Crea l'ordine usando le dipendenze
  }
}
```

```js
class OrderNotifier {
  constructor(emailService, logger) {
    this.emailService = emailService;
    this.logger = logger;
  }
  
  notifyOrderCreated(order) {
    // Invia notifiche
  }
}
```