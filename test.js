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
