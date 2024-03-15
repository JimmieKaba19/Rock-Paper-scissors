// a rock paper scissors game
/*
first generate random number to store as computers move
categorize random numbers as different outcomes
as user for input
compare users input to computer outcomes
display messages for each outcome
*/

//buttons call
const playBtn = document.querySelectorAll("button");
const displayArea = document.querySelector(".display-result");
const roundResult = document.querySelector(".round-result");
const scoreBoard = document.querySelector(".score-board");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const tieScore = document.querySelector(".tie-score");

scoreBoard.setAttribute("style", "background-color: #fff; padding: 15px; border: none; margin-top: 20px; color: #1f2937; font-weight: bold; display: flex; gap: 20px; justify-content: center; text-align: center;");

let playerChoice;
let rounds = 0;

playBtn.forEach((button) => {
    button.addEventListener("click" ,(event) => {  
        //style output sections
        displayArea.setAttribute("style", "background-color: #3882f6; padding: 15px; border: none; margin-top: 20px; text-align: center; font-size: 18px; color: #fff; font-weight: bold;")
        
        roundResult.setAttribute("style", "background-color: #fff; padding: 15px; border: none; margin-top: 20px; color: #1f2937; font-weight: bold; text-align: center;"); 
                
        playerChoice = button.className;
        roundResult.textContent = `${playRound(playerSelection, computerSelection)}`;
        if(playerScore.textContent == 5) {
            displayArea.textContent = "You Win";
        } else if (computerScore.textContent == 5) {
            displayArea.textContent = "You lose";
        } else if (tieScore.textContent == 5) {
            displayArea.textContent = "You'll Tied";
        }else {
            rounds++
            displayArea.textContent = `${rounds} round(s) played`;
        }
    });
    
});  

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

let playerSelection;
let computerSelection;

//compares player results and computer result
function playRound(playerSelection, computerSelection){
    //player move
    playerSelection = playerChoice;
    console.log(playerSelection)
    //computer move
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    
    if(playerSelection === computerSelection) {
        tieScore.textContent++;
        return result = `You have a tie, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if(playerSelection === "Rock" && computerSelection == "Scissors"){
        playerScore.textContent++;
        return result = `You won, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore.textContent++;
        return result = `You lost, you picked ${playerSelection} and computer picked ${computerSelection}.`;
    } else if(playerSelection === "Paper" && computerSelection == "Rock"){
        playerScore.textContent++;
        return result = `You won, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore.textContent++;
        return result = `You lost, you picked ${playerSelection} and computer picked ${computerSelection}.`;
    } else if(playerSelection === "Scissors" && computerSelection == "Paper"){
        playerScore.textContent++;
        return result = `You won, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore.textContent++;
        return result = `You lost, you picked ${playerSelection} and computer picked ${computerSelection}.`;
    } else {
        return result = `You entered an unrecognized move ${playerSelection}`
    }
}

//rewrite the following code above but in simpler more cleaner code