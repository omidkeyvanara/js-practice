'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector(`.header`);
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);
const nav = document.querySelector(`.nav`);

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

// SMOOTH SCROLLING

btnScrollTo.addEventListener(`click`, function (e) {
  // const s1coords = section1.getBoundingClientRect();
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

// PAGE NAVIGATION

//using event delegation

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// TABBED COMPONENT
tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  if (!clicked) return;
  // گارد کلاز برای از بین بردن تعدادی از حالتهای تابع ما استفاده میشود. وقتی در داخل کانتینر کلیک شود ولی داخل تب های مورد نظر ما نباشد با خطای نول مواجه میشویم. به کمک گارد کلاز ما از احتمال وقوع این خطا جلوگیری میکنیم.

  // REMOVE ACTIVE CLASSES
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));

  // ACTIVATE TAB
  clicked.classList.add(`operations__tab--active`);

  // ACTIVE CONTENT AREA
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// MENU FADE ANIMATION

// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//     // console.log(`lk`);
//   });
// });

// CREATING AND INSERTING

// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// message.innerHTML = `test for creating DOM element: <button class="btn btn--close-cookie">Got it!<button> `;

// header.after(message);

// DELETE ELEMENT

// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//   });

// ADDING STYLE

// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;

// console.log(message.style.width);

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

// document.documentElement.style.setProperty(`--color-primary`, `red`);

// ATTRIBUTES

// const logo = document.querySelector(`.nav__logo`);

// logo.setAttribute(`alt`, `bank`);
// console.log(logo.getAttribute(`src`));

// const h1 = document.querySelector(`h1`);
// const al = function (e) {
//   alert(`dari yad migiria nagholaye`);
// };

// h1.addEventListener(`mouseenter`, al);

// const time = function () {
//   h1.removeEventListener(`mouseenter`, al);
// };
// setTimeout(time, 3000);

// BUBBLING PHASE

// const randomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// const randomColor = () =>
//   `rgb(${randomInt(0, 256)},${randomInt(0, 256)}, ${randomInt(0, 256)})`;

// document.querySelector(`h1`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`1`);
//   // e.stopPropagation();
// });

// document.querySelector(`.header`).addEventListener(
//   `click`,
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`2`);
//   }
//   // true
// );

// //
