/* This is 2nd version of tic-tac-toe */

let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-game-btn");
let resetGameBtn = document.querySelector("#reset-btn");
let turnX = true;
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
        if (!gameActive || box.innerText !== "")
            return;
        box.innerText = turnX ? "X" : "O";
        turnX = !turnX;
        box.style.pointerEvents = "none";

        checkWinner();
        checkDraw();
    })
});

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let [a, b, c] = patterns;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;
        if (val1 != "" && val1 == val2 && val2 == val3) {
            gameActive = false;
            highlightBoxes(a, b, c);
            setTimeout(() => {
                alert(`🎉Congratulations! You are the winner - ${val1} 🏅`)
            }, 100);
            disableAllBoxes();
            return;
        }
    }
};

const checkDraw = () => {
    if (!gameActive)
        return;
    const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
        gameActive = false;
        setTimeout(() => {
            alert(`It's a Draw😅`)
        }, 100);
        disableAllBoxes();
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => box.style.pointerEvents = "none")
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
        box.style.backgroundColor = "";
    });
    turnX = true;
    gameActive = true;
}

const newGame = () => {
    if(!gameActive)
        resetGame();
    else 
        alert("You can't start a new game while current game runs!");
}

resetGameBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",newGame);

const highlightBoxes = (a, b, c) => {
    boxes[a].style.backgroundColor = "#E6C229";
    boxes[b].style.backgroundColor = "#E6C229";
    boxes[c].style.backgroundColor = "#E6C229";
};