import BookSeriesItem from './BookSeriesItem.js';

const BookSeries = (selectedData, params) => {
  const webtoonSeries = new Array(7).fill('');

  return `
  <article class="books__series">
    <ul class="books__series__buy-tab">
      <!-- 대여하기 -->
      <li class="books__series__buy-tab__rental tab-list ">
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
          ${webtoonSeries.map(() => BookSeriesItem(selectedData, params)).join('')}
        </ul>

        <button type="button" class="view-all-button">더보기<i class="bx bxs-down-arrow"></i></button>
      </li>

      <!-- 소장하기 -->
      <li class="books__series__buy-tab__purchase tab-list active">
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
          ${webtoonSeries.map((_, i) => BookSeriesItem(selectedData, i)).join('')}
        </ul>

        <button type="button" class="view-all-button">더보기</button>
      </li>
    </ul>
  </article>
`;
};

export default BookSeries;
