let userInput = document.querySelectorAll(".user-input");
const options = ["rock", "paper", "scissors"];

const winningRules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
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
    document.querySelector(".optionsContainer").classList.add("hide");
    document.querySelector("#displayResults").classList.remove("hide");
    let userChoiceValue = userChoice.value;
    let userChoiceImg = document.getElementById("userChoiceImg");
    userChoiceImg.parentElement.classList.add(userChoiceValue);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    let computerChoiceImg = document.getElementById("computerChoiceImg");
    computerChoiceImg.parentElement.classList.add(computerChoice);

    await new Promise((resolve) => setTimeout(resolve, 1000));
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
      document.querySelector(".optionsContainer").classList.remove("hide");
      document.querySelector("#displayResults").classList.add("hide");
    });
  });
}

const showRulesButton = document.getElementById("showRules");
showRulesButton.addEventListener("click", function () {
  document.getElementById("rulesContainer").classList.add("show");
});

const closeRulesIcon = document.getElementById("close");
closeRulesIcon.addEventListener("click", function () {
  document.getElementById("rulesContainer").classList.remove("show");
});
