import CarouselButton from './CarouselButton.js';

const WebtoonSection = (data, mainTitle) => {
  const _data = [...data].sort(() => Math.random() - 0.5);

  // prettier-ignore
  return `
  <section class="webtoon">
    <h2 class="webtoon__title">${mainTitle}</h2>
    <div class="webtoon__carousel">
      <ul class="webtoon__carousel__list">
      ${_data.map(({ cover, up, holdOn, freeEpisode, title, author, rating, views }) => `
      <li class="webtoon__carousel__item">
        <a href="/webtoon" class="webtoon__carousel__link" data-title="${title}">
          <div class="webtoon__carousel__thumbnail">
            <img src="${cover}" alt="" class="webtoon__carousel__img" />
            <div class="carousel__info">
              ${up ? `<i class="bx bxl-upwork"></i>` : ''} 
              ${holdOn ? `<i class="bx bx-time-five"></i>` : ''}
              <span class="carousel__free-count">${freeEpisode}화무</span>
            </div>
          </div>
        </a>
        <a href="/webtoon" class="webtoon__carousel__title" data-title="${title}">${title}</a>
        <p class="webtoon__carousel__author">${author}</p>
        <p>
          <span class="carousel__star">
            <i class="bx bxs-star"></i>
            ${rating}
          </span>
          <span class="carousel__rate">(${views})</span>
        </p>
      </li>
      `).join('')}
      </ul>
      ${CarouselButton()}
    </div>
  </section>
`;
};

export default WebtoonSection;
