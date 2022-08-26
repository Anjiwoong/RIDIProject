import { createElement, fetchData } from '../app.js';
import {
  BookInfo,
  BookSeries,
  BookKeyword,
  BookIntroduce,
  BookReview,
  BookSimilar,
  Header,
  Footer,
} from '../components/index.js';

const Webtoon = async params => {
  const { webtoon } = await fetchData('/data/db.json');
  const webtoonTitle = localStorage.getItem('webtoonTitle');

  const selectedData = webtoon.filter(str => str.title === webtoonTitle)[0];

  return createElement(`
  ${Header()}
  <section class="books">
    <h2 class="sr-only">상세페이지</h2>
    ${BookInfo(selectedData)}
    ${BookSeries(selectedData, params)}
    ${BookKeyword()}
    ${BookIntroduce(webtoon)}
    ${BookReview(selectedData)}
    ${BookSimilar(webtoon)}
  </section>
  ${Footer()}
  `);
};

export default Webtoon;
