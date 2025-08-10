// DOM => Document Object Model
console.log("This is a JS file");
alert("Hello!");

// Window object
// This is a global object
// All the js code is stored here
window.console.log("Hello window!");
// Even our file knows that window exists.

// To see the code of html
console.log(window.document);
// To see document properties
console.dir(window.document);
// Access the document properties
console.dir(document.body);
// View the code of document
console.log(document.body);
// Access a specific key in document
console.dir(document.body.childNodes[1]);
// To change any thing on html
// Can be written directly in browser console
// This type of changes are called Dynamic Changes
// console.dir(document.body.style.background = "red");

// DOM MANIPULATION

// 1) Selecting with id
let heading = document.getElementById("heading"); // h1
console.dir(heading);

// 2) Selecting many with class
let headings = document.getElementsByClassName("header-class");
console.dir(headings);
console.log("Headings by class =", headings);

// 3) Selecting with tags
let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);

// 4) Query Selector

// Gives first element
let firstElement = document.querySelector("p");
console.dir(firstElement);
// Gives All elements
let allElements = document.querySelectorAll("p");
console.dir(allElements); // returns a Node list

// Gives classes
let allClasses = document.querySelectorAll(".header-class");
console.dir(allClasses);

// Gives id
let id = document.querySelector("#heading");
console.dir(id);

// I) PROPERTIES

// 1) Tag Name
console.log(heading.tagName);
console.log(firstElement.tagName);

// Children Nodes topic
console.dir(document.body.children[0]);
console.dir(document.querySelector("div").children);

// 2) Inner Text
let div = document.querySelector("div");
console.dir(div.innerText);
// Change innertext
// div.innerText = "abcd"; // Try in console

// 3) Inner HTML
console.dir(div.innerHTML);
// Change innerhtml
// div.innerHTML = "<div>inner div</div>"; // Try in console

// Change h1
let heading2 = document.querySelector("#heading2");
heading2.innerHTML = "<i>HTML and CSS included</i>";

// 4) Text Content
let heading3 = document.querySelector("#heading3");
console.dir(heading3.textContent);
// To see hidden text

// Practice Questions

/* 1) Create a H2 heading element with text-"Hello JavaScript".
Append "from SRM AP Student" to this text using JS.*/

let h2 = document.querySelector("h2");
h2.innerText += " from SRM AP Student";
console.log(h2);
// (or)
// console.log(h2.append(" from SRM AP Student"));

/* 2) Create 3 divs with common class name- "box".
Access them and add some unique text to each of them. */

let divs = document.querySelectorAll(".box");
let i = 1;
for (div of divs) {
    div.innerText += ` 
    New unique value ${i}`
    i++;
}

// II) Attributes

// 1) to get the attribute value
div = document.querySelector("div");
let divId = div.getAttribute("id");
console.log(`Id of div = ${divId}`);
let divName = div.getAttribute("name");
console.log(`Name of div = ${divName}`);

// 2) to set the attribute value
let para1 = document.querySelector("#para1");
console.log(para1.setAttribute("class", "myClass"));
let para2 = document.querySelector("#para2");
console.log(para2.setAttribute("class", "prClass"));

// III) Style
div.style.backgroundColor = "purple";
div.style.backgroundColor = "paleturquoise";
div.style.fontStyle = "italic";
div.style.fontSize = "20px";
// div.style.visibility = "hidden";

// IV) Insert Elements
let newButton1 = document.createElement("button");
newButton1.innerText = "Watch a video";
console.log(newButton1);

let newButton2 = document.createElement("button");
newButton2.innerText = "Start";
console.log(newButton2);

let newButton = document.createElement("button");
newButton.innerText = "Start";
console.log(newButton);

let topHeading = document.createElement("h1");
topHeading.innerText = "DOM Document";
console.log(topHeading);

let endButton = document.createElement("button");
endButton.innerText = "Click here for Next";
console.log(endButton);

let deletedItem = document.querySelector("#h4-id");

// Append and prepand methods
div.append(newButton1); // Adds at the end of the node
div.prepend(newButton2); // Adds at the start of the node

// Before and after methods
div.before(topHeading); // Adds before div
para2.before(newButton);
div.after(endButton); // Adds after div

// Remove method
deletedItem.remove();

// Append Child method (append childNodes of a parentNode)
const newListItem1 = document.createElement("li");
newListItem1.textContent = "video 3";
const newListItem2 = document.createElement("li");
newListItem2.textContent = "video 4";

let oldList = document.querySelector("#listId");

oldList.appendChild(newListItem1);
oldList.appendChild(newListItem2);

// Remove Child method (remove childNodes of a parentNode)
const allItems = document.getElementsByTagName("li");
const video2 = allItems[2];
oldList.removeChild(video2);

console.log(oldList);

// Adds a fragment to list in div
const fragment = document.createDocumentFragment();

for (let i = 4; i < 9; i++) {
    const li = document.createElement('li');
    li.textContent = `video ${i + 1}`;
    fragment.appendChild(li);  // add to fragment
}

let divUl = document.querySelector('ul')
divUl.appendChild(fragment);  // add 5 items at once