function createAdd(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = createAdd(5);
const addTen = createAdd(10);

console.log('Add Five', addFive(10));
console.log('Add Ten', addTen(10));
