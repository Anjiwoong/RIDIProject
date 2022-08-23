import { getPayload } from '../../app.js';
import HeaderDownItem from './HeaderDownItem.js';
import HeaderUpItem from './HeaderUpItem.js';

const Header = () => {
  console.log(getPayload());
  const isLogin = !!getPayload();

  // prettier-ignore
  const headerUp = [
    { title: '웹툰/만화', dotClass: true, rightArrow: false, isSelected: true },
    { title: '웹소설', dotClass: true, rightArrow: false, isSelected: false },
    { title: '도서', dotClass: true, rightArrow: false, isSelected: false },
    { title: '셀렉트', dotClass: false, rightArrow: true, isSelected: false },
  ];

  // prettier-ignore
  const headerDown = [
    { icon: 'bell', iconClass: 'bx bx-bell' },
    { icon: 'cart', iconClass: 'bx bx-cart' },
    { icon: 'book', iconClass: 'bx bx-book-open' },
    { icon: 'user', iconClass: 'bx bx-user' },
  ];

  const path = window.location.pathname;

  // prettier-ignore
  return `
  <div class="header ${path === '/' ? 'main' : 'sub'}">
    <div class="header-top">
      <div class="header-top__container">
        <ul class="header-top__category">
        ${headerUp.map(data => `
          ${HeaderUpItem(data)}
        `).join('')}
        </ul>
      </div>
    </div>
    <header class="header-down">
      <nav class="header-down__nav">
        <h1 class="header-down__nav__title">
          <a href="/" class="header-down__nav__link">
            <span class="sr-only">리디 홈으로 이동</span>
            <img src="/assets/header/ridi_logo.svg" class="header-down__nav__ridi" alt="" />
            <img src="/assets/header/webtoon_logo.svg" class="header-down__nav__webtoon" alt="" />
          </a>
        </h1>
        <form action="" class="header-down__form" role="search">
          <div class="header-down__form__container">
            <label for="" class="header-down__form__label">
              <i class="bx bx-search header-down__form__icon"></i>
              <input type="text" class="header-down__form__input" />
            </label>
          </div>
          <div class="header-down__form__search__container is-focus">
            <div class="header-down__form__search__recent">
              <span>최근 검색어</span>
            </div>
            <div class="header-down__form__search__save">
              <span>검색어 저장기능이 꺼져있습니다.</span>
            </div>
            <div class="header-down__form__search__switch">
              <span>검색어 저장 켜기</span>
            </div>
          </div>
        </form>
        <ul class="header-down__list">
        ${headerDown.map(data => `
          ${HeaderDownItem(data, isLogin)}
        `).join('')}
        </ul>
        <div class="header-down__login">
          <a href="" class="header-down__login__link">
            <span class="header-down__login__text">로그인</span>
          </a>
        </div>
        <div class="dimmmed-layer"></div>
      </nav>
    </header>
  </div>
`;
};

export default Header;
