// Method I: Use the block scope
var heroName = 'Thor';
function marvel() {
  if (heroName.length < 5) {
    const heroName = 'Ironman';
    console.log('In function hero name', heroName);
  }
}
marvel();
console.log('Outside function hero name', heroName);

// Method II: Use different variable names
var heroName = 'Thor';
function marvel() {
  var innerHeroName = heroName;
  if (heroName.length < 5) {
    innerHeroName = 'Ironman';
    console.log('In function hero name', innerHeroName);
  }
}
marvel();
console.log('Outside function hero name', heroName);
