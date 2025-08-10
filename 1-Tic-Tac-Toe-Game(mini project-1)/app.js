let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-but");
let newGameButton = document.querySelector("#newgame");
let turnO = true;
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
        if (!gameActive || box.innerText !== "")
            return;

        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        box.style.pointerEvents = "none";

        checkWinner();
        checkDraw();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            gameActive = false;
            highlightBoxes(a, b, c);
            setTimeout(() => {
                alert(`🎉 Congratulations! Winner is ${val1} ✨`);
            }, 100);
            disableAllBoxes();
            return;
        }
    }
};

const checkDraw = () => {
    if (!gameActive) {
        return
    };

    const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
        gameActive = false;
        setTimeout(() => {
            alert("It's a draw! 😅");
        }, 100);
        disableAllBoxes();
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => box.style.pointerEvents = "none");
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
        box.style.backgroundColor = ""; // optional: reset styles
    });
    turnO = true;
    gameActive = true;
};

// Hook up buttons
resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);

// Optional: highlight winning pattern
const highlightBoxes = (a, b, c) => {
    boxes[a].style.backgroundColor = "lightgreen";
    boxes[b].style.backgroundColor = "lightgreen";
    boxes[c].style.backgroundColor = "lightgreen";
};

