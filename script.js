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