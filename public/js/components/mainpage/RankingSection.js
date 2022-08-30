import CarouselButton from './CarouselButton.js';
import RankingSectionItem from './RankingSectionItem.js';

const RankingSection = (datas, mainTitle) =>
  // prettier-ignore
  `
    <section class="rank" data-currentPoint="1" data-carouseltype="9">
      <h2 class="rank__title">${mainTitle}</h2>
      <div class="rank__carousel">
      <div class="carousel-wrap">
        <ol class="rank__carousel__list carousel-list" style="transform: translate3d(0%, 0, 0)">
          ${datas.map((data, i) => `
            ${RankingSectionItem(data, i)}
          `).join('')}
        </ol>
      </div>
        ${CarouselButton(datas.length,9)}
      </div>
    </section>  
  `;

export default RankingSection;
