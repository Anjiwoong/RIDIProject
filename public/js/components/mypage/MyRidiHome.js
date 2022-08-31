import MyRidiHomeList from './MyRidiHomeList.js';
import MyRidiRecents from './MyRidiRecents.js';

const MyRidiHome = data => {
  const { payload } = data;
  const isEmpty = !localStorage.getItem(payload.userId);

  return `
<section class="my__myridi">
  <h2 class="sr-only">마이리디 홈</h2>
  <article class="my__myridi__header">
    <div class="my__account__info">
      <div class="my__account__info__container">
        <h3 class="my__account__info__id">${payload.userId}</h3>
        <p class="my__account__info__email">${payload.email}</p>
      </div>
      <a href="/" class="my__btn__logout">로그아웃</a>
    </div>
    <div class="my__asset__info">
      ${MyRidiHomeList('first')}
      <hr class="my__border__line" />
      ${MyRidiHomeList('second')}
    </div>
  </article>
  <article class="my__myridi__recents">
    <div class="my__recents__container">
      <h3 class="my__recents__title">최근 조회한 작품</h3>
      <div class="my__more__btn__wrapper">
        <a class="my__more__btn" href="/recent">
          <span class="my__title">전체 보기</span>
          <i class="bx bxs-chevrons-right my__icon-arrow__right"></i>
        </a>
      </div>
    </div>
    ${MyRidiRecents(isEmpty, payload)}
  </article>
</section>
`;
};

export default MyRidiHome;
