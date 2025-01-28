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

//Function to play a game of 5 rounds
function playGame() {
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

    //Function to play a single round
    function playRound() {
        //Get the choices
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        //Log the choices
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        //Log the winner
        console.log(determineWinner(humanChoice, computerChoice));

        //Log the scores
        console.log("Human Score: ", humanScore);
        console.log("Computer Score: ", computerScore);
    }

    //Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i} ---`);
        playRound();
    }

    //Log the final scores
    console.log("--- Final Scores ---");
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);

    //Declare overall winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie game!");
    }
}