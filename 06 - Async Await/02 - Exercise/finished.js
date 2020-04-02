// Method I: Use async/await
const KEY = 'YOUR_KEY';
let page = 1;

async function getImages(page) {
  try {
    const result = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
    );

    const images =  await result.json();
    console.log(images);
  } catch (error) {
    console.error(error);
  }
}
getImages(1);

// Method II: Use Promise
const KEY = 'YOUR_KEY';
let page = 1;

function getImages(page) {
  return fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`)
    .then(result => result.json())
    .then(images => console.log(images))
    .catch(error => console.error(error));
}

getImages(1);