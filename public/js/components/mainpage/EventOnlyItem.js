const EventOnlyItem = ({ bgColor, coverBg, coverMain, title, sub }) => `
  <li class="only-ridi__carousel__item carouselItem">
    <a href="#" class="only-ridi__carousel__link">
      <div class="only-ridi__carousel__bg ${bgColor}">
      ${coverBg ? `<img src="${coverBg}" alt="" class="only-ridi__carousel__img-bg" />` : ''}
        <img src="${coverMain}" alt="" class="only-ridi__carousel__img-main" />
      </div>
      <div class="only-ridi__carousel__info">
        <p class="only-ridi__carousel__title">
          ${title}
        </p>
        <p class="only-ridi__carousel__sub">${sub}</p>
      </div>
    </a>
  </li>
`;

export default EventOnlyItem;
