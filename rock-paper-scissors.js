let userScore = 0;
let computerScore = 0;

const winMap = {
    rock : "scissor",
    scissor : "paper",
    paper : "rock"

};

function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3);

    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getUserChoice() {
    return prompt("Rock, paper, or scissors?"); 
}

function playRound(userChoice, computerChoice, winMap) {
    const user = userChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (user == computer) {
        console.log("It's a tie!");
    } else if (computer == winMap[user]) {
        userScore++;
        console.log(`You win! ${user} beats ${computer}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${user}`);
    }

    console.log(`You: ${userScore} Computer: ${computerScore}`);
}

function playGame() {
    let userChoice, computerChoice;

    for (let i = 0; i < 5; i++) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice, winMap);
    }

    console.log(`Final score: You: ${userScore} Computer: ${computerScore}`);
}

playGame();