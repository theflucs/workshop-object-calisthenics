## Rule #7: Keep all entities small
Limit the size of all entities (classes, packages, methods) to ensure they remain focused on a single responsibility.

### Benefits:
- Enforces the Single Responsibility Principle
- Makes code easier to understand and maintain
- Facilitates code reuse through proper decomposition
- Enables better testing of isolated components

### Refactor strategies
- Extract class when a class grows too large
- Split packages along cohesive boundaries
- Decompose large methods into smaller, focused methods
- Identify and separate distinct responsibilities

### Rule violated
```js
class UserService {
  constructor(database) {
    this.database = database;
  }
  
  createUser(userData) { /* logica per creare un utente */ }
  updateUser(id, data) { /* logica per aggiornare un utente */ }
  deleteUser(id) { /* logica per eliminare un utente */ }
  authenticateUser(email, password) { /* logica per autenticare */ }
  resetPassword(email) { /* logica per reset password */ }
  sendWelcomeEmail(user) { /* logica per inviare email */ }
  generateUserReport(user) { /* logica per generare report */ }
  validateUserData(data) { /* logica per validare dati */ }
}
```

### Rule observed
```js
class UserRepository {
  constructor(database) {
    this.database = database;
  }
  
  create(userData) { /* logica per creare un utente */ }
  update(id, data) { /* logica per aggiornare un utente */ }
  delete(id) { /* logica per eliminare un utente */ }
  findById(id) { /* logica per trovare un utente */ }
}
```

```js
class Authenticator {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  
  authenticate(email, password) { /* logica di autenticazione */ }
  resetPassword(email) { /* logica per reset password */ }
}
```