// Simulating a third party library, which we can't control
const heroName = 'Ironman';

function printHeroName(name = heroName) {
  console.log(`My hero name is ${name}`);
}
