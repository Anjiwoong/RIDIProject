import BookKeywordItem from './BookKeywordItem.js';

const BookKeyword = () => {
  // prettier-ignore
  const keywords = [
    '#로맨스', '#로맨스판타지', '#판타지/SF', '#시대/역사물',
    '#서양배경', '#금지된사랑', '#왕족/귀족', '#다정남주',
    '#순정남주', '#진지함', '#원작소설有', '#연재',
  ];

  return `
  <article class="books__keyword">
    <h3 class="books__keyword__title middle-title">이 책의 키워드</h3>
    <ul class="books__keyword__list">
      ${keywords.map(keyword => BookKeywordItem(keyword)).join('')}
    </ul>
    <!-- <ul class="books__keyword__suggestion-list">
      <li class="books__keyword__suggestion-list__item">
        <picture class="books__keyword__suggestion-list__item__image">
          <source srcset="../assets/books//booksimg2.webp" type="image/webp" />
          <img src="../assets/books/booksimg2.webp" alt="웹툰 황금숲 썸네일" />
        </picture>
        <h4 class="books__keyword__suggestion-list__item__title">황금숲</h4>
      </li>
    </ul> -->
  </article>
`;
};

export default BookKeyword;
