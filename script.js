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

// function game() {
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     console.log("You - ", + playerScore + " | Computer - ", + computerScore);
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     console.log("You - ", + playerScore + " | Computer - ", + computerScore);
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     console.log("You - ", + playerScore + " | Computer - ", + computerScore);
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     console.log("You - ", + playerScore + " | Computer - ", + computerScore);
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     console.log("You - ", + playerScore + " | Computer - ", + computerScore);

//     if (playerScore > computerScore) {
//         return "You won!";
//     } else if (computerScore > playerScore) {
//         return "You lost, yikes";
//     } else {
//         return "Tie";
//     }
// }

let computerScore = 0;
let playerScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let div = document.createElement('div');
div.setAttribute('id','mainDiv');

let showScore = document.createElement('h4');
let showResult = document.createElement('h4');



// Select rock event
rock.addEventListener('click', selectRock);
// Select paper event
paper.addEventListener('click', selectPaper);
// Select scissors event
scissors.addEventListener('click', selectScissors);


function selectRock(e) {
    playerSelection = 'rock';
    // console.log(playRound(playerSelection, getComputerChoice()));
    div.innerHTML = '<h3>'+(playRound(playerSelection, getComputerChoice()))+'</h3>';
    document.body.appendChild(div);

    showScore.style.color = 'blue';
    showScore.innerHTML = '<h4> You - '+playerScore+' - '+computerScore+' - Computer</h4>';
    mainDiv.appendChild(showScore);

    if (playerScore === 5){
        showResult.innerHTML = '<h4> You won! </h4>';
        mainDiv.appendChild(showResult);
        disableBtn();
        resetGame();
    } else if (computerScore === 5) {
        showResult.innerHTML = '<h4> Computer won! </h4>';
        mainDiv.appendChild(showResult);
        disableBtn();
        resetGame();
    }
}

function selectPaper(e) {
    playerSelection = 'paper';
    // console.log(playRound(playerSelection, getComputerChoice()));
    div.innerHTML = '<h3>'+(playRound(playerSelection, getComputerChoice()))+'</h3>';
    document.body.appendChild(div);

    showScore.style.color = 'blue';
    showScore.innerHTML = '<h4> You - '+playerScore+' - '+computerScore+' - Computer</h4>';
    mainDiv.appendChild(showScore);

    if (playerScore === 5){
        showResult.innerHTML = '<h4> You won! </h4>';
        mainDiv.appendChild(showResult);
        disableBtn();
        resetGame();
    } else if (computerScore === 5) {
        showResult.innerHTML = '<h4> Computer won! </h4>';
        mainDiv.appendChild(showResult);
        disableBtn();
        resetGame();
    }
}

function selectScissors(e) {
    playerSelection = 'scissors';
    // console.log(playRound(playerSelection, getComputerChoice()));
    div.innerHTML = '<h3>'+(playRound(playerSelection, getComputerChoice()))+'</h3>';
    document.body.appendChild(div);

    showScore.style.color = 'blue';
    showScore.innerHTML = '<h4> You - '+playerScore+' - '+computerScore+' - Computer</h4';
    mainDiv.appendChild(showScore);

    if (playerScore === 5){
        showResult.innerHTML = '<h4> You won! </h4>';
        mainDiv.appendChild(showResult);
        disableBtn();
        resetGame();
    } else if (computerScore === 5) {
        showResult.innerHTML = '<h4> Computer won! </h4>';
        mainDiv.appendChild(showResult);
        disableBtn();
        resetGame();
    }
}

function disableBtn() {
    rock.setAttribute("disabled", 1);
    paper.setAttribute("disabled", 1);
    scissors.setAttribute("disabled", 1);
}

function resetGame() {
    let button = document.createElement('button');
    button.textContent = 'Try Again';

    button.addEventListener('click', resetText)
    mainDiv.appendChild(button);

    function resetText() {
        div.innerHTML = '';
        showScore.innerHTML = '';

        rock.removeAttribute("disabled");
        paper.removeAttribute("disabled");
        scissors.removeAttribute("disabled");

        playerScore = 0;
        computerScore = 0;
    }
}