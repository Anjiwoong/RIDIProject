import { createElement, fetchData, getPayload } from '../app.js';
import { BottomNavItem, ColorSettingBtn, Toaster } from '../components/index.js';

const $root = document.getElementById('root');
let payload = null;
let uniqueUser = '';
const initialSettings = {
  theme: 'dark',
  zoom: '100',
};

const navBarScrollHandler = () => {
  if (!document.querySelector('.viewer')) return;
  if (document.querySelector('.viewer__footer__settings').classList.contains('visible')) return;
  if (window.scrollY === 0 || window.scrollY === document.body.scrollHeight - window.innerHeight) {
    document.querySelector('.viewer__footer__top').classList.remove('hidden');
    document.querySelector('.viewer__header').classList.remove('hidden');
    document.querySelector('.viewer__footer').classList.remove('hidden');
    return;
  }

  document.querySelector('.viewer__footer__top').classList.add('hidden');
  document.querySelector('.viewer__header').classList.add('hidden');
  document.querySelector('.viewer__footer').classList.add('hidden');
};

const navBarClickHandler = e => {
  if (!e.target.closest('.viewer__webtoon')) return;
  const $viewerFooterSettings = document.querySelector('.viewer__footer__settings');
  const $viewerFooterTop = document.querySelector('.viewer__footer__top');

  if ($viewerFooterSettings.classList.contains('visible')) {
    $viewerFooterSettings.classList.remove('visible');
    $viewerFooterTop.classList.remove('hidden');
    return;
  }

  $viewerFooterTop.classList.toggle('hidden');
  document.querySelector('.viewer__header').classList.toggle('hidden');
  document.querySelector('.viewer__footer').classList.toggle('hidden');
};

const toggleSettings = ({ target }) => {
  if (!target.closest('#nav-settings')) return;
  document.querySelector('.viewer__footer__top').classList.toggle('hidden');
  document.querySelector('.viewer__footer__settings').classList.toggle('visible');
};

const changeMode = mode => {
  [...document.querySelectorAll('[data-mode]')].forEach(btn =>
    btn.classList.toggle('active', btn.dataset.mode === mode)
  );

  [...document.querySelectorAll('[data-theme]')].forEach(el => {
    el.dataset.theme = mode;
  });
};

const setZoom = currentZoom => {
  const $widthRate = document.getElementById('width-rate');
  const $viewerWebtoon = document.querySelector('.viewer__webtoon');

  $viewerWebtoon.style.zoom = currentZoom + '%';
  $widthRate.textContent = currentZoom + '%';

  localStorage.setItem(
    uniqueUser,
    JSON.stringify({
      ...JSON.parse(localStorage.getItem(uniqueUser)),
      zoom: currentZoom,
    })
  );
};

const setInitialMode = () => {
  payload = localStorage.getItem('token') ? getPayload().payload : { userId: 'logout' };
  uniqueUser = payload.userId + '-settings';
  if (!localStorage.getItem(uniqueUser)) localStorage.setItem(uniqueUser, JSON.stringify(initialSettings));
};

const setMode = ({ target }) => {
  if (!target.matches('[data-mode]')) return;

  const { mode } = target.dataset;

  changeMode(mode);
  localStorage.setItem(uniqueUser, JSON.stringify({ ...JSON.parse(localStorage.getItem(uniqueUser)), theme: mode }));
};

const showToaster = ({ target }) => {
  if (target.classList.contains('bx-x')) $root.removeChild($root.querySelector('.toaster'));
  if (!target.closest(['.preference, .notification', '.viewer__header__right'])) return;

  target.classList.toggle('active');
  if (target.closest('.preference')) {
    target.classList.toggle('bx-heart');
    target.classList.toggle('bxs-heart');
  }

  if (target.closest('.notification')) {
    target.classList.toggle('bx-bell');
    target.classList.toggle('bxs-bell');
  }

  Toaster(target);
};

const zoomHandler = ({ target }) => {
  if (!target.closest('.viewer__footer__settings__width__container')) return;
  let currentZoom = +JSON.parse(localStorage.getItem(uniqueUser)).zoom;

  const $reduceBtn = document.querySelector('.reduce-btn');
  const $enlargeBtn = document.querySelector('.enlarge-btn');

  if (target.closest('.reduce-btn')) {
    if (currentZoom === 50) return;
    $enlargeBtn.classList.add('active');
    currentZoom -= 10;
    if (currentZoom === 50) $reduceBtn.classList.remove('active');
    setZoom(currentZoom);
  }

  if (target.closest('.enlarge-btn')) {
    if (currentZoom === 100) return;
    $reduceBtn.classList.add('active');
    currentZoom += 10;
    if (currentZoom === 100) $enlargeBtn.classList.remove('active');
    setZoom(currentZoom);
  }
};

const bindViewerEvents = () => {
  window.addEventListener('scroll', navBarScrollHandler);
  $root.addEventListener('click', navBarClickHandler);
  $root.addEventListener('click', toggleSettings);
  $root.addEventListener('click', setMode);
  $root.addEventListener('click', showToaster);
  $root.addEventListener('click', zoomHandler);
};

const Viewer = async params => {
  bindViewerEvents();
  setInitialMode();

  const { webtoon } = await fetchData('/data/db.json');

  const webtoonTitle = localStorage.getItem('webtoonTitle');

  const selectedData = await webtoon.filter(str => str.title === webtoonTitle)[0];

  const { title, cover } = selectedData;

  const bottomNavItems = [
    { title, href: '/webtoon', icon: 'bx-home-alt-2', navTitle: '연재 홈', id: 'nav-home' },
    { href: '/webtoon', icon: 'bx-heart', navTitle: '선호작품 목록', id: 'nav-like' },
    { href: '/webtoon', icon: 'bx-message-detail', navTitle: '댓글', id: 'nav-comments' },
    { href: '#', icon: 'bx-palette', navTitle: '보기 설정', id: 'nav-settings' },
  ];

  const colorSettingItems = ['light', 'sepia', 'dark'];

  const personalSettings = JSON.parse(localStorage.getItem(uniqueUser));

  return createElement(`
  <div class="viewer">
    <div class="viewer__header" data-theme="${personalSettings.theme}" >
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
          <button class="icon-favorite preference"><i class="bx bx-heart"></i></button>
          <button class="icon-alarm notification"><i class="bx bx-bell"></i></button>
        </div>
      </div>
    </div>
    <div class="viewer__webtoon" data-theme="${personalSettings.theme}" style="zoom: ${personalSettings.zoom + '%'}">
      ${bottomNavItems.map(() => `<img src="${cover}" alt="${title} 컷씬" />`).join('')}
    </div>
    <div class="viewer__footer">
      <div class="viewer__footer__top" data-theme="${personalSettings.theme}">
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
      <div class="viewer__footer__bottom" data-theme="${personalSettings.theme}">
        <div class="viewer__footer__bottom__inner">
          <ul>
          ${bottomNavItems.map((item, i) => BottomNavItem(item, i)).join('')}
          </ul>
        </div>
        <div class="viewer__footer__settings" data-theme="${personalSettings.theme}">
          <h2 class="sr-only">뷰어 설정 팝업</h2>
          <ul class="viewer__footer__settings__list" data-theme="${personalSettings.theme}">
            <li class="viewer__footer__settings__item">
              <i class='bx bxs-paint-roll'></i>
            </li>
            <li class="viewer__footer__settings__item">
              <ul class="viewer__footer__settings__color__list">
                ${colorSettingItems.map(item => ColorSettingBtn(item)).join('')}
              </ul>
            </li>
          </ul>
          <ul class="viewer__footer__settings__list" data-theme="${personalSettings.theme}">
            <li class="viewer__footer__settings__item">
              <i class='bx bx-laptop'></i>
            </li>
            <li class="viewer__footer__settings__item width__desc">
              콘텐츠 너비 <span id="width-rate">${personalSettings.zoom}%</span>
            </li>
            <li class="viewer__footer__settings__item">
              <div class="viewer__footer__settings__width__container">
                <div class="viewer__footer__settings__width__reduce reduce-btn ${
                  personalSettings.zoom === 50 ? '' : 'active'
                }"><i class='bx bx-minus'></i></div>
                <div class="viewer__footer__settings__width__enlarge enlarge-btn ${
                  personalSettings.zoom === 100 ? '' : 'active'
                }"><i class='bx bx-plus'></i></div>
              </div>
            </li>
          </ul>
      </div>
      </div>
    </div>
  </div>
  `);
};

export default Viewer;
