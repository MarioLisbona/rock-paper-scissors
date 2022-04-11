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
