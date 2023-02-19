'use strict';

// const booking = [];

// const  creatBooking = function(flightnum, numPassenger, price) {

// const booking  = {
//     flightnum,
//     numPassenger,
//     price
// }
// console.log(booking);
// }
// creatBooking(`k43`)

// const flight = `G655`
// const jay = {
//     name: ` steven sincler`,
//     pass: `45642163`,
// };

// const checkIn = function(flightNum, Passenger) {
//     flightNum = `D655`;
//     Passenger.name = `Mr. ` + Passenger.name;

//     if (Passenger.pass === 45642163 ) {
//         alert (`Befarma`);
//     } else {
//         alert (`gomsho biron`);
//     }
// };[first, ...others]

// checkIn( flight, jay);
// console.log(flight);
// console.log(jay);

// const oneWord = function (str) {
//     return str.replace ( / /g, ` ` ).toLowerCase();
// };

// const str = `i am the agent of chaos`;
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(` `);
//     return [first.toUpperCase(), ...others].join(` `);
// };

// const transformer = function( str, fn) {
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Tr by: ${fn.name}`);
// }
// transformer(`javascript is the best!`, upperFirstWord )

// const iranAir = {
//   airLine: `iranAir`,
//   lineCode: `IR`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.lineCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.lineCode}${flightNum}`, name });
//   },
// };

// iranAir.book(344, `hossein golyar`);
// console.log(iranAir);

// const eurowings = {
//   airLine: `eurowings`,
//   lineCode: `EW`,
//   bookings: [],
// };

// const book = iranAir.book;
// book.call(eurowings, 23, `jj balard`);
// console.log(eurowings);

// const bookEw = book.bind(eurowings, 47);
// bookEw(`tak s`)

// iranAir.planes = 100;
// const buying = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document.querySelector(`.buy`).addEventListener(`click`, buying.bind(iranAir))

// console.log(addTax(0.2, 200));

// const addVat = addTax

// const trt = function (str, fn) {
//     console.log(`ya peyghambar: ${fn(str)}`);
// }
// const upper = function (str) {
//   return str.toUpperCase();
// };
// const trt = function (str, fn) {
//   console.log(`ya peyghambar: ${fn(str)}`);
// };
// trt(`omid be khoda`, upper);

// const addTax = (rate, value) => value + value * rate;
// const spr = function (value, fn) {
// console.log(`Ya khode khoda: ${fn(0.23,value)}`);
// };
// spr(100, addTax)

// const counter = function() {
//   let pCounter = 0;
//   return function () {
//     pCounter++;
//     console.log(`${pCounter}ta mosafer darim!`);
//   }
// }

// const k = counter();
// k();
// k();
// k();
// k();
// // console.dir(k);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = 'black';
  });
})();

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
