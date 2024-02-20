// a rock paper scissors game
/*
first generate random number to store as computers move
categorize random numbers as different outcomes
as user for input
compare users input to computer outcomes
display messages for each outcome
*/


// randomly generates computer result for executions
function getComputerChoice() {
    let computerChoice = Math.random();
    
    if(computerChoice > 0 && computerChoice <= 0.33) {
        return "Rock";
    } else if (computerChoice >= 0.3 && computerChoice <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// inputs player move for evaluation
function playerMove() {
    let playerChoice = prompt("Welcome to Rock, Paper, Scissors. Pick your move to continue...");
    return playerChoice.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerSelection;
let computerSelection;

//compares player results and computer result
function playRound(playerSelection, computerSelection){
    //player move
    playerSelection = playerMove();
    //computer move
    computerSelection = getComputerChoice();

    if(playerSelection === "rock" && computerSelection === "Rock") {
        tieScore += 1;
        return result = `You have a tie, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if(playerSelection === "rock" && computerSelection == "Scissors"){
        playerScore += 1;
        return result = `You won, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore += 1;
        return result = `You lost, you picked ${playerSelection} and computer picked ${computerSelection}.`;
    } else if(playerSelection === "paper" && computerSelection === "Paper") {
        tieScore += 1;
        return result = `You have a tie, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if(playerSelection === "paper" && computerSelection == "Rock"){
        playerScore += 1;
        return result = `You won, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore += 1;
        return result = `You lost, you picked ${playerSelection} and computer picked ${computerSelection}.`;
    } else if(playerSelection === "scissors" && computerSelection === "Scissors") {
        tieScore += 1;
        return result = `You have a tie, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if(playerSelection === "scissors" && computerSelection == "Paper"){
        playerScore += 1;
        return result = `You won, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore += 1;
        return result = `You lost, you picked ${playerSelection} and computer picked ${computerSelection}.`;
    } else {
        return result = `You entered an unrecognized move ${playerSelection}`
    }
}

//calls the playround 5 times 
function playGame() {
    for (let i = 1; i <= 5; i++){
        alert(`Game ${i}`)
        console.log(playRound(playerSelection, computerSelection));
    }

    tieScore;
    computerScore;
    playerScore;
    alert(`Total Scores:
    Player score: ${playerScore},
    Computer score: ${computerScore},
    Tie score: ${tieScore}.`);

    (playerScore > computerScore && playerScore > tieScore) ? alert("Player Wins!"):
    (tieScore > computerScore && tieScore > playerScore) ?
    alert("Result is tie!"):
    (computerScore > playerScore && computerScore > tieScore) ?
    alert("Computer Wins!"):
    alert("You ain't lucky :(")
}

playGame();