import CarouselButton from './CarouselButton.js';
import WebtoonSectionItem from './WebtoonSectionItem.js';

const WebtoonSection = (data, mainTitle) => {
  const _datas = [...data].sort(() => Math.random() - 0.5);

  // prettier-ignore
  return `
  <section class="webtoon">
    <h2 class="webtoon__title">${mainTitle}</h2>
    <div class="webtoon__carousel">
      <ul class="webtoon__carousel__list">
      ${_datas.map(data => `
        ${WebtoonSectionItem(data)}
      `).join('')}
      </ul>
      ${CarouselButton()}
    </div>
  </section>
`;
};

export default WebtoonSection;
