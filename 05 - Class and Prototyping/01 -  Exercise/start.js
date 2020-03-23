// 1. Correct the code snippet to use "class" 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function() {
  console.log(`I'm ${this.name}`);
};

function Programmer(name, age, specialist) {
  Person.call(this, name, age);
  this.specialist = specialist;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
Programmer.prototype.writeCode = function() {
  console.log(`Coding magic with ${this.specialist}!`);
};

const john = new Person('John Doe', 25);
const jane = new Programmer('Jane Doe', 30, 'React');
console.log(john);
console.log(jane);