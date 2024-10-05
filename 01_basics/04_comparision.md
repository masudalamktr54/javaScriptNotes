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
