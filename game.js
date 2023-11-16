

function getComputerChoice(){ 

    let choice = Math.floor(Math.random() * 3) + 1;
    let choice2;

    if (choice === 1) {
       choice2 = "rock"
    }
    else if (choice === 2) {
        choice2 = "paper"
     }
     else if (choice === 3) {
        choice2 = "scissors"
     }
    return choice2;
}


function playround(playerPick, computerPick){

    

    if (playerPick.toLowerCase() === computerPick) {
        
        return tie;


    }
    else if (playerPick.toLowerCase() === "rock" && computerPick === "paper" || playerPick.toLowerCase() === "scissors" && computerPick === "rock" || playerPick.toLowerCase() === "paper" && computerPick === "scissors") {

        ++computerScore
        return lose;
        
    }
    else {
        
        ++userScore;
        return win;
    }

    
    
}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win";
let lose = "You lose";
let tie = "It is a tie";


    
for(var i=0;i<5;i++){
playerPick = prompt("Pick a move");
computerPick = getComputerChoice()
console.log(playround(playerPick, computerPick))
console.log("your score = " + userScore);
console.log("Computer's score = " + computerScore);
}

if (computerScore < userScore) {
    console.log ("You Win, faggot :)");
}

else if (computerScore > userScore) {
    console.log ("You lose, faggot :(")
}

else if (computerScore === userScore) {
    console.log ("Nice tie faggot :/")
}
    
    


