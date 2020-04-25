// 1. Convert the code snippet to use async/await
// Bonus: Rewrite the code snippet using Promise

function simulateAsyncAPI(text, timeout, callback) {
  setTimeout(() => {
    console.log(text);
    if (callback) callback();
  }, timeout);
}

simulateAsyncAPI('A', 1000, () => {
  simulateAsyncAPI('B', 500, () => {
    simulateAsyncAPI('C', 100);
  });
});
