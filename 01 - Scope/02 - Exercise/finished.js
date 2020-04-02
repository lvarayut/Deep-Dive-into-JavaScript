// Method I: Use IIFE and pass heroName as a parameter
(() => {
  const heroName = 'Antman';

  function marvel() {
    printHeroName(heroName);
  }

  marvel();
})();
