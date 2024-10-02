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
