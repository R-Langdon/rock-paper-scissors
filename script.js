let array = ["ROCK", "PAPER", "SCISSORS"];

const rock = document.querySelector('#ROCK');
const paper = document.querySelector('#PAPER');
const scissors = document.querySelector('#SCISSORS');
const playerChoice = document.querySelector('h3#playerChoice');
const compChoice = document.querySelector('h3#compChoice');
const yourScore = document.querySelector('.playerScore > p');
const compScore = document.querySelector('.compScore > p');
const result = document.querySelector('#result > p');
const restart = document.querySelector('#result button');

function computerPlay() {
  let index = Math.floor(Math.random() * array.length);
  let computerSelection = array[index];
  return compChoice.textContent = computerSelection;
}

function winLose() {
  if(yourScore.textContent === "5") {
    result.textContent = "YOU WIN!";
    restart.setAttribute('style', 'display: block;');
  } else if(compScore.textContent === "5") {
    result.textContent = "YOU LOSE";
    restart.setAttribute('style', 'display: block;');
  }
}

function reset() {
  yourScore.textContent = "0";
  compScore.textContent = "0";
  playerChoice.textContent = "";
  compChoice.textContent = "";
  result.textContent = "";
  restart.setAttribute('style', 'display: none;');
}

rock.addEventListener('click', function (e) {
  playerChoice.textContent = e.target.id;
  let compChoice = computerPlay();
  switch(compChoice) {
    case "ROCK":
      break;
    case "PAPER":
      compScore.textContent++;
      break;
    case "SCISSORS":
      yourScore.textContent++;
      break;
  }
  winLose();
})

paper.addEventListener('click', function (e) {
  playerChoice.textContent = e.target.id;
  let compChoice = computerPlay();
  switch(compChoice) {
    case "PAPER":
      break;
    case "SCISSORS":
      compScore.textContent++;
      break;
    case "ROCK":
      yourScore.textContent++;
      break;
  }
  winLose();
})

scissors.addEventListener('click', function (e) {
  playerChoice.textContent = e.target.id;
  let compChoice = computerPlay();
  switch(compChoice) {
    case "SCISSORS":
      break;
    case "ROCK":
      compScore.textContent++;
      break;
    case "PAPER":
      yourScore.textContent++;
      break;
  }
  winLose();
})

restart.addEventListener('click', reset);