'use strict';

// 1- FUNCTION CONSTRUCTOR
const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const jonas = new Person1(`jonas`, 1991);
console.log(jonas);
console.log(Person1.prototype);

jonas.calcAge();

const arr = [1, 2, 3, 3, 4, 7, 3];
Array.prototype.uniqe = function () {
  return [...new Set(this)];
};
console.log(arr.uniqe());

// 2-ES6 CLASSES

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const fitra = new StudentCl(`fitra`, 2001, `art`);
fitra.introduce();
fitra.calcAge();
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

  pr(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.pr = function (fullName, birthYear, course) {
  PersonProto.pr.call(this, fullName, birthYear);
  this.course = course;
};

const jadi = Object.create(StudentProto);

jadi.pr(`jadi`, 2021, `civil eng`);
jadi.calcAge();

const jade = Object.create(PersonProto);
jade.birthYear = 1966;

jade.calcAge();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
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

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // چون پرسن شبیه به یک تابع عملی میکند اگر از آن بدون متد کال استفاده میکردیم با خطا مواجه میشدیم زیرا برای توابع دیس به صورت آن‌دیفایند تعریف میشود.
  this.course = course;
};

// LINKING prototype

Student.prototype = Object.create(Person.prototype);
// چون طبق این خط یک آبجکت خالی جدید ساخته میشود پس باید قبل از هر پروتوتایپ خاصی این کد نوشته شود.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const rain = new Student(`rain`, 1997, `art`);
rain.introduce();
rain.calcAge();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV(`Tesla`, 120, 23);
tesla.chargeBattery(90);

tesla.accelerate();
tesla.chargeBattery();
tesla.brake();
