import BookModal from './BookModal.js';

const modalPopup = e => {
  if (!e.target.closest('.popup-btn')) return;
  const { target } = e;
  BookModal(target);
};

const BookInfoEventBinding = () => {
  const $root = document.getElementById('root');
  $root.addEventListener('click', modalPopup);
};

const BookInfo = selectedData => {
  const { title, cover, rating, views } = selectedData;
  const author = selectedData.author.split(',');
  BookInfoEventBinding();

  return `
  <article class="books__info">
  <div class="books__info__body">
    <div class="books__info__body__thumbnail-wrap">
      <picture class="books__info__body__thumbnail-wrap__image">
        <source srcset="${cover}" type="image/webp" />
        <img src="${cover}" alt="웹툰 마귀 썸네일" />
      </picture>
      <button type="button" class="books__info__body__thumbnail-wrap__preference popup-btn">
        <span class="button_contents"><i class="bx bx-heart"></i>0</span>
      </button>
      <button type="button" class="books__info__body__thumbnail-wrap__series-noti popup-btn">
        <i class="bx bx-plus"></i>시리즈 신간알림
      </button>
    </div>

    <div class="books__info__body__details-wrap">
      <h3 class="books__info__body__details-wrap__title">${title}</h3>
      <div class="books__info__body__details-wrap__star-rate-wrap">
        <div class="books__info__body__details-wrap__star-rate-wrap__stars">
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
        </div>
        <span class="books__info__body__details-wrap__star-rate-wrap__score">${rating}점</span>
        <span class="books__info__body__details-wrap__star-rate-wrap__people">(${views}명)</span>
      </div>

      <div class="books__info__body__details-wrap__metadata-wrap">
        <div class="books__info__body__details-wrap__metadata-wrap__writer-info">
          <span class="books__info__body__details-wrap__metadata-wrap__writer-info__writer"
            ><span class="font-bold">${author[0]}</span> 글</span
          >
          <span class="books__info__body__details-wrap__metadata-wrap__writer-info__painter"
            ><span class="font-bold">${author[1] ? author[1] : author[0]}</span> 그림</span
          >
          <span class="books__info__body__details-wrap__metadata-wrap__writer-info__original"
            ><span class="font-bold">비첸치</span> 원작</span
          >
        </div>

        <div class="books__info__body__details-wrap__metadata-wrap__publisher-info">
          <span class="books__info__body__details-wrap__metadata-wrap__publisher-info__publisher"
            ><span class="font-bold">오렌지디</span> 출판</span
          >
        </div>

        <div class="books__info__body__details-wrap__metadata-wrap__series-complete-wrap">
          <span class="books__info__body__details-wrap__metadata-wrap__series-complete-wrap__book-count"
            >총 99화</span
          >
          <span class="books__info__body__details-wrap__metadata-wrap__series-complete-wrap__completion-status"
            >미완결</span
          >
        </div>
      </div>

      <div class="books__info__body__details-wrap__book-detail-notice-wrap">
        <div class="books__info__body__details-wrap__book-detail-notice-wrap__schedule notice-item">
          <span class="schedule-title notice-title">연재</span>
          <span class="info-title">매주 금요일 연재</span>
        </div>

        <div class="books__info__body__details-wrap__book-detail-notice-wrap__benefits notice-item">
          <span class="benefits-title notice-title">혜택</span>
          <div class="benefits-info">
            <a href="#">
              <span class="info-title">대여 할인권 5장 증정</span>
              <span class="info-text">1인 1회 발급 가능, 3일 대여</span>
            </a>
          </div>
        </div>

        <div class="books__info__body__details-wrap__book-detail-notice-wrap__event notice-item">
          <span class="event-title notice-title">이벤트</span>
          <div class="event-info">
            <span class="info-title"><a href="#">#시즌3 런칭! 전원 1,000포인트 증정♥</a></span>
            <span class="info-title">요일 웹툰 한번에 모아보기☆</span>
            <span class="info-event-more"><a href="#">이벤트 더보기</a></span>
          </div>
        </div>

        <div class="books__info__body__details-wrap__book-detail-notice-wrap__Wait-free notice-item">
          <span class="Wait-free-title notice-title">리다무</span>
          <div class="Wait-free-info">
            <span class="info-title">1일 마다 1편 기다리면 무료 </span>
          </div>
        </div>
      </div>

      <span class="books__info__body__details-wrap__benefits-Period"> 혜택 기간: 10.12.(수)~11.25.(금)</span>

      <a href="/webtoon/1" class="first-button"  data-title="${title}">
        <button type="button" class="btn first-episode">첫회보기</button>
      </a>
    </div>
  </div>

  <div class="books__info__footer">
    <div class="books__info__footer__metadata-info">
      <div class="books__info__footer__metadata-info__published-date-info">
        <span class="books__info__footer__metadata-info__published-date-info__title info-title">출간 정보</span>
        <span class="books__info__footer__metadata-info__published-date-info__text">2020.07.31. 출간</span>
      </div>

      <div class="books__info__footer__metadata-info__file-size">
        <span class="books__info__footer__metadata-info__file-size__title info-title">파일 정보</span>
        <span class="books__info__footer__metadata-info__file-size__text">평균 24.1MB</span>
      </div>

      <div class="books__info__footer__metadata-info__isbn">
        <span class="books__info__footer__metadata-info__isbn__title info-title">ISBN</span>
        <span class="books__info__footer__metadata-info__isbn__text">9791197025686</span>
      </div>
    </div>

    <div class="books__info__footer__support-info">
      <div class="books__info__footer__metadata-info__listening-function">
        <span class="books__info__footer__metadata-info__listening-function__title info-title"> 듣기 기능</span>
        <span class="books__info__footer__metadata-info__listening-function__text">
          <i class="bx bxs-volume-mute"></i> 미지원</span
        >
      </div>

      <div class="books__info__footer__metadata-info__support-device">
        <span class="books__info__footer__metadata-info__support-device__title info-title">지원 기기</span>
        <span class="books__info__footer__metadata-info__support-device__text">
          <i class="bx bxl-apple"></i>iOS <i class="bx bxl-android"></i>Android
        </span>
      </div>
    </div>
  </div>
  </article>
`;
};

export default BookInfo;
