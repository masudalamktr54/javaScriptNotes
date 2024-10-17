# Number and Maths in javascript - 12

```javascript
const score = 400;
console.log(score); // 400

const balance = new Number(100);

console.log(balance); // [Number: 100]
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 -> absolute value is -ve value converted to +ve
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // Random value between 0 to 1
console.log(Math.random() * 10 + 1); // Random value between 1 to 10 with decimal
console.log(Math.floor(Math.random() * 10) + 1); // Random value between 1 to 10 without decimal

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random value between 10 to 20
```

### Notes >>

---

## Number Methods

| Method           | Syntax                                    |
| ---------------- | ----------------------------------------- |
| toExponential()  | `number.toExponential()`                  |
| toFixed()        | `number.toFixed()`                        |
| toPrecision()    | `number.toPrecision(precision)`           |
| toString()       | `number.toString(radix)`                  |
| toLocaleString() | `number.toLocaleString(locales, options)` |
| valueOf()        | `number.valueOf()`                        |

## Most used methods in Maths

| Method  | Syntax                                     |
| ------- | ------------------------------------------ |
| abs()   | `Math.abs(number)`                         |
| ceil()  | `Math.ceil(number)`                        |
| floor() | `Math.floor(number)`                       |
| round() | `Math.round(number)`                       |
| max()   | `Math.max(number1, number2, number3, ...)` |
| min()   | `Math.min(number1, number2, number3, ...)` |
| sqrt()  | `Math.sqrt(number)`                        |
| cbrt()  | `Math.cbrt(number)`                        |

## Random Numbers in Maths

```javascript
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random value between 10 to 20
```
