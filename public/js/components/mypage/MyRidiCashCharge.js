import MyRidiCashSelectItem from "./MyRidiCashSelectItem.js";
import MyRidiCashPaymentItem from './MyRidiCashPaymentItem.js';
import MyRidiCashCautionItem from './MyRidiCashCautionItem.js';

const prices = ['2,000 원', '5,000 원', '10,000 원', '20,000 원', '30,000 원', '50,000 원', '70,000 원', '100,000 원', '200,000 원', '300,000 원','400,000 원', '500,000 원'];
const paymentMethods = [ '네이버페이', '카카오페이', '삼성페이', '페이코', '신용카드', '휴대폰', '계좌이체', '컬쳐랜드문화상품권', '도서문화상품권', '해피머니(모바일팝)', '해외 발행 신용카드', '무통장입금'];
const cautionList = [
  '매월 1 ~ 3일에는 리디캐시 충전 시 적립되는 리디포인트가 두 배!', 
  '결제 취소는 결제 후 7일 이내에만 할 수 있습니다. 단, 리디캐시 또는 적립된 리디포인트의 일부를 사용하면 결제 취소할 수 없습니다.', 
  '리디캐시와 리디포인트는 마지막 이용일로부터 5년 경과 시까지 이용 내역이 없으며 1년 동안 리디 서비스에 접속하지 않은 경우, <상법 제 64조 상사채권 소멸시효> 조항에 따라 소멸됩니다.',
  '일부를 사용한 리디캐시는 환불받을 수 있으며 충전 시 무료로 지급받은 리디포인트를 공제한 후, 잔액 환급 비율(90%)에 해당하는 금액을 환불해 드립니다.', 
  '리디캐시 충전시에는 문화비소득공제 신청을 할 수 없습니다.'
];

const MyRidiCashCharge = () => `
<div class="my__ridicash__header">
  <h3 class="my__ridicash__header__title">복잡한 결제를 <br />리디캐시로 간편하게!</h3>
  <p class="my__ridicash__header__desc">
    최대 5% 리디포인트 적립 혜택도 놓치지 마세요! <br />한 번 충전하면 결제 정보 입력 없이 쉽게 결제할 수 있는
    리디캐시.<br />
    <a class="my__ridicash__header__btn" href="/myridiauto"
      >자동충전 설정 <i class="bx bxs-chevrons-right my__icon-arrow__right"></i
    ></a>
  </p>
  <p class="my__ridicash__amount">
    내 리디캐시
    <span class="my__ridicash__amount__won"><span class="my__ridicash__amount__num">0</span>원</span>
  </p>
</div>
<form action="" method="post" class="my__ridicash__form">
  <article class="my__ridicash__select">
    <h4 class="sr-only">리디캐시 충전금액 선택란</h4>
    <div class="my__ridicash__select__head">
      <span>리디캐시 충전</span>
      <span>적립률</span>
      <span>리디포인트 적립</span>
    </div>
    <div class="my__ridicash__select__column">
      ${prices.map((price, i) => MyRidiCashSelectItem(price, i, false)).join('')}
    </div>
  </article>
  <article class="my__ridicash__payment">
    <h4 class="my__ridicash__payment__title">결제 수단</h4>
    <ul class="my__ridicash__payment__ul">
      ${paymentMethods.map((method, i) => MyRidiCashPaymentItem(method, i)).join('')}
    </ul>
  </article>
  <div class="my__ridicash__agreement">
    <h4 class="sr-only">구매 동의</h4>
    <input type="checkbox" id="payment-agreement" />
    <label for="payment-agreement"
      ><span>상품, 가격, 할인 정보, 유의 사항 등을 확인하였으며 구매에 동의합니다.</span></label
    >
  </div>
  <div class="my__ridicash__submit__btn__container">
    <button><i class='bx bxs-coin-stack'></i>리디캐시 충전</button>
  </div>
  <ul class="my__ridicash__caution">
    ${cautionList.map(item => MyRidiCashCautionItem(item)).join('')}
  </ul>
</form>
`

export default MyRidiCashCharge;