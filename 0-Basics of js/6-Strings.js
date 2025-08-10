// STRING INTRODUCTION AND USES
// Strings are immutable in Javascript

let str = "Javascript and html";

// Length of string
console.log(str.length);
console.log(str.length - 1); // reduce length value by 1

// String Incides
console.log(str[0]);
console.log(str[3]);

// Template Literials
let specialString = `This is a template literial,1+2+3 = ${1 + 2 + 3}`;
console.log(specialString);
console.log(typeof specialString);
// We can even do maths operations in this template literials

// Use of template literials
let obj = {
    item: "pen",
    price: 10
};
console.log(`The cost of this ${obj.item} is ${obj.price} rupees`);
// By using this we can combine sentence with variables in one place
// This is called String Interploation

// Espace character
console.log("American\nDollar"); // next line space
console.log("Indian\tRupees"); // tab space
str = "Indian\tRupees";
console.log(str.length); // o/p => 13
// "\t" is taken as single character

// STRING METHODS OR STRING FUNCTION
// This methods don't change the value of original string

str = "Javascript programming";
console.log(str.toUpperCase()); // 1) Upper case everything
console.log(str.toLowerCase()); // 2) Lower case everything

str = "   Javascript   ";
console.log(str.trim()); // 3) removes whitespaces

str = "Hello World";
console.log(str.slice(1, 3)); // 4) returns part of string
console.log(str.slice(1));

let str1 = "Marvel";  // 5) joins str2 with str1
let str2 = "Studios";

console.log(`This is a ${str1.concat(str2)} movie`);
// we can also use "str1 + str2" to concat strings.

str = "Hello"; // 6) Replace any part of string
console.log(str.replace("lo", "p"));
str = "Hellololo";
console.log(str.replaceAll("lo", "p"));

str = "IloveJS"; // 7) Find any character in strinf
console.log(str.charAt(3)); // o/p => v
console.log(str.charAt(1)); // o/p => l

let browserType = "firefox"; // 7) Include method

if (browserType.includes("fox")) {
    console.log("Found fox!");
} else {
    console.log("No fox here!");
};

browserType = "mozilla"; // 8) startsWith method

if (browserType.startsWith("mo")) {
    console.log("Found mo!");
} else {
    console.log("No mo here!");
};

let fruitName = "pineapple" // 9) endsWith method 

if (fruitName.endsWith("apple")) {
    console.log("Found apple!");
} else {
    console.log("No apple here!");
};
/* 10) You can find the position of a substring 
inside a larger string using the indexOf(). */

let tagline = "Javascript is used by web developers and app developers";

console.log(tagline.indexOf("developers")); // 26
console.log(tagline.indexOf("x")); // -1

/* This returns -1 because the character
x is not present in the string. */

let firstOccurrence = tagline.indexOf("developers");
let secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 26
console.log(secondOccurrence);// 45


let str3 = "Hello World";
str3[0] = "P";
console.log(str3);
/* The above string wouldn't change because strings are immutable
 so, we use replace method in this case.*/

// Practice Question

/* Prompt the user to enter their full name. Generate a username for
them based on the input.Start username with @,followed by their full name
and enging with the fullname length. 
eg: user = "rahulKumar", username = "@rahulKumar10" */

// Ans)

let fullName = prompt("Enter your full name without spaces:");

let userName = `@${fullName}${fullName.length}`;

console.log(userName);