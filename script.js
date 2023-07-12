function getComputerChoice() {
    // Use random to get number from 1 to 3
    let choice = Math.floor(Math.random() * 3) + 1;
    // console.log(choice);

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    } else {
        return "Error";
    }
}

// function getPlayerChoice() {
//     let userInput = prompt("Enter your choice ").toLowerCase();
//     return userInput;    
// }


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You won, Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lost, Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You won, Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lost, Scissors beats Paper";            
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lost, Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You won, Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "Tie";
    } else {
        return "Error";
    }

}

function game() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    // console.log("You - ", + playerScore + " | Computer - ", + computerScore);
    // console.log(playRound(getPlayerChoice(), getComputerChoice()));
    // console.log("You - ", + playerScore + " | Computer - ", + computerScore);
    // console.log(playRound(getPlayerChoice(), getComputerChoice()));
    // console.log("You - ", + playerScore + " | Computer - ", + computerScore);
    // console.log(playRound(getPlayerChoice(), getComputerChoice()));
    // console.log("You - ", + playerScore + " | Computer - ", + computerScore);
    // console.log(playRound(getPlayerChoice(), getComputerChoice()));
    // console.log("You - ", + playerScore + " | Computer - ", + computerScore);

    if (playerScore > computerScore) {
        return "You won!";
    } else if (computerScore > playerScore) {
        return "You lost, yikes";
    } else {
        return "Tie";
    }
}

let computerScore = 0;
let playerScore = 0;


// document.getElementById('rock').onclick = function(e) {
//     playerSelection = 'rock';
// }

rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissors = document.getElementById('scissors');


// Select rock event
rock.addEventListener('click', selectRock);
// Select paper event
rock.addEventListener('click', selectPaper);
// Select scissors event
rock.addEventListener('click', selectScissors);

function selectRock() {
    playerSelection = 'rock';
    console.log(playerSelection);
}

function selectPaper() {
    playerSelection = 'paper';
    console.log(playerSelection);
}

function selectScissors() {
    playerSelection = 'scissors';
    console.log(playerSelection);
}





// game();