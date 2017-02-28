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
