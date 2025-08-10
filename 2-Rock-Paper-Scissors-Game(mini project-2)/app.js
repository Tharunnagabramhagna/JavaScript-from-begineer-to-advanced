let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// Generate Computer choice function
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Display if the game draws
const drawGame = () => {
    setTimeout(() => {
        alert("It was a Draw.😅");
        msg.innerText = "😅Sorry,It was a Draw.Try again!😅";
        msg.style.backgroundColor = "yellow";
    }, 100)
};

// To show Winner of Game
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `✨You Won the round🎉.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `😭You Lost the round😔.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// To track the User choice
const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    // Store the computer choice here
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors and paper case
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock and scissors case
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock and paper case
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// To track choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked that is", userChoice);
        playGame(userChoice);
    });
});