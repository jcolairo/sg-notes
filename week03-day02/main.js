console.log('in main.js');

var capitalCity = 'London';

var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};
var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};
var person3 = {
  firstName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};
var people = [person1, person2, person3];

for (var i = 0; i < people.length; i++) {
  console.log(people[i].firstName, people[i].age);
};


if ({} === {}) {
  console.log('Equal');
}
else {
  console.log('Not Equal');
}

console.log(' --- Functions:');

function createPerson(firstNameParam, lastNameParam, emailParam, ageParam) {
  var newPerson = {
    firstName: firstNameParam,
    lastName: lastNameParam,
    email: emailParam,
    age: ageParam,
    fullName: function() {
      return firstNameParam + ' ' + lastNameParam + '.';
    }
  };

  return newPerson;
};

var harold = createPerson('Harald', 'Kumar', 'h.huma@example.com', 15);
console.log('new person\'s full name:', harold.fullName());

var tola = createPerson('Tola', 'Olaoke', 'tolaoke@spartaglobal.co', 21);
var asma = createPerson('Asma', 'Chaima', 'achaima@spartaglobal.co', 21);
people = [];
people.push (harold, tola, asma);

function isOldEnough(age) {
  return (age >=18);
}

if (isOldEnough(harold.age)) {
  console.log('Come in');
}
else {
  console.log('Come back when you are older');
}

for (i = 0; i < people.length; i++) {
  console.log(people[i].fullName(), (isOldEnough(people[i].age)) ? 'is old enough' : 'is Not old enough');

  // if (isOldEnough(people[i].age)) {
  //     console.log(people[i].fullName(), 'is old enough');
  // }
  // else {
  //   console.log(people[i].fullName(), 'is NOT old enough');
  // }
}

console.log('--- OO JavaScript:');

function Circle(radius) {
  this.radius = radius;
  // one way to write an instance method
  this.circumference = function () {
    return 2 * Math.PI * this.radius;
  };
}

// static (or class) property/variable:
Circle.PI = 22/7;

// another way to write an instane method:
// add it to the prototype
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

var coin = new Circle (1.2);
var plate = new Circle(7);
var circles = [coin, plate];

// console.log('Radius is:', coin.radius);
// console.log('Cicumference is:', coin.circumference());
// console.log('Area is:', coin.area());

for (i = 0; i < circles.length; i++) {
  console.log('Radius is:', circles[i].radius);
  console.log('Cicumference is:', circles[i].circumference());
  console.log('Area is:', circles[i].area());
}
