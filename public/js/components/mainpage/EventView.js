import CarouselButton from './CarouselButton.js';
import EventViewItem from './EventViewItem.js';

const EventView = mainTitle => {
  const datas = [
    {
      title: '기간 한정 45화 무료! <br /> 유료로 보면 포인트+',
      cover: '/assets/event/event_switch.webp',
      backgroundColor: 'switch',
    },
    {
      title: '<그대 사자의 이름으로> <br /> 31화 UP!',
      cover: '/assets/event/switch_up.webp',
      backgroundColor: 'up',
    },
    {
      title: '8월의 리디 웹툰 미리 맛보기 <br /> 신작이 찾아왔어요!',
      cover: '/assets/event/event_early.webp',
      backgroundColor: 'early',
    },
    {
      title: ' KT 결제로 리디캐시 <br /> 충전 시 5천원 할인!',
      cover: '/assets/event/event_cash.webp',
      backgroundColor: 'cash',
    },
  ];

  // prettier-ignore
  return `
  <section class="event mini-banner" data-currentPoint="1" data-carouseltype="3">
    <h2 class="event__title">${mainTitle}</h2>
    <div class="event__carousel">
      <div class="carousel-wrap">
        <ul class="event__carousel__list carousel-list" style="transform: translate3d(0%, 0, 0)">
          ${datas.map(data => `
            ${EventViewItem(data)}
          `).join('')}
        </ul>
      </div>
      ${CarouselButton(datas.length,3)}
    </div>
  </section>`;
};
export default EventView;
