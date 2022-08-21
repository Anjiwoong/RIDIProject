import { createElement, fetchData } from '../app.js';

const Webtoon = async (params, title) => {
  const data = await fetchData('/data/webtoon.json');

  const test = data.webtoon.filter(str => str.title === title);

  console.log(test);

  // return createElement(
  //   data.home
  //     .map(({ title, content }) => `<h1>${title}</h1><p>${content}</p>`)
  //     .join('')

  return createElement(`
  <section class="books">
      <h2 class="sr-only">상세페이지</h2>
      <!-- book-info -->
      <article class="books__info">
        <!-- bookBody -->
        <div class="books__info__body">
          <!-- thumbnail -->
          <div class="books__info__body__thumbnail-wrap">
            <picture class="books__info__body__thumbnail-wrap__image">
              <source srcset="../assets/books/booksimg1.webp" type="image/webp" />
              <img src="../assets/books/booksimg1.webp" alt="웹툰 마귀 썸네일" />
            </picture>
            <button type="button" class="books__info__body__thumbnail-wrap__preference">
              <span class="button_contents"><i class="bx bx-heart"></i>0</span>
            </button>
            <button type="button" class="books__info__body__thumbnail-wrap__series-noti">
              <i class="bx bx-plus"></i>시리즈 신간알림
            </button>
          </div>

          <!-- details -->
          <div class="books__info__body__details-wrap">
            <h3 class="books__info__body__details-wrap__title">마귀</h3>
            <!-- starRate -->
            <div class="books__info__body__details-wrap__star-rate-wrap">
              <div class="books__info__body__details-wrap__star-rate-wrap__stars">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <span class="books__info__body__details-wrap__star-rate-wrap__score">0점</span>
              <span class="books__info__body__details-wrap__star-rate-wrap__people">(0명)</span>
            </div>

            <!-- metadata-wrap -->
            <div class="books__info__body__details-wrap__metadata-wrap">
              <!-- _writer-info -->
              <div class="books__info__body__details-wrap__metadata-wrap__writer-info">
                <span class="books__info__body__details-wrap__metadata-wrap__writer-info__writer"
                  ><span class="font-bold">판흔</span> 글</span
                >
                <span class="books__info__body__details-wrap__metadata-wrap__writer-info__painter"
                  ><span class="font-bold">FUKI Choco</span> 그림</span
                >
                <span class="books__info__body__details-wrap__metadata-wrap__writer-info__original"
                  ><span class="font-bold">비첸치</span> 원작</span
                >
              </div>

              <!-- publisher-info -->
              <div class="books__info__body__details-wrap__metadata-wrap__publisher-info">
                <span class="books__info__body__details-wrap__metadata-wrap__publisher-info__publisher"
                  ><span class="font-bold">오렌지디</span> 출판</span
                >
              </div>

              <!-- series-complete-wrap -->
              <div class="books__info__body__details-wrap__metadata-wrap__series-complete-wrap">
                <span class="books__info__body__details-wrap__metadata-wrap__series-complete-wrap__book-count"
                  >총 99화</span
                >
                <span class="books__info__body__details-wrap__metadata-wrap__series-complete-wrap__completion-status"
                  >미완결</span
                >
              </div>
            </div>

            <!-- book-detail-notice -->
            <div class="books__info__body__details-wrap__book-detail-notice-wrap">
              <!-- schedule -->
              <div class="books__info__body__details-wrap__book-detail-notice-wrap__schedule notice-item">
                <span class="schedule-title notice-title">연재</span>
                <span class="info-title">매주 금요일 연재</span>
              </div>

              <!-- benefits -->
              <div class="books__info__body__details-wrap__book-detail-notice-wrap__benefits notice-item">
                <span class="benefits-title notice-title">혜택</span>
                <div class="benefits-info">
                  <a href="#">
                    <span class="info-title">대여 할인권 5장 증정</span>
                    <span class="info-text">1인 1회 발급 가능, 3일 대여</span>
                  </a>
                </div>
              </div>

              <!-- event -->
              <div class="books__info__body__details-wrap__book-detail-notice-wrap__event notice-item">
                <span class="event-title notice-title">이벤트</span>
                <div class="event-info">
                  <span class="info-title"><a href="#">#시즌3 런칭! 전원 1,000포인트 증정♥</a></span>
                  <span class="info-title">요일 웹툰 한번에 모아보기☆</span>
                  <span class="info-event-more"><a href="#">이벤트 더보기</a></span>
                </div>
              </div>

              <!-- Wait-free -->
              <div class="books__info__body__details-wrap__book-detail-notice-wrap__Wait-free notice-item">
                <span class="Wait-free-title notice-title">리다무</span>
                <div class="Wait-free-info">
                  <span class="info-title">1일 마다 1편 기다리면 무료 </span>
                </div>
              </div>
            </div>

            <!-- benefits-Period -->
            <span class="books__info__body__details-wrap__benefits-Period"> 혜택 기간: 10.12.(수)~11.25.(금)</span>

            <!-- first-episode-button -->
            <button type="button" class="btn first-episode">첫회보기</button>
          </div>
        </div>

        <!-- books__info__footer -->
        <div class="books__info__footer">
          <!-- metadata-info -->
          <div class="books__info__footer__metadata-info">
            <!-- published-date-info -->
            <div class="books__info__footer__metadata-info__published-date-info">
              <span class="books__info__footer__metadata-info__published-date-info__title info-title">출간 정보</span>
              <span class="books__info__footer__metadata-info__published-date-info__text">2020.07.31. 출간</span>
            </div>

            <!-- file-size -->
            <div class="books__info__footer__metadata-info__file-size">
              <span class="books__info__footer__metadata-info__file-size__title info-title">파일 정보</span>
              <span class="books__info__footer__metadata-info__file-size__text">평균 24.1MB</span>
            </div>

            <!-- isbn -->
            <div class="books__info__footer__metadata-info__isbn">
              <span class="books__info__footer__metadata-info__isbn__title info-title">ISBN</span>
              <span class="books__info__footer__metadata-info__isbn__text">9791197025686</span>
            </div>
          </div>

          <!-- support-info -->
          <div class="books__info__footer__support-info">
            <!-- listening-function -->
            <div class="books__info__footer__metadata-info__listening-function">
              <span class="books__info__footer__metadata-info__listening-function__title info-title"> 듣기 기능</span>
              <!-- bxs-volume-mute, bxs-volume-full -->
              <span class="books__info__footer__metadata-info__listening-function__text">
                <i class="bx bxs-volume-mute"></i> 미지원</span
              >
            </div>

            <!-- support-device -->
            <div class="books__info__footer__metadata-info__support-device">
              <span class="books__info__footer__metadata-info__support-device__title info-title">지원 기기</span>
              <span class="books__info__footer__metadata-info__support-device__text">
                <i class="bx bxl-apple"></i>iOS <i class="bx bxl-android"></i>Android
              </span>
            </div>
          </div>
        </div>
      </article>

      <!-- book-series -->
      <article class="books__series">
        <ul class="books__series__buy-tab">
          <!-- 대여하기 -->
          <li class="books__series__buy-tab__rental tab-list active">
            <h4 class="books__series__buy-tab__rental__title tab-title">대여하기</h4>
            <!-- 리스트 옵션 -->
            <div class="list-option">
              <!-- list-option__left -->
              <div class="list-option__left">
                <label class="select-all"><input type="checkbox" /><span class="checkbox"></span>전체 선택</label>
                <button type="button" class="alignment"><i class="bx bx-sort"></i>신간부터</button>
              </div>

              <!-- list-option__right -->
              <div class="list-option__right">
                <span class="info_volume">총 <span class="info_volume__count">0</span>화</span>
                <span class="info_price"><span class="info_price__num">0</span>원</span>
                <button type="button" class="cart"><i class="bx bxs-cart"></i>카트</button>
                <button type="button" class="rental">선택 대여</button>
              </div>
            </div>
            <!-- 시리즈 리스트 -->
            <ul class="books__series__list">
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
            </ul>

            <button type="button" class="view-all-button">더보기<i class="bx bxs-down-arrow"></i></button>
          </li>

          <!-- 소장하기 -->
          <li class="books__series__buy-tab__purchase tab-list">
            <h4 class="books__series__buy-tab__purchase__title tab-title">소장하기</h4>
            <!-- 리스트 옵션 -->
            <div class="list-option">
              <!-- list-option__left -->
              <div class="list-option__left">
                <label class="select-all"><input type="checkbox" /><span class="checkbox"></span>전체 선택</label>
                <button type="button" class="alignment"><i class="bx bx-sort"></i>신간부터</button>
              </div>

              <!-- list-option__right -->
              <div class="list-option__right">
                <span class="info_volume">총 <span class="info_volume__count">0</span>화</span>
                <span class="info_price"><span class="info_price__num">0</span>원</span>
                <button type="button" class="cart"><i class="bx bxs-cart"></i>카트</button>
                <button type="button" class="rental">선택 소장</button>
              </div>
            </div>
            <!-- 시리즈 리스트 -->
            <ul class="books__series__list">
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
              <li class="books__series__item">
                <label class="books__series__item__wrap">
                  <div class="books__series__item__wrap__left-position">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                    <picture class="books__series__item__wrap__left-position__image">
                      <source srcset="../assets/books/booksSeriesImg1.webp" type="image/webp" />
                      <img src="../assets/books/booksSeriesImg1.webp" alt="웹툰 회차 표지" />
                    </picture>

                    <div class="books__series__item__wrap__left-position__info-wrap">
                      <div class="books__series__item__wrap__left-position__info-wrap__title-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__badge">무료</span>
                        <span class="books__series__item__wrap__left-position__info-wrap__title-wrap__title"
                          >마귀 1화</span
                        >
                      </div>

                      <div class="books__series__item__wrap__left-position__info-wrap__description-wrap">
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__date"
                          >2020.07.31</span
                        >
                        <span class="books__series__item__wrap__left-position__info-wrap__description-wrap__size"
                          >14MB</span
                        >
                      </div>
                    </div>
                  </div>
                  <button type="button" class="books__series__item__wrap__view-button">보기</button>
                </label>
              </li>
            </ul>

            <button type="button" class="view-all-button">더보기</button>
          </li>
        </ul>
      </article>

      <!-- books__keyword -->
      <article class="books__keyword">
        <h3 class="books__keyword__title middle-title">이 책의 키워드</h3>
        <ul class="books__keyword__list">
          <li class="books__keyword__list__item">
            <button type="button">#로맨스</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#로맨스판타지</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#판타지/SF</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#시대/역사물</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#서양배경</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#금지된사랑</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#왕족/귀족</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#다정남주</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#순정남주</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#진지함</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#원작소설有</button>
          </li>
          <li class="books__keyword__list__item">
            <button type="button">#연재</button>
          </li>
        </ul>
        <!-- <ul class="books__keyword__suggestion-list">
          <li class="books__keyword__suggestion-list__item">
            <picture class="books__keyword__suggestion-list__item__image">
              <source srcset="../assets/books//booksimg2.webp" type="image/webp" />
              <img src="../assets/books/booksimg2.webp" alt="웹툰 황금숲 썸네일" />
            </picture>
            <h4 class="books__keyword__suggestion-list__item__title">황금숲</h4>
          </li>
        </ul> -->
      </article>

      <!-- books__introduce -->
      <article class="books__introduce">
        <h3 class="books__introduce__title middle-title">작품 소개</h3>
        <pre class="books__introduce__description">
*작품 키워드: 판타지물, 서양풍, 초월적존재, 금단의관계, 운명적사랑, 다정남,
상처남, 짝사랑남, 집착남, 순진녀, 상처녀, 후회녀, 추리/미스터리/스릴러, 신파


웹소설 『마귀』의 아름다운 판타지 스릴러 웹툰으로 재탄생!

탑에 갇힌 공녀에게 혼담이 들어온다.
그녀의 남편 될 사람은 전처를 몇이나 죽였다는 잔악한 노인.
단단히 겁에 질린 공녀는 결국, 지하실의 석관을 깨어 마귀를 불러내는데…


<strong>“마귀여, 나는 그자와 결혼하고 싶지 않아.”</strong>
        </pre>
      </article>

      <!-- books__author -->
      <article class="books__author">
        <h3 class="books__author__title middle-title">저자 소개</h3>
        <pre class="books__author__description">
각색
필명 : 한흔
참여작품 : 2013년 웹툰 '헤이마' 그림
웹툰 '뼈와살', '은수', '형을땡땡하다' 그림
단편 '밤의 동행' 글/그림</pre
        >
        <div class="books__author__representative-book">
          <h4 class="books__author__representative-book__title">대표 저서</h4>
          <ul class="books__author__representative-book__list">
            <li class="books__author__representative-book__list__item">
              <img src="https://via.placeholder.com/90x130" alt="" />
            </li>
          </ul>
        </div>
      </article>

      <!-- books__review -->
      <article class="books__review">
        <h3 class="books__review__title middle-title">리뷰</h3>
        <div class="books__review__review-wrap">
          <div class="books__review__review-wrap__score-wrap">
            <!-- left -->
            <div class="books__review__review-wrap__score-wrap__left">
              <span class="books__review__review-wrap__score-wrap__left__score">0</span>
              <span class="star-bg">
                <span class="star-bg__stars"></span>
              </span>

              <ul class="books__review__review-wrap__score-wrap__left__score_graph">
                <li class="books__review__review-wrap__score-wrap__left__score_graph__item">
                  <i class="bx bxs-star"></i><span class="star-score">5</span
                  ><span class="star-bar-wrap"><span class="star-bar-wrap__bar"></span></span>
                </li>
                <li class="books__review__review-wrap__score-wrap__left__score_graph__item">
                  <i class="bx bxs-star"></i><span class="star-score">4</span
                  ><span class="star-bar-wrap"><span class="star-bar-wrap__bar"></span></span>
                </li>
                <li class="books__review__review-wrap__score-wrap__left__score_graph__item">
                  <i class="bx bxs-star"></i><span class="star-score">3</span
                  ><span class="star-bar-wrap"><span class="star-bar-wrap__bar"></span></span>
                </li>
                <li class="books__review__review-wrap__score-wrap__left__score_graph__item">
                  <i class="bx bxs-star"></i><span class="star-score">2</span
                  ><span class="star-bar-wrap"><span class="star-bar-wrap__bar"></span></span>
                </li>
                <li class="books__review__review-wrap__score-wrap__left__score_graph__item">
                  <i class="bx bxs-star"></i><span class="star-score">1</span
                  ><span class="star-bar-wrap"><span class="star-bar-wrap__bar"></span></span>
                </li>
              </ul>
            </div>
            <!-- right -->
            <div class="books__review__review-wrap__score-wrap__right">
              <!-- starrate-wrap -->
              <div class="books__review__review-wrap__score-wrap__right__starrate">
                <span class="books__review__review-wrap__score-wrap__right__starrate__title"
                  >이 책을 평가해주세요!</span
                >
                <div class="books__review__review-wrap__score-wrap__right__starrate__stars">
                  <span
                    class="books__review__review-wrap__score-wrap__right__starrate__stars__star"
                    data-rating="1"></span>
                  <span
                    class="books__review__review-wrap__score-wrap__right__starrate__stars__star"
                    data-rating="2"></span>
                  <span
                    class="books__review__review-wrap__score-wrap__right__starrate__stars__star"
                    data-rating="3"></span>
                  <span
                    class="books__review__review-wrap__score-wrap__right__starrate__stars__star"
                    data-rating="4"></span>
                  <span
                    class="books__review__review-wrap__score-wrap__right__starrate__stars__star"
                    data-rating="5"></span>
                </div>
              </div>

              <!-- starrate-wrap -->
              <div class="books__review__review-wrap__score-wrap__right__form-wrap">
                <form class="books__review__review-wrap__score-wrap__right__form-wrap__form">
                  <textarea
                    class="review-textarea"
                    title="리뷰 입력"
                    placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."></textarea>

                  <div class="books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap">
                    <button type="button" class="btn write-tip-button">
                      <i class="bx bxs-error"></i><span>리뷰 작성 유의사항</span>
                    </button>
                    <button type="submit" class="btn submit-button opacity">리뷰 남기기</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="books__review__review-wrap__list-wrap">
            <span class="books__review__review-wrap__list-wrap__title">전체리뷰</span>
            <ul class="books__review__review-wrap__list-wrap__list">
              <li id="3" class="books__review__review-wrap__list-wrap__list__item">
                <div class="books__review__review-wrap__list-wrap__list__item__review-info-wrap">
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__star star-bg">
                    <span
                      style="width: 100%"
                      class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__star__bar star-bg__stars"></span>
                  </span>
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__reviewer"
                    >zero****</span
                  >
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__date"
                    >2022.08.15</span
                  >
                </div>
                <div class="books__review__review-wrap__list-wrap__list__item__content-wrap">
                  <pre class="books__review__review-wrap__list-wrap__list__item__content-wrap__content">
와...진짜 장난이 아니네요♡
리뷰보니 끝까지 다봤다는 리뷰가 있어서 가볍게 생각했는데 저도 지금 지갑이 탈탈 털리고 있어요.</pre
                  >
                  <div class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap">
                    <button
                      type="button"
                      class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn">
                      <i class="bx bxs-message-rounded"></i>댓글
                    </button>
                    <button
                      type="button"
                      class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn">
                      <i class="bx bxs-like"></i>0
                    </button>
                  </div>
                </div>
              </li>
              <li id="2" class="books__review__review-wrap__list-wrap__list__item">
                <div class="books__review__review-wrap__list-wrap__list__item__review-info-wrap">
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__star star-bg">
                    <span
                      style="width: 100%"
                      class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__star__bar star-bg__stars"></span>
                  </span>
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__reviewer"
                    >zero****</span
                  >
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__date"
                    >2022.08.15</span
                  >
                </div>
                <div class="books__review__review-wrap__list-wrap__list__item__content-wrap">
                  <pre class="books__review__review-wrap__list-wrap__list__item__content-wrap__content">
재미있게 잘 보고 있습니다</pre
                  >
                  <div class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap">
                    <button
                      type="button"
                      class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn">
                      <i class="bx bxs-message-rounded"></i>댓글
                    </button>
                    <button
                      type="button"
                      class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn">
                      <i class="bx bxs-like"></i>0
                    </button>
                  </div>
                </div>
              </li>
              <li id="1" class="books__review__review-wrap__list-wrap__list__item">
                <div class="books__review__review-wrap__list-wrap__list__item__review-info-wrap">
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__star star-bg">
                    <span
                      style="width: 100%"
                      class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__star__bar star-bg__stars"></span>
                  </span>
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__reviewer"
                    >zero****</span
                  >
                  <span class="books__review__review-wrap__list-wrap__list__item__review-info-wrap__date"
                    >2022.08.15</span
                  >
                </div>
                <div class="books__review__review-wrap__list-wrap__list__item__content-wrap">
                  <pre class="books__review__review-wrap__list-wrap__list__item__content-wrap__content">
작화가 예쁘고 읽기 편해 좋네요 재밌게 읽고 있어요</pre
                  >
                  <div class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap">
                    <button
                      type="button"
                      class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__comment-btn">
                      <i class="bx bxs-message-rounded"></i>댓글
                    </button>
                    <button
                      type="button"
                      class="books__review__review-wrap__list-wrap__list__item__content-wrap__btn-wrap__like-btn">
                      <i class="bx bxs-like"></i>0
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <!-- books__similar -->
      <article class="books__similar">
        <h3 class="books__similar__title middle-title">이 작품과 함께 둘러본 작품</h3>
        <ul class="books__similar__list">
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
          <li class="books__similar__list__item">
            <img src="https://via.placeholder.com/90x130" alt="" />
          </li>
        </ul>
      </article>
    </section>
  `);
};

export default Webtoon;
