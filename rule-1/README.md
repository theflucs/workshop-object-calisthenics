## Rule #1: One level of indentation per method
Methods should have only one level of indentation. If you have more, it's a sign that your method is doing too many things and should be broken down into smaller, more focused methods.

### Benefits:
- Improves readability by reducing complexity
- Leads to smaller, more cohesive methods
- Makes code easier to test and debug
- Forces you to name and extract operations, improving the vocabulary of your code

**Example:** Instead of having nested loops or conditions, extract the inner blocks into their own well-named methods.

### Refactor strategies
- Extract Method refactoring for each nested block
- Split complex conditionals into separate methods
- Create helper methods that encapsulate specific behaviors
- Move nested loops into their own dedicated methods

### Rule violated
```js
 function checkUser(user) {
  if (user.isActive()) {
    if (user.hasPermission('admin')) {
      if (user.getLoginAttempts() < 3) {
        return true;
      }
    }
  }
   
  return false;
}
```

### Rule observed
```js
function checkUser(user) {
  if (!user.isActive()) return false;
  if (!user.hasPermission('admin')) return false;
  if (user.getLoginAttempts() >= 3) return false;
  
  return true;
}
```