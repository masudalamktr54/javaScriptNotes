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
