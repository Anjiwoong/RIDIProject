import CarouselButton from './CarouselButton.js';
import RankingSectionItem from './RankingSectionItem.js';

const RankingSection = (datas, mainTitle) => {
  // prettier-ignore
  return `
    <section class="rank">
      <h2 class="rank__title">${mainTitle}</h2>
      <div class="rank__carousel">
        <ol class="rank__carousel__list">
        ${datas.map((data, i) => `
          ${RankingSectionItem(data, i)}
        `).join('')}
        </ol>
        ${CarouselButton()}
      </div>
    </section>  
  `
};
export default RankingSection;
