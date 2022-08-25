import { createElement, fetchData } from '../app.js';

const Viewer = async params => {
  const { webtoon } = await fetchData('/data/db.json');

  const webtoonTitle = localStorage.getItem('webtoonTitle');

  const selectedData = await webtoon.filter(str => str.title === webtoonTitle)[0];

  const { title, cover } = selectedData;

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
            <li>
              <button class="viewer__footer__bottom__button">
                <a href="/webtoon" class="viewer__footer__bottom__link" data-title="${title}">
                  <i class="bx bx-home-alt-2"></i>
                  <span class="viewer__footer__bottom__title">연재 홈</span>
                </a>
              </button>
            </li>
            <li>
              <button class="viewer__footer__bottom__button">
                <a href="#" class="viewer__footer__bottom__link">
                  <i class="bx bx-heart"></i>
                  <span class="viewer__footer__bottom__title">선호작품 목록</span>
                </a>
              </button>
            </li>
            <li>
              <button class="viewer__footer__bottom__button">
                <!-- 링크 부분 없애야 함. -->
                <a href="javascript:" class="viewer__footer__bottom__link">
                  <i class="bx bx-message-detail"></i>
                  <span class="viewer__footer__bottom__title">댓글</span>
                  <span class="viewer__footer__bottom__comment">4,398</span>
                </a>
              </button>
            </li>
            <li>
              <button class="viewer__footer__bottom__button">
                <!-- 링크 부분 없애야 함. -->
                <a href="javascript:" class="viewer__footer__bottom__link">
                  <i class="bx bx-palette"></i>
                  <span class="viewer__footer__bottom__title">보기 설정</span>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `);
};

export default Viewer;
