function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "rock" && computerChoice == "scissor") {
    score = 1;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    score = 1;
  } else if (playerChoice == "scissor" && computerChoice == "paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById("result");

  switch (score) {
    case -1:
      result.innerText = `You Lose!`;
      break;
    case 0:
      result.innerText = `It's a Draw!`;
      break;
    case 1:
      result.innerText = `You Win!`;
      break;
  }

  let playerScore = document.getElementById("playerScore");
  let hands = document.getElementById("hands");
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
}

function onClick(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

function playGame() {
  let onclickrps = document.querySelectorAll(".rpsButton");

  onclickrps.forEach((rpsButton) => {
    rpsButton.onclick = () => onClick(rpsButton);
  });

  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  let playerScore = document.getElementById("playerScore");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
