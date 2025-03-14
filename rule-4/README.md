## Rule #4: First-class collections
Any collection should be wrapped in a class that provides behavior specific to what the collection contains, rather than manipulating raw arrays or lists.

### Benefits:
- Encapsulates collection operations within a domain-relevant class
- Prevents collection manipulation from being scattered throughout the code
- Makes collection-related logic reusable and testable
- Adds domain meaning to generic collection operations

### Refactor strategies
- Create dedicated classes for collections with domain-specific names
- Move operations that manipulate collections into these wrapper classes
- Add domain-specific methods that express business rules
- Encapsulate filtering, sorting, and transformation logic

### Rule violated
```js

```

### Rule observed
```js

```