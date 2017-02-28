console.log('in main.js');
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
