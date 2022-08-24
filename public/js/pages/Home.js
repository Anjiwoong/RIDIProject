import { createElement, fetchData } from '../app.js';

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

const WEBTOON = 'http://localhost:5000/webtoon';

const Home = async () => {
  const data = await fetchData(WEBTOON, '');

  // prettier-ignore
  const mainTitle = [
    '실시간 랭킹', '기다리면 무료로 시작해!', '일요일 연재',
    '실시간 랭킹', '이벤트 보러가기', '리디에 내리는 #별점 1,000개!',
    '#리뷰 1,000개가 말하는 띵작!', '스위치 ON! 45화 #FREE', '원작도 웹툰도 so yummy',
    '시키는 대로 다 해요, 나.', '오직 리디에서만!', '잠깐! 놓치지 마세요!',
  ];

  const rank = data.filter(item => item.category.includes('rank'));
  const free = data.filter(item => item.category.includes('free'));
  const sunday = data.filter(item => item.category.includes('free'));
  const bestSeller = data.filter(item => item.category.includes('bestSeller'));
  const highRating = data.filter(item => item.category.includes('highRating'));
  const bestReview = data.filter(item => item.category.includes('bestReview'));
  const switchOn = data.filter(item => item.category.includes('switchOn'));
  const yummy = data.filter(item => item.category.includes('yummy'));
  const wanted = data.filter(item => item.category.includes('wanted'));
  const wait = data.filter(item => item.category.includes('wait'));

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
