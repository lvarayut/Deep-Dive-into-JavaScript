// 1. Go to https://unsplash.com/developers and register
// 2. Create an app in the website to obtain a key
// 3. Fetch images by calling https://api.unsplash.com/photos/?client_id=${KEY}&page=${page} where the KEY and page are your key and page number respectively

const KEY = 'YOUR_KEY';

let page = 1;

async function getImages(page) {
  const result = await fetch(
    `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
  );

  return await result.json();
}

