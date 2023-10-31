
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

    let result;

    if (playerPick.toLowerCase() === computerPick) {
        result = "YOU TIED!"
    }
    else if (playerPick.toLowerCase() === "rock" && computerPick === "paper") {
        result = "You Lose LMAO"
    }
    else {
        result = "You WIN YAY"
    }

    return result
}

const playerPick = "rOck";
const computerPick = getComputerChoice();

console.log(playround(playerPick, computerPick));