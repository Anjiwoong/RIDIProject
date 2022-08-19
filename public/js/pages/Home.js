import { createElement, fetchData } from '../app.js';
import HomeNav from '../components/HomeNav.js';

const Home = async params => {
  const data = await fetchData('/data/webtoon.json');

  // return createElement(
  //   data.home
  //     .map(({ title, content }) => `<h1>${title}</h1><p>${content}</p>`)
  //     .join('')

  return createElement(`
  <div class="main-container">
      ${HomeNav()}
      <main class="main">
        <section class="main__carousel">
          <!-- carousel button 컴포넌트 -->
          <div class="carousel__button">
            <button class="prev">
              <i class="bx bx-chevron-left"></i>
            </button>
            <button class="next">
              <i class="bx bx-chevron-right"></i>
            </button>
          </div>
        </section>
        <section class="new-arrival">
          <ul class="new-arrival__list">
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-book-open"></i>
                </div>
                <span class="new-arrival__title">신간</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-bell"></i>
                </div>
                <span class="new-arrival__title">이벤트</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-planet"></i>
                </div>
                <span class="new-arrival__title">독점</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-time-five"></i>
                </div>
                <span class="new-arrival__title">리다무</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-pin"></i>
                </div>
                <span class="new-arrival__title">요일 연재</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-heart"></i>
                </div>
                <span class="new-arrival__title">19+</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-clipboard"></i>
                </div>
                <span class="new-arrival__title">이달의 신작</span>
              </a>
            </li>
            <li class="new-arrival__item">
              <a href="" class="new-arrival__link">
                <div class="new-arrival__icon">
                  <i class="bx bx-cube"></i>
                </div>
                <span class="new-arrival__title">위클리 쿠폰</span>
              </a>
            </li>
          </ul>
        </section>
        <section class="rank live">
          <h2 class="rank__title">실시간 랭킹</h2>
          <div class="rank__carousel">
            <ol class="rank__carousel__list">
              <li class="rank__carousel__item">
                <a href="/webtoon" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">1</span>
                <div class="rank__carousel__desc">
                  <a href="/webtoon" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="/webtoon" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">2</span>
                <div class="rank__carousel__desc">
                  <a href="/webtoon" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="/webtoon" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">3</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="/webtoon" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/상수리나무아래.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">상수리나무 아래</a>
                  <p class="rank__carousel__info">서말 외 3명 &#183; 4화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.9
                    </span>
                    <span class="carousel__rate">(30,203)</span>
                  </p>
                </div>
              </li>
            </ol>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon free">
          <h2 class="webtoon__title">기다리면 무료로 시작해!</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/위어.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">위어</a>
                <p class="webtoon__carousel__author">니나, 원이영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(994)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/위어.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">위어</a>
                <p class="webtoon__carousel__author">니나, 원이영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(994)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/위어.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">위어</a>
                <p class="webtoon__carousel__author">니나, 원이영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(994)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/위어.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">위어</a>
                <p class="webtoon__carousel__author">니나, 원이영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(994)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/위어.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">위어</a>
                <p class="webtoon__carousel__author">니나, 원이영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(994)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/위어.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">위어</a>
                <p class="webtoon__carousel__author">니나, 원이영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(994)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon sunday">
          <h2 class="webtoon__title">일요일 연재</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/한배를탄사이.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">한 배를 탄 사이</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 서루</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,462)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/한배를탄사이.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">한 배를 탄 사이</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 서루</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,462)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/한배를탄사이.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">한 배를 탄 사이</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 서루</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,462)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/한배를탄사이.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">한 배를 탄 사이</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 서루</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,462)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/한배를탄사이.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">한 배를 탄 사이</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 서루</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,462)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/한배를탄사이.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">한 배를 탄 사이</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 서루</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,462)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="rank best">
          <h2 class="rank__title">베스트 셀러</h2>
          <div class="rank__carousel">
            <ol class="rank__carousel__list">
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">1</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">2</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">3</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
              <li class="rank__carousel__item">
                <a href="" class="rank__carousel__link">
                  <img src="/assets/mainpage/참아주세요대공.webp" alt="" class="rank__carousel__img" />
                </a>
                <span class="rank__carousel__num">4</span>
                <div class="rank__carousel__desc">
                  <a href="" class="rank__carousel__title">참아주세요, 대공</a>
                  <p class="rank__carousel__info">스르륵코믹스 외 1명 &#183; 21화 무료</p>
                  <!-- 별점 컴포넌트 -->
                  <p>
                    <span class="carousel__star">
                      <i class="bx bxs-star"></i>
                      4.8
                    </span>
                    <span class="carousel__rate">(5,506)</span>
                  </p>
                </div>
              </li>
            </ol>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="event view">
          <h2 class="event__title">이벤트 보러가기</h2>
          <div class="event__carousel">
            <ul class="event__carousel__list">
              <li class="event__carousel__item switch">
                <a href="" class="event__carousel__link">
                  <p class="event__carousel__sub">
                    기간 한정 45화 무료!<br />
                    유료로 보면 포인트+
                  </p>
                  <img src="/assets/mainpage/event_switch.webp" alt="" class="event__carousel__img" />
                </a>
              </li>
              <li class="event__carousel__item up">
                <a href="" class="event__carousel__link">
                  <p class="event__carousel__sub">
                    <그대 사자의 이름으로><br />
                    31화 UP!
                  </p>
                  <img src="/assets/mainpage/switch_up.webp" alt="" class="event__carousel__img" />
                </a>
              </li>
              <li class="event__carousel__item early">
                <a href="" class="event__carousel__link">
                  <p class="event__carousel__sub">
                    8월의 리디 웹툰 미리 맛보기 <br />
                    신작이 찾아왔어요!
                  </p>
                  <img src="/assets/mainpage/event_early.webp" alt="" class="event__carousel__img" />
                </a>
              </li>
              <li class="event__carousel__item early cash">
                <a href="" class="event__carousel__link">
                  <p class="event__carousel__sub">
                    KT 결제로 리디캐시 <br />
                    충전 시 5천원 할인!
                  </p>
                  <img src="/assets/mainpage/event_cash.webp" alt="" class="event__carousel__img" />
                </a>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon star">
          <h2 class="webtoon__title">리디에 내리는 #별점 1,000개!</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/에반젤린의검.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">4화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">에반젤린의 검</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 선지</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,319)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/에반젤린의검.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">4화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">에반젤린의 검</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 선지</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,319)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/에반젤린의검.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">4화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">에반젤린의 검</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 선지</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,319)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/에반젤린의검.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">4화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">에반젤린의 검</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 선지</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,319)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/에반젤린의검.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">4화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">에반젤린의 검</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 선지</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,319)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/에반젤린의검.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">4화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">에반젤린의 검</a>
                <p class="webtoon__carousel__author">스르륵코믹스, 선지</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(3,319)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon review">
          <h2 class="webtoon__title">#리뷰 1,000개가 말하는 띵작!</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/맛본김에꿀꺽.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">맛본 김에 꿀꺽!</a>
                <p class="webtoon__carousel__author">만, 뽀슈, 류란</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(3,131)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/맛본김에꿀꺽.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">맛본 김에 꿀꺽!</a>
                <p class="webtoon__carousel__author">만, 뽀슈, 류란</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(3,131)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/맛본김에꿀꺽.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">맛본 김에 꿀꺽!</a>
                <p class="webtoon__carousel__author">만, 뽀슈, 류란</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(3,131)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/맛본김에꿀꺽.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">맛본 김에 꿀꺽!</a>
                <p class="webtoon__carousel__author">만, 뽀슈, 류란</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(3,131)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/맛본김에꿀꺽.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">맛본 김에 꿀꺽!</a>
                <p class="webtoon__carousel__author">만, 뽀슈, 류란</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(3,131)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/맛본김에꿀꺽.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">3화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">맛본 김에 꿀꺽!</a>
                <p class="webtoon__carousel__author">만, 뽀슈, 류란</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.8
                  </span>
                  <span class="carousel__rate">(3,131)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon switch-on">
          <h2 class="webtoon__title">스위치 ON! 45화 #FREE</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/흑막용을키우게되었다.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">10화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">흑막 용을 키우게 되었다</a>
                <p class="webtoon__carousel__author">소탄, 달슬</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(6,394)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/흑막용을키우게되었다.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">10화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">흑막 용을 키우게 되었다</a>
                <p class="webtoon__carousel__author">소탄, 달슬</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(6,394)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/흑막용을키우게되었다.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">10화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">흑막 용을 키우게 되었다</a>
                <p class="webtoon__carousel__author">소탄, 달슬</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(6,394)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/흑막용을키우게되었다.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">10화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">흑막 용을 키우게 되었다</a>
                <p class="webtoon__carousel__author">소탄, 달슬</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(6,394)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/흑막용을키우게되었다.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">10화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">흑막 용을 키우게 되었다</a>
                <p class="webtoon__carousel__author">소탄, 달슬</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(6,394)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/흑막용을키우게되었다.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">10화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">흑막 용을 키우게 되었다</a>
                <p class="webtoon__carousel__author">소탄, 달슬</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(6,394)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon yummy">
          <h2 class="webtoon__title">원작도 웹툰도 so yummy</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/노모어프린스.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">2화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">노 모어 프린스</a>
                <p class="webtoon__carousel__author">만물상, 밀밭</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(476)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/노모어프린스.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">2화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">노 모어 프린스</a>
                <p class="webtoon__carousel__author">만물상, 밀밭</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(476)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/노모어프린스.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">2화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">노 모어 프린스</a>
                <p class="webtoon__carousel__author">만물상, 밀밭</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(476)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/노모어프린스.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">2화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">노 모어 프린스</a>
                <p class="webtoon__carousel__author">만물상, 밀밭</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(476)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/노모어프린스.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">2화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">노 모어 프린스</a>
                <p class="webtoon__carousel__author">만물상, 밀밭</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(476)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/노모어프린스.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">2화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">노 모어 프린스</a>
                <p class="webtoon__carousel__author">만물상, 밀밭</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.9
                  </span>
                  <span class="carousel__rate">(476)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon want">
          <h2 class="webtoon__title">시키는 대로 다 해요, 나.</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/바보개와아가씨.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">1화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">바보개와 아가씨 (완전판)</a>
                <p class="webtoon__carousel__author">롱타임, 김휘빈</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.4
                  </span>
                  <span class="carousel__rate">(1,249)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/바보개와아가씨.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">1화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">바보개와 아가씨 (완전판)</a>
                <p class="webtoon__carousel__author">롱타임, 김휘빈</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.4
                  </span>
                  <span class="carousel__rate">(1,249)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/바보개와아가씨.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">1화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">바보개와 아가씨 (완전판)</a>
                <p class="webtoon__carousel__author">롱타임, 김휘빈</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.4
                  </span>
                  <span class="carousel__rate">(1,249)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/바보개와아가씨.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">1화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">바보개와 아가씨 (완전판)</a>
                <p class="webtoon__carousel__author">롱타임, 김휘빈</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.4
                  </span>
                  <span class="carousel__rate">(1,249)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/바보개와아가씨.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">1화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">바보개와 아가씨 (완전판)</a>
                <p class="webtoon__carousel__author">롱타임, 김휘빈</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.4
                  </span>
                  <span class="carousel__rate">(1,249)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/바보개와아가씨.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">1화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">바보개와 아가씨 (완전판)</a>
                <p class="webtoon__carousel__author">롱타임, 김휘빈</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.4
                  </span>
                  <span class="carousel__rate">(1,249)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="only-ridi">
          <h2 class="only-ridi__title">오직 리디에서만!</h2>
          <div class="only-ridi__carousel">
            <ul class="only-ridi__carousel__list">
              <li class="only-ridi__carousel__item">
                <a href="" class="only-ridi__carousel__link">
                  <div class="only-ridi__carousel__bg bg-red">
                    <img src="/assets/mainpage/마귀_bg.webp" alt="" class="only-ridi__carousel__img-bg" />
                    <img src="/assets/mainpage/마귀.webp" alt="" class="only-ridi__carousel__img-main" />
                  </div>
                  <div class="only-ridi__carousel__info">
                    <p class="only-ridi__carousel__title">
                      저주를 받더라도 <br />
                      나를 계속 사랑해
                    </p>
                    <p class="only-ridi__carousel__sub"><마귀> 전원 포인트!</p>
                  </div>
                </a>
              </li>
              <li class="only-ridi__carousel__item">
                <a href="" class="only-ridi__carousel__link">
                  <div class="only-ridi__carousel__bg bg-purple">
                    <img src="/assets/mainpage/마녀가 사는섬.webp" alt="" class="only-ridi__carousel__img-main" />
                  </div>
                  <div class="only-ridi__carousel__info">
                    <p class="only-ridi__carousel__title">
                      가정교사로 온 섬, <br />
                      고용주 남매가 수상하다
                    </p>
                    <p class="only-ridi__carousel__sub">마녀가 사는 섬</p>
                  </div>
                </a>
              </li>
              <li class="only-ridi__carousel__item">
                <a href="" class="only-ridi__carousel__link">
                  <div class="only-ridi__carousel__bg bg-yellow">
                    <img
                      src="/assets/mainpage/상수리나무 only-ridi.webp"
                      alt=""
                      class="only-ridi__carousel__img-main" />
                  </div>
                  <div class="only-ridi__carousel__info">
                    <p class="only-ridi__carousel__title">
                      너를 생각하면 생각할수록 <br />
                      나는 고독하고 외로워져
                    </p>
                    <p class="only-ridi__carousel__sub">상수리나무 아래</p>
                  </div>
                </a>
              </li>
              <li class="only-ridi__carousel__item">
                <a href="" class="only-ridi__carousel__link">
                  <div class="only-ridi__carousel__bg bg-urquoise">
                    <img src="/assets/mainpage/황상은밤에자란다 bg.webp" alt="" class="only-ridi__carousel__img-bg" />
                    <img
                      src="/assets/mainpage/환상은밤에자란다 ridi-only.webp"
                      alt=""
                      class="only-ridi__carousel__img-main" />
                  </div>
                  <div class="only-ridi__carousel__info">
                    <p class="only-ridi__carousel__title">
                      환상 속 괴물은 <br />
                      당신의 어둠을 먹고 자란다
                    </p>
                    <p class="only-ridi__carousel__sub">환상은 밤에 자란다</p>
                  </div>
                </a>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="webtoon stop">
          <h2 class="webtoon__title">잠깐! 놓치지 마세요!</h2>
          <div class="webtoon__carousel">
            <ul class="webtoon__carousel__list">
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/애완채소.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">5화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">채식주의자의 애완채소</a>
                <p class="webtoon__carousel__author">양윤영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.5
                  </span>
                  <span class="carousel__rate">(143)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/애완채소.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">5화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">채식주의자의 애완채소</a>
                <p class="webtoon__carousel__author">양윤영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.5
                  </span>
                  <span class="carousel__rate">(143)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/애완채소.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">5화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">채식주의자의 애완채소</a>
                <p class="webtoon__carousel__author">양윤영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.5
                  </span>
                  <span class="carousel__rate">(143)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/애완채소.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">5화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">채식주의자의 애완채소</a>
                <p class="webtoon__carousel__author">양윤영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.5
                  </span>
                  <span class="carousel__rate">(143)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/애완채소.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">5화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">채식주의자의 애완채소</a>
                <p class="webtoon__carousel__author">양윤영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.5
                  </span>
                  <span class="carousel__rate">(143)</span>
                </p>
              </li>
              <li class="webtoon__carousel__item">
                <a href="" class="webtoon__carousel__link">
                  <div class="webtoon__carousel__thumbnail">
                    <img src="/assets/mainpage/애완채소.webp" alt="" class="webtoon__carousel__img" />
                    <!-- carousel info 컴포넌트 -->
                    <div class="carousel__info">
                      <i class="bx bxl-upwork"></i>
                      <i class="bx bx-time-five"></i>
                      <span class="carousel__free-count">5화무</span>
                    </div>
                  </div>
                </a>
                <a href="" class="webtoon__carousel__title">채식주의자의 애완채소</a>
                <p class="webtoon__carousel__author">양윤영</p>
                <p>
                  <span class="carousel__star">
                    <i class="bx bxs-star"></i>
                    4.5
                  </span>
                  <span class="carousel__rate">(143)</span>
                </p>
              </li>
            </ul>
            <!-- carousel button 컴포넌트 -->
            <div class="carousel__button">
              <button class="prev">
                <i class="bx bx-chevron-left"></i>
              </button>
              <button class="next">
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  `);
};

export default Home;
