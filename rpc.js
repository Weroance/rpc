// rock > scissors
// scissors > paper 
// paper > rock

//  get user choice
function playerChoice(a) {
    return a.toUpperCase();
}

let computerChoice = 0

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            computerChoice = "SCISSORS"
        
        case 1:
            computerChoice = "PAPER" 
        
        case 2:
            computerChoice = "ROCK"

    }
}

// get random computer choice 
// convert it to rock paper or scissors

function Play(userChoice, computerChoice)   {
// compare choices declare winner or stalemate
}

//let getComputerChoice = () => Math.random();
//
//getComputerChoice
//console.log(getComputerChoice())