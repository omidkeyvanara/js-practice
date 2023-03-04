'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`here is your fucking pasta with ${ing1}, ${ing2} and ${ing3}`);
  // },
  // orderPizza: function (mainIngredient, ...otherIngredient) {
  //   console.log(mainIngredient, ...otherIngredient);
  // },
};

// const {thu, ...weekend} = restaurant.openingHours;
// console.log(weekend);

// const {  fri , categories } = restaurant;
// console.log( fri , categories);

// const { location: gg } = restaurant;
// console.log(gg);

// const ingredints = [prompt(`no 1`), prompt(`no2`), prompt(`no3`)];
// console.log(ingredints);

// restaurant.orderPasta(...ingredints);
// console.log(restaurant.orderPasta);

// restaurant.orderPizza(`noon`, `panir`, `zorat`);

// // let a = 1;
// // let b = 2;

// const obj = {a:3, b:4};
// // ({a, b}=obj) ;
// console.log(obj);

// const arr = [1,2,3]
// const ex = [4,5, ...arr]

// console.log(...ex);

// const newArr = [...restaurant.mainMenu, `ghorme`];
// console.log(...newArr);

// const str  = `jay`
// const letters = [...str, ``, `f`];
// console.log(letters);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// // };

// add: function (...numbers) {
//   return
// }
// add(2, 5, 6, 7);

// const f = [4, 5, 6, 2, 1];
// add(...f);

// console.log(null || 0 || undefined);

// const guest = restaurant.numGuest ? restaurant.numGuest : 47;
// console.log(guest);

// const guestNum = restaurant.guestNum || 10;
// console.log(guestNum);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for ( const item of menu ) console.log(item);

// for ( const item of menu.entries()) {
//   console.log(item);
// };
// console.log(... menu.entries());

// console.log(restaurant.openingHours.mon?.open);

// const days = [ `mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun` ];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `close`;
//   console.log(`on ${day} we open at ${open} `);
// }

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const z =new Map (Object.entries(openingHours));
// console.log(z);

// for (const [key, value] of openingHours) {
// console.log( [key, value]);
// }

// let openD = `we are open on ${day.length} days:`;
// console.log(openD);

// for (const mon of day) {
//   openD += `${mon}, `;
//   // openD += `${day}, `;
//   // console.log(mon);
// }
// console.log(openD);

// const day = Object.keys(openingHours);
// console.log(day);

// const x = Object.values(openingHours);
// console.log(x);

// for (const[ day, {open, close}] of z  )

// console.log(`we are open at ${day} from ${open} to ${close}`);

// const hd = new Set([`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sat`]);
// console.log(hd.size);
// console.log(hd.has(`d`));
// hd.delete(`fri`);
// hd.add(`gg`);
// hd.clear();
// console.log(hd);

// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`, `mon`];

// const jj = new Set(days);
// console.log(jj);

// const vk = new Map();
// vk.set(`salamat`, `kho`);
// vk.set(1, `zamani`);
// vk.set(`menu`, [`ghorme`, `gheyme`, `polo`])
// .set(`open`, 8)
// .set(`close`, 23)
// .set(`close`, 22)
// .set(true, `vakhi bia sham`);

// console.log(vk.set(2, `navaz`));
// console.log(vk.get(`salamat`));
// const time = 18;
// console.log(vk.get(time > vk.get(`open`) && time < vk.get(`close`)));

// console.log(vk.has(2));
// vk.delete(2);
// console.log(vk.has(2));
// console.log(vk.size);

const q = new Map([
  [`question`, `who is the best writer?`],
  [1, `wolf`],
  [2, `shaw`],
  [3, `berjes`],
  [`correct`, 3],
  [true, `nagholaye`],
  [false, `khar`],
]);

// for ( const [key, value] of q ) {
//   if (typeof key === `number`) console.log(`
//     answer ${key} is ${value}.`
//   );
// }

// const ans = Number(prompt(` your ans`));

// console.log(q.get( q.get(`correct`) === ans));
// // if (ans === 3) console.log(`nagholaye`);
// // else {
// //   console.log(`khar`);
// // }

// console.log([...q]);

const painter = `piatzze da volpedo`;
// console.log(painter[7]);
// console.log(painter.indexOf(`d`));
// const r = painter.slice(4)
// console.log(r);
// console.log(painter.slice(0, painter.indexOf(` `)));
// console.log(
//   painter.slice(painter.lastIndexOf(` `)));

// const middle = function (seat) {
//   const l  = seat.slice(-1);
//   if ( l === `B` || l ===`E`) console.log(`khar shans`);
//   else console.log(`nagholaye`);
// }

// middle(`11B`);
// middle(`1E`);
// middle(`14C`);

// // const correction = function (nam) {
// const names = prompt(`type your f name`);
// console.log(names[0].toUpperCase() + names.slice(1).toLowerCase());
// };

// const email = `   gfxRfx@gmail.com   `;
// const norm =email.toLowerCase().trim();
// console.log(norm);

// const check = function (item) {
//   const bag =
// }

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


for (const fli of flights.split(`+`)){
  // console.log(fli);
  // console.log(fli.split(`;`));
  const [type, from, to, time] = fli.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `*****` : ``} ${type.replace(`_`, ``)} ${`from`} ${from.slice(0,3).toUpperCase()} ${`to`} ${to.slice(0,3).toUpperCase()} (${time.replace(`:`, `h`)})` .padStart(47);
  console.log(output);
}
