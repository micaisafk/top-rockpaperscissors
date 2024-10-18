function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); // returns value of 0, 1, or 2
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLocaleLowerCase(); // makes input case insensitive
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `That's a tie! You both picked ${humanChoice}.`;
        }
        else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore++;
            return `You lost, ${computerChoice} beats ${humanChoice}!`
        }
        else {
            humanScore++;
            return `You won, ${humanChoice} beats ${computerChoice}!`
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
            console.log(playRound(humanSelection, computerSelection));
            console.log(`You: ${humanScore} | Computer: ${computerScore}`)
        }
        else {
            console.log("Invalid choice, please try again!")
            i--;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win! You: ${humanScore} | Computer: ${computerScore}`)
    }
    else if (humanScore === computerScore) {
        console.log(`You tie! You: ${humanScore} | Computer: ${computerScore}`)
    }
    else {
        console.log(`You lose! You: ${humanScore} | Computer: ${computerScore}`)
    }
    
}

playGame();