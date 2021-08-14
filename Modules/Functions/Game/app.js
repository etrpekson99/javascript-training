const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER_WIN';
const COMPUTER_WIN = 'COMPUTER_WIN';

let gameRunning = false;

const getPlayerChoice = () => {
   const selection = prompt('Rock, Paper, or Scissors?', '').toUpperCase();
   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you`);
      return;
   }

   return selection;
};

const getComputerChoice = () => {
   const randomValue = Math.random();
   if (randomValue < 0.34) {
      return ROCK;
   } else if (randomValue < 0.67) {
      return PAPER;
   } else {
      return SCISSORS;
   }
};

// other falsy values besides undefined will be taken over the default argument
const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => {
   if (pChoice === cChoice) {
      return DRAW;
   } else if (
      (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
   ) {
      return PLAYER_WIN;
   } else {
      return COMPUTER_WIN;
   }
};

// there is no way of making a memory leak here since we only add an event listener once
startGameBtn.addEventListener('click', () => {
   if (gameRunning) {
      return;
   }

   gameRunning = true;
   console.log('Game is starting...');

   const playerChoice = getPlayerChoice();
   const computerChoice = getComputerChoice();
   let winner;

   if (playerChoice) {
      winner = getWinner(computerChoice, playerChoice);
   } else {
      winner = getWinner(computerChoice);
   }

   let message = `You picked ${
      playerChoice || DEFAULT_CHOICE
   }, computer picked ${computerChoice}, therefore you `;

   if (winner === DRAW) {
      message = message + 'had a draw';
   } else if (winner === PLAYER_WIN) {
      message = message + 'won';
   } else {
      message = message + 'lost';
   }
   alert(message);
   gameRunning = false;
});
