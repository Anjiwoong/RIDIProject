import BookReviewItem from './BookReviewItem.js';

const BookReview = (selectedData, reviewList) => {
  const starPercentage = (selectedData.rating / 5) * 100;

  // prettier-ignore
  return `
  <article class="books__review">
    <h3 class="books__review__title middle-title">리뷰</h3>
    <div class="books__review__review-wrap">
      <div class="books__review__review-wrap__score-wrap">

        <div class="books__review__review-wrap__score-wrap__left">
          <span class="books__review__review-wrap__score-wrap__left__score">${selectedData.rating}</span>
          <span class="star-bg">
            <span class="star-bg__stars" style="width:${starPercentage}%"></span>
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
        
        <div class="books__review__review-wrap__score-wrap__right">
          <!-- starrate-wrap -->
          <div class="books__review__review-wrap__score-wrap__right__starrate">
            <span class="books__review__review-wrap__score-wrap__right__starrate__title"
              >이 책을 평가해주세요!</span
            >
            <div class="books__review__review-wrap__score-wrap__right__starrate__stars reviewStars">
              <span
                class="books__review__review-wrap__score-wrap__right__starrate__stars__star reviewStar"
                data-rating="1"></span>
              <span
                class="books__review__review-wrap__score-wrap__right__starrate__stars__star reviewStar"
                data-rating="2"></span>
              <span
                class="books__review__review-wrap__score-wrap__right__starrate__stars__star reviewStar"
                data-rating="3"></span>
              <span
                class="books__review__review-wrap__score-wrap__right__starrate__stars__star reviewStar"
                data-rating="4"></span>
              <span
                class="books__review__review-wrap__score-wrap__right__starrate__stars__star reviewStar"
                data-rating="5"></span>
            </div>
          </div>

          <div class="books__review__review-wrap__score-wrap__right__form-wrap">
            <form class="books__review__review-wrap__score-wrap__right__form-wrap__form review-form">
              <textarea
                class="review-textarea"
                title="리뷰 입력"
                placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."></textarea>
              <div class="books__review__review-wrap__score-wrap__right__form-wrap__form__btn-wrap">
                <button type="button" class="btn write-tip-button">
                  <i class="bx bxs-error"></i><span>리뷰 작성 유의사항</span>
                </button>
                <button type="submit" class="btn review-button opacity">리뷰 남기기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="books__review__review-wrap__list-wrap">
        <span class="books__review__review-wrap__list-wrap__title">전체리뷰</span>
        <ul class="books__review__review-wrap__list-wrap__list review-list">
          ${reviewList.map(review =>BookReviewItem(review)).join('')}
        </ul>
      </div>
    </div>
  </article>
`;
};

export default BookReview;
// ${reviewList.map((comment, i) => BookReviewItem(comment, i)).join('')}
