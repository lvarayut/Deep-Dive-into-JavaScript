class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`I'm ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name, age, specialist) {
    super(name, age);
    this.specialist = specialist;
  }

  writeCode() {
    console.log(`Coding magic with ${this.specialist}!`);
  }
}

const john = new Person('John Doe', 25);
const jane = new Programmer('Jane Doe', 30, 'React');
console.log(john);
console.log(jane);