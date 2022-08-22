const MyRidiHome = () => `
<section class="my__myridi">
      <h2 class="sr-only">마이리디 홈</h2>
      <article class="my__myridi__header">
        <div class="my__account__info">
          <div class="my__account__info__container">
            <h3 class="my__account__info__id">edx2fire</h3>
            <p class="my__account__info__email">edx2fire@likelion.org</p>
          </div>
          <a href="/account/logout" class="my__btn__logout">로그아웃</a>
        </div>
        <div class="my__asset__info">
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
          <hr class="my__border__line" />
          <ul class="my__asset__table">
            <li class="my__asset__cell">
              <div class="my__info__container">
                <h4 class="my__info__title">
                  <span class="my__info__icon library"><i class="bx bx-book"></i></span
                  ><span class="my__text">내 서재</span>
                </h4>
                <p class="my__info__amount"><span class="my__amount">1</span>권</p>
                <a class="my__info__link" href="//library.ridibooks.com">내 서재</a>
              </div>
            </li>
            <li class="my__asset__cell">
              <div class="my__info__container">
                <h4 class="my__info__title">
                  <span class="my__info__icon cart"><i class="bx bx-cart"></i></span
                  ><span class="my__text">카트</span>
                </h4>
                <p class="my__info__amount"><span class="my__amount">0</span>권</p>
                <a class="my__info__link" href="/cart/">카트</a>
              </div>
            </li>
            <li class="my__asset__cell">
              <div class="my__info__container">
                <h4 class="my__info__title">
                  <span class="my__info__icon wishlist"><i class="bx bx-heart"></i></span
                  ><span class="my__text">위시리스트</span>
                </h4>
                <p class="my__info__amount"><span class="my__amount">0</span>권</p>
                <a class="my__info__link" href="/wishlist/">위시리스트</a>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <article class="my__myridi__recents">
        <div class="my__recents__container">
          <h3 class="my__recents__title">최근 조회한 작품</h3>
          <div class="my__more__btn__wrapper">
            <a class="my__more__btn" href="/library/recents">
              <span class="my__title">전체 보기</span>
              <i class="bx bxs-chevrons-right my__icon-arrow__right"></i>
            </a>
          </div>
        </div>

    
    <div class="my__recents__empty">
          <p class="my__recents__empty__desc">최근 조회한 작품이 없습니다.</p>
        </div>

    <!-- 작품 존재 -->
    <!-- <div class="my__recents__books">
          <div class="my__book__thumbnail__wrapper">
            <div class="my__book__thumbnail">
              <img
                class="my__thumbnail"
                src="//img.ridicdn.net/cover/4766000049/large#1"
                alt="상수리나무 아래 1화" />
              <a
                class="my__thumbnail__btn"
                href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0"
                data-track-type="">
                <span class="sr-only">상세페이지 바로가기</span>
              </a>
            </div>
          </div>
          <div class="my__book__metadata__wrapper">
            <h3 class="my__meta__title">
              <a class="my__title__link" href="/books/4766000001?_rdt_sid=myridi_recents&amp;_rdt_idx=0">
                <span class="my__title__text"> 상수리나무 아래 </span>
              </a>
            </h3>
            <p class="my__author">
              <a class="my__author__detail__link" href="/author/109876">P</a>,
              <a class="my__author__detail__link" href="/author/16907">김수지</a>
            </p>
          </div>
        </div>
      </article>
    </section>
`;