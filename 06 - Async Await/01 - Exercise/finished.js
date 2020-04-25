// Method I: Use async/await
function simulateAsyncAPI(text, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text === 'B') reject('B got rejected');

      console.log(text);
      resolve();
    }, timeout);
  });
}

async function run() {
  try {
    await simulateAsyncAPI('A', 1000);
    await simulateAsyncAPI('B', 500);
    await simulateAsyncAPI('C', 100);
  } catch (error) {
    console.error(error);
  }
}

// Method II: Use Promise
function simulateAsyncAPI(text, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text === 'B') reject('B got rejected');

      console.log(text);
      resolve();
    }, timeout);
  });
}

simulateAsyncAPI('A', 1000)
  .then(() => {
    return simulateAsyncAPI('B', 500);
  })
  .then(() => {
    return simulateAsyncAPI('C', 100);
  })
  .catch((error) => {
    console.error(error);
  });
