// This are strings datatypes
fullName = "Tony stark";
gender = "Male";
// This are numbers datatype
age = 70;
price = 29.6;

// x,y are special values
x = null;
y = undefined;

// This is a Big Integer data type
b = BigInt(123);

// This is a Symbol Data type
c = Symbol("Hello!")
// This are booleans
Human = true;
Nothuman = false;
console.log(fullName);
console.log(age);
console.log(price);
console.log(gender);
console.log(x);
console.log(y);
console.log(b);
console.log(c);
console.log(Human);
console.log(Nothuman);

/*NOTE = If you went to store anything in javascript
we need to create a html file to see the output
in the browser. */

/*NOTE = To check the type of a variable
   1) call the variable in the console of browser
   2) Type as 'typeof' and the variable name
   3) The output shows the variable type. (or)*/
console.log(typeof b);

// Javascript is a Dynamically typed language.
gameScore = 25;
gameScore = 29;
console.log(gameScore); // output => 29

// The above code is written in a correct order by let function.
// let function can't be re-declared but can be updated.
let penCost = 20;
penCost = 40;
penCost = 50;
console.log(penCost);

// var function can be re-declared and updated.
// People stopped used this after ES6 update in 2015.
// var function is a Global declaration function.
var amount = 10;
var amount = 20;
var amount = 40;
console.log(amount);

// To fix the above problem we use const function.
// Now the variable student is constant and can't be changed.
// simply constants can't be re-declared or updated.
const students = 20;
console.log(students);

// If we add a variable using let and we haven't added any value in it.
let z;
console.log(z); // output => undefined

// BLOCKS INTRODUCTION 
/* By using this blocks we can use one variable
in two different places like the below example.*/

// fist block
{
    let a = 10;
    console.log(a);
}
// second block
{
    let a = 2;
    console.log(a);
}

// OBJECT INTRODUCTIONA (A set of values)
// In Python this object is called as dictionary.
// They are stored in key:value format

const student = {
    name: "Arjun Kumar",
    age: 19,
    cgpa: 9.4,
    isPass: true
};
console.log(student);
console.log(typeof student["cgpa"])
console.log(typeof student.name); // type of key in objects

// First Method
console.log(student.age);
// Second Method
console.log(student["age"]);

// To increase any value of object use the below method.

student["age"] += 1;  
// (or) 
student["age"] = student["age"] + 1
console.log(student.age);

x = "123";
y = 12;

console.log(x+y); // "123" + 12 => 12312

/* Practice Questions */

/* 1) Create a const object called "product" to store information of a pen in amazon. */

// Ans)

const product = {
    penName: "Parker Jotter Standard CT Ball Pen",
    penColor: "Black",
    rating: 4,
    isDeal: true,
    price: 270,
    discount: 5.00,
    mrp: 285
};

console.log(product);
console.log("This is a",typeof product);

/* 2) Create a const object called "profile" to store information of any social media profile. */

// Ans)

const profile = {
    userName: "Satrasala Tharun",
    tweetId: "@SatrasalaTharun",
    bio: "Just a 18 years old exploring tech",
    followers: 100,
    following: 53,
    isFollow: true,
    posts: 20
};

console.log(profile);