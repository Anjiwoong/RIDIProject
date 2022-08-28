import { createElement, fetchData } from '../app.js';
import { bottomNavItem } from '../components/index.js';

const $root = document.getElementById('root');

const navBarScrollHandler = () => {
  console.log('hi')
  const $viewerHeader = document.querySelector('.viewer__header');
  const $viewerFooter = document.querySelector('.viewer__footer');
  const $viewerFooterTop = document.querySelector('.viewer__footer__top');

  $viewerFooterTop.classList.add('hidden');
  $viewerHeader.classList.remove('visible');
  $viewerHeader.classList.add('hidden');
  $viewerFooter.classList.remove('visible');
  $viewerFooter.classList.add('hidden');
}

const navBarClickHandler = e => {
  console.log('hi2')
  if (!e.target.closest('.viewer__webtoon')) return;
  const $viewerHeader = document.querySelector('.viewer__header');
  const $viewerFooter = document.querySelector('.viewer__footer');
  const $viewerFooterTop = document.querySelector('.viewer__footer__top');

  $viewerFooterTop.classList.remove('hidden');
  $viewerHeader.classList.remove('hidden');
  $viewerHeader.classList.add('visible');
  $viewerFooter.classList.remove('hidden');
  $viewerFooter.classList.add('visible');
}

const bindViewerEvents = () => {
  window.addEventListener('scroll', navBarScrollHandler);
  $root.addEventListener('click', navBarClickHandler);
}

const Viewer = async params => {
  bindViewerEvents();

  const { webtoon } = await fetchData('/data/db.json');

  const webtoonTitle = localStorage.getItem('webtoonTitle');

  const selectedData = await webtoon.filter(str => str.title === webtoonTitle)[0];

  const { title, cover } = selectedData;

  const bottomNavItems = [
    { title, href: '/webtoon', icon: 'bx-home-alt-2', navTitle: '연재 홈' },
    { href: '#', icon: 'bx-heart', navTitle: '선호작품 등록'},
    { href: '#', icon: 'bx-palette', navTitle: '보기 설정'}
  ];

  return createElement(`
  <div class="viewer">
    <div class="viewer__header">
      <div class="viewer__header__inner">
        <div class="viewer__header__left">
          <h1 class="viewer__title">
            <a href="/webtoon" class="link-back" data-title="${title}">
              <i class="bx bx-arrow-back"></i>
              <span class="btn-back sr-only">돌아가기</span>
              <span class="title">${title}</span>
            </a>
          </h1>
        </div>
        <div class="viewer__header__right">
          <button class="icon-favorite"><i class="bx bx-heart"></i></button>
          <button class="icon-alarm"><i class="bx bx-bell"></i></button>
        </div>
      </div>
    </div>
    <div class="viewer__webtoon">
      <img src="${cover}" alt="" />
    </div>
    <div class="viewer__footer">
      <div class="viewer__footer__top">
        <div class="viewer__footer__top__inner">
          <div class="viewer__footer__top__left">
            <p class="title">${title} ${+params}화</p>
          </div>
          <div class="viewer__footer__top__right">
            <a href="/webtoon/${+params - 1}" class="viewer__footer__top__right__link" data-title="${title}">
              <button class="btn-book-prev">
                <span class="arrow-left"><i class="bx bx-chevron-left"></i></span>
                <span class="">이전화</span>
              </button>
            </a>
            <a href="/webtoon/${+params + 1}" class="viewer__footer__top__right__link" data-title="${title}">
              <button class="btn-book-next">
                <span class="">다음화</span>
                <span class="arrow-right"><i class="bx bx-chevron-left"></i></span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="viewer__footer__bottom">
        <div class="viewer__footer__bottom__inner">
          <ul>
          ${bottomNavItems.map((item, i) => bottomNavItem(item, i)).join('')}
          </ul>
        </div>
      </div>
    </div>
  </div>
  `);
};

export default Viewer;
