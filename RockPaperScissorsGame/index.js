const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  won(checkWinner());
  resultText.textContent = checkWinner();
}));

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3);

  switch(randNum) {
    case 0:
      computer = "Rock";
      break;
    case 1:
      computer = "Paper";
      break;
    case 2:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if(player === computer) {
    return "Draw!";
  }
  else if(computer == "Rock") {
    return (player == "Paper") ? "You win!" : "You lose!";
  }
  else if(computer == "Paper") {
    return (player == "Scissors") ? "You win!" : "You lose!";
  }
  else if(computer == "Scissors") {
    return (player == "Rock") ? "You win!" : "You lose!";
  }

}

function won(result) {
  if(result == "You win!") {
    resultText.style.color = "yellow";
  }
  else {
    resultText.style.color = "black";
  }
}