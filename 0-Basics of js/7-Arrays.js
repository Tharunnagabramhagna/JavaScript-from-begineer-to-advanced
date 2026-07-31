// ARRAYS INTRODUCTION
// Collection of items
// Array is a special type of object in Js
// Unlike strings, arrays are mutable

let marks = [97, 69, 76, 89, 10];
let heroes = ["ironman", "hawkeye", "wanda", "black widow", "hulk", "thor"];

console.log(marks);
console.log(`Length of marks = ${marks.length}`); //property
console.log(heroes);
console.log(`Length of heroes = ${heroes.length}`);
console.log(typeof heroes); // Array is a special type of object
// Explaination :
// key : value => idx : elements of Array
/* 
   for array marks,
   0 : 97
   1 : 69
   2 : 76
   3 : 89
   4 : 10
 */
console.log(marks[1]); // Array Indices
console.log(heroes[3]);
marks[2] = 81;
console.log(marks); // replace of values in Array

// Looping over an Array

//  Print array elements for loop
for (let i = 0; i < heroes.length; i++)
    console.log(heroes[i]);

// Print array elements for-of loop

let cities = ["Delhi", "Chennai", "Mumbai", "Bangalore", "Vizag", "Pune", "Hyderabad"];

for (let city of cities)
    console.log(city);

// Upper casing the Array elements using for-of Loop

for (let hero of heroes)
    console.log(hero.toUpperCase());

// Lower casing the Array elements using for-of Loop

let animals = ["MONKEY", "LION", "TIGER", "ELEPHANT"]
for (let animal of animals)
    console.log(animal.toLowerCase());

/* Practice Question */

/* 1) For a given array with marks of students => [85,97,44,37,76,60]
Find the average marks of the entire class? */

// Ans)
marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks)
    sum += val;
let average = sum / marks.length // formula for avg in arrays
console.log(`Average Marks of the Class = ${average} marks`);

/* 2) For a given array with prices of 5 items => [250,645,300,900,50] 
All items have an offer of 10% OFF on them. Change the array to store
final price after applying offer. */

// Ans)
let items = [250, 645, 300, 900, 50];
let i = 0;
console.log("\nArray before giving discount : ");
console.log(items);
console.log("\nArray after giving discount : ");
// First method
for (let val of items) {
    items[i] -= val / 10;
    i++;
}
// Second method (simple way)
/*for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10
    items[i] -= offer;
} */
console.log(items);


/* ARRAY METHODS */

let foodItems = ["pasta", "pizza", "burger"];

// 1) Adds a item to last place of array (mutable method)
console.log("\nMenu before pushing a new items : ");
console.log(foodItems)
console.log("\nMenu after pushing a new items : ");
foodItems.push("roti","lemon rice"); // push multiple elements once
// &
foodItems.push("dosa"); // push only single item
console.log(foodItems);

// 2) Deletes the last item in an array (mutable method)
console.log("\nMenu after popping dosa : ");
foodItems.pop(); // Deleted Dosa
console.log(foodItems);
// store the deleted item
console.log("\nMenu after popping lemon rice : ");
let deleted = foodItems.pop();
console.log("Deleted", deleted);
console.log(foodItems);

// 3) Convert an array to string (immutable method)
console.log("\nMenu as string : ")
console.log(foodItems.toString());
marks = ["90", "67", "82", "85", "72"]
console.log("\nMarks as string : ");
console.log(marks.toString());

// 4) Join multiple arrays and return result (immutable method)
let marvelHeroes = ["vision", "thor", "ironman", "hulk"];
let dcHeroes = ["flash", "superman", "batman"];
console.log(marvelHeroes.concat(dcHeroes));

// 5) Join in Start (mutable method & similar to push)
// Add at the starting of the array
console.log("\nAvengers Before age of ultron : ");
console.log(marvelHeroes);
console.log("\nAvengers After age of ultron : ");
marvelHeroes.unshift("Wanda");
console.log(marvelHeroes);

// 6) Delete the starting values in array (mutable method & similar to pop)
// pop at the starting od the array
console.log("\nJustice Legue Trio : ");
console.log(dcHeroes);
let remove = dcHeroes.shift();
console.log("\nJustice League Best Duo : ");
console.log(dcHeroes);
console.log("deleted", remove);

// 7) Returns a piece of the array
console.log("\nAvengers Team : ",marvelHeroes.slice());
console.log("\nMarvel's Cutie Couple : ");
console.log(marvelHeroes.slice(0, 2));

// 8) Change original array (syntax : splice(add,remove,replace))
let num = [1, 2, 3, 4, 5, 6, 7];
console.log("\nnum Array Before changes : ");
num.splice(); // no change 
console.log(num);

// Add Element
console.log("Splice change-1 : ");
num.splice(4, 0, 69);
console.log(num);

// Remove Element
console.log("Splice change-2 : ");
num.splice(5, 1);
console.log(num);

// Remove and Replace Element
console.log("Splice change-3 : ");
num.splice(1, 2, 107, 108);
console.log(num);
console.log("Splice change-4 : ");
num.splice(6, 1, 20);
console.log(num);

// splice as slice
console.log("Splice change-5 : ");
console.log(num.splice(3)); // => slice(3:7)

/* Practice Question */

/* 3) Create an array to store companies => "Bloomberg","Microsoft","Uber","Google","IBM","Netfilx"
a.Remove the first company from the array
b.Remove Uber & Add Ola in its place
c.Add Amazon at the end. */

// Ans)
// a.
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfilx"];
// companies.splice(0,1);
// (or)
companies.shift();
console.log(companies);
//b.
companies.splice(1, 1, "Ola");
console.log(companies);
//c.
// companies.splice(5, 0, "Amazon");
// (or)
companies.push("Amazon");
console.log(companies);