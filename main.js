function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"
    ) {
        return userInput;
    }  else {
        console.log("Error, please enter rock, paper, or scissors.")
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    } 
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "The computer won!"
        } else {
            return "You won!"
        }
    } else if (userChoice === "bomb") {
        return "Your the bomb! You won!";
    }
}

function playGame() {
    let userChoice = getUserChoice("bomb");
    let computerChoice = getComputerChoice();

    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
