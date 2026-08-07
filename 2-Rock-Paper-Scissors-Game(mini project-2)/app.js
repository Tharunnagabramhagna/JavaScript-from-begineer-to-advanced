// Vaiables to store and display the score
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const drawToast = document.querySelector("#draw-toast");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// Generate Computer choice function
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // gives a decimal value between 0 to 2
    // Math.random() => 0 to 1 --> Math.random() * 3 => 0 to 2
    const randIdx = Math.floor(Math.random() * 3);
    // options => options[0], options[1], options[2] 
    return options[randIdx];
};

// Display if the game is a draw
const drawGame = () => {
    msg.innerText = "🙇𝑺𝒐𝒓𝒓𝒚,It was a 𝐝𝐫𝐚𝐰.Try again!";
    msg.style.backgroundColor = "yellowgreen";
    /* Display the toast for 2 seconds */
    drawToast.style.opacity = 1;
    /* toast is again hidden after 2 seconds */
    setTimeout(() => {
        drawToast.style.opacity = 0;
    }, 2000)
};

// To show Winner of Game
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // increment score of user
        userScorePara.innerText = userScore;
        msg.innerText = `🏆You 𝒘𝒐𝒏 the round.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "darkgreen";
    } else {
        compScore++; // increment score of comp
        compScorePara.innerText = compScore;
        msg.innerText = `🥺You 𝑳𝑶𝑺𝑻 the round.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "orangered";
    }
};

// To track the User choice
const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    // Store the computer choice here
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if (userChoice === compChoice)
        drawGame();
    else {
        let userWin = true;
        if (userChoice === "rock")
            // scissors and paper case
            userWin = compChoice === "paper" ? false : true;
        else if (userChoice === "paper")
            // rock and scissors case
            userWin = compChoice === "scissors" ? false : true;
        else // userChoice === "scissors"
            // rock and paper case
            userWin = compChoice === "rock" ? false : true;
        
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