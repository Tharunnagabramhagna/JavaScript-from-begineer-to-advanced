// If Statement
// 1)
let age = 21;
let drivingCar = true;

if (age >= 18 && drivingCar) {
    console.log("Here is your driving license sir!");
};
age = 16;
if (age < 18 && drivingCar) {
    console.log("You CANNOT drive a vehicle");
};
// 2)
let mode = "dark";
let color;

// single line color of conditional statements can be written without a block
if (mode === "dark")
    color = "black";
if (mode === "light") {
    color = "white";
}
console.log(color);

// If-Else Statement
// 1)
mode = "light";

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);
// 2)
age = 17;

if (age >= 18) {
    console.log("VOTE");
} else {
    console.log("NOT VOTE");
}
// 3)
let num1 = 10;
let num2 = 2;

if ((num1 + num2) % 2 === 0) {
    console.log((num1 + num2), "is a even number");
} else {
    console.log((num1 + num2), "is a odd number");
}

// Else-If Statement

mode = "blue";

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue"
} else if (mode === "pink") {
    color = "pink"
} else {
    color = "white"
}
console.log("The background color is", color);

// Ternary Operator (compact if-else)
// First Method
age = 17
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
// Second Method
age = 25
age >= 18 ? console.log("adult") : console.log("not adult");

// Input and Output
/* In Javascript we use "prompt" to get a user input
but in python we use "input" to get a user input*/

let user = prompt("What is your name?");
console.log("Hello,", user + "! Nice to meet you!");

// Switch Statement

console.log("--Guess your Day with numbers--");
// parseInt(string, radix)
// radix - tells the function what base is entered
// E.g. 10 - decimal base 10 ; 8 - octal (8 --> 08)
let num = parseInt(prompt("Enter a number (1-7) : "), 10);

switch (num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default: console.log("Enter a valid input!");
}

// Practice Questions
/* 1) Get user to input a number using prompt("Enter a number:").
Check if the number is a multiple of 5 or not. */
// Ans)
let userInput = prompt("Enter a number:");

if (userInput % 5 === 0) {
    console.log(userInput, "is a mutiple of 5");
} else {
    console.log(userInput, "is NOT a multiple of 5");
}

/* 2) Write a code which can give grades to students according to their scores:
  • 90-100 => A
  • 70-89 =>  B
  • 60-69 =>  C
  • 50-59 =>  D
  • 0-49  =>  F   */
// Ans)
let score = prompt("Enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
}

// (or) (Try it out yourself)
switch (score) {
    case 90 <= score <= 100:
        grade = "A";
        break;
    case 70 <= score <= 89:
        grade = "B";
        break;
    case 60 <= score <= 69:
        grade = "C";
        break;
    case 50 <= score <= 59:
        grade = "D";
        break;
    case 0 <= score <= 49:
        grade = "F";
        break;

    default: console.log("Enter a valid input!");
}

console.log("Based on your score, your grade is :", grade);