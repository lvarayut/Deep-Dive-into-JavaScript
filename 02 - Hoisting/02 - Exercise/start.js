// 1. What will be hoisted?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Spiderman"  and "Antman" respectively

function createHero() {
  function getHeroName() {
    console.log('Spiderman');
  }

  getHeroName();

  function getHeroName() {
    console.log('Antman');
  }

  getHeroName();
}

createHero();
