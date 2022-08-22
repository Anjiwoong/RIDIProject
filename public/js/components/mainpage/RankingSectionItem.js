const RankingSectionItem = ({ title, cover, author, freeEpisode, rating, views }, i) => `
  <li class="rank__carousel__item">
    <a href="/webtoon" class="rank__carousel__link" data-title="${title}">
      <img src="${cover}" alt="" class="rank__carousel__img" />
    </a>
    <span class="rank__carousel__num">${i + 1}</span>
    <div class="rank__carousel__desc">
      <a href="/webtoon" class="rank__carousel__title" data-title="${title}">${title}</a>
      <p class="rank__carousel__info">${author} &#183; ${freeEpisode}화 무료</p>
      <!-- 별점 컴포넌트 -->
      <p>
        <span class="carousel__star">
          <i class="bx bxs-star"></i>
          ${rating}
        </span>
        <span class="carousel__rate">(${views})</span>
      </p>
    </div>
  </li>
`;

export default RankingSectionItem;
