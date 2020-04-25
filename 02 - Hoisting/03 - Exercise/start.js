// 1. How many execution contexts do we have?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Thor", "Antman", "Spiderman", and "Ironman" respectively

function marvel() {
  const heroes = ['Thor', 'Antman', 'Spiderman', 'Ironman'];

  for (var i = 0; i < heroes.length; i++) {
    setTimeout(() => {
      console.log(heroes[i]);
    }, 1000 * (i + 1));
  }
  console.log(i);
}
marvel();
