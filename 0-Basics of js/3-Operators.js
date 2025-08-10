// Types of comments 

// 1) This is a single line comment
/* 2) This is a multi-line
comment */

// Arithemetic Operators
let a = 9;
let b = 3;
console.log("a =", a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a x b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ^ b =", a ** b);

// Unary Opertors (Comes under arithemetic operators)

// 1) Increment Operator (++)
a++; // a = a + 1 (post order)
console.log("a =", a);
console.log("a =", ++a); // (pre order)
// 2) Decrement Operator (--)
b--; // b = b - 1 (post order)
console.log("b =", b);
console.log("b =", --b); // (pre order)

/* Post order means first it will print the value then it follows the command.
but,in pre order it first follows the command and then prints the value */

// Assignment Operators
// 1) "=" operator eg:- a = 8
// remaining operators are:-
let c = 7
c += 1;
console.log("c =", c);
c -= 2;
console.log("c =", c);
c *= 10;
console.log("c =", c);
c /= 6;
console.log("c =", c);
c %= 3;
console.log("c =", c);
c **= 2;
console.log("c =", c);

// Comparsion Operators

a = 10;
b = 6;
console.log("a == b is", a == b); // false
console.log("a != b is", a != b); // true
a = 10; // number
b = "10"; // string => number
console.log("a == b is", a == b); // true
console.log("a === b is", a === b); // strict operator so the o/p is false
console.log("a != b is", a != b); // false
console.log("a !== b is", a !== b); // true due to strict operator
a = 5
b = 4
console.log("a > b is", a > b); // true
console.log("a < b is", a < b); // false
console.log("5 >= 4 is", a >= b); // true
a = 9
b = 9
console.log("a <= b is", a <= b); // true
console.log("a >= b is", a >= b); // true

// Logical Operators

a = 10;
b = 10;
let cond1 = a === b;
let cond2 = a == 10;
console.log("cond1 and cond2 =", cond1 && cond2); // true
cond2 = a > b;
console.log("cond1 or cond2 =", cond1 || cond2); // true
console.log("!(10==10) =", !(a == b)); // false