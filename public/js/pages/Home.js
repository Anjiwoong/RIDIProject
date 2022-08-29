import { createElement, fetchData, getPayload } from '../app.js';
import HeaderSearchItem from '../components/common/HeaderSearchItem.js';
import HeaderSearchList from '../components/common/HeaderSearchList.js';

import {
  Header,
  HomeNav,
  CarouselSection,
  NewArrivalSection,
  WebtoonSection,
  RankingSection,
  EventView,
  EventOnly,
  Footer,
} from '../components/index.js';

const $root = document.getElementById('root');

const checkAdult = e => {
  if (!e.target.closest('li')) return;

  if (localStorage.getItem('token')) {
    const { isAdult } = getPayload();

    if (!isAdult && e.target.closest('li')?.dataset.adult === 'true') {
      alert('성인 인증이 필요합니다.');
      return;
    }
    return;
  }

  if (e.target.closest('li').dataset.adult === 'true') {
    alert('성인이 아닙니다.');
  }
};

const toggleSearchDiv = e => {
  const $searchContainer = document.querySelector('.header-down__form__search__container');
  if (e.target.matches('.header-down__form__input')) $searchContainer.classList.add('is-focus');

  if (!e.target.matches('.header-down__form__input') && !e.target.matches('.header-down__form__search__container *'))
    $searchContainer.classList.remove('is-focus');

  if (e.target.matches('.header-down__form__input') && !e.target.value.trim()) HeaderSearchList();
};

const isEmptyValue = (e, webtoon) => {
  if (!e.target.classList.contains('header-down__form__input')) return;

  const regExp = new RegExp(e.target.value, 'i');
  const matchedWebtoon = webtoon.filter(data => data.title.match(regExp));
  const isMatched = matchedWebtoon.length;

  HeaderSearchItem(matchedWebtoon, isMatched, regExp);

  if (!e.target.value) HeaderSearchList();
};

const clickCarouselButton = e => {
  if (!e.target.closest('.carousel__button')) return;
  const $carouselSection = e.target.closest('section');
  const $carouselList = $carouselSection.querySelector('.carousel-list');
  const currentX = +$carouselList.style.transform.match(/(?<=\()(.*?)(?=\%)/g).join('');
  const lastPoint = Math.ceil(
    $carouselList.querySelectorAll('.carouselItem').length / $carouselSection.dataset.carouseltype
  );
  const moveNum = e.target.closest('.mini-banner') ? 33.333333 : 100;

  if (e.target.closest('.next')) {
    if (+$carouselSection.dataset.currentpoint + 1 === lastPoint) e.target.closest('.next').style.display = 'none';
    if (+$carouselSection.dataset.currentpoint + 1 === 2)
      $carouselSection.querySelector('.prev').style.display = 'flex';

    $carouselSection.dataset.currentpoint = +$carouselSection.dataset.currentpoint + 1;

    $carouselList.style.transform = `translate3D(${currentX - moveNum}%,0,0)`;
  } else if (e.target.closest('.prev')) {
    if (+$carouselSection.dataset.currentpoint - 1 < lastPoint)
      $carouselSection.querySelector('.next').style.display = 'flex';

    if (+$carouselSection.dataset.currentpoint - 1 === 1) e.target.closest('.prev').style.display = 'none';

    $carouselSection.dataset.currentpoint = +$carouselSection.dataset.currentpoint - 1;

    $carouselList.style.transform = `translate3D(${currentX + moveNum}%,0,0)`;
  }
};

const mainPageEventBinding = webtoon => {
  $root.addEventListener('click', checkAdult);
  $root.addEventListener('click', toggleSearchDiv);
  $root.addEventListener(
    'keyup',
    _.throttle(e => isEmptyValue(e, webtoon), 500)
  );
  $root.addEventListener('click', clickCarouselButton);
};

const Home = async () => {
  const { webtoon } = await fetchData('/data/db.json');

  // prettier-ignore
  const mainTitle = [
    '실시간 랭킹', '기다리면 무료로 시작해!', '일요일 연재',
    '실시간 랭킹', '이벤트 보러가기', '리디에 내리는 #별점 1,000개!',
    '#리뷰 1,000개가 말하는 띵작!', '스위치 ON! 45화 #FREE', '원작도 웹툰도 so yummy',
    '시키는 대로 다 해요, 나.', '오직 리디에서만!', '잠깐! 놓치지 마세요!',
  ];

  const rank = webtoon.filter(item => item.category.includes('rank'));
  const free = webtoon.filter(item => item.category.includes('free'));
  const sunday = webtoon.filter(item => item.category.includes('free'));
  const bestSeller = webtoon.filter(item => item.category.includes('bestSeller'));
  const highRating = webtoon.filter(item => item.category.includes('highRating'));
  const bestReview = webtoon.filter(item => item.category.includes('bestReview'));
  const switchOn = webtoon.filter(item => item.category.includes('switchOn'));
  const yummy = webtoon.filter(item => item.category.includes('yummy'));
  const wanted = webtoon.filter(item => item.category.includes('wanted'));
  const wait = webtoon.filter(item => item.category.includes('wait'));

  mainPageEventBinding(webtoon);

  // prettier-ignore
  return createElement(`
  ${Header()}
  <div class="main-container">
    ${HomeNav()}
    <main class="main">
      ${CarouselSection()}
      ${NewArrivalSection()}
      ${RankingSection(rank, mainTitle[0])}
      ${WebtoonSection(free, mainTitle[1])}
      ${WebtoonSection(sunday, mainTitle[2])}
      ${RankingSection(bestSeller, mainTitle[3])}
      ${EventView(mainTitle[4])}
      ${WebtoonSection(highRating, mainTitle[5])}
      ${WebtoonSection(bestReview, mainTitle[6])}
      ${WebtoonSection(switchOn, mainTitle[7])}
      ${WebtoonSection(yummy, mainTitle[8])}
      ${WebtoonSection(wanted, mainTitle[9])}
      ${EventOnly(mainTitle[10])}
      ${WebtoonSection(wait, mainTitle[11])}
    </main>
  </div>
  ${Footer()}
  `);
};

export default Home;
