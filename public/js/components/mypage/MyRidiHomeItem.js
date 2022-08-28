const renderAccountItem = index => {
  if (index === 0) return `
  <p class="my__extra__info">
    <a class="my__checkout__link" href="/myrididetail"
      >충전 내역 <i class="bx bxs-chevrons-right my__icon-arrow__right"></i
    ></a>
  </p>
  `;

  if (index === 1) return `
  <p class="my__extra__info">
    소멸 예정 <strong class="my__point"><span class="my__point__num">0</span>원</strong>
  </p>
  `;

  if (index === 2) return `
  <p class="my__extra__info">
    <button type="button" class="my__coupon__btn">
      쿠폰 등록 <span class="my__icon-arrow__right"></span>
    </button>
  </p>
  `;
};

const MyRidiHomeItem = (item, order, index) => `
<li class="my__asset__cell">
  <div class="my__info__container">
    <h4 class="my__info__title">
      <span class="my__info__icon"><i class="bx ${item.icon}"></i></span
      ><span class="my__text">${item.title}</span>
    </h4>
    <p class="my__info__amount"><span class="my__amount">${item.amount}</span>${item.unit}</p>
    <a class="my__info__link" href="${item.href}">${item.link}</a>
  </div>
  ${order === 'first' ? renderAccountItem(index) : ''}
</li>
`;

export default MyRidiHomeItem;
