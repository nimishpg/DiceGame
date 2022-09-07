'use strict'
//selecting element 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const current0E1 = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting condition

score0E1.textContent = 0;
score1E1.textContent = 0;
diceE1.classList.add('hidden');

let scores, currentScore, activePlayer, playing;



//starting Condition
const init = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;
	score0E1.textContent = 0;
	score1E1.textContent = 0;
	current0E1.textContent = 0;
	current1El.textContent = 0;
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player-active');
};

init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
 		
}

//rolling dice functionality
btnRoll.addEventListener('click', function() {
  // Genrating random Dice roll
   if (playing) {
     const dice = Math.trunc(Math.random() * 6) + 1;
     

 // Display Dice
    diceE1.classList.remove('hidden');	
    diceE1.src = `dice-${dice}.png`;
    console.log(diceE1.src);
    
// Check for rolled
 if (dice !== 1) {
 // Add dice to current score
   currentScore += dice;
   document.getElementById(`current--${activePlayer}`).textContent =currentScore;
	//current0E1.textContent = currentScore; 		
} else {
 //switch to the next player
  switchPlayer();			
}
}		
});

btnHold.addEventListener('click', function () {
  if (playing) {	 

 scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];	  
  // switch to the next Player
   if (scores[activePlayer] >= 20) {
   //Finish the Game
	playing = false;
	diceE1.classList.add('hidden');
	document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
	document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
} else {
   switchPlayer();
	}			
}
});

btnNew.addEventListener ('click' , init);