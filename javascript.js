//function to create random number between min and max
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    //use randomNumber to randomly choose between 1 - 3 and assign to rock, papper or scissors
    let randNum = randomNumber(1, 3);
    //create variable to manipulate <p> to display computer choice
    const para = document.querySelector('#comp-choice');


    //assign result of randNum to rock paper or scissors and display in rpsComputer <p>
    if (randNum === 1) {
        para.textContent = "Computer chose: Rock";
        return "rock";
    } else if (randNum === 2) {
        para.textContent = "Computer chose: Paper";
        return "paper";
    } else if (randNum === 3) {
        para.textContent = "Computer chose: Scissors";
        return "scissors";
    }
}


function personPlay(choice) {
    // create playerChoice variable to store the players choice
    let playerChoice = choice;
    //create variable to manipulate <p> to display computer choice
    const para = document.querySelector('#player-choice');

    //display rock, paper or scissors in rpsPlayer <p>
    if (playerChoice === "rock") {
        para.innerText = "You chose: Rock";
        return choice;
    } else if (playerChoice === "paper") {
        para.innerText = "You chose: Paper";
        return choice;
    } else {
        para.innerText = "You chose: Scissors";
        return choice;
    }
}
    

function playRound(compSelection, playerSelection) {
    //create variable to manipulate winner and score <p>
    const winner = document.querySelector('#winner');
    const score = document.querySelector('#running-score');

    //only choose a winner for 5 games
    //increment playerScore or compScore depending on who wins. 
    //update score <p>
    if (compScore < 5 && playerScore < 5) {
        //select first for combinations where the computer wins
        if ((compSelection === "rock" && playerSelection === "scissors") ||
            (compSelection === "paper" && playerSelection === "rock") ||
            (compSelection === "scissors" && playerSelection === "paper")) {
                compScore += 1;
            score.textContent = `player: ${playerScore} | Computer: ${compScore}`;
            } else if (compSelection === playerSelection) {
                score.textContent = `player: ${playerScore} | Computer: ${compScore}`;
            } else {
                playerScore += 1;
                score.textContent = `player: ${playerScore} | Computer: ${compScore}`;
            }
    }
    //if either player or computer reach a score of 5
    //call endGame() to disable buttons
    //display winner
    if (playerScore == 5 || compScore == 5) {
        endGame();
        (playerScore == 5) ? winner.textContent = "You win, Computer looses!" : winner.textContent = "You loose, Computer wins!"
    }
  
}


//function to disable RPS buttons
function endGame () {
    paper.disabled = true;
    scissors.disabled = true;
    rock.disabled = true;
}

//function to reset the game
function resetGame () {
    player = document.querySelector('#player-choice');
    computer = document.querySelector('#comp-choice');
    score = document.querySelector('#running-score');
    winner = document.querySelector('#winner');

    player.textContent = "";
    computer.textContent = "";
    score.textContent = "";
    winner.textContent = "";    
    paper.disabled = false;
    scissors.disabled = false;
    rock.disabled = false;
    compScore = 0;
    playerScore = 0;
}

//variables to maniuplate buttons and reset button
const paper = document.getElementById('btnPaper')
const scissors = document.getElementById('btnScissors')
const rock = document.getElementById('btnRock')
const playAgain = document.getElementById('reset');
let compScore = 0;
let playerScore = 0;



//event listener for paper button.
//calls playRound with 'paper' argument passed to personPlay function
paper.addEventListener('click', () => {
    console.log("chooseing paper event listen")
    playRound(computerPlay(), personPlay('paper'))
});

//event listener for scissors button.
//calls playRound with 'scissors' argument passed to personPlay function
scissors.addEventListener('click', () => {
    console.log("chooseing scissors event listen")
    playRound(computerPlay(), personPlay('scissors'))
});

//event listener for rock button.
//calls playRound with 'rock' argument passed to personPlay function
rock.addEventListener('click', () => {
    console.log("chooseing rock event listen")
    playRound(computerPlay(), personPlay('rock'))
});

//event listener for Play again button.
//calls reset function
playAgain.addEventListener('click', () => {
    console.log("chooseing reset event listen")
    resetGame()
});