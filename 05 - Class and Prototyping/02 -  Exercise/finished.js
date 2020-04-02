Array.prototype.sayHello = function() {
  this.forEach(heroName => console.log(`Hello ${heroName}`));
};

const heroNames = ['Antman', 'Ironman', 'Thor', 'Spiderman'];
heroNames.sayHello();