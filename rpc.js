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

function Play(player, computer){
    let playerChoice = player.toUpperCase()
    if (playerChoice === computer)  {
        return 'STALEMATE!'
    }
    else    {
        switch(playerChoice + ' ' + computer){
            case    'ROCK PAPER':;
            case   'PAPER SCISSORS':;
            case    'SCISSORS ROCK':; 
                return 'YOU LOSE!';
            default:
                return 'YOU WIN!' 
    
        }
    }
    }

    function playGame()
    let wins = 0
    let losses = 0   
    while    (wins < 3 || losses < 3)   {
        
    }


    getComputerChoice() 
console.log(computerChoice)
console.log(Play('paper', computerChoice))