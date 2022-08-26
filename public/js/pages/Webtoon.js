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
  const data = await fetchData('/data/db.json');
  const webtoonTitle = localStorage.getItem('webtoonTitle');

  const selectedData = await data.webtoon.filter(str => str.title === webtoonTitle)[0];

  return createElement(`
  ${Header()}
  <section class="books">
    <h2 class="sr-only">상세페이지</h2>
    ${BookInfo(selectedData)}
    ${BookSeries(selectedData, params)}
    ${BookKeyword()}
    ${BookIntroduce(data)}
    ${BookReview(selectedData)}
    ${BookSimilar(data)}
  </section>
  ${Footer()}
  `);
};

export default Webtoon;
