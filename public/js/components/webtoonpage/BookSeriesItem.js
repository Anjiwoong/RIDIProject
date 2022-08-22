const BookSeriesItem = (selectedData, params) => {
  const { title, cover } = selectedData;

  return `
  <li class="books__series__item">
    <label class="books__series__item__wrap">
      <div class="books__series__item__wrap__left-position">
        <input type="checkbox" />
        <span class="checkbox"></span>
        <a href="/webtoon/${params + 1}" data-title="${title}" class="books__series__item__wrap__left-position__image">
          <picture>
            <source srcset="${cover}" type="image/webp" />
            <img src="${cover}" alt="웹툰 회차 표지" />
          </picture>
        </a>

        <div class="books__series__item__wrap__left-position__info-wrap">
          <a href="/webtoon/${params + 1}" data-title="${title}">
            <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
              <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge"
                >무료</span
              >
              <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                >${title} ${params + 1}화</span
              >
            </div>
            <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
              <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                >2020.07.31</span
              >
              <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                >14MB</span
              >
            </div>
          </a>
        </div>
      </div>
      <a href="/webtoon/${params + 1}" data-title="${title}">
        <button type="button" class="books__series__item__wrap__view-button">보기</button>
      </a>
    </label>
  </li>
`;
};
export default BookSeriesItem;
