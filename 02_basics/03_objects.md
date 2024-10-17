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
