// Method I: Use a different variable name
hero = 'Ironman';
const updateHero = function () {
  console.log(`Hero before updating: ${hero}`);

  var innerHero = 'Thor';
  console.log(`Hero after updating: ${innerHero}`);
};

updateHero();

// Method II: Use the "let" keyword when declaring the "hero" variable
let hero = 'Ironman';

const updateHero = function () {
  console.log(`Hero before updating: ${hero}`);

  hero = 'Thor';
  console.log(`Hero after updating: ${hero}`);
};

updateHero();
