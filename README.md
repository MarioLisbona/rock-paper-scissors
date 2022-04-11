# rock-paper-scissors

+++++++++Psuedocode for Rock Paper Scissors++++++++++

computerPlay function
    create randNum to store a random number between 1 and 3
    create compChoice variable to hold computers choice
    
    if randNum is 1
        compChoice =  rock
    if randNum is 2
        compChoice =  paper
    if randNum is 3
        compChoice =  scissors

    return compChoice


personPlay function
    create playerChoice variable to store the players choice
    prompt user to enter a choice: Rock, Paper or Scissors?
    change all letters in playerChoice to lowercase.

    if playerChoice does not equal rock or paper or scissors
        display error message - that is not a valid choice
        prompt user to enter a choice: Rock, Paper or Scissors?
        store user choice in playerChoice
        change all letters in playerChoice to lowercase.
        
     once a valid choice has been made - store in playerChoice

    return playerChoice


    gamePlay function - recives two parameters: compSelection playerSelection

        if computer is rock and player is scissors
            show computer wins message
        else if computer is rock and player is paper
            show player wins message
        else if computer is rock and player is rock
            show game is a tie message
        

        if computer is paper and player is rock
            show computer wins message
        else if computer is paper and player is scissors
            show player wins message
        else if computer is paper and player is paper
            show game is a tie message

        if computer is scissors and player is paper
            show computer wins message
        else if computer is scissors and player is rock
            show player wins message
        else if computer is scissors and player is scissors
            show game is a tie message



run gamePlay function passing in two arguments computerPlay and PersonPlay

        