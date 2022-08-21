import CarouselButton from './CarouselButton.js';

const EventOnly = mainTitle => {
  const data = [
    {
      title: '저주를 받더라도 <br /> 나를 계속 사랑해',
      sub: '<마귀> 전원 포인트!',
      coverMain: '/assets/onlyRidi/devil.webp',
      coverBg: '/assets/onlyRidi/devil_bg.webp',
      bgColor: 'bg-red',
    },
    {
      title: '가정교사로 온 섬, <br /> 고용주 남매가 수상하다',
      sub: '마녀가 사는 섬',
      coverMain: '/assets/onlyRidi/witch.webp',
      coverBg: '',
      bgColor: 'bg-purple',
    },
    {
      title: '너를 생각하면 생각할수록 <br /> 나는 고독하고 외로워져',
      sub: '상수리나무 아래',
      coverMain: '/assets/onlyRidi/tree.webp',
      coverBg: '',
      bgColor: 'bg-yellow',
    },
    {
      title: '환상 속 괴물은 <br /> 당신의 어둠을 먹고 자란다',
      sub: '환상은 밤에 자란다',
      coverMain: '/assets/onlyRidi/fantasy.webp',
      coverBg: '/assets/onlyRidi/fantasy_bg.webp',
      bgColor: 'bg-urquoise',
    },
  ];

  // prettier-ignore
  return `
  <section class="only-ridi">
    <h2 class="only-ridi__title">${mainTitle}</h2>
    <div class="only-ridi__carousel">
      <ul class="only-ridi__carousel__list">
      ${data.map(({ bgColor, coverBg, coverMain, title, sub }) => `
      <li class="only-ridi__carousel__item">
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
      </li> `).join('')}
      </ul>
      ${CarouselButton()}
    </div>
  </section>
`;
};

export default EventOnly;