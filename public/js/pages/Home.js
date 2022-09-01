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
  TopButton,
} from '../components/index.js';

const $root = document.getElementById('root');

let currentSlide = 1;
const moveWidth = 53;
const DURATION = 600;
let isMoving = false;

// prettier-ignore
const mainTitle = [
  '실시간 랭킹', '기다리면 무료로 시작해!', '일요일 연재',
  '실시간 랭킹', '이벤트 보러가기', '리디에 내리는 #별점 1,000개!',
  '#리뷰 1,000개가 말하는 띵작!', '스위치 ON! 45화 #FREE', '원작도 웹툰도 so yummy',
  '시키는 대로 다 해요, 나.', '오직 리디에서만!', '잠깐! 놓치지 마세요!',
];

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
    $searchContainer?.classList.remove('is-focus');

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

// main carousel Functions
const move = (currentSlide, duration = 0) => {
  if (duration !== 0) isMoving = true;

  const $carouselWrap = document.querySelector('.main__carousel__wrap');
  const $carouselItems = document.querySelectorAll('.main__carousel__item');

  [...$carouselItems].forEach(item => {
    item.style.transition = `all calc(${duration} * 1ms) cubic-bezier(0.600, 0.040, 0.995, 0.560)`;
  });

  $carouselWrap.style.transition = `transform calc(${duration} * 1ms) ease-in`;
  $carouselWrap.style.transform = `translateX(-${currentSlide * moveWidth}px)`;
};

const setClass = () => {
  const $carouselItems = document.querySelectorAll('.main__carousel__item');

  [...$carouselItems].forEach((_, i, self) => {
    if (currentSlide === i) {
      self.forEach(item => item.classList.remove('currentSlide'));
      self[i].classList.add('currentSlide');

      self.forEach(item => item.classList.remove('nextSlide'));
      self[i + 1].classList.add('nextSlide');
      self[i + 2]?.classList.add('nextSlide');
    }

    // currentSlide가 6일때 (끝에서 두번째)
    if (currentSlide === self.length - 2) {
      self.forEach(item => item.classList.remove('nextSlide'));
      self[self.length - 2].classList.add('nextSlide');
      self[3].classList.add('nextSlide');
    }
  });
};

const infiniteSlide = async () => {
  const { mainCarousel } = await fetchData('/data/db.json');
  isMoving = false;

  const delta = currentSlide === 0 ? 1 : currentSlide === mainCarousel.length + 1 ? -1 : 0;
  if (!delta) return;

  currentSlide += mainCarousel.length * delta;

  move(currentSlide);

  setClass();
};

const setDirection = e => {
  if (!e.target.matches('.main__carousel > .carousel__button *') || isMoving) return;

  currentSlide += e.target.closest('button').classList.contains('prev') ? -1 : 1;

  move(currentSlide, DURATION);
  const $currentSlide = document.querySelector('.currentSlide');

  $currentSlide.querySelector('.main__carousel__desc').style.animation = 'visible 0.9s';

  setClass();

  [...document.querySelectorAll('.main__carousel__desc')].forEach(dom => dom.removeAttribute('style'));
  $currentSlide.querySelector('.main__carousel__desc').style.animation = 'visible 0.9s';
};

// main carousel auto loop
const intervalCallback = () => {
  if (isMoving) return;

  currentSlide += 1;

  move(currentSlide, DURATION);
  const $currentSlide = document.querySelector('.currentSlide');

  $currentSlide.querySelector('.main__carousel__desc').style.animation = 'visible 0.9s';
  setClass();

  [...document.querySelectorAll('.main__carousel__desc')].forEach(dom => dom.removeAttribute('style'));
  $currentSlide.querySelector('.main__carousel__desc').style.animation = 'visible 0.9s';
};

let carouselInterval = setInterval(intervalCallback, 5000);

// go to top
const goToTop = e => {
  if (!e.target.closest('.top-button')) return;

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const clearCarouselLoop = e => {
  if (!e.target.closest('a') || e.target.closest('.header-down__nav__link')) return;
  clearInterval(carouselInterval);
};

const resetCarouselLoop = () => {
  window.location.pathname !== '/'
    ? clearInterval(carouselInterval)
    : (carouselInterval = setInterval(intervalCallback, 5000));
};

const clickCarouselButton = e => {
  if (!e.target.closest('.carousel__button') || e.target.matches('.main__carousel *')) return;

  const $carouselSection = e.target.closest('section');
  const $carouselList = $carouselSection.querySelector('.carousel-list');
  const $carouselItems = $carouselList.querySelectorAll('.carouselItem');

  const currentX = +$carouselList.style.transform.match(/(?<=\()(.*?)(?=\%)/g).join('');
  let moveRatio = 100;
  let lastPoint = Math.ceil($carouselItems.length / $carouselSection.dataset.carouseltype);
  const { currentpoint } = $carouselSection.dataset;

  if (e.target.closest('.mini-banner')) {
    const listWidth = $carouselList.offsetWidth;
    const itemWidth = $carouselList.querySelector('li').offsetWidth;

    moveRatio = ((itemWidth + 7) / listWidth) * 100;
    $carouselSection.dataset.carouseltype = window.innerWidth > 1169 ? 3 : window.innerWidth > 767 ? 2 : 1;
    lastPoint = Math.round($carouselItems.length - 100 / moveRatio + 1);
  }

  if (e.target.closest('.next')) {
    if (+currentpoint + 1 === lastPoint) e.target.closest('.next').style.display = 'none';
    if (+currentpoint + 1 === 2) $carouselSection.querySelector('.prev').style.display = 'flex';
    $carouselSection.dataset.currentpoint = +currentpoint + 1;
    $carouselList.style.transform = `translate3D(${currentX - moveRatio}%,0,0)`;
  } else if (e.target.closest('.prev')) {
    if (+currentpoint - 1 < lastPoint) $carouselSection.querySelector('.next').style.display = 'flex';
    if (+currentpoint - 1 === 1) e.target.closest('.prev').style.display = 'none';

    $carouselSection.dataset.currentpoint = +currentpoint - 1;
    $carouselList.style.transform = `translate3D(${currentX + moveRatio}%,0,0)`;
  }
};

const miniCarouselInit = () => {
  $root.querySelectorAll('.mini-banner').forEach(miniBanner => {
    const $carouselList = miniBanner.querySelector('.carousel-list');

    $carouselList.style.transition = 'transform 0s';
    $carouselList.style.transform = 'translate3D(0%,0,0)';
    miniBanner.dataset.currentpoint = 1;
    miniBanner.querySelector('.prev').style.display = 'none';
    miniBanner.querySelector('.next').style.display = 'flex';

    setTimeout(() => {
      $carouselList.style.transition = 'transform 0.5s';
    });
  });
};

const saveVisitedBooks = (e, webtoon) => {
  if (!e.target.closest('a')?.dataset.title) return;

  const { title } = e.target.closest('a').dataset;

  if (title) localStorage.setItem('webtoonTitle', title);

  if (localStorage.getItem('token')) {
    const { payload, isAdult } = getPayload();
    const selectedData = webtoon.filter(data => data.title === title);

    if (localStorage.getItem(payload.userId)) {
      if (!isAdult && e.target.closest('li')?.dataset.adult === 'true') return;

      const recentData = JSON.parse(localStorage.getItem(payload.userId));
      recentData.push(...selectedData);
      const uniqData = recentData.filter((book, idx, arr) => arr.findIndex(data => data.title === book.title) === idx);
      localStorage.setItem(payload.userId, JSON.stringify(uniqData));
    } else localStorage.setItem(payload.userId, JSON.stringify(selectedData));
  }
};

const matchMediaMiniBannerTablet = window.matchMedia(`(max-width: 1169px)`);
const matchMediaMiniBannerMobile = window.matchMedia(`(max-width: 767px)`);

const mainPageEventBinding = webtoon => {
  $root.addEventListener('click', checkAdult);
  $root.addEventListener('click', toggleSearchDiv);
  $root.addEventListener(
    'keyup',
    _.throttle(e => isEmptyValue(e, webtoon), 500)
  );
  $root.addEventListener('click', e => saveVisitedBooks(e, webtoon));
  $root.addEventListener('click', setDirection);
  $root.addEventListener('transitionend', infiniteSlide);
  $root.addEventListener('click', goToTop);
  $root.addEventListener('click', clearCarouselLoop);
  window.addEventListener('popstate', resetCarouselLoop);
  $root.addEventListener('click', clickCarouselButton);
  matchMediaMiniBannerTablet.addEventListener('change', miniCarouselInit);
  matchMediaMiniBannerMobile.addEventListener('change', miniCarouselInit);
};

const Home = async () => {
  const { webtoon, mainCarousel } = await fetchData('/data/db.json');

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
      ${CarouselSection(mainCarousel)}
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
      ${TopButton()}
    </main>
  </div>
  ${Footer()}
  `);
};

export default Home;
