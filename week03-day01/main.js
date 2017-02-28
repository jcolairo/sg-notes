console.log('in main.js');
var o = {};
var s = '';
var b = true;
var n = 1;
var a = [];
console.log('Using "typeof" operator:');
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

console.log('Playing with different types:');
var numberAsString = '5';
var number = 3;
console.log(numberAsString + number);
console.log(typeof (numberAsString + number));
console.log(typeof (number + numberAsString));
console.log(number + number);
console.log(number + number + 'Harry');
console.log ('Harry' - 'Potter');
console.log(parseInt(numberAsString));
console.log(parseInt(numberAsString) + number);
console.log(parseInt(3.1415927));
console.log(parseFloat(3.1415927));


console.log('Control flow:');
var moneyInPocket = 20;

if (moneyInPocket > 10) {
  console.log('Another drink please!');
}
else if (moneyInPocket > 5){
  console.log('Make mine a half then');
}
else {
  console.log('You\'re too broke. Go home');
}

var countryOfOrigin = 'Kenya';
var greeting = '';

switch(countryOfOrigin) {
  case 'France':
    greeting = 'Bonjour';
    break;
  case 'Spain':
    greeting = 'Hola!';
    break;
  case 'Indonesia':
    greeting = 'Salamat sore';
    break;
  case 'Malta':
    greeting = 'Bonjo!';
    break;
  case 'Kenya':
    greeting = 'Jambo';
    break;
  default:
    greeting = 'Well hello there';
    break;
}

console.log(greeting);

var dayOfWeek = 'Thursday'

if (moneyInPocket > 10 && dayOfWeek === 'Friday') {
  console.log('YAY. Have a drink after work');
}
else {
  console.log('Go home you have work tomorrow');
}

var dayOfWeek = 'Thursday'

if (dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') {
  console.log('YAY. Have a drink after work');
}
else {
  console.log('Go home you have work tomorrow');
}

console.log('--- truthy/falsey:');
var truthyThings = [1, 0, 'something', '', -1, null, undefined, NaN];

for (var i = 0; i < truthyThings.length; i++) {
 console.log('  element', i, 'is:', truthyThings[i]);
if (truthyThings[i]) {
  console.log('  --> truthy');
}
else {
  console.log('  --> falsey');
}
}
var yourName = prompt('What is your name?');

if (yourName) {
  alert('Nice one, ' + yourName);
} else {
  alert('Not sure what your name is!');
}

console.log('--- Loops:');
var question = 'Now using a while() loop. What is your name?';
yourName = prompt(question);
while (!yourName) {
  alert('Not sure what your name is!');
  yourName = prompt(question);
}
alert('Nice one, ' + yourName);

do {
  yourName = prompt('Now using a do/while() loop. What is your name?');
  if (!yourName) {
    alert('Not sure what your name is!');
  }
} while (!yourName);
alert('Nice one, ' + yourName);
