import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31963270-0e971a3d68be2b002dee093f0';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
