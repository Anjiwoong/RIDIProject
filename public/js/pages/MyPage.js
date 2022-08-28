import { createElement, getPayload } from '../app.js';
import { Header, Footer, MyLeftMenu, MyRidiHome, MyRidiModal } from '../components/index.js';

const $root = document.getElementById('root');

const couponHandler = e => {
  const $myRidiModal = document.querySelector('.my__myridi__modal');

  if (e.target.matches('.my__coupon__btn')) $myRidiModal.classList.add('active');
  if (e.target.matches('.my__myridi__modal__register__btn')) alert('손나 쿠폰 이나이');
  if (e.target.closest('.my__myridi__modal__close-btn') || e.target.matches('.my__myridi__modal__dimmed')) $myRidiModal.classList.remove('active');
};

const accountAlertHandler = () => alert('마다마다 서비스 준비중입니다.');

const myPageEventBinder = () => {
  $root.addEventListener('click', couponHandler);
  $root.addEventListener('click', accountAlertHandler);
}

const MyPage = () => {
  const payload = getPayload();
  myPageEventBinder();

  return createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu('/mypage')}
    </div>
    ${MyRidiHome(payload)}
  </div>
</div>
${Footer()}
${MyRidiModal()}
`);
};

export default MyPage;
