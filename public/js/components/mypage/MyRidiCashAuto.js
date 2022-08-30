import MyRidiCashSelectItem from './MyRidiCashSelectItem.js';
import MyRidiCashCautionItem from './MyRidiCashCautionItem.js';

const prices = [
  '2,000 원',
  '5,000 원',
  '10,000 원',
  '20,000 원',
  '30,000 원',
  '50,000 원',
  '70,000 원',
  '100,000 원',
  '200,000 원',
  '300,000 원',
];
const cautionList = [
  '결제 취소는 결제 후 7일 이내에만 가능합니다. 단, 리디캐시 또는 적립된 리디포인트의 일부를 사용하면 결제 취소할 수 없습니다.',
  '리디캐시는 마지막 이용일로부터 5년 경과 시까지 이용 내역이 없을 경우, <상법 제64조 상사채권 소멸시효> 조항에 따라 소멸됩니다.',
  '일부를 사용한 리디캐시는 환불받을 수 있으며 충전 시 무료로 지급받은 리디포인트를 공제한 후, 잔액 환급 비율(90%)에 해당하는 금액을 환불해 드립니다.',
  '리디캐시 충전시에는 문화비소득공제 신청을 할 수 없습니다.',
];

const MyRidiCashAuto = () => `
<div class="my__ridicash__auto__header">
  <h3 class="my__ridicash__auto__header__title">리디캐시 자동충전 혜택</h3>
  <p class="my__ridicash__auto__header__desc">
    매월 1일 자동충전 설정하고 아래 혜택들을 놓치지 마세요!
  </p>
  <div class="my__ridicash__auto__desc">
    <div class="my__ridicash__auto__desc__box1">
      <img src="../../../assets/mypage/double.jpg" alt="두배로 쌓인 동전" />
      <div class="my__ridicash__auto__desc__box2">
        <span>일이삼 더블 포인트 자동 적용</span>
        <span>리디포인트 2배 적립</span>
      </div>
    </div>
    <div class="my__ridicash__auto__desc__box1">
      <img src="../../../assets/mypage/rain_snow.jpg" alt="비와 우산" />
      <div class="my__ridicash__auto__desc__box2">
        <span>눈/비 오는 날 리디포인트 1,000원</span>
        <span>알림 클릭 시 선착순 없이 지급<br />(※ 1만원 이상 자동충전 전용 혜택)</span>
      </div>
    </div>
  </div>
</div>
<form action="" method="" class="my__ridicash__form">
  <h4 class="my__ridicash__auto__form__title">자동충전 금액 선택</h4>
  <article class="my__ridicash__select">
    <div class="my__ridicash__select__head my__auto">
      <span>리디캐시 충전</span>
      <span>적립률<i class='bx bxs-certification'></i></span>
      <span>리디포인트 적립</span>
    </div>
      ${prices.map((price, i) => MyRidiCashSelectItem(price, i, true)).join('')}
  </article>
  <div class="my__ridicash__auto__payment">
    <h3 class="my__ridicash__auto__payment__title">결제수단 선택</h3>
    <input type="radio" name="auto__method" id="auto__method" checked />
    <label for="auto__method">신용카드</label>
  </div>
  <div class="my__ridicash__auto__payment__notice">
    <p><i class='bx bx-check' ></i> 매월 <span>1일</span> 리디캐시 <span>30,000원</span> 이 자동충전됩니다.</p>
    <p>결제 예정일:2022.09.01 10:00:00</p>
  </div>
  <div class="my__ridicash__agreement">
    <h4 class="sr-only">구매 동의</h4>
    <input type="checkbox" id="payment-agreement" />
    <label for="payment-agreement"
      ><span>상품, 가격, 할인 정보, 유의 사항 등을 확인하였으며 구매에 동의합니다.</span></label
    >
  </div>
  <div class="my__ridicash__submit__btn__container">
    <button>자동충전 설정</button>
  </div>
  <ul class="my__ridicash__caution">
    ${cautionList.map(item => MyRidiCashCautionItem(item)).join('')}
  </ul>
</form>
`;

export default MyRidiCashAuto;
