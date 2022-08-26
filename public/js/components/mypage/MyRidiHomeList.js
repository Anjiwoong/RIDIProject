import MyRidiHomeItem from './MyRidiHomeItem.js';

const myAccountFirst = [
  { title: '리디캐시', amount: '0', unit: '원', link: '리디캐시 충전', icon: 'bx-dollar-circle' },
  { title: '리디포인트', amount: '0', unit: '원', link: '리디포인트 더보기', icon: 'bxs-parking' },
  { title: '쿠폰', amount: '11', unit: '개', link: '쿠폰 더보기', icon: 'bxs-coupon' },
];

const myAccountSecond = [
  { title: '내 서재', amount: '1', unit: '권', link: '내 서재', icon: 'bx-book' },
  { title: '카트', amount: '0', unit: '권', link: '카트', icon: 'bx-cart' },
  { title: '위시리스트', amount: '0', unit: '권', link: '위시리스트', icon: 'bx-heart' },
];

const MyRidiHomeList = order => `
  <ul class="my__asset__table">
    ${
      order === 'first'
        ? myAccountFirst.map((item, i) => MyRidiHomeItem(item, order, i)).join('')
        : myAccountSecond.map(item => MyRidiHomeItem(item, order)).join('')
    }
  </ul>
`;
export default MyRidiHomeList;
