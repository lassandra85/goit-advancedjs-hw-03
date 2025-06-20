export function createMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p>👍 ${likes}</p>
          <p>👁️ ${views}</p>
          <p>💬 ${comments}</p>
          <p>⬇️ ${downloads}</p>
        </div>
      </li>
    `;
      }
    )
    .join('');
}
