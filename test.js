const testString = "Java and Javascript are not the same";

console.log(testString.endsWith("same")); // true
console.log(testString.endsWith("Same")); // false -> case sensitive
console.log(testString.endsWith("J")); // false
console.log(testString.endsWith("J", 10)); // true -> true with index value
