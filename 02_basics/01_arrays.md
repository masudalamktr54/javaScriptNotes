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

## Notes >>

---

- Array is Non-Primitive Data Type.

- javascript array is hold all type of data.

Array declaration →

```javascript
const myArr = [0, 1, 2, 3, 4, 5, "masud", [true, { name: "masud" }]];

const myArr2 = new Array(1, 2, 3, 4);
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
