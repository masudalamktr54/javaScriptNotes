> > > **01_basics**

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

# String in javascript - 11

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

# Array in javascript - 14 - 15

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

## Object Dsestructuring

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
