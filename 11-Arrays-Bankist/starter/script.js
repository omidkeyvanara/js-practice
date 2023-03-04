'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// git push -f origin git merge main --allow-unrelated-histories

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////// SUMMARY LINE//////////////////////
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // ماو متغیری جامعتر از موومنتز است چون حالت سورت شده آن را هم در خود دارد. پس برای حلقه فورایچ از آن استفاده میکنیم تا حالت نمایش ما هم از حالت سورت شده ی آن استفاده کند.

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = ` 
    <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${mov}€</div>
</div>`;
    containerMovements.insertAdjacentHTML(`beforeend`, html);
  });
};

/////////////////////// CREATING USERNAME//////////////////////
const createUsername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};
createUsername(accounts);
//    نکته اصلی استفاده از فور ایچ بود و اینکه از یوزر را برابر اونر قرار داد.
/////////////////////// UPDATE UI//////////////////////

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};
/////////////////////// BALANCE//////////////////////

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// برای هراکانت مقدار بالانس خودش را تعیین میکنیم و در داخل آبجکت خودش قرار میدهیم. از فورایچ استفاده نمیکنیم چون برای هر اکانت قرار است این مقدار علاوه بر داخل آبجکت در صفحه هم نمایش داده شود پس باید کورنت اکانت در آن قرار گیرد که در هر لوگ این اکانت مورد نظر ما در آن قرار میگیرد.

/////////////////////// CALCULATING SUMMARY//////////////////////
const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

/////////////////////// IMPLEMENTING LOGIN//////////////////////
let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();
  currentAccount = accounts.find(x => x.username === inputLoginUsername.value);
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = ``;
    updateUI(currentAccount);
  }
});

/////////////////////// TRANSFERING//////////////////////

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const receiver = accounts.find(x => x.username === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiver !== currentAccount
  ) {
    receiver.movements.push(amount);
    currentAccount.movements.push(-amount);
    inputTransferTo.value = inputTransferAmount.value = ``;
    updateUI(currentAccount);
  }
});
/////////////////////// LOAN//////////////////////
btnLoan.addEventListener(`click`, function (r) {
  r.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(x => x >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    inputLoanAmount.value = ``;
    updateUI(currentAccount);
  }
});

/////////////////////// SORTING//////////////////////
let sorted = false;

btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
  // به این دلیل از متغییر سورتید به عنوان معادلی از فالس استفاده میکند تا بتواند در آخرین خط تابع از عکس  آن استفاده کند و طبق منطق خشابی در ابتدا سورتید هر حالتی که باشد ما عکس آن را اجرا میکنیم با هرکلیک عکس آن اجرا میشود که در تابع دیسپلی موومنت تاثیر میگذارد و سورت را فعال یا غیر فعال میکند.
});

/////////////////////// CLOSING ACCOUNT//////////////////////
btnClose.addEventListener(`click`, function (r) {
  r.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === Number(currentAccount.pin)
  ) {
    const fade = accounts.findIndex(
      x => x.username === currentAccount.username
    );
    accounts.splice(fade, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = ``;
  }
});
