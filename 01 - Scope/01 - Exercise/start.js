// 1. How many execution contexts do we have?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Ironman" and "Thor" respectively

var heroName = 'Thor';
function marvel() {
  if (heroName.length < 5) {
    heroName = 'Ironman';
  }

  console.log('In function hero name', heroName);
}
marvel();
console.log('Outside function hero name', heroName);
