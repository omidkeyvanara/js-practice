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

// CREATING AND INSERTING

// .insertAdjacentHTML

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
message.innerHTML = `test for creating DOM element: <button class="btn btn--close-cookie">Got it!<button> `;

header.after(message);

// DELETE ELEMENT
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });

// ADDING STYLE

message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

console.log(message.style.width);

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `red`);

// ATTRIBUTES

const logo = document.querySelector(`.nav__logo`);

logo.setAttribute(`alt`, `bank`);
console.log(logo.getAttribute(`src`));

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(s1coords.left, s1coords.top);
  // این حالت از نظر محاسباتی دچار خطا میشود چون اطلاعاتی که دریافت میکند نسبت به ویوپورت سنجیده میشود پس فقط در حالتی کاملا صحیح عمل میکند که هیچ صفحه هیچ اسکرولی نداشته باشد
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });
  // برای رفع این خطا مقدار اسکرول را هم به مقادیر اولیه اضافه میکنیم تا از جمع این دو مقدار فاصله واقعی سکشن مشخص شود

  section1.scrollIntoView({ behavior: `smooth` });
});

const h1 = document.querySelector(`h1`);
const al = function (e) {
  alert(`dari yad migiria nagholaye`);
};

h1.addEventListener(`mouseenter`, al);

const time = function () {
  h1.removeEventListener(`mouseenter`, al);
};
setTimeout(time, 3000);
