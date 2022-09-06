"use strict";
// storing variables in the DOM
let player01 = document.querySelector("#player--0");
let player02 = document.querySelector("#player--1");
let totalScore01 = document.querySelector("#totalscore--0");
let totalScore02 = document.querySelector("#totalscore--1");
let currentScore01 = document.querySelector("#currentScore--0");
let currentScore02 = document.querySelector("#currentScore--1");
let restart = document.querySelector("#restart");
let rollDice = document.querySelector("#roll-dice");
let holdPlay = document.querySelector("#hold");
let dice = document.querySelector("#dice");
// set the dice img to display none
dice.classList.add("hidden");

// set the currentScore to 0
let currentScore = 0;
const score = [0, 0];
let activePlayer = 0;
let playing = true;
// create a function
let switchPlayer = function () {
  document.getElementById(`currentScore--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // use to switch background color based on active player
  player01.classList.toggle("active");
  player02.classList.toggle("active");
};
// Rolling the dice
rollDice.addEventListener("click", () => {
  if (playing) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice--${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`currentScore--${activePlayer}`).textContent =
        currentScore;
      //   player01.classList.toggle('active')
      //   player02.classList.toggle('active')
      //   currentScore01.textContent = currentScore;

      // console.log("shift to the next player")
    } else {
      // to switch to the second player
      switchPlayer();
    }
  }
});

holdPlay.addEventListener("click", () => {
  if (playing) {
    score[activePlayer] += currentScore;
    console.log(score[activePlayer]);
    document.getElementById(`totalscore--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`#player--${activePlayer}`)
        .classList.add("winnerPlayer");
      document
        .querySelector(`#player--${activePlayer}`)
        .classList.remove("player--0");
    } else {
      switchPlayer();
    }
  }
});
restart.addEventListener("click", () => {
 
 totalScore01.textContent = 0
 totalScore02.textContent = 0
  currentScore01.textContent = 0
  currentScore02.textContent = 0
  player01.classList.remove('winnerPlayer')
  player01.classList.remove('winnerPlayer')
  player01.classList.add('active')
  player02.classList.remove('active')
dice.classList.add("hidden");

//     let currentScore = 0;
//   const score = [0, 0];
//   let activePlayer = 0;
//   let playing = true;
});
