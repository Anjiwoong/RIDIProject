import BookSimilarItem from './BookSimilarItem.js';

const BookSimilar = data => {
  const randomData = [...data.webtoon].sort(() => Math.random() - 0.5).slice(0, 7);

  return `
  <article class="books__similar">
    <h3 class="books__similar__title middle-title">이 작품과 함께 둘러본 작품</h3>
    <ul class="books__similar__list">
      ${randomData.map(data => BookSimilarItem(data)).join('')}
    </ul>
  </article>  
`;
};

export default BookSimilar;
