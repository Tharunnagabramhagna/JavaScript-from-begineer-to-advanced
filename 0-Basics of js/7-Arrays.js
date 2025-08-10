// ARRAYS INTRODUCTION
// Collection of items
// Array is a special type of object in Js

let marks = [97, 69, 76, 89, 10];
let heroes = ["ironman", "spiderman", "superman", "batman", "hulk", "thor"];

console.log(marks);
console.log(`Length of marks = ${marks.length}`); //property
console.log(heroes);
console.log(`Length of heroes = ${heroes.length}`);
console.log(typeof heroes);
console.log(marks[1]); // Array Indices
console.log(heroes[3]);
marks[2] = 81;
console.log(marks); // replace of values in Array
// Array are always mutable in Javascript

// Looping over an Array

// for loop
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// for-of loop

let cities = ["Delhi", "Chennai", "Mumbai", "Bangalore", "Vizag", "Pune", "Hyderabad"];

for (let city of cities) {
    console.log(city);
}

// Upper casing the Array using for-of Loop

for (let hero of heroes) {
    console.log(hero.toUpperCase());
}

// Lower casing the Array using for-of Loop

let animals = ["MONKEY", "LION", "TIGER", "ELEPHANT"]
for (let animal of animals) {
    console.log(animal.toLowerCase());
}
// Practice Question

/* 1) For a given array with marks of students => [85,97,44,37,76,60]
Find the average marks of the entire class? */

// Ans)
marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let average = sum / marks.length
console.log(`Average marks of the class = ${average} marks`);

/* 2) For a given array with prices of 5 items => [250,645,300,900,50] 
All items have an offer of 10% OFF on them. Change the array to store
final price after applying offer. */

// Ans)
let items = [250, 645, 300, 900, 50];
let i = 0;
// First method
for (let val of items) {
    let offer = val / 10;
    items[i] -= offer;
    i++;
}
// Second method (simple way)
/*for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10
    items[i] -= offer;
} */
console.log(items);

// ARRAY METHODS 

let foodItems = ["panner", "pizza", "burger", "roti", "lemon rice"];

// 1) Adds a item to array
foodItems.push("dosa");
console.log(foodItems);

// 2) Deletes the last item in an array
foodItems.pop();
console.log(foodItems);
// Also store the deleted item
let deleted = foodItems.pop();
console.log("Deleted", deleted);
console.log(foodItems);

// 3) Convert an array to string
console.log(foodItems.toString());
marks = ["90", "67", "82", "85", "72"]
console.log(marks.toString());
// This method wouldn't change the original array.

// 4) Join multiple arrays and return result
let marvelHeroes = ["vision", "thor", "ironman", "hulk"];
let dcHeroes = ["flash", "superman", "batman",];
console.log(marvelHeroes.concat(dcHeroes));

// 5) Join in Start
marvelHeroes.unshift("Wanda");
console.log(marvelHeroes);

// 6) Delete the starting values in array
let remove = dcHeroes.shift();
console.log(dcHeroes);
console.log("deleted", remove);

// 7) Returns a piece of the array
console.log(marvelHeroes.slice(0, 2));

// 8) Change original array (add,remove,replace)
let num = [1, 2, 3, 4, 5, 6, 7];
num.splice(1, 2, 107, 108);
console.log(num);

// Add Element
num.splice(4, 0, 69);
console.log(num);

// Remove Element
num.splice(5, 1);
console.log(num);

// Replace Element
num.splice(6, 1, 20);
console.log(num);

// Practice Question

/* 3) Create an array to store companies => "Bloomberg","Microsoft","Uber","Google","IBM","Netfilx"
a.Remove the first company from the array
b.Remove Uber & Add Ola in its place
c.Add Amazon at the end. */

// Ans)
// a.
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfilx"];
// companies.splice(0,1);
// console.log(companies); (or)
companies.shift();
console.log(companies);
//b.
companies.splice(1, 1, "Ola");
console.log(companies);
//c.
// companies.splice(5, 0, "Amazon");
// console.log(companies) (or)
companies.push("Amazon");
console.log(companies);