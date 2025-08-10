// FUNCTIONS INTRODUCTION

// 1)
function myFunction() {
    console.log("I need to master JS");
    console.log("JS means Javascript");
}

myFunction();
myFunction();

//2)
function work(msg, num) {
    // parameter => input
    console.log(msg * num);
    console.log(msg + num);
}

work("Hello guys", 100); //Argument
// output => NaN => Not a Number , "Hello guys100"

//3)
function sum(num1, num2) {
    s = num1 + num2;
    console.log("Sum =", s);
}

sum(3, 4);

//4) Return method
function sub(num1, num2) {
    // Local variable => block scope
    minus = num1 - num2;
    return minus;
}

let num = sub(10, 6);
console.log("Subtraction =", num);

// The parameters inside function doesn't exist outside the block.
// We can't write anything after return function.

// Arrow Functions
// Compact and Modern way of writing a functions

// Sum Function
function sum(a, b) { // Normal Function
    return a + b;
}

const Arrowsum = (a, b) => { // Arrow Function
    return a + b;
};
console.log("3 + 4 =", Arrowsum(3, 4));

// Multiplication Function
function multi(a, b) {
    return a * b;
}

let Arrowmulti = (a, b) => {
    return a * b;
};
console.log("10 x 2 =", Arrowmulti(10, 2));

// Arrow function are allow to modify
Arrowmulti = 30;

const printHello = () => {
    console.log("Hello!");
};
printHello();

// Practice Questions

/* 1) i) Create a function using the "function" keyword that takes a string as
an argument and returns the number of vowels in the string.
ii) Create an arrow function to perform the same task */

// Ans) i)
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    return count;
}
console.log("Number of Vowels =", countVowels("Tharun"));

// Ans) ii)
const countVow = (str) => {
    let count = 0
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    return count;
};
console.log("Vowels count =", countVow("Marvelstudios"));

// ForEach Loop in Arrays

// Callback function
// A callback is a function passed as an argument to another function.
// 1)
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printnum(num) {
    console.log(num);
});
// 2)
arr = ["Hyderabad", "chennai", "Delhi", "Pune"];
arr.forEach((str) => {
    console.log(str);
});
// 3)
let arrNames = ["Rakesh", "Rohith", "Arjun", "Varun"];
arrNames.forEach((str) => {
    console.log(str.toUpperCase());
});
// 4)
let arrCities = ["delhi", "mumbai", "pune"]
arrCities.forEach((str, idx, arr) => {
    console.log(str.toUpperCase(), idx, arr);
});

// Practice Question

/* 1) For a given array of numbers,print the square 
 of each number using the foreach loop. */

// Ans)
let arrNum = [1, 2, 3, 4, 5, 6];
arrNum.forEach((num) => {
    console.log(`Square of ${num} = ${num ** 2}`);
});
// Another method
// let calculateSquare = (num) => {
//    console.log(`Square of ${num} = ${num ** 2}`);
//};
// num.forEach(calculateSquare);

// Some more "ARRAY METHODS"

// 1) Map Method
let oldArr = [27, 45, 69, 87];
let newArr = oldArr.map((val) => {
    return val * 3;
})
console.log("New Array =", newArr);
console.log("Old Array =", oldArr);
// Old Array doesn't Change.

// 2) Filter Merhod
let ogArr = [15, 24, 37, 46, 55, 68];
let evenArr = ogArr.filter((val) => {
    return val % 2 === 0;
})
console.log("Even Array =", evenArr);

// 3) Reduce Method
// Ex-1)
let numArr = [1, 2, 3, 4];
const ouput = numArr.reduce((result, val) => {
    return result + val;
});
console.log("Sum =", ouput);

// Ex-2)
let arr1 = [1, 13, 5, 2, 7];
const result = arr1.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log("Largest Number =", result);

// Ex-3)
let arr2 = [20, 101, 128, 39, 77];
const ans = arr2.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
})
console.log("Smallest Number =", ans);

// Practice Questions

/* 1) We are given array of marks of students.Filter out the
marks of students that scored 90 above. 
(Hint => You can find the array method by reading the question) */

// Ans)
let studentMarks = [89, 64, 83, 99, 92, 97, 90];
let toppers = studentMarks.filter((marks) => {
    return marks > 90;
})
console.log("Toppers of class =", toppers);

/* 2) Take a number n as input from user.Create an array of numbers from 1 to n.
1.Use the reduce method to calculate sum of all numbers in the array.
2.Use the reduce methode to calculate product of all numbers in the array. */

// Ans)
let n = prompt("Enter a number: ");
let array = [];
for (let i = 1; i <= n; i++) {
    array[i - 1] = i; // 1(0 idx),2(1 idx),3(2 idx)...
}
console.log("Array", array);
// 1.
let Sum = array.reduce((prev, curr) => {
    return prev + curr;
})
console.log("Sum of an Array =", Sum);
// 2.
let Factorial = array.reduce((prev, curr) => {
    return prev * curr;
})
console.log("Factorial of n =", Factorial);