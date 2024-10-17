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
