'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// SELECTING DOCUMENT

const header = document.querySelector(`.header`);

const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

const allSection = document.querySelectorAll(`.section`);
console.log(allSection);

const btnClass = document.getElementsByClassName(`btn`);
console.log(btnClass);

// CREATING AND INSERTING

// .insertAdjacentHTML

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
message.innerHTML = `test for creating DOM element: <button class="btn btn--close-cookie"> Got it! <button> `;

header.prepend(message);

// DELETE ELEMENT
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });