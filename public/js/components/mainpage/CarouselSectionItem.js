const CarouselSectionItem = (data, i, carousel) => {
  const { title, subTitle, current, next, cover, up, only, free } = data;

  return `
  <li class="main__carousel__item
    ${current ? ' currentSlide' : next ? ' nextSlide' : ''}">
    <a href="#" class="main__carousel__link">
      <img src="${cover}" alt="" />
      <div class="main__carousel__desc">
        <div class="main__carousel__info">
          ${up ? `<span class="main__carousel__mark">NEW</span>` : ''}
          ${only ? `<span class="main__carousel__mark">ONLY</span>` : ''}
          ${free ? `<span class="main__carousel__mark">리다무</span>` : ''}
        </div>
        <div class="main__carousel__title">
          <span>${title}</span>
        </div>
        <div class="main__carousel__subTitle">
          <span>${subTitle}</span>
        </div>
        <div class="main__carousel__counter">
          <span>${i === carousel.length - 3 ? '1' : i}</span>/${carousel.length - 4}
        </div>
      </div>
    </a>
  </li>`;
};
export default CarouselSectionItem;
