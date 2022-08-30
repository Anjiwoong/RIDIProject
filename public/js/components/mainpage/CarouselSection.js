import CarouselButton from './CarouselButton.js';
import CarouselSectionItem from './CarouselSectionItem.js';

const CarouselSection = mainCarousel =>
  // prettier-ignore
  `
  <section class="main__carousel">
    <div class="main__carousel__inner">
      <ul class="main__carousel__wrap">
        ${[mainCarousel[mainCarousel.length - 1], 
          ...mainCarousel, 
          { ...mainCarousel[0], current: !mainCarousel[0].current }, 
          {...mainCarousel[1], next: !mainCarousel[1].next}, 
          {...mainCarousel[2], next: !mainCarousel[2].next}].map((item, i, carousel) => 
            CarouselSectionItem(item, i, carousel))
            .join('')}
      </ul>
    </div>
    ${CarouselButton()}
  </section>
  `;

export default CarouselSection;
