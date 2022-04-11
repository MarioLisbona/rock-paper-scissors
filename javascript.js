function computerPlay() {
    //create randNum to store a random number between 1 and 3
    //create compChoice variable to hold computers choice
    let randNum = Math.floor(Math.random() * 3) + 1;
    let compChoice = "";

    //assign result of randNum to compChoice = rock paper or scissors
    if (randNum === 1) {
        compChoice = "rock";
    } else if (randNum === 2) {
        compChoice = "paper";
    } else if (randNum === 3) {
        compChoice = "scissors";
    }

    //return compChoice value
    return compChoice
}


function personPlay() {
    //create playerChoice variable to store the players choice
    let playerEntry = "";
    let playerChoice = "";
    
    //prompt user to enter a choice: Rock, Paper or Scissors? store in playerEntry variable
    //convert playerEntry variable to all loewrcase and store in playerChoice variable
    playerEntry = prompt("Please enter a choice: Rock, Paper or Scissors");
    playerChoice = playerEntry.toLowerCase();
   
    //checking that playerChoice is either rock paper or scissors. if its not exit the game with error message
    if (playerChoice === "rock") {
        return playerChoice;
    } else if (playerChoice === "paper") {
        return playerChoice;
    } else if (playerChoice === "scissors") {
        return playerChoice;
    } else {
        alert("Thats not a valid choice. Game over");
    }
    
}


// gamePlay function - recives two parameters: compSelection playerSelection

//         if computer is rock and player is scissors
//             show computer wins message
//         else if computer is rock and player is paper
//             show player wins message
//         else if computer is rock and player is rock
//             show game is a tie message
        

//         if computer is paper and player is rock
//             show computer wins message
//         else if computer is paper and player is scissors
//             show player wins message
//         else if computer is paper and player is paper
//             show game is a tie message

//         if computer is scissors and player is paper
//             show computer wins message
//         else if computer is scissors and player is rock
//             show player wins message
//         else if computer is scissors and player is scissors
//             show game is a tie message



// run gamePlay function passing in two arguments computerPlay and PersonPlay


function playRound(compSelection, playerSelection) {


    if (compSelection === "rock" && playerSelection === "scissors") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n You Loose!`;
    } else if (compSelection === "rock" && playerSelection === "paper") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n You win!!`;
    } else if (compSelection === "rock" && playerSelection === "rock") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n Its a tie!`;
    }

    if (compSelection === "paper" && playerSelection === "scissors") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n You win!`;
    } else if (compSelection === "paper" && playerSelection === "paper") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n Its a tie!`;
    } else if (compSelection === "paper" && playerSelection === "rock") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n You Loose!`;
    }

    if (compSelection === "scissors" && playerSelection === "scissors") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n Its a tie!`;
    } else if (compSelection === "scissors" && playerSelection === "paper") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n You Loose!`;
    } else if (compSelection === "scissor" && playerSelection === "rock") {
        return `You chose ${playerSelection} and the computer chose ${compSelection}\n You win!`;
    }

}

alert(playRound(computerPlay(), personPlay()));