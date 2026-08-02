/* 1) Create a new button element.Give it a text "click me",
background color of red and text color of white.
Insert the button as the first element inside the body tag. */

// Ans)
let newBtn = document.createElement("Button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

/* 2) Create a <p> tag in html,give it a class and some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice,how you overwrite the class name when you add a new one?
Solve this problem using classList*/

// Ans)
let para = document.querySelector(".content");
para.classList.add("newClass");