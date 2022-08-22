const MyRidiHomeItem = () => `
<ul class="my__asset__table">
  <li class="my__asset__cell">
    <div class="my__info__container">
      <h4 class="my__info__title">
        <span class="my__info__icon"><i class="bx bx-dollar-circle"></i></span
        ><span class="my__text">리디캐시</span>
      </h4>
      <p class="my__info__amount"><span class="my__amount museo_sans">0</span>원</p>
      <a class="my__info__link" href="/order/checkout/cash">리디캐시 충전</a>
    </div>
    <p class="my__extra__info">
      <a class="my__checkout__link" href="/order/history_cash"
        >충전 내역 <i class="bx bxs-chevrons-right my__icon-arrow__right"></i
      ></a>
    </p>
  </li>
  <li class="my__asset__cell">
    <div class="my__info__container">
      <h4 class="my__info__title">
        <span class="my__info__icon"><i class="bx bxs-parking"></i></span
        ><span class="my__text">리디포인트</span>
      </h4>
      <p class="my__info__amount"><span class="my__amount museo_sans">0</span>원</p>
      <a class="my__info__link" href="/order/history_point">리디포인트 더보기</a>
    </div>
    <p class="my__extra__info">
      소멸 예정 <strong class="my__point"><span class="my__point__num">0</span>원</strong>
    </p>
  </li>
  <li class="my__asset__cell">
    <div class="my__info__container">
      <h4 class="my__info__title">
        <span class="my__info__icon"><i class="bx bxs-coupon"></i></span
        ><span class="my__text">쿠폰</span>
      </h4>
      <p class="my__info__amount"><span class="my__amount museo_sans">11</span>개</p>
      <a class="my__info__link" href="/coupon/">쿠폰 더보기</a>
    </div>
    <p class="my__extra__info">
      <button type="button" class="my__coupon__btn">
        쿠폰 등록 <span class="my__icon-arrow__right"></span>
      </button>
    </p>
  </li>
</ul>
`;
