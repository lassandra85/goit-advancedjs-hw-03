const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '...'; //чекаю на відповідь

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) throw new Error('HTTP error');
    return response.json();
  });
}
