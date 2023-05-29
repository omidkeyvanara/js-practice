'use strict';

// 1- FUNCTION CONSTRUCTOR
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person(`jonas`, 1991);
console.log(jonas);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();

const arr = [1, 2, 3, 3, 4, 7, 3];
Array.prototype.uniqe = function () {
  return [...new Set(this)];
};
console.log(arr.uniqe());

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Car(`BMW`, 120);
const Mercedes = new Car(`Mercedes`, 95);

Car.prototype.acc = function () {
  return (this.speed += 10);
};

console.log(BMW, Mercedes);
console.log(BMW.acc());
console.log(BMW.acc());

// 2-ES6 CLASSES

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jessica = new PersonCl(`jessica`, 1999);

jessica.calcAge();
