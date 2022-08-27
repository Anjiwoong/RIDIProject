const HeaderSearchItem = (matchedWebtoon, isMatched, regExp) => {
  // prettier-ignore
  document.querySelector('.header-down__form__search__container').innerHTML = isMatched
    ? `
  <ul class="header-down__form__search__list">
    ${matchedWebtoon.map(({ title, author, adult }) => `
    <li class="header-down__form__search__item" data-adult="${adult}">
      <a href="/webtoon" class="header-down__form__search__link" data-title="${title}">
        <span class="header-down__form__search__title">${title.replace(
          regExp,
          `<span class="header-down__form__search__title__match">${title.match(regExp)}</span>`
        )}</span>
        <span class="header-down__form__search__author">${author}</span>
      </a>
    </li>
    `).join('')}
  </ul>
  `
    : `
  <div class="header-down__form__search__books">
    <span>검색한 작품이 없습니다.</span>
  </div>
  `;
};

export default HeaderSearchItem;
