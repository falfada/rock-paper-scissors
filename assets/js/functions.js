// return what the user has chosen
// alert("Welcome to Rock, Paper, Scissors!");


let userInput = document.querySelectorAll(".user-input");
const options = ["rock", "paper", "scissors"];

const winningRules = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
}

for (const userChoice of userInput) {   
    userChoice.addEventListener("click", function(){
        let userChoiceValue = userChoice.value;
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        console.log(`Your choice: ${userChoiceValue} and the computer choice: ${computerChoice} `);
        if(userChoiceValue === computerChoice){
            console.log("That's a tie!!");
            // save the score
            // play again
        } else if(winningRules[userChoiceValue] === computerChoice){
            console.log("You won!!");
            // save the score
            // play again 
        } else{
            console.log("You lost!!");
            // save the score
            // play again
        }
    });

}
