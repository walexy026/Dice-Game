'use strict';
// storing variables in the DOM 
let player01 = document.querySelector('#player--1')
let totalScore01 = document.querySelector('#totalscore--1')
let currentScore01 = document.querySelector('#currentScore--1')
let player02 = document.querySelector('#player--2')
let totalScore02 = document.querySelector('#totalscore--2')
let currentScore02 = document.querySelector('#currentScore--2')
let restart = document.querySelector('#restart')
let rollDice = document.querySelector('#roll-dice')
let holdPlay = document.querySelector('#hold')
let dice = document.querySelector('#dice')

dice.classList.add('hidden')
let currentScore = 0
// Rolling the dice
rollDice.addEventListener('click', () =>{
const diceNumber = Math.floor(Math.random()*6)+1 ;
// console.log(diceNumber)
  dice.classList.remove('hidden')
  dice.src = `dice--${diceNumber}.png`
  
  if (diceNumber !== 1){
      currentScore += diceNumber;
      currentScore01.textContent = currentScore;
        
console.log("shift to the next player")
    } 
    // else()
})
