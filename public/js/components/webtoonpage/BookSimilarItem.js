const BookSimilarItem = data => `
  <li class="books__similar__list__item">
    <a href="/webtoon" data-title="${data.title}">
      <img src="${data.cover}" alt="" />
    </a>
  </li>
`;

export default BookSimilarItem;
