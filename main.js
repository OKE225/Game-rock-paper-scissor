window.onload = function () {
  playerChoice();
};

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const result = document.getElementById("result");

const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");

const win = document.getElementById("win");
const draw = document.getElementById("draw");
const lose = document.getElementById("lose");

function playerChoice() {
  rock.addEventListener("click", function () {
    computerChoice.innerHTML = "";

    return (userChoice.innerHTML = "Rock"), computerRandomChoice();
  });

  paper.addEventListener("click", function () {
    computerChoice.innerHTML = "";

    return (userChoice.innerHTML = "Paper"), computerRandomChoice();
  });

  scissor.addEventListener("click", function () {
    computerChoice.innerHTML = "";

    return (userChoice.innerHTML = "Scissor"), computerRandomChoice();
  });
}

function computerRandomChoice() {
  setTimeout(() => {
    let randomMove = Math.floor(Math.random() * 3 + 1);
    if (randomMove === 1) {
      computerChoice.innerHTML = "Rock";
    } else if (randomMove === 2) {
      computerChoice.innerHTML = "Paper";
    } else if (randomMove === 3) {
      computerChoice.innerHTML = "Scissor";
    }
    resultGame();
  }, 100);
}

function resultGame() {
  setTimeout(() => {
    if (
      (userChoice.innerHTML === "Rock" &&
        computerChoice.innerHTML === "Scissor") ||
      (userChoice.innerHTML === "Paper" &&
        computerChoice.innerHTML === "Rock") ||
      (userChoice.innerHTML === "Scissor" &&
        computerChoice.innerHTML === "Paper")
    ) {
      result.style.color = "limegreen";
      result.innerHTML = "You Win";
      ++win.innerHTML;
    } else if (
      (userChoice.innerHTML === "Rock" &&
        computerChoice.innerHTML === "Paper") ||
      (userChoice.innerHTML === "Paper" &&
        computerChoice.innerHTML === "Scissor") ||
      (userChoice.innerHTML === "Scissor" &&
        computerChoice.innerHTML === "Rock")
    ) {
      result.style.color = "red";
      result.innerHTML = "You Lose";
      ++lose.innerHTML;
    } else {
      result.style.color = "gray";
      result.innerHTML = "Draw";
      ++draw.innerHTML;
    }
  }, 150);
}
