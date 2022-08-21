import CarouselButton from './CarouselButton.js';

const RankingSection = (data, mainTitle) =>
  // prettier-ignore
  `
  <section class="rank">
    <h2 class="rank__title">${mainTitle}</h2>
    <div class="rank__carousel">
      <ol class="rank__carousel__list">
      ${data.map(({ cover, title, author, freeEpisode, rating, views }, i) => `
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
      </li>`).join('')}
      </ol>
      ${CarouselButton()}
    </div>
  </section>  
`;

export default RankingSection;
