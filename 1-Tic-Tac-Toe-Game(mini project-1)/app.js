let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-but");
let newGameButton = document.querySelector("#newgame");
let turnX = true; // PlayerX / PlayerO => PlayerX is first
let gameActive = true;

/* winning patterns are stores in a 2D-array */
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
        // It is written just to see the output in console
        console.log("Button was clicked");
        // checks if game is not active (or) has text in boxes => to ignore clicks
        if (!gameActive || box.innerText !== "")
            return;
        // if it's playerX turn make the box text 'X' or else 'O'
        box.innerText = turnX ? "X" : "O";
        turnX = !turnX; // Filps the turn for next movement
        // prevents mouse clicks as it is a button
        box.style.pointerEvents = "none";

        checkWinner(); // checks if winner is found for current moves
        checkDraw(); // Check if it is a draw
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern; // pattern[idx] => variables
        // store the combinatios of answers in variables
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;
        
        /* first condition checks if board is empty,
           2nd and 3rd condition checks if the chars are same */
        if (val1 !== "" && val1 === val2 && val2 === val3) {
            gameActive = false; /* game is completed */
            // Highlights winpatterns with a color after winning
            highlightBoxes(a, b, c);
            // gives time before winning for placing the last char in box
            setTimeout(() => {
                alert(`🎉 Congratulations! Winner is ${val1} ✨`);
            }, 100);
            // After the game, no boxes are allowed to click
            disableAllBoxes();
            // Go back after the win
            return;
        }
    }
};

const checkDraw = () => {
    // Edge Case - if game is not active
    if (!gameActive) {
        return
    };
    /* Array => Converts the Nodelist into a array
       every() => loops through each and every box
       We simply store the if all boxes are filled or not */
    const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
        // As boxes are full game is finished
        gameActive = false;
        // Display the draw message with time gap
        setTimeout(() => {
            alert("It's a draw! 😅");
        }, 100);
        // After the game, no boxes are allowed to click
        disableAllBoxes();
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => box.style.pointerEvents = "none");
};

const resetGame = () => {
    boxes.forEach((box) => {
        // empty the boxes
        box.innerText = "";
        // reset the clicking of boxes
        box.style.pointerEvents = "auto";
        // resets the highlight colors 
        box.style.backgroundColor = "";
    });
    // active the game
    turnX = true;
    gameActive = true;
};

const newGame = () => {
    if(!gameActive)
        resetGame();
    else 
        alert("You can only start a new game after the current game finishes!");
}

// Hook up buttons
resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", newGame);

// Optional: highlight winning pattern
const highlightBoxes = (a, b, c) => {
    boxes[a].style.backgroundColor = "lightgreen";
    boxes[b].style.backgroundColor = "lightgreen";
    boxes[c].style.backgroundColor = "lightgreen";
};

