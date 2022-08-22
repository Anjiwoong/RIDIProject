const BookReviewItem = (comment, id) => `
  <li id="${id + 1}" class="books__review__review-wrap__list-wrap__list__item">
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
      <pre class="books__review__review-wrap__list-wrap__list__item__content-wrap__content">${comment}</pre
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
`;

export default BookReviewItem;
