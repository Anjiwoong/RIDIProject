import { getPayload } from '../../app.js';

const BookSimilarItem = ({ title, cover, adult }) => {
  const isAdult = () => {
    if (localStorage.getItem('token')) {
      const { isAdult } = getPayload();

      if (isAdult) return cover;
      if (!isAdult && adult) return '/assets/cover/adultThumbnail.png';
      return cover;
    }

    if (adult) return '/assets/cover/adultThumbnail.png';

    return cover;
  };

  return `
  <li class="books__similar__list__item" data-adult="${adult}">
    <a href="/webtoon" data-title="${title}">
      <img src="${isAdult()}" alt="${title}" />
    </a>
  </li>
`;
};

export default BookSimilarItem;
