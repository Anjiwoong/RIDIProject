const EventViewItem = ({ backgroundColor, title, cover }) => `
  <li class="event__carousel__item carouselItem ${backgroundColor} ">
    <a href="#" class="event__carousel__link">
      <p class="event__carousel__sub">
        ${title}
      </p>
      <img src="${cover}" alt="" class="event__carousel__img" />
    </a>
  </li>
`;

export default EventViewItem;
