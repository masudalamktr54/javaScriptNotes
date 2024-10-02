# let, const and var ki kahani-04

```javascript
const accountId = 144553;
let accountEmail = "masud@google.com";
var accountPassword = "12345";
accountCity = "delhi";
let accountState;

// accountId = 2 // not allowed because it is a const variable

accountEmail = "ma@ma.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

// if all the variables print in tabular form then use table.
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
```

- Prefer not to use var because of issue in block scope and functional scope.

- In JavaScript, variables can be declared without specifying a data type, but this is not preferred.

- If you declare a variable in JavaScript and do not pass the value then it will print undefined.

- for example

```javascript
let accountState;
console.log(accountState); //output will be "undefined"
```
