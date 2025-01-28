// Function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

//Function to get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper or scissors").toLowerCase();

    //Input validation
    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please enter rock, paper or scissors").toLowerCase();
    }

    return humanChoice;
}

//Declare the player score variables and initialize them to 0
let humanScore = 0;
let computerScore = 0;

//Function to determine the winner
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}