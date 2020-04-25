// Method I: Use a function expression
function createHero() {
  var getHeroName = function getHeroName() {
    console.log('Spiderman');
  };

  getHeroName();

  var getHeroName = function getHeroName() {
    console.log('Antman');
  };

  getHeroName();
}

createHero();

// Method II: Name the functions differently
function createHero() {
  function getSpiderman() {
    console.log('Spiderman');
  }

  getSpiderman();

  function getAntman() {
    console.log('Antman');
  }

  getAntman();
}

createHero();
