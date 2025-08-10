// 1) For Loop

// Example-1) Count from 1 to 5
for (let count = 1; count <= 5; count++) {
    console.log("Count =", count);
} // count++ => count = count + 1
console.log("The Loop has ended");

// Same Example in var case
for (var x = 1; x <= 5; x++) {
    console.log("x =", x);
}
console.log(x);  // (var is a Global value)
// Due to this reason var is not used frequently.
console.log("The Loop has ended");

// Example-2) Calculate sum from 1 to n
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
    sum += i // sum = sum + i
}
console.log("Sum =", sum);
console.log("The Loop has ended");

// 2) While Loop 

let i = 1;
while (i <= 5) {
    console.log("i =", i);
    i++;
}
console.log("The While Loop has ended");
// It needs only stopping condition in brackets().

// 3) Do-While Loop
let a = 20;
do {
    console.log("a =", a);
} while (a <= 10);
console.log("The Do-While Loop has ended");
// As a value is 20 it only prints "a = 20".
/* In this loop even if the condition is not satisfied
the loop runs atleast one time. */
// If condition is satisfied it works same as while loop.

// 4) For-of Loop

let str = "Javascript";
let size = 0;
for (let val of str) {
    console.log("val =", val);
    size++;
}  // o/p => Javascript => ["J","a","v","a","s","c","r","i","p","t"]
console.log("String size =", size); // o/p => 10
console.log("The For-of Loop has ended");

// 5) For-in Loop

let student = {
    name: "Rakesh kumar",
    age: 20,
    cgpa: 9.2,
    ispass: true
};
for (let key in student) {
    console.log("key =", key, ", value =", student[key]);
}

// Practice Question

// 1) Print all even numbers from 0 to 100.

// Ans)
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("i =", i);
    }
}

/* 2) Create a game where you start with any random game number.Ask the 
user to keep guessing the game number until the user enters the correct value. */

let gameNumber = 25;
let userInput = prompt("Guess the number:");

while (userInput != gameNumber) {
    userInput = prompt("You guessed the wrong number.guess again:");
}

console.log(userInput);
console.log("Congratulations,You entered the right number.");