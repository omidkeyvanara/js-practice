'use strict';

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
