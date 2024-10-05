# let, const and var ki kahani-04

- Prefer not to use var because of issue in block scope and functional scope.

- In JavaScript, variables can be declared without specifying a data type, but this is not preferred.

- If you declare a variable in JavaScript and do not pass the value then it will print undefined.

- for example

```javascript
let accountState;
console.log(accountState); //output will be "undefined"
```

# Data type and ECMAScript-05

- `use strict` is used to treat all JS code as newer version.

- `alert( 3 + 3)` in browser alert is give alart box. In nodejs alert is not defined.

- Type of `undefined` is "undefined".

- Type of `null` is "object".

# Datatype conversion confusion - 06, and Why string to number conversion - 07

> > Check the datatype of a variable using `typeof`

- We can get datatype of a variable using `typeof`

```javascript
let score = "masud";

// console.log(typeof score); // or
console.log(typeof score); // string
```

> > Convert **string** to **number**

- We can use `Number()` to convert **string** to "number".

  - Type of `NaN` is "number".
  - `true` represents "1" and `false` represents "0".

```javascript
let score = "masud";

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //Number
//console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1;
// false => 0
```

> > Convert **number** to **string**

- We can use `String()` to convert **number** to "string".

```javascript
let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);  // 33
// console.log(typeof stringNumber);  // "string"
```

> > Convert **boolean** conversion

- We can use `Boolean()` to convert "boolean".

  - "1" represents `true` and "0" represents `false`.
  - " " represents `false` and "masud" represents `true`.

```javascript
let isLoggedIn = "masud";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "masud" => true
```

> > add `string` and `number`

```javascript
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
```

#### The way JavaScript handles expressions with both strings and numbers depends on the order in which they appear. Specifically:

- If a string is encountered first (or as part of an operation), JavaScript will treat the following values as strings and perform string concatenation.

- If numbers are encountered first, JavaScript will perform addition (or other arithmetic operations) until a string is encountered, after which it switches to string concatenation.

### Example >>

1. `1 + 2 + "2" → 32`

- First, JavaScript performs number addition: `1 + 2 = 3`.

- Then, when it encounters `"2"` (a string), it switches to string concatenation: `3 + "2" → "32"` (the number `3` is coerced into a string and concatenated).

2. `"1" + 2 + 2 → "122"`

- Since the first value is a string (`"1"`), JavaScript treats the entire expression as a string concatenation operation.

- `"1" + 2 → "12".`

- `"12" + 2 → "122".`

- This is why the order of operations and types in JavaScript expressions is crucial to understanding the result.

# Comparision of datatypes - 08

```javascript
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
```

- The reason is that am equal check "==" and comparision `"<", ">", "<=", ">="` work diffrently.

- Comparisions convert null to a number, treating it as 0.

- That's why `null >= 0` returns "true" and `null > 0 , null == 0` returns "false".

# Data types summary - 09

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

# Stack and Heap Memory - 10

- <code style=" color: aqua;">_Whatever variable is declared, a copy of it is available in the stack memory._</code>

- <code style=" color: aqua;">_Heap memory gives reference of original value, whatever change is made will change the original value._</code>

## Stack Memory (Primitive values)

1. **Structure** : The stack is a simple, linear data structure that stores primitive values (such as numbers, strings, booleans, null, undefined, and symbols) and references to objects and functions. It operates on a Last In, First Out (LIFO) principle.

2. **Usages** :

- The stack is used for static memory allocation.
- It stores function calls, local variables, and execution contexts.
- Each function call creates a new stack frame that contains the function's arguments and local variables.

3.  **Characteristics**:

- Fast access: Because of its LIFO nature, accessing the top of the stack is very fast.
- Limited size: The stack size is limited, which can lead to stack overflow if too much memory is used (e.g., deep recursion).

## Heap Memory (Non-Primitive values)

1. **Structure** : The heap is a more complex, dynamic memory structure used for storing objects and functions. Unlike the stack, it does not follow a specific order for allocation and deallocation.

2. **Usages** :

- The heap is used for dynamic memory allocation.
- It stores objects, arrays, and functions, which can grow in size and have a more complex lifecycle than stack-allocated data.

3.  **Characteristics**:

- Slower access: Accessing data in the heap is generally slower than accessing data in the stack due to its unordered nature.
- Slower access: Accessing data in the heap is generally slower than accessing data in the stack due to its unordered nature.

## Memory Management

JavaScript uses an automatic garbage collector to manage memory. The garbage collector periodically scans the heap to identify objects that are no longer reachable from the root (global execution context) and frees up that memory. This process helps prevent memory leaks but can introduce performance overhead.
