// rock > scissors
// scissors > paper 
// paper > rock

//  get user choice

let computerChoice = 0

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
// get random computer choice 
// convert it to rock paper or scissors
function Play(player, computer){
    let playerChoice = player.toUpperCase()
      if (playerChoice == computer) {
        return 'STALEMATE';
      }
      else if ((playerChoice === 'ROCK' && computer === 'PAPER') 
      || (playerChoice === 'PAPER' && computer === 'SCISSORS') 
      || (playerChoice === 'SCISSORS' && computer === 'ROCK'))    {
        return 'you Lose!';
      }
        else  {
        return 'You Win!';
      }
      
    }
getComputerChoice() 
console.log(computerChoice)
console.log(Play('paper', computerChoice))