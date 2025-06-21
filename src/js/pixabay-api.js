const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31963270-0e971a3d68be2b002dee093f0';

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
