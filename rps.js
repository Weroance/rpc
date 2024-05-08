

let computerChoice = 'Computer'
let playerChoice = 'Player'
let turnOutcome = ' '
let playerWins = 0
let computerWins = 0
const gamePlay = document.querySelector("#gamePlay") 
const score = document.querySelector("#score")
const computerChose = document.querySelector("#computerChose")

function getComputerChoice(){
    switch (Math.floor(Math.random() * 3))  {
        case 0:
            computerChoice = "SCISSORS" ;
            break;
        case 1:
            computerChoice = "PAPER" ;
            break;
        case 2:
            computerChoice = "ROCK" ;
            break;
}
}



function playRound(){

    getComputerChoice()

    if ( playerChoice === computerChoice)  {
        turnOutcome = 'STALEMATE!'
        }
    
    else    {
        switch (playerChoice + ' ' + computerChoice){
            case 'ROCK PAPER':
            case 'PAPER SCISSORS':
            case 'SCISSORS ROCK': 
                turnOutcome = 'YOU LOSE!';
                break;
            default:
                turnOutcome = 'YOU WIN!' 
        }
    }
    }

    const choiceButtons = document.querySelectorAll(".choiceButton")

    choiceButtons.forEach (function(button) {
        
        button.addEventListener("click",function(event){
        playerChoice = event.target.innerHTML.toUpperCase();
        
        playRound()
        computerChose.innerHTML = "The computer chose " + computerChoice
        if (turnOutcome == 'YOU LOSE!') {
                computerWins++;
                gamePlay.innerHTML = turnOutcome;
            }
            else if (turnOutcome == 'YOU WIN!') {
                playerWins++;
                gamePlay.innerHTML = turnOutcome;
            }

            else gamePlay.innerHTML = turnOutcome;

            score.innerHTML = "Player - " + playerWins + ", Computer - " + computerWins;

        if (playerWins == 5 ) {
                gamePlay.innerHTML = "YOU WIN THE GAME!";
                playerWins = 0 
                computerWins = 0
            }
                else if (computerWins == 5)  {
                    gamePlay.innerHTML = "YOU LOSE THE GAME!"
                    playerWins = 0 
                    computerWins = 0
                }
            
        

        console.log(computerChoice)
        console.log(playerChoice)
        console.log(turnOutcome)
        });
    });
    
