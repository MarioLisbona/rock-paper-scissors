function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let randNum = randomNumber(1, 3);
    const para = document.querySelector('#rpsComputer');


    //assign result of randNum to compChoice = rock paper or scissors
    if (randNum === 1) {
        para.textContent = "Computer chose Rock";
        return "rock";
    } else if (randNum === 2) {
        para.textContent = "Computer chose Paper";
        return "paper";
    } else if (randNum === 3) {
        para.textContent = "Computer chose Scissors";
        return "scissors";
    }
}


function personPlay(choice) {
    // create playerChoice variable to store the players choice
    let playerChoice = choice;

    const para = document.querySelector('#rpsPlayer');

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

    const para = document.querySelector('#winner');
    const score = document.querySelector('#score');

    
    if (compScore < 5 && playerScore < 5) {
        //select first for combinations where the computer wins
        if ((compSelection === "rock" && playerSelection === "scissors") ||
            (compSelection === "paper" && playerSelection === "rock") ||
            (compSelection === "scissors" && playerSelection === "paper")) {
                // para.textContent = 'You loose!';
                compScore += 1;
            score.textContent = `player: ${playerScore} | Computer: ${compScore}`
            } else if (compSelection === playerSelection) {
                // para.textContent = 'Its a tie!';
                score.textContent = `player: ${playerScore} | Computer: ${compScore}`
            } else {
                // para.textContent = 'You win!';
                playerScore += 1;
                score.textContent = `player: ${playerScore} | Computer: ${compScore}`
            }
    } else {
        alert("game over");
    }
    console.log(compScore, playerScore);
    
    
}


const paper = document.getElementById('btnPaper')
const scissors = document.getElementById('btnScissors')
const rock = document.getElementById('btnRock')
const playAgain = document.getElementById('reset');

let compScore = 0;
let playerScore = 0;

paper.addEventListener('click', () => {
    playRound(computerPlay(), personPlay('paper'))
})

scissors.addEventListener('click', () => {
    playRound(computerPlay(), personPlay('scissors'))
})

rock.addEventListener('click', () => {
    playRound(computerPlay(), personPlay('rock'))
})