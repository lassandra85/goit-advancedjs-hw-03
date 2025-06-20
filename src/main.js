import { fetchImages } from './pixabay-api';
import { createMarkup } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchQuery = e.target.elements.searchQuery.value.trim();
  if (!searchQuery) {
    iziToast.warning({ message: 'Please enter a search query' });
    return;
  }

  gallery.innerHTML = '';
  toggleLoader(true);

  try {
    const data = await fetchImages(searchQuery);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    const markup = createMarkup(data.hits);
    gallery.innerHTML = markup;
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Try again later.' });
    console.error(error);
  } finally {
    toggleLoader(false);
  }
});

function toggleLoader(show) {
  loader.classList.toggle('is-hidden', !show);
}
