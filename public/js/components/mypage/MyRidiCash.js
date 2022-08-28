import MyRidiCashTabItem from './MyRidiCashTabItem.js';
import MyRidiCashCharge from './MyRidiCashCharge.js';
import MyRidiCashAuto from './MyRidiCashAuto.js';
import MyRidiCashEmpty from './MyRidiCashEmpty.js';

const tabItems = [
{ title: '리디캐시 충전', href: '/myridicharge' }, 
{ title: '자동충전', href: '/myridiauto' },
{ title: '충전 내역', href: '/myrididetail' },
{ title: '입금 대기', href: '/myridiwait' }
];

const MyRidiCash = href => `
<section class="my__ridicash__section">
  <h2 class="my__ridicash__title">
    <span>리디캐시</span>
  </h2>
  <ul class="my__ridicash__tab">
    ${tabItems.map((item, i) => MyRidiCashTabItem(item, i, href)).join('')}
  </ul>
  ${href === '/myridicharge'
  ? MyRidiCashCharge()
  : href === '/myridiauto'
  ? MyRidiCashAuto()
  : href === '/myrididetail'
  ? MyRidiCashEmpty(true)
  : MyRidiCashEmpty(false)}
</section>
`;

export default MyRidiCash;