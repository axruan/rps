let userScore = 0;
let computerScore = 0;

const winMap = {
    rock : "scissors",
    scissors : "paper",
    paper : "rock"

};

function isGameOver() {
    return (userScore == 5 || computerScore == 5);
}

function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3);

    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return;
    } else if (computerChoice == winMap[userChoice]) {
        userScore++;
    } else {
        computerScore++;
    }
}

// UI elemnts
const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");
const text = document.querySelector(".text");
const rockBtn = document.querySelector("#rock");
const scissorBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");

let userChoice = "";
let computerChoice = "";

rockBtn.addEventListener("click", () => roundHandler("rock"));
scissorBtn.addEventListener("click", () => roundHandler("scissors"));
paperBtn.addEventListener("click", () => roundHandler("paper"));

function roundHandler(choice) {
    if (isGameOver()) {
        return;
    }
    
    computerChoice = getComputerChoice();
    userChoice = choice;
    playRound(userChoice, computerChoice);
    updateScore();
    updateText(userChoice, computerChoice);
    roundWinner = "";

    if (isGameOver()) {
        openModal();
    }
}

function updateScore() {
    userScoreText.textContent = `Your Score: ${userScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

function updateText(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        text.textContent = "It's a tie!";
    } else if (computerChoice == winMap[userChoice]) {
        text.textContent = `You win! ${capitalize(userChoice)} beats ${computerChoice}!`;
    } else {
        text.textContent = `You lose! ${capitalize(computerChoice)} beats ${userChoice}!`
    }
}

function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function restart() {
    userScore = 0;
    computerScore = 0;
    updateScore()
    text.textContent = "First to five wins!";
}

function openModal() {

}

