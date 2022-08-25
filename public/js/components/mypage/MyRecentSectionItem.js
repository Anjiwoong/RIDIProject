const MyRecentSectionItem = ({ title, cover, freeEpisode, author, rating, views, category }) =>
  // prettier-ignore
  `
  <li class="recent__fill__item">
    <a href="/webtoon" data-title="${title}" class="recent__fill__link">
      <div class="recent__fill__thumbnail">
        <img src="${cover}" alt="" class="recent__fill__img" />
          ${category.includes('free') ? 
          `<span class="recent__fill__wait-free">
            <i class='bx bx-timer'></i>
          </span>
          `: ''
          }
        <p class="recent__fill__free-count">${freeEpisode}화 무료</p>
      </div>
    </a>
    <a href="/webtoon" data-title="${title}" class="recent__fill__title">${title}</a>
    <p class="recent__fill__sub">${author}</p>
    <p>
      <span class="carousel__star">
        <i class="bx bxs-star"></i>
        ${rating}
      </span>
      <span class="carousel__rate">${views}명</span>
    </p>
  </li>
`;

export default MyRecentSectionItem;
