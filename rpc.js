// rock > scissors
// scissors > paper 
// paper > rock

//  get user choice

let computerChoice = 'Computer'
let playerChoice = 'Player'
let winOrLose = ' '

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

function playRound(p){
    getComputerChoice()
    playerChoice = p.toUpperCase()
    if (playerChoice === computerChoice)  {
        winOrLose = 'STALEMATE!'
        }
    else if(playerChoice !== 'ROCK' && playerChoice !== 'PAPER' && playerChoice !== 'SCISSORS' ){
        winOrLose = 'Invalid option'}
    else    {
        switch (playerChoice + ' ' + computerChoice){
            case 'ROCK PAPER':;
            case 'PAPER SCISSORS':;
            case 'SCISSORS ROCK':; 
                winOrLose = 'YOU LOSE!';
                break;
            default:
                winOrLose = 'YOU WIN!' 
    
        }
    }
    }

function playGame(){
    let wins = 0;
    let losses = 0;   
    while    ( wins < 3 && losses < 3 )   {
        playRound(prompt(playerChoice + ' Vs. ' + computerChoice + ': ' + winOrLose + ' ' + wins + '-' + losses + ' . ROCK, PAPER OR SCISSORS?',), computerChoice)
       
        if (winOrLose == 'YOU WIN!') {
            ++wins;
            }

        else if(winOrLose == 'YOU LOSE!') {
            ++losses;
            }
       }
       if (winOrLose == 'YOU LOSE!') {
        alert('YOU LOST, ' + wins + ' to ' + losses + '.')
       }
        else {alert('YOU WON, ' + wins + ' to ' + losses + '.')}
    }
    
playGame()