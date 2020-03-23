// 1. Refactor the code snippet to create stateful functions using the closure concept

function addFive(a)  {
  return a + 5;
}

function addTen(a)  {
  return a + 10;
}

console.log('Add Five', addFive(10));
console.log('Add Ten', addTen(10));