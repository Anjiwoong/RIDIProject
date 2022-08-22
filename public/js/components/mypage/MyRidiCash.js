import MyRidiCashTabItem from './MyRidiCashTabItem.js';
import MyRidiCashCharge from './MyRidiCashCharge.js';

const tabItems = ['리디캐시 충전', '자동충전', '충전 내역', '입금 대기'];

const MyRidiCash = () => `
<section class="my__ridicash__section">
  <h2 class="my__ridicash__title">
    <span>리디캐시</span>
  </h2>
  <ul class="my__ridicash__tab">
    ${tabItems.map((item, i) => MyRidiCashTabItem(item, i)).join('')}
  </ul>
  ${MyRidiCashCharge()}
</section>
`;

export default MyRidiCash;