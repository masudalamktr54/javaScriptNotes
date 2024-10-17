> > > **01_basics**

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

# Data type and ECMAScript-05

```javascript
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Masud");

let name = "masud";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

- `use strict` is used to treat all JS code as newer version.

- `alert( 3 + 3)` in browser alert is give alart box. In nodejs alert is not defined.

- Type of `undefined` is "undefined".

- Type of `null` is "object".

# Datatype conversion confusion - 06, and Why string to number conversion - 07

```javascript
let score = "masud";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "masud";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "masud" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " masud";

let str3 = str1 + str2;
// console.log(str3);  // hello masud

// console.log("1" + 2);  // 12
// console.log(1 + "2");  // 12
// console.log("1" + 2 + 2);  // 122
// console.log(1 + 2 + "2");  // 32

// console.log( (3 + 4) * 5 % 3);  // 2

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
```

---

### Notes >>

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

_link to study : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion_

# Comparision of datatypes - 08

```javascript
console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===   // strict equality operator

console.log("2" === 2); //false
```

---

### Notes >>

```javascript
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
```

- The reason is that am equal check "==" and comparision `"<", ">", "<=", ">="` work diffrently.

- Comparisions convert null to a number, treating it as 0.

- That's why `null >= 0` returns "true" and `null > 0 , null == 0` returns "false".

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

# String in javascript - 11

```javascript
const myName = "masud";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String("masud-md-com");

console.log(gameName[0]); // m
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 12
console.log(gameName.toUpperCase()); // MASUD-MD-COM
console.log(gameName.charAt(2)); // s
console.log(gameName.indexOf("t")); // -1

const newString = gameName.substring(0, 4);
console.log(newString); // masu

const anotherString = gameName.slice(-3, 12);
console.log(anotherString); // com

const newStringOne = "   masud    ";
console.log(newStringOne); //   masud
console.log(newStringOne.trim()); // masud

const url = "https://masud.com/masud%20alam";

console.log(url.replace("%20", "-")); // https://masud.com/masud-alam

console.log(url.includes("sundar")); // false

console.log(gameName.split("-")); // [ 'masud', 'md', 'com' ]
```

### Notes >>

- `String` is a primitive data type in JavaScript.

- strings can be represented in two ways:

  1. as primitive values.

  ```javascript
  let primitiveString = "Hello, World!";
  let templateLiteral = `Hello, ${name}!`;
  console.log(primitiveString.length); // 13
  console.log(primitiveString.toUpperCase()); // "HELLO, WORLD!"
  console.log(typeof primitiveString); // "string"
  ```

  2. as objects.

  ```javascript
  let stringObject = new String("Hello, World!");
  console.log(typeof stringObject); // "object"
  ```

## String Methods

| Method              | Syntax                                         |
| ------------------- | ---------------------------------------------- |
| at()                | `string.at(index)`                             |
| charAt()            | `string.charAt(index)`                         |
| charCodeAt()        | `string.charCodeAt(index)`                     |
| codePointAt()       | `string.codePointAt(index)`                    |
| concat()            | `string1.concat(string2)`                      |
| endWith()           | `endsWith(searchString)`                       |
| fromCharCode()      | `String.fromCharCode(num1, ..., numN)`         |
| includes()          | `string.includes(searchString)`                |
| indexOf()           | `string.indexOf(searchString)`                 |
| lastIndexOf()       | `string.lastIndexOf(searchString)`             |
| localCompare()      | `string.localeCompare(compareString)`          |
| match()             | `string.match(regex)`                          |
| padEnd()            | `string.padEnd(targetLength, padString)`       |
| padStart()          | `string.padStart(targetLength, padString)`     |
| repeat()            | `string.repeat(count)`                         |
| replace()           | `string.replace(searchValue, replaceValue)`    |
| replaceAll()        | `string.replaceAll(searchValue, replaceValue)` |
| search()            | `string.search(regex)`                         |
| slice()             | `string.slice(start, end)`                     |
| split()             | `string.split(separator)`                      |
| startsWith()        | `string.startsWith(searchString)`              |
| substring()         | `string.substring(start, end)`                 |
| toLocaleLowerCase() | `string.toLocaleLowerCase()`                   |
| toLocaleUpperCase() | `string.toLocaleUpperCase()`                   |
| toLowerCase()       | `string.toLowerCase()`                         |
| toUpperCase()       | `string.toUpperCase()`                         |
| trim()              | `string.trim()`                                |
| trimStart()         | `string.trimStart()`                           |
| trimEnd()           | `string.trimEnd()`                             |
| valueOf()           | `string.valueOf()`                             |

## Most useful javascript methods

1. **string.indexOf(substr, [start])** — returns the index position of character value passed with method. If not found, -1 is returned.

```javascript
const testString = new String("Java and Javascript are not the same!");

console.log(testString.indexOf("e")); // 22
console.log(testString.indexOf("e", 34)); // 35 -> Start from the 35th index position
console.log(testString.indexOf("Java")); // 0 -> Match count from the first
console.log(testString.indexOf("java")); // -1 -> Not found (case sensitive)
console.log(testString.indexOf("Java", 8)); // 9
```

2. **string.lastIndexOf(substr, [start])** — returns the index position of character value passed with method. If not found, -1 is returned.

```javascript
const testString = new String("Java and Javascript are not the same!");

console.log(testString.lastIndexOf("e")); // 35
console.log(testString.lastIndexOf("e", 34)); // 30 -> Start from the 30th index position
console.log(testString.lastIndexOf("Java")); // 9 -> Match count from the first
console.log(testString.lastIndexOf("java")); // -1 -> Not found (case sensitive)
console.log(testString.lastIndexOf("Java", 8)); // 0
```

3. **string.replace(originalstr,newstr)** — search for a specified regular expression in a given string and then replace it if the match occurs.

```javascript
const testString = new String("Java and Javascript are not the same!");
// console.log(testString.replace(/Java/g, "JavaScript"));

console.log(testString.replace("Java", "TypeScript"));
console.log(testString.replace(/Java/, "TypeScript")); // Non global
console.log(testString.replace(/Java/g, "TypeScript")); // global search modifier
console.log(testString.replace(/java/, "JavaScript")); // case sensitive
```

4. **string.slice(start, [end])** — returns a substring of the string based on the “start” and “end” index arguments.

```javascript
const testString = new String("Java and Javascript are not the same!");

console.log(testString.slice(2, 9)); // va and
console.log(testString.slice(9)); // Javascript are not the same! -> starting Index
console.log(testString.slice(-5, -1)); // same
console.log(testString.slice(-5)); // same! -> start fetching from the end of the starting
```

5. **string. split()** — converts a string into an array. You have to pass a character such as a comma (,) or space to tell where to split the string.

```javascript
const testString = new String("Java and Javascript are not the same!");

const testStringTwo = new String("Java, and, Javascript, are, not, the, same!");

console.log(testString.split()); // [ 'Java and Javascript are not the same!' ] -> return a array
console.log(testString.split(" ")); // [ 'Java', 'and', 'Javascript', 'are', 'not', 'the', 'same!' ] -> separate by comma space
console.log(testString.split("")); // [ 'J', 'a', 'v', 'a', ' ', 'a', 'n','d', ' ', 'J', 'a', 'v', 'a', 's','c', 'r', 'i', 'p', 't', ' ', 'a','r', 'e', ' ', 'n', 'o', 't', ' ','t', 'h', 'e', ' ', 's', 'a', 'm','e', '!' ]  -> separate by alphabet

console.log(testStringTwo.split(",")); // [ 'Java', ' and', ' Javascript', ' are', ' not', ' the', ' same!' ]  -> when string is sprate with comma than work to seprate comma
```

6. **string.trim()** — returns a new string with removed white space from the start and end of the string.

```javascript
const testString = new String("     Java and javascript     ");

console.log(testString.trim()); // Java and javascript -> Remove whitespaces
```

7. **string.trimStart()** — returns a new string with removed white space from the start of the string.

```javascript
const testString = new String("     Java and javascript     ");

console.log(testString.trimStart()); // Java and javascript    -> Remove whitespaces from start
```

8. **string.trimEnd()** — returns a new string with removed white space from the end of the string.

```javascript
const testString = new String("     Java and javascript     ");

console.log(testString.trimEnd()); //     Java and javascript -> Remove whitespaces from end
```

9. **string.charAt(x)** — Returns the character at the “x” position within the string.

```javascript
const testString = new String("Java and javascript");

console.log(testString.charAt(6)); // n
```

10. **string.concat(string1, string2, …)** — Combines one or more strings into the existing one and returns the combined string.

_**Note:-** Original string is not modified._

```javascript
const firstName = "Masud ";
const lastName = "Alam ";

const fullName = firstName.concat(lastName);

const fullNameWithAnotherText = firstName.concat(
  lastName,
  "`You can add text here...`"
);

console.log(fullName); // Masud Alam
console.log(fullNameWithAnotherText); // Masud Alam `You can add text here...`
```

11. **string.includes(searchString)** — returns whether searching String may be found in the source string.

```javascript
const testString = "Java and Javascript are not the same!";

console.log(testString.includes("Javascript")); // true
console.log(testString.includes("javascript")); // false
```

12. **string.toUpperCase()** — Returns the string with all of its characters converted to uppercase.

_**Note:-** This method doesn’t make any change in the original string._

```javascript
const testString = "Java and Javascript are not the same!";

console.log(testString.toUpperCase()); // JAVA AND JAVASCRIPT ARE NOT THE SAME!
```

13. **string.toLowerCase()** — Returns the string with all of its characters converted to lowercase.

_**Note:-** This method doesn’t make any change in the original string._

```javascript
const testString = "Java and Javascript are not the same!";

console.log(testString.toLowerCase()); // java and javascript are not the same!
```

14. **string.ends With(searchString[, length])** — returns whether the source string ends with the searching string.

```javascript
const testString = "Java and Javascript are not the same";

console.log(testString.endsWith("same")); // true
console.log(testString.endsWith("Same")); // false -> case sensitive
console.log(testString.endsWith("J")); // false
console.log(testString.endsWith("J", 10)); // true -> true with index value
```

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

# Date and Time in javascript - 13

```javascript
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
});
```

### Notes >>

---

- JavaScript `Date` objects represent a single moment in time in a platform-independent format. `Date` objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the _epoch_).

- `YYYY` is the year, with four digits (`0000` to `9999`), or as an expanded year of `+` or `-` followed by six digits. The sign is required for expanded years. `-000000` is explicitly disallowed as a valid year.

- `MM` is the month, with two digits (`01` to `12`).

- `DD` is the day of the month, with two digits (`01` to `31`).

- `HH` is the hour, with two digits (`00` to `23`). As a special case, `24:00:00` is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to `00`.

- `mm` is the minute, with two digits (`00` to `59`). mm is the minute, with two digits (00 to 59). Defaults to `00`.

- `ss` is the second, with two digits (`00` to `59`). ss is the second, with two digits (00 to 59). Defaults to `00`.

- `SSS` is the millisecond, with three digits (`000` to `999`). SSS is the millisecond, with three digits (000 to 999). Defaults to `000`.

> > Various components can be omitted, so the following are all valid:

- Date-only form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`

- Date-time form: one of the above date-only forms, followed by `T`, followed by `HH:mm`, `HH:mm:ss`, or `HH:mm:ss.sss`. Each combination can be followed by a time zone offset.

**For example**, `"2011-10-10"` (date-only form), `"2011-10-10T14:48:00"` (date-time form), or `"2011-10-10T14:48:00.000+09:00"` (date-time form with milliseconds and time zone) are all valid date time strings.

> > > **02_basics**

# Array in javascript - 14

```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
```

# Array Part-2 (15)

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Case - 1
// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

// Case - 2
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//  Spread Operator (...)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Case - 3
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// Case - 4
console.log(Array.isArray("Masud")); // false
console.log(Array.from("Masud")); // [ 'M', 'a', 's', 'u', 'd' ]
console.log(Array.from({ name: "masud", Phone: 1234567890 })); // interesting

// Case - 5
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
```

## Notes >>

- Array is Non-Primitive Data Type.

- javascript array is hold all type of data.

Array declaration →

```javascript
const myArr = [0, 1, 2, 3, 4, 5, "masud", [true, { name: "masud" }]];

const myArr2 = new Array(1, 2, 3, 4);
```

- Array.concat() - concatenates two or more arrays and returns a new array. and (...) spread operator also work as a array concatenation.

**example**

```javascript
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//  Spread Operator (...)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
```

## Array methods

| S.No. | Method           | Syntax                   |
| ----- | ---------------- | ------------------------ |
| 1.    | push()           | `myArr.push(6)`          |
| 2.    | pop()            | `myArr.pop()`            |
| 3.    | unshift()        | `myArr.unshift(9)`       |
| 4.    | shift()          | `myArr.shift()`          |
| 5.    | splice()         | `myArr.splice(1, 3)`     |
| 6.    | slice()          | `myArr.slice(1, 3)`      |
| 7.    | concat()         | `myArr.concat(myArr2)`   |
| 8.    | includes()       | `myArr.includes(9)`      |
| 9.    | indexOf()        | `myArr.indexOf(3)`       |
| 10.   | lastIndexOf()    | `myArr.lastIndexOf(3)`   |
| 11.   | toString()       | `myArr.toString()`       |
| 12.   | toLocaleString() | `myArr.toLocaleString()` |
| 13.   | join()           | `myArr.join('-')`        |
| 14.   | reverse()        | `myArr.reverse()`        |
| 15.   | sort()           | `myArr.sort()`           |
| 16.   | fill()           | `myArr.fill(0)`          |
| 17.   | copyWithin()     | `myArr.copyWithin(1, 3)` |
| 18.   | every()          | `myArr.every()`          |
| 19.   | some()           | `myArr.some()`           |
| 20.   | forEach()        | `myArr.forEach()`        |
| 21.   | map()            | `myArr.map()`            |
| 22.   | filter()         | `myArr.filter()`         |
| 23.   | reduce()         | `myArr.reduce()`         |
| 24.   | reduceRight()    | `myArr.reduceRight()`    |
| 25.   | find()           | `myArr.find()`           |
| 26.   | findIndex()      | `myArr.findIndex()`      |
| 27.   | flat()           | `myArr.flat()`           |

## Most used Array Methods

1. **Array.map()**

2. **Array.filter()**

3. **Array.reduce()**

4. **Array.forEach()**

5. **Array.sort()**

6. **Array.includes()**

7. **Array.indexOf()**

8. **Array.find()**

9. **Array.some()**

10. **Array.concat()**

11. **Array.flat()**

12. **Array.isArray()**

13. **Array.from()**

14. **Array.Of()**

# Objects in javascript

```javascript
// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Masud",
  "full name": "Masud Alam",
  [mySym]: "mykey1",
  age: 18,
  location: "Delhi",
  email: "masud@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Case- 1 // object Value access
console.log(JsUser.email); // masud@google.com
console.log(JsUser["email"]); // masud@google.com
console.log(JsUser["full name"]); // Masud Alam
console.log(JsUser[mySym]); // mykey1

// Case- 2 // object Value update
// JsUser.email = "masud@chatgpt.com";
// // Object.freeze(JsUser)
// JsUser.email = "masud@microsoft.com";
// console.log(JsUser);

// Case- 3 // object method
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Masud

console.log(JsUser); // {name: 'Masud','full name': 'Masud Alam',age: 18,location: 'Delhi',email: 'masud@google.com',isLoggedIn: false,lastLoginDays: [ 'Monday', 'Saturday' ],greeting: [Function (anonymous)],greetingTwo: [Function (anonymous)],[Symbol(key1)]: 'mykey1'}
```

## Notes >>

- `Object` is a primitive data type in JavaScript.
- `Object` value access is two ways:

  1. using dot notation

  ```javascript
  console.log(JsUser.email);
  console.log(JsUser.location);
  ```

  2. using square bracket notation

  ```javascript
  console.log(JsUser["email"]);
  console.log(JsUser["location"]);
  consile.log(JsUser["full name"]);
  console.log(JsUser[mySym]);
  ```

  ► <code style="color:aqua">`Symbol` datatype is always accessed using `square bracket notation`.</code>

  ► <code style="color:aqua">If object `key` is a string, it is always accessed using `square bracket notation`.</code>

## Object Instance methods →

| S.No. | Method Name            | Syntax                       |
| ----- | ---------------------- | ---------------------------- |
| 1.    | toString()             | `obj.toString()`             |
| 2.    | valueOf()              | `obj.valueOf()`              |
| 3.    | toLocaleString()       | `obj.toLocaleString()`       |
| 4.    | hasOwnPropery()        | `obj.hasOwnPropery()`        |
| 5.    | isProtypeOf()          | `obj.isPrototypeOf()`        |
| 6.    | propertyIsEnumerable() | `obj.propertyIsEnumerable()` |

## Object Static methods →

| S.No. | Method Name                 | Syntax                                         |
| ----- | --------------------------- | ---------------------------------------------- |
| 1.    | freeze()                    | `Object.freeze(obj)`                           |
| 2.    | seal()                      | `Object.seal(obj)`                             |
| 3.    | preventExtensions()         | `Object.preventExtensions(obj)`                |
| 4.    | isFrozen()                  | `Object.isFrozen(obj)`                         |
| 5.    | isSealed()                  | `Object.isSealed(obj)`                         |
| 6.    | isExtensible()              | `Object.isExtensible(obj)`                     |
| 7.    | keys()                      | `Object.keys(obj)`                             |
| 8.    | values()                    | `Object.values(obj)`                           |
| 9.    | entries()                   | `Object.entries(obj)`                          |
| 10.   | assign()                    | `Object.assign(obj1, obj2, obj3)`              |
| 11.   | getOwnPropertyDescriptors() | `Object.getOwnPropertyDescriptors(obj)`        |
| 12.   | getOwnPropertyNames()       | `Object.getOwnPropertyNames(obj)`              |
| 13.   | getOwnPropertySymbols()     | `Object.getOwnPropertySymbols(obj)`            |
| 14.   | defineProperty()            | `Object.defineProperty(obj, prop, descriptor)` |
| 15.   | defineProperties()          | `Object.defineProperties(obj, descriptors)`    |
| 16.   | create()                    | `Object.create(proto, descriptors)`            |
| 17.   | fromEntries()               | `Object.fromEntries(entries)`                  |
| 18.   | getPrototypeOf()            | `Object.getPrototypeOf(obj)`                   |
| 19.   | setPrototypeOf()            | `Object.setPrototypeOf(obj, proto)`            |
| 20.   | is()                        | `Object.is(value1, value2)`                    |

## Most used Object methods

**1. Object.assign()**

- The `Object.assign()` method copies the values of all enumerable properties from one or more source objects to a target object.

- It is used for object merging, cloning, or creating a new object with specific properties.

```javascript
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = Object.assign(obj1, obj2);
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // Here is obj1 === obj3

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // Assign to new empty Object (Not equal to obj1 === obj4)

const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // using spread operator (Not equal to obj1 === obj5)
```

**2. Object.keys()**

- This method retrieves the names of all the enumerable properties from an object. It returns an array of property names.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
  email: "masud@google.com",
  isLoggedIn: false,
};

console.log(Object.keys(instaUser)); // [ 'id', 'name', 'email', 'isLoggedIn' ]
```

**3. Object.values()**

- This method, similar to Object.keys(), gives you the values instead of the keys. It returns an array of property values.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
  email: "masud@google.com",
  isLoggedIn: false,
};

console.log(Object.values(instaUser)); // [ '123abc', 'Masud', 'masud@google.com', false ]
```

**4. Object.entries()**

- This method combines both keys and values to produce an array of pairs. Each pair, represented by an array, consists of a property name followed by its corresponding value.

```javascript
const obj1 = { 1: "a", 2: "b" };

console.log(Object.entries(obj1)); // [ [ '1', 'a' ], [ '2', 'b' ] ]
```

**5. Object.hasOwnProperty()**

- This method checks if an object has a specific property as its direct property (not inherited from its prototype).

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
  email: "masud@google.com",
  isLoggedIn: false,
};

console.log(instaUser.hasOwnProperty("id")); // true
```

**6. Object.is()**

- While it may look like the `strict equality (===)` operator, this method has some nuanced differences, especially when comparing `NaN` values.

- It checks if two values are the same, including distinguishing between positive and negative zeros.

```javascript
console.log(Object.is("hello", "hello")); // true
console.log(Object.is(NaN, NaN)); // true (whereas NaN === NaN returns false)
```

**7. Object.freze()**

Think of this as a protective shield for your object.

- Once an object is frozen, you can't add, delete, or modify its properties.

- It's useful when you want to ensure data integrity.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
};

Object.freeze(instaUser);

instaUser.name = "Saba"; // It will not work because object is frozen.

console.log(instaUser.name); // Masud
```

**8. Object.seal()**

- This method is a bit more lenient than Object.freeze(). While you still can't add or delete properties, you can modify the values of existing properties.

- It's a midway solution when you want some flexibility without adding new properties.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
};

Object.seal(instaUser);

instaUser.name = "Saba"; // work fine
console.log(instaUser.name); // Saba

instaUser.email = "masud@google.com"; // It will not work because object is sealed
console.log(instaUser.email); // undefined
```

**9. Object.defineProperties()**

- This method is your advanced tool for adding new properties or modifying existing ones.

- You can set characteristics like enumerability, writability, and configurability for the property, offering fine-grained control over its behavior.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
};

Object.defineProperties(instaUser, {
  email: {
    value: "masud@google.com",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(instaUser.email); // masud@google.com
```

**10. Object.create()**

- This method lets you create a fresh object while specifying its prototype.

- It's a powerful way to implement inheritance in JavaScript, allowing you to create new objects that inherit properties and methods from existing objects.

```javascript
const car = {
  color: "blue",
  wheels: 4,
};
const myObj = Object.create(car);

myObj.color = "red";

console.log(myObj.color); // red
```

# Object Part-2 and Part-3

```javascript
// Case - 1 // object creation, Give Keys and Values
// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Case - 2 // Object nested and access data
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "masud",
      lastname: "alam",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

// Case - 3 // Object assign method and spread operator to merge objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

const users = [
  {
    id: 1,
    email: "m@gmail.com",
  },
  {
    id: 1,
    email: "m@gmail.com",
  },
  {
    id: 1,
    email: "m@gmail.com",
  },
];

const userEmail = users[1].email;
console.log(userEmail); // m@gmail.com

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

// Object part - 3 // Object Destructuring ========
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "masud",
};

// course.courseInstructor // You can do but not recommended

const { courseInstructor: instructor, price } = course;

// console.log(courseInstructor);
console.log(instructor, price); // masud 999

// API format example =========
// {
//     "name": "masud",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [{}, {}, {}];
```

## Notes >>

- Object destructuring is a way to extract data from an object and assign it to a variable.

- It's a powerful way to extract data from an object and assign it to a variable.

```javascript
const instaUser = {
  id: "123abc",
  userName: "masudalamktr54",
};
const { id, userName: name } = instaUser;
console.log(id, name); // 123abc masudalamktr54
```

**1. Object.assign()**

- The `Object.assign()` method copies the values of all enumerable properties from one or more source objects to a target object.

- It is used for object merging, cloning, or creating a new object with specific properties.

```javascript
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = Object.assign(obj1, obj2);
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // Here is obj1 === obj3

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // Assign to new empty Object (Not equal to obj1 === obj4)

const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // using spread operator (Not equal to obj1 === obj5)
```

**2. Object.keys()**

- This method retrieves the names of all the enumerable properties from an object. It returns an array of property names.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
  email: "masud@google.com",
  isLoggedIn: false,
};

console.log(Object.keys(instaUser)); // [ 'id', 'name', 'email', 'isLoggedIn' ]
```

**3. Object.values()**

- This method, similar to Object.keys(), gives you the values instead of the keys. It returns an array of property values.

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
  email: "masud@google.com",
  isLoggedIn: false,
};

console.log(Object.values(instaUser)); // [ '123abc', 'Masud', 'masud@google.com', false ]
```

**4. Object.entries()**

- This method combines both keys and values to produce an array of pairs. Each pair, represented by an array, consists of a property name followed by its corresponding value.

```javascript
const obj1 = { 1: "a", 2: "b" };

console.log(Object.entries(obj1)); // [ [ '1', 'a' ], [ '2', 'b' ] ]
```

**5. Object.hasOwnProperty()**

- This method checks if an object has a specific property as its direct property (not inherited from its prototype).

```javascript
const instaUser = {
  id: "123abc",
  name: "Masud",
  email: "masud@google.com",
  isLoggedIn: false,
};

console.log(instaUser.hasOwnProperty("id")); // true
```
