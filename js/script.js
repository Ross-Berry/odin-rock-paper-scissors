function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor((Math.random() * 3))];
}

function playRound(playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase()

    if (playerLowerCase === "rock" && computerSelection === "paper") {
        return "You Lose!";
    } else if (playerLowerCase === "rock" && computerSelection === "scissors") {
        return "You Win!";
    } else if (playerLowerCase === "rock" && computerSelection === "rock") {
        return "Draw!";    
    } else if (playerLowerCase === "paper" && computerSelection === "rock") {
        return "You Win!";
    } else if (playerLowerCase === "paper" && computerSelection === "scissors") {
        return "You Lose!";
    } else if (playerLowerCase === "paper" && computerSelection === "paper") {
        return "Draw!"; 
    } else if (playerLowerCase === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    } else if (playerLowerCase === "scissors" && computerSelection === "paper") {
        return "You Win!";
    } else if (playerLowerCase === "scissors" && computerSelection === "scissors") {
        return "Draw!"; 
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt("Choose either 'rock,' 'paper,' or 'scissors'?", "")

        switch(playRound(playerSelection, computerSelection)) {
            case "You Win!":
                console.log(`Player wins round ${i}`)
                playerScore++
            break;
            case "You Lose!":
                console.log(`Computer wins round ${i}`)
                computerScore++
            break;
            case "Draw!":
                console.log(`Round ${i} draw`)
            break;
        }
    }
    
    calcWinner(playerScore, computerScore);
}

function calcWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Player won by ${playerScore} to ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Computer won by ${computerScore} to ${playerScore}`)
    } else {
        console.log(`It's a tie of ${playerScore} - ${computerScore}`)
    }
}

let playerSelection = "";
let computerSelection = getComputerChoice();

game();