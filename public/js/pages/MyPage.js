import { createElement, fetchData } from '../app.js';
import { MyLeftMenu } from '../components/index.js';


const MyPage = async (params) => createElement(`
  <div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu()}
    </div>
    <!-- 리디캐시 페이지 -->

    <section class="my__ridicash__section">
      <h2 class="my__ridicash__title">
        <span>리디캐시</span>
      </h2>
      <ul class="my__ridicash__tab">
        <li class="my__ridicash__tablist"><a class="active" href="/order/checkout/cash">리디캐시 충전</a></li>
        <li class="my__ridicash__tablist"><a href="/order/checkout/periodic-cash">자동충전</a></li>
        <li class="my__ridicash__tablist"><a href="/order/history_cash">충전 내역</a></li>
        <li class="my__ridicash__tablist"><a href="/order/pending_virtual_account">입금 대기</a></li>
      </ul>
      <div class="my__ridicash__header">
        <h3 class="my__ridicash__header__title">복잡한 결제를 <br />리디캐시로 간편하게!</h3>
        <p class="my__ridicash__header__desc">
          최대 5% 리디포인트 적립 혜택도 놓치지 마세요! <br />한 번 충전하면 결제 정보 입력 없이 쉽게 결제할 수 있는
          리디캐시.<br />
          <a class="my__ridicash__header__btn" href="/order/checkout/periodic-cash"
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
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio1" checked />
              <label for="radio1">
                <span>2,000 원</span>
                <span>3%</span>
                <span><em>+</em> 60 <em>원</em></span>
              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio2" />
              <label for="radio2">
                <span>5,000 원</span>
                <span>3%</span>
                <span><em>+</em> 150 <em>원</em></span>
              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio3" />
              <label for="radio3">
                <span>10,000 원</span>
                <span>3%</span>
                <span><em>+</em> 300 <em>원</em></span>
              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio4" />
              <label for="radio4">
                <span>20,000 원</span>
                <span>3%</span>
                <span><em>+</em> 600 <em>원</em></span>
              </label>
            </div>
          </div>
          <div class="my__ridicash__select__column">
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio5" />
              <label for="radio5">
                <span>30,000원</span>
                <span>4%</span>
                <span><em>+</em> 1,200 <em>원</em></span>
              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio6" />
              <label for="radio6">
                <span>50,000원</span>
                <span>4%</span>
                <span><em>+</em> 2,000 <em>원</em></span>
              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio7" />
              <label for="radio7">
                <span>70,000원</span>
                <span>4%</span>
                <span><em>+</em> 2,800 <em>원</em></span>
              </label>
            </div>
          </div>
          <div class="my__ridicash__select__column">
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio8" />
              <label for="radio8">
              <span>100,000원</span>
              <span>5%</span>
              <span><em>+</em> 5,000 <em>원</em></span>

            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio9" />
              <label for="radio9">
              <span>200,000원</span>
              <span>5%</span>
              <span><em>+</em> 10,000 <em>원</em></span>

              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio10" />
              <label for="radio10">
              <span>300,000원</span>
              <span>5%</span>
              <span><em>+</em> 15,000 <em>원</em></span>

              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio11" />
              <label for="radio11">
              <span>400,000원</span>
              <span>5%</span>
              <span><em>+</em> 20,000 <em>원</em></span>

              </label>
            </div>
            <div class="my__ridicash__select__list">
              <input type="radio" class="my__ridisash__radio" name="base" id="radio12" />
              <label for="radio12">
              <span>500,000원</span>
              <span>5%</span>
              <span><em>+</em> 25,000 <em>원</em></span>

              </label>
            </div>
          </div>
        </article>
        <article class="my__ridicash__payment">
          <h4 class="my__ridicash__payment__title">결제 수단</h4>
          <ul class="my__ridicash__payment__ul">
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type0" />
              <label for="pay-type0" class="my__ridicash__payment__list__label"
                ><span class="naver-pay">네이버페이</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type1" />
              <label for="pay-type1" class="my__ridicash__payment__list__label"
                ><span class="kakao-pay">카카오페이</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type2" />
              <label for="pay-type2" class="my__ridicash__payment__list__label"
                ><span class="samsung-pay">삼성페이</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type3" />
              <label for="pay-type3" class="my__ridicash__payment__list__label"
                ><span class="payco">페이코</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type4" />
              <label for="pay-type4" class="my__ridicash__payment__list__label"><span>신용카드</span></label>
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type5" />
              <label for="pay-type5" class="my__ridicash__payment__list__label"><span>휴대폰</span></label>
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type6" />
              <label for="pay-type6" class="my__ridicash__payment__list__label"><span>계좌이체</span></label>
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type7" />
              <label for="pay-type7" class="my__ridicash__payment__list__label"
                ><span>컬쳐랜드문화상품권</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type8" />
              <label for="pay-type8" class="my__ridicash__payment__list__label"><span>도서문화상품권</span></label>
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type9" />
              <label for="pay-type9" class="my__ridicash__payment__list__label"
                ><span>해피머니(모바일팝)</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type10" />
              <label for="pay-type10" class="my__ridicash__payment__list__label"
                ><span>해외 발행 신용카드</span></label
              >
            </li>
            <li class="my__ridicash__payment__list">
              <input type="radio" name="pay-type" id="pay-type11" />
              <label for="pay-type11" class="my__ridicash__payment__list__label"><span>무통장입금</span></label>
            </li>
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
          <li class="my__ridicash__caution__list">
            매월 1 ~ 3일에는 리디캐시 충전 시 적립되는 리디포인트가 두 배!
          </li>
          <li class="my__ridicash__caution__list">
            결제 취소는 결제 후 7일 이내에만 할 수 있습니다. 단, 리디캐시 또는 적립된 리디포인트의 일부를 사용하면
            결제 취소할 수 없습니다.
          </li>
          <li class="my__ridicash__caution__list">
            리디캐시와 리디포인트는 마지막 이용일로부터 5년 경과 시까지 이용 내역이 없으며 1년 동안 리디 서비스에
            접속하지 않은 경우, <상법 제 64조 상사채권 소멸시효> 조항에 따라 소멸됩니다.
          </li>
          <li class="my__ridicash__caution__list">
            일부를 사용한 리디캐시는 환불받을 수 있으며 충전 시 무료로 지급받은 리디포인트를 공제한 후, 잔액 환급
            비율(90%)에 해당하는 금액을 환불해 드립니다.
          </li>
          <li class="my__ridicash__caution__list">리디캐시 충전시에는 문화비소득공제 신청을 할 수 없습니다.</li>
        </ul>
      </form>
    </section>

    <!-- 마이페이지 홈 -->
    <!-- <section class="my__myridi">
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
        </div> -->

    <!-- 작품 노존재 -->
    <!-- <div class="my__recents__empty">
          <p class="my__recents__empty__desc">최근 조회한 작품이 없습니다.</p>
        </div> -->

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
    </section> -->
  </div>
</div>
  `);

export default MyPage;