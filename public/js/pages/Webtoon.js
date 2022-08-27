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
  BookModal,
  BookSeriesItem,
} from '../components/index.js';

const $root = document.getElementById('root');

//  webtoon 이벤트

const modalButtonModify = target => {
  const $icon = target.querySelector('i');
  const $buttonContent = target.querySelector('.button_content');
  const buttonText = +$buttonContent.textContent;

  if (target.closest('.preference')) {
    $icon.classList.toggle('bx-heart');
    $icon.classList.toggle('bxs-heart');

    $buttonContent.textContent = target.closest('.is-clicked')
      ? buttonText < 0
        ? buttonText
        : buttonText - 1
      : buttonText + 1;
  } else if (target.closest('.series-noti')) {
    $icon.classList.toggle('bx-plus');
    $icon.classList.toggle('bx-check');
    $buttonContent.textContent = target.closest('.is-clicked') ? '시리즈 신간알림' : '신간알림 받는중';
  }
};

const modalButtonClick = e => {
  const $bookModal = document.querySelector('.book-modal');

  if (e.target.classList.contains('bx-x')) $root.removeChild($bookModal);

  if (!e.target.closest('.popup-btn')) return;

  if ($bookModal) $root.removeChild($bookModal);

  const target = e.target.closest('.popup-btn');
  modalButtonModify(target);
  BookModal(target);
};

const buyTabClick = e => {
  if (!e.target.classList.contains('tab-title')) return;
  $root
    .querySelectorAll('.tab-list')
    .forEach($tabList => $tabList.classList.toggle('active', e.target.closest('.tab-list') === $tabList));
};

const seriesMore = (e, selectedData) => {
  if (!e.target.closest('.view-all-button')) return;
  const webtoonSeries = new Array(20).fill('');

  e.target.closest('.tab-list').querySelector('.books__series__list').innerHTML = `
  ${webtoonSeries.map((_, i) => BookSeriesItem(selectedData, i)).join('')}
  `;

  e.target.closest('.tab-list').querySelector('.view-all-button').remove();
};

const mouseOnStar = e => {
  if (!e.target.classList.contains('reviewStar')) return;

  document.querySelectorAll('.reviewStar').forEach(star => {
    if (star.dataset.rating <= e.target.dataset.rating) {
      star.classList.add('hovered');
    }
  });
};
const mouseOutStar = e => {
  if (!e.target.classList.contains('reviewStar')) return;
  document.querySelectorAll('.reviewStar').forEach(star => star.classList.remove('hovered'));
};

const selectStar = e => {
  if (!e.target.classList.contains('reviewStar')) return;

  document.querySelectorAll('.reviewStar').forEach(star => {
    star.classList.remove('selected');
    if (star.dataset.rating <= e.target.dataset.rating) {
      star.classList.add('selected');
    }
  });
  document.querySelector('.reviewStars').dataset.countStar = e.target.dataset.rating;
};

const activateReviewButton = e => {
  if (!e.target.classList.contains('review-textarea')) return;
  const review = e.target.value.trim();
  document.querySelector('.review-button').classList.toggle('opacity', !review);
};

const WebtoonEventBinding = selectedData => {
  $root.addEventListener('click', modalButtonClick);
  $root.addEventListener('click', buyTabClick);
  $root.addEventListener('click', e => seriesMore(e, selectedData));
  $root.addEventListener('mouseover', mouseOnStar);
  $root.addEventListener('mouseout', mouseOutStar);
  $root.addEventListener('click', selectStar);
  $root.addEventListener('input', activateReviewButton);
};

// webtoon 페이지

const Webtoon = async params => {
  const { webtoon } = await fetchData('/data/db.json');
  const webtoonTitle = localStorage.getItem('webtoonTitle');
  const selectedData = webtoon.filter(str => str.title === webtoonTitle)[0];

  WebtoonEventBinding(selectedData);

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
