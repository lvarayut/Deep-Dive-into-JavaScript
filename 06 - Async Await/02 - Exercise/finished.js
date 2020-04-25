// Method I: Use async/await
async function getImage() {
  try {
    const result = await fetch('https://source.unsplash.com/random');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getImage();

// Method II: Use Promise
function getImage() {
  return fetch('https://source.unsplash.com/random')
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

getImage();
