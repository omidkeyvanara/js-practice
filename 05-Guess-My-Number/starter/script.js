// 'use strict';
// console.log(document.querySelector(`.message`));

// document.querySelector(`.message`).textContent = ` true number!!!`;
// document.querySelector(`.number`).textContent = ` 48 `;

// document.querySelector(`.guess`). value=28
// console.log(document.querySelector(`.guess`).value);

// document.querySelector(`button.btn.again`).content = `k`;

// const secret = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(`.number`).textContent = secret;
// let score = 20;
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess, typeof guess);
// });

// if (!guess) {
//   document.querySelector(`.message`).textContent = ` type sth bitch`;
// } else if (guess === secret) {
//   document.querySelector(`.message`).textContent = ` true number!!!`;
// } else if (guess > secret) {
//   if (score > 1) {
//     document.querySelector(`.message`).textContent = `too high!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `you fucked up`;
//   }
// } else if (guess < secret) {
//   if (score > 0) {
//     document.querySelector(`.message`).textContent = `too low!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `you fucked up`;
//     document.querySelector(`.score`).textContent = 0;
//   }
// }
let secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);
  let score = 20;
  let highScore = 0;

  const displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
  };

  // when there is no input
  if (!guess) {
    displayMessage(`type sth bitch...`);

    // when player wins
  } else if (guess === secret) {
    // document.querySelector(`.message`).textContent = `good!`;
    displayMessage(`good`);
    document.querySelector(`.number`).textContent = secret;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // when guess is too high
  } else if (guess !== secret) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secret ? `too high!` : `too low!`;
      score--;
      displayMessage(guess > secret ? `too high!` : `too low!`);
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `you lose!`;
      displayMessage(`looooooser`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

// } else if  (guess > secret) {
//   if (score > 1) {
//     document.querySelector(`.message`).textContent = `too high!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `you lose!`;
//   }

//   // when guess is too high
// } else if (guess < secret) {
//   if (score > 1) {
//     document.querySelector(`.message`).textContent = `too low!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `you lose!`;
//   }
// }

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `start guessing...`;
  displayMessage(`start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).textContent = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
