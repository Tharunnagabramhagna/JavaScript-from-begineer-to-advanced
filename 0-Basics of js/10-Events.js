// Event handling

let button1 = document.querySelector("#but1");

button1.onclick = () => {
    console.log("Button was clicked");
    let a = prompt("Enter your favourite number");
    a = parseFloat(a);
    a++;
    console.log("Player No.", a);
    console.log("Welcome to Squid Game");
};

button1.onmouseover = (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
};

let button2 = document.querySelector("#but2");

button2.ondblclick = () => {
    console.log("Button was double clicked");
    console.log("Let's add two numbers");
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

let divBox = document.querySelector("div");

divBox.onmouseover = () => {
    console.log("You inside the box");
    let fullName = prompt("What's your name?");
    console.log(`Nice to meet you ${fullName}`)
};

divBox.onmouseover = () => {
    console.log("You inside the box");
};

/* NOTE :-
1) Event can be re-written.
2) In-line event code is not valid in front of js event code. */

// Event Listeners

// 1) addEventListener
let button3 = document.querySelector("#but3");

button3.addEventListener("click", () => {
    console.log("Chatgpt is a Amazing AI-handler1");
});

button3.addEventListener("click", () => {
    console.log("Chatgpt is a Amazing AI-handler2");
});

let handler3 = () => {
    console.log("Chatgpt is a Amazing AI-handler3");
}

button3.addEventListener("click", handler3);

button3.addEventListener("click", (evt) => {
    console.log("Chatgpt is a Amazing AI-handler4");
    console.log(evt);
});

button3.removeEventListener("click", handler3);
// It adds content don't replace it.

// Practice Question

/* 1) Create a toggle button that changes the screen to
dark theme when clicked and light theme when clicked again.*/

// Ans)

let themeButton = document.querySelector("#theme");
let body = document.querySelector("body");
let currTheme = "Light";

themeButton.addEventListener("click", () => {
    if (currTheme === "Light") {
        currTheme = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currTheme = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(`You are in ${currTheme} theme`);
});

const hoverText = document.querySelector("#hovertext");
const hiddenPara = document.querySelector("#hiddenpara");

hoverText.addEventListener("mouseover", () => {
    hiddenPara.style.display = "block";
});

hoverText.addEventListener("mouseout", () => {
    hiddenPara.style.display = "none";
});
