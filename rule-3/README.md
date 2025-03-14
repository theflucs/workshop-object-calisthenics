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


### Rule violated
```js
const age = 30;
const email = "christian.nastasi@email.com"
```

```js
const age = 440;

const age2 = "thirty-one";

const email = "christian.nastasi@email.com@something.com"

const email2 = "foo";
```

### Rule observed
```js
class Age {
  constructor(value) {
    if (!Number.isInteger(value)) throw new Error('Age must be an integer');
    if (value < 0) throw new Error('Age cannot be negative');
    if (value > 120) throw new Error('Age cannot be greater than 120');
    
    this.value = value;
    
    Object.freeze(this);
  }
  
  equals(other) {
    if (!(other instanceof Age)) {
      return false;
    }
    return this.value === other.value;
  }
  
  isAdult() {
    return this.value >= 18;
  }
  
  toString() {
    return `${this.value} years old`;
  }
}
```
