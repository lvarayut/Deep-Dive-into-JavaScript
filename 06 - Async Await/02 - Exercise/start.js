// 1. Go to https://unsplash.com/developers and register
// 2. Create an app in the website to obtain a key
// 3. Fetch images by calling https://api.unsplash.com/photos/?client_id=${KEY}&page=${page} where the KEY and page are your key and page number respectively
// 4. Print out the fetched images
// Bonus: Try to rewrite the code snippet using Promise

let page = 1;
const KEY = 'YOUR_KEY';
const API_URL = `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`;

async function getImages(page) {

}

getImages(1);
