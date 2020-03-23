const KEY = 'YOUR_KEY';

let page = 1;

async function getImages(page) {
  const result = await fetch(
    `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
  );

  return await result.json();
}
