// Method I: Move the counter variable out of the function, but this is polluting the global scope
let counter = 0;
function times() {
  counter += 1;
  console.log('Counter', counter);
}

times();
times();

// Method II: Use the closure concept
function createTimes() {
  let counter = 0;
  return function times() {
    counter += 1;
    console.log('Counter', counter);
  };
}
const times = createTimes();
times();
times();
