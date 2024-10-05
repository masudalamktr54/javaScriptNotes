# Data types summary - 09

```javascript
//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
```

### Notes >>

- JavaScript is a **dynamic type language**. It means that the data type of a variable can change at any time.

## Data types of operators and results

| Operator    | Result      | Description                                                                                                                                                                                                                                            |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `undefined` | "undefined" | undefined is a primitive value that is automatically assigned to variables that have just been declared or to function parameters for which no argument is provided. It is also the value returned by functions that do not explicitly return a value. |
| `null`      | "object"    | null is a special value that represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as a falsy value in conditional expressions.                                                            |
| `Boolean`   | "boolean"   | A boolean is a primitive data type that can have one of two values: true or false. Booleans are commonly used in conditional statements to control the flow of a program.                                                                              |
| `String`    | "string"    | A string is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript and can be created using single quotes ('), double quotes ("), or backticks (`) for template literals.                          |
| `object`    | "object"    | An object is a collection of key-value pairs. Objects are used to store data and more complex entities.                                                                                                                                                |
