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

- Array.concat() - concatenates two or more arrays and returns a new array. and (...) spread operator also work as a array concatenation.

**example**

```javascript
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//  Spread Operator (...)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
```
