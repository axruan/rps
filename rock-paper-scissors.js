let userScore = 0;
let computerScore = 0;
let userChoice = "";
let computerChoice = "";
let winner = "";

const winMap = {
    rock : "scissors",
    scissors : "paper",
    paper : "rock"

};

function isGameOver() {
    if (userScore == 5) {
        winner = "You win!";
        return true;
    } else if (computerScore == 5) {
        winner = "You lose!";
        return true;
    }
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
const restartBtn = document.querySelector("#restart-button")
const endGameModal = document.querySelector(".modal");
const modalHeader = document.querySelector(".modal-header")
const overlay = document.querySelector("#overlay");

rockBtn.addEventListener("click", () => roundHandler("rock"));
scissorBtn.addEventListener("click", () => roundHandler("scissors"));
paperBtn.addEventListener("click", () => roundHandler("paper"));

restartBtn.addEventListener("click", () => restart())

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
    hideModal();
}

function openModal() {
    modalHeader.textContent = `${winner}`;
    endGameModal.style.display = "block";
    overlay.style.display = "block";
}

function hideModal() {
    endGameModal.style.display = "none";
    overlay.style.display = "none";
}

