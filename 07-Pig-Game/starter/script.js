'use strict';

// ******************ELEMENTS
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// ********************STARTING CONDITION

(let = currentScore), activePlayer, scores, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
  diceEl.classList.add(`hidden`);

  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// ***********************ROLLING DICE FUNCTION
btnRoll.addEventListener(`click`, function () {
  // *******random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // *******display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  // *******checking for number 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener(`click`, function () {
  // *******adding current score to active player score
  scores[activePlayer] += currentScore;
  //  score[1] =  score[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // if player score is >= 100
  if (scores[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--active`);
  } else {
    // switch player
    switchPlayer();
  }
});

btnNew.addEventListener(`click`, init);
