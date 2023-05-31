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

const account = {
  owner: `jonas`,
  movements: [100, 200, 200, 450, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },
};
console.log(account.latest);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area);

const account2 = {
  owner: `jonas`,
  movements: [100, 200, 200, 450, 600],

  set latest(mov) {
    this.movements.push(mov);
  },
};

account2.latest = 50;
console.log(account2);

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

const jade = Object.create(PersonProto);
jade.birthYear = 1966;

jade.calcAge();

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

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acce() {
    return (this.speed += 10);
  }
  get USspeed1() {
    return console.log(`in the US it would be around ${this.speed / 1.6} mi/h`);
  }
  set USspeed(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Car2(`Ford`, 120);
ford.acce();
ford.USspeed1;
ford.USspeed = 50;
console.log(ford);