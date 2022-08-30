import CarouselButton from './CarouselButton.js';
import WebtoonSectionItem from './WebtoonSectionItem.js';

const WebtoonSection = (data, mainTitle) => {
  const _datas = [...data].sort(() => Math.random() - 0.5);
  // prettier-ignore
  return `
  <section class="webtoon" data-currentPoint="1" data-carouseltype="6">
    <h2 class="webtoon__title">${mainTitle}</h2>
    <div class="webtoon__carousel">
      <div class="carousel-wrap">
        <ul class="webtoon__carousel__list carousel-list" style="transform: translate3d(0%, 0, 0)">
        ${_datas.map(data => `
          ${WebtoonSectionItem(data)}
        `).join('')}
        </ul>
     </div>
      ${CarouselButton(_datas.length,6)}
    </div>
  </section>
`;
};

export default WebtoonSection;
