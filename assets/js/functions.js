let userInput = document.querySelectorAll(".user-input");
const options = ["rock", "paper", "scissors"];

const winningRules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const itemsImage = {
  rock: "assets/images/icon-rock.svg",
  paper: "assets/images/icon-paper.svg",
  scissors: "assets/images/icon-scissors.svg",
};

if (localStorage.getItem("score") === null) {
  localStorage.setItem("score", 0);
}
const scoreDisplay = document.getElementById("scoreDisplay");
currentScore = parseFloat(localStorage.getItem("score"));
scoreDisplay.innerHTML = currentScore;

const displayResultsText = document.getElementById("displayResultsText");

function updateScore(isWin) {
  if (isWin) {
    currentScore++;
  } else if (currentScore > 0) {
    currentScore--;
  }
  console.log(currentScore);
  localStorage.setItem("score", currentScore);
  scoreDisplay.innerHTML = currentScore;
}
for (const userChoice of userInput) {
  userChoice.addEventListener("click", async function () {
    let userChoiceValue = userChoice.value;
    document.getElementById("userChoiceImg").src = itemsImage[userChoiceValue];

    await new Promise((resolve) => setTimeout(resolve, 2000));
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    document.getElementById("computerChoiceImg").src =
      itemsImage[computerChoice];

    let resultsMessage = document.createElement("p");
    displayResultsText.appendChild(resultsMessage);

    if (userChoiceValue === computerChoice) {
      resultsMessage.innerHTML = "THAT'S A TIE";
    } else if (winningRules[userChoiceValue] === computerChoice) {
      resultsMessage.innerHTML = "YOU WIN";
      updateScore(true);
    } else {
      resultsMessage.innerHTML = "YOU LOSE";
      updateScore(false);
    }
    // play again button
    let playAgainButton = document.createElement("BUTTON");
    playAgainButton.setAttribute("id", "refreshButton");
    playAgainButton.innerHTML = "PLAY AGAIN";
    displayResultsText.appendChild(playAgainButton);

    let refreshButton = document.getElementById("refreshButton");

    refreshButton.addEventListener("click", function () {
      location.reload();
    });
  });
}
