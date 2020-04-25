// 1. What will be hoisted?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Ironman" and "Thor" respectively

hero = 'Ironman';

const updateHero = function () {
  console.log(`Hero before updating: ${hero}`);

  var hero = 'Thor';
  console.log(`Hero after updating: ${hero}`);
};

updateHero();
