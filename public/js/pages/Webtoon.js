import { createElement, fetchData, getPayload } from '../app.js';
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

let webtoon = null;
let selectedData = null;

let reviewList = [
  {
    idx: 4,
    userId: 'Sasuke',
    date: '2022.08.29',
    comment: '생각보다 내용 전개가 흥미롭네요 ~ 지루함없이 달리고 있어요 !',
    starRating: 4,
  },
  { idx: 3, userId: 'Naruto', date: '2022.08.29', comment: '재미있게 잘 보고 있습니다', starRating: 5 },
  {
    idx: 2,
    userId: 'Hogwarts',
    date: '2022.08.28',
    comment: '딱 포인트 받을만큼만 보려고 했는데... 미친듯 결제하고 있는 내 손가락! 재밌다.',
    starRating: 4,
  },
  {
    idx: 1,
    userId: 'zerobase',
    date: '2022.08.28',
    comment: '작화가 예쁘고 읽기 편해 좋네요 재밌게 읽고 있어요',
    starRating: 4,
  },
];

const initReviewList = () => {
  reviewList = [
    {
      idx: 4,
      userId: 'Sasuke',
      date: '2022.08.29',
      comment: '생각보다 내용 전개가 흥미롭네요 ~ 지루함없이 달리고 있어요 !',
      starRating: 4,
    },
    { idx: 3, userId: 'Naruto', date: '2022.08.29', comment: '재미있게 잘 보고 있습니다', starRating: 5 },
    {
      idx: 2,
      userId: 'Hogwarts',
      date: '2022.08.28',
      comment: '딱 포인트 받을만큼만 보려고 했는데... 미친듯 결제하고 있는 내 손가락! 재밌다.',
      starRating: 4,
    },
    {
      idx: 1,
      userId: 'zerobase',
      date: '2022.08.28',
      comment: '작화가 예쁘고 읽기 편해 좋네요 재밌게 읽고 있어요',
      starRating: 4,
    },
  ];
};

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
  const $bookModal = $root.querySelector('.book-modal');

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
const seriesMore = e => {
  if (!e.target.closest('.view-all-button')) return;
  const webtoonSeries = new Array(20).fill('');

  e.target.closest('.tab-list').querySelector('.books__series__list').innerHTML = `
  ${webtoonSeries.map((_, i) => BookSeriesItem(selectedData, i)).join('')}
  `;

  e.target.closest('.tab-list').querySelector('.view-all-button').remove();
};
const mouseOnStar = e => {
  if (!e.target.classList.contains('reviewStar')) return;

  $root.querySelectorAll('.reviewStar').forEach(star => {
    if (star.dataset.rating <= e.target.dataset.rating) {
      star.classList.add('hovered');
    }
  });
};
const mouseOutStar = e => {
  if (!e.target.classList.contains('reviewStar')) return;
  $root.querySelectorAll('.reviewStar').forEach(star => star.classList.remove('hovered'));
};
const selectStar = e => {
  if (!e.target.classList.contains('reviewStar')) return;

  $root.querySelectorAll('.reviewStar').forEach(star => {
    star.classList.remove('selected');

    if (star.dataset.rating <= e.target.dataset.rating) {
      star.classList.add('selected');
      star.style.animationName = 'scale';

      setTimeout(() => {
        star.style.animationName = 'none';
      }, 700);
    }
  });
  $root.querySelector('.reviewStars').dataset.countStar = e.target.dataset.rating;
};
const activateReviewButton = e => {
  if (!e.target.classList.contains('review-textarea')) return;
  const review = e.target.value.trim();
  $root.querySelector('.review-button').classList.toggle('opacity', !review);
};
const createReviewIdx = () => Math.max(...reviewList.map(review => review.idx), 0) + 1;

const plusZero = num => {
  if (num < 10) return '0' + num;
  return num;
};
const webtoonReRender = () =>
  createElement(`
  ${Header()}
  <section class="books">
    <h2 class="sr-only">상세페이지</h2>
    ${BookInfo(selectedData)}
    ${BookSeries(selectedData)}
    ${BookKeyword()}
    ${BookIntroduce(selectedData)}
    ${BookReview(selectedData, reviewList)}
    ${BookSimilar(webtoon)}
  </section>
  ${Footer()}
  `);

const addReview = e => {
  if (!e.target.closest('.review-form')) return;
  e.preventDefault();

  const userInfo = getPayload() ? getPayload().payload : undefined;

  if (!userInfo) {
    const returnValue = confirm('로그인 상태에서 이용 가능합니다. 로그인 페이지로 이동합니다.');
    if (returnValue) window.location.href = '/login';
    return;
  }

  if (!$root.querySelector('.reviewStars').dataset.countStar) return alert('별점 선택 후 리뷰를 등록해 주세요.');

  const today = new Date();

  reviewList = [
    {
      idx: createReviewIdx(),
      userId: userInfo.userId,
      date: `${today.getFullYear()}.${plusZero(today.getMonth() + 1)}.${plusZero(today.getDate())}`,
      comment: $root.querySelector('.review-textarea').value,
      starRating: +$root.querySelector('.reviewStars').dataset.countStar,
    },
    ...reviewList,
  ];

  const views = +selectedData.views.replace(/,/g, '');
  const newRating =
    (views * selectedData.rating + parseInt($root.querySelector('.reviewStars').dataset.countStar, 10)) / (views + 1);

  selectedData = {
    ...selectedData,
    views: (views + 1).toLocaleString(),
    rating: Math.round(newRating * 10) / 10,
  };
  $root.replaceChildren(webtoonReRender());
};

const WebtoonEventBinding = () => {
  $root.addEventListener('click', modalButtonClick);
  $root.addEventListener('click', buyTabClick);
  $root.addEventListener('click', seriesMore);
  $root.addEventListener('mouseover', mouseOnStar);
  $root.addEventListener('mouseout', mouseOutStar);
  $root.addEventListener('click', selectStar);
  $root.addEventListener('input', activateReviewButton);
  $root.addEventListener('submit', addReview);
};

// webtoon 페이지

const Webtoon = async () => {
  const webtoonData = await fetchData('/data/db.json');
  webtoon = webtoonData.webtoon;
  const webtoonTitle = localStorage.getItem('webtoonTitle');
  selectedData = webtoon.find(str => str.title === webtoonTitle);

  initReviewList();
  WebtoonEventBinding();

  return createElement(`
  ${Header()}
  <section class="books">
    <h2 class="sr-only">상세페이지</h2>
    ${BookInfo(selectedData)}
    ${BookSeries(selectedData)}
    ${BookKeyword()}
    ${BookIntroduce(selectedData)}
    ${BookReview(selectedData, reviewList)}
    ${BookSimilar(webtoon)}
  </section>
  ${Footer()}
  `);
};

export default Webtoon;
