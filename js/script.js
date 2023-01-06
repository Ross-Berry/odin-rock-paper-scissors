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

    const div = document.querySelector('div');
    const btns = document.querySelectorAll('button');

    btns.forEach(btn => btn.addEventListener('click', e => {
        switch(playRound(e.target.textContent, getComputerChoice())) {
            case "You Win!":
                playerScore++
                div.textContent = playerScore === 5 ? calcWinner(playerScore, computerScore) : `Player: ${playerScore} - Computer: ${computerScore}`
            break;
            case "You Lose!":
                computerScore++
                div.textContent = computerScore === 5 ? calcWinner(playerScore, computerScore) : `Player: ${playerScore} - Computer: ${computerScore}`
            break;
            case "Draw!":
                div.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
            break;
        }
    }));
}

function calcWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `Player won by ${playerScore} to ${computerScore}`
    } else if (playerScore < computerScore) {
        return `Computer won by ${computerScore} to ${playerScore}`
    } else {
        return `It's a tie of ${playerScore} - ${computerScore}`
    }
}

game();