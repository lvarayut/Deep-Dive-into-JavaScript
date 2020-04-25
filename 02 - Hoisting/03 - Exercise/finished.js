// Method I: Use the block scope
function marvel() {
  const heroes = ['Thor', 'Antman', 'Spiderman', 'Ironman'];

  for (let i = 0; i < heroes.length; i++) {
    setTimeout(() => {
      console.log(heroes[i]);
    }, 1000 * (i + 1));
  }
  console.log(i);
}
marvel();

// Method II: Use Immediately Invoked Function Expression (IIFE)
function marvel() {
  const heroes = ['Thor', 'Antman', 'Spiderman', 'Ironman'];

  for (var i = 0; i < heroes.length; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(heroes[i]);
      }, 1000 * (i + 1));
    })(i);
  }
  console.log(i);
}
marvel();
